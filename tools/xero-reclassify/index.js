import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { XeroClient } from 'xero-node';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOKENS_FILE = path.join(__dirname, 'tokens.json');
const TARGET_ACCOUNT_CODE = '1600'; // Shareholder Advance
const SEARCH_TERM = 'schwab';

const xero = new XeroClient({
  clientId: process.env.XERO_CLIENT_ID,
  clientSecret: process.env.XERO_CLIENT_SECRET,
  redirectUris: [process.env.XERO_REDIRECT_URI],
  scopes: [
    'openid',
    'profile',
    'email',
    'accounting.transactions',
    'accounting.settings',
    'accounting.contacts',
    'offline_access'
  ]
});

async function loadTokens() {
  if (!fs.existsSync(TOKENS_FILE)) {
    console.error('Error: No tokens found. Please run "npm run auth" first to authenticate.');
    process.exit(1);
  }

  const tokenSet = JSON.parse(fs.readFileSync(TOKENS_FILE, 'utf8'));
  xero.setTokenSet(tokenSet);

  // Check if token needs refresh
  if (xero.readTokenSet().expired()) {
    console.log('Token expired, refreshing...');
    const newTokenSet = await xero.refreshToken();
    fs.writeFileSync(TOKENS_FILE, JSON.stringify(newTokenSet, null, 2));
    console.log('Token refreshed successfully.');
  }
}

async function getTenantId() {
  await xero.updateTenants();
  const tenants = xero.tenants;

  if (tenants.length === 0) {
    console.error('Error: No Xero organizations found. Please check your Xero app permissions.');
    process.exit(1);
  }

  if (tenants.length > 1) {
    console.log('\nAvailable organizations:');
    tenants.forEach((tenant, i) => {
      console.log(`  ${i + 1}. ${tenant.tenantName}`);
    });
    console.log(`\nUsing first organization: ${tenants[0].tenantName}`);
  }

  return tenants[0].tenantId;
}

async function verifyAccountExists(tenantId) {
  console.log(`\nVerifying account ${TARGET_ACCOUNT_CODE} exists...`);

  try {
    const response = await xero.accountingApi.getAccounts(
      tenantId,
      null,
      `Code=="${TARGET_ACCOUNT_CODE}"`
    );

    if (response.body.accounts && response.body.accounts.length > 0) {
      const account = response.body.accounts[0];
      console.log(`Found account: ${account.code} - ${account.name} (${account.type})`);
      return account;
    } else {
      console.error(`Error: Account ${TARGET_ACCOUNT_CODE} not found in Xero.`);
      console.log('\nAvailable accounts:');

      const allAccounts = await xero.accountingApi.getAccounts(tenantId);
      allAccounts.body.accounts
        .filter(a => a.status === 'ACTIVE')
        .slice(0, 20)
        .forEach(a => {
          console.log(`  ${a.code} - ${a.name} (${a.type})`);
        });

      process.exit(1);
    }
  } catch (error) {
    console.error('Error verifying account:', error.message);
    process.exit(1);
  }
}

async function findSchwabTransactions(tenantId) {
  console.log(`\nSearching for bank transactions containing "${SEARCH_TERM}"...`);

  const allTransactions = [];
  let page = 1;
  const pageSize = 100;

  try {
    // Fetch all bank transactions (we'll filter client-side for more flexible matching)
    while (true) {
      const response = await xero.accountingApi.getBankTransactions(
        tenantId,
        null,
        null,
        null,
        null,
        page,
        pageSize
      );

      const transactions = response.body.bankTransactions || [];

      if (transactions.length === 0) break;

      // Filter transactions containing "schwab" (case-insensitive)
      const schwabTransactions = transactions.filter(tx => {
        const searchFields = [
          tx.reference,
          tx.contact?.name,
          tx.bankAccount?.name,
          ...(tx.lineItems || []).map(li => li.description)
        ].filter(Boolean);

        return searchFields.some(field =>
          field.toLowerCase().includes(SEARCH_TERM.toLowerCase())
        );
      });

      allTransactions.push(...schwabTransactions);

      console.log(`  Page ${page}: Found ${schwabTransactions.length} matching transactions (${transactions.length} total on page)`);

      if (transactions.length < pageSize) break;
      page++;
    }

    return allTransactions;
  } catch (error) {
    console.error('Error fetching transactions:', error.message);
    throw error;
  }
}

async function reclassifyTransaction(tenantId, transaction) {
  // Update line items to use the new account code
  const updatedLineItems = transaction.lineItems.map(item => ({
    ...item,
    accountCode: TARGET_ACCOUNT_CODE
  }));

  const bankTransaction = {
    bankTransactionID: transaction.bankTransactionID,
    type: transaction.type,
    contact: transaction.contact,
    lineItems: updatedLineItems,
    bankAccount: { accountID: transaction.bankAccount.accountID }
  };

  try {
    await xero.accountingApi.updateBankTransaction(
      tenantId,
      transaction.bankTransactionID,
      { bankTransactions: [bankTransaction] }
    );
    return true;
  } catch (error) {
    console.error(`  Error updating transaction ${transaction.bankTransactionID}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('========================================');
  console.log('Xero Transaction Reclassifier');
  console.log('========================================');

  // Load authentication tokens
  await loadTokens();
  console.log('Authentication tokens loaded.');

  // Get tenant ID
  const tenantId = await getTenantId();

  // Verify target account exists
  await verifyAccountExists(tenantId);

  // Find Schwab transactions
  const transactions = await findSchwabTransactions(tenantId);

  if (transactions.length === 0) {
    console.log('\nNo transactions found containing "schwab".');
    return;
  }

  console.log(`\n========================================`);
  console.log(`Found ${transactions.length} transaction(s) to reclassify:`);
  console.log(`========================================\n`);

  // Display transactions
  transactions.forEach((tx, i) => {
    const lineItemAccounts = tx.lineItems
      .map(li => li.accountCode)
      .filter((v, i, a) => a.indexOf(v) === i)
      .join(', ');

    console.log(`${i + 1}. Date: ${tx.date}`);
    console.log(`   Type: ${tx.type}`);
    console.log(`   Reference: ${tx.reference || 'N/A'}`);
    console.log(`   Contact: ${tx.contact?.name || 'N/A'}`);
    console.log(`   Total: ${tx.total}`);
    console.log(`   Current Account(s): ${lineItemAccounts}`);
    console.log(`   Bank Account: ${tx.bankAccount?.name || 'N/A'}`);
    console.log('');
  });

  // Confirm before proceeding
  const dryRun = process.argv.includes('--dry-run');

  if (dryRun) {
    console.log('[DRY RUN MODE - No changes will be made]');
    return;
  }

  console.log(`\nReclassifying to account ${TARGET_ACCOUNT_CODE} (Shareholder Advance)...`);
  console.log('Press Ctrl+C within 5 seconds to cancel...\n');

  await new Promise(resolve => setTimeout(resolve, 5000));

  // Reclassify transactions
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < transactions.length; i++) {
    const tx = transactions[i];
    process.stdout.write(`Processing ${i + 1}/${transactions.length}: ${tx.reference || tx.bankTransactionID}... `);

    const success = await reclassifyTransaction(tenantId, tx);

    if (success) {
      console.log('Done');
      successCount++;
    } else {
      console.log('FAILED');
      errorCount++;
    }

    // Rate limiting - pause between API calls
    if (i < transactions.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  console.log(`\n========================================`);
  console.log(`Reclassification Complete!`);
  console.log(`========================================`);
  console.log(`  Successful: ${successCount}`);
  console.log(`  Failed: ${errorCount}`);
  console.log(`  Total: ${transactions.length}`);
}

main().catch(error => {
  console.error('\nFatal error:', error.message);
  process.exit(1);
});
