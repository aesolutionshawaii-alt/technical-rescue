import 'dotenv/config';
import express from 'express';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { XeroClient } from 'xero-node';
import open from 'open';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOKENS_FILE = path.join(__dirname, 'tokens.json');

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

const app = express();

app.get('/', async (req, res) => {
  const consentUrl = await xero.buildConsentUrl();
  res.redirect(consentUrl);
});

app.get('/callback', async (req, res) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).send('No authorization code received');
    }

    const tokenSet = await xero.apiCallback(req.url);

    // Save tokens to file
    fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokenSet, null, 2));

    console.log('\n========================================');
    console.log('Authentication successful!');
    console.log('Tokens saved to tokens.json');
    console.log('========================================\n');

    res.send(`
      <html>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h1 style="color: #13B5EA;">Authentication Successful!</h1>
          <p>You can close this window and return to the terminal.</p>
          <p>Run <code>npm start</code> to reclassify your transactions.</p>
        </body>
      </html>
    `);

    // Shut down server after successful auth
    setTimeout(() => {
      console.log('Shutting down auth server...');
      process.exit(0);
    }, 2000);

  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).send(`Authentication failed: ${error.message}`);
  }
});

// Generate self-signed certificate for HTTPS
async function generateCertificate() {
  const certPath = path.join(__dirname, 'server.pem');
  const keyPath = path.join(__dirname, 'server.key');

  if (!fs.existsSync(certPath) || !fs.existsSync(keyPath)) {
    console.log('Generating self-signed certificate...');

    const { execSync } = await import('child_process');
    execSync(`openssl req -x509 -newkey rsa:2048 -keyout "${keyPath}" -out "${certPath}" -days 365 -nodes -subj "/CN=localhost"`, {
      stdio: 'inherit'
    });
  }

  return {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  };
}

async function startServer() {
  try {
    const credentials = await generateCertificate();

    const server = https.createServer(credentials, app);

    server.listen(3000, () => {
      console.log('\n========================================');
      console.log('Xero OAuth2 Authentication Server');
      console.log('========================================');
      console.log('Server running at https://localhost:3000');
      console.log('\nOpening browser for Xero authentication...');
      console.log('(If browser does not open, visit https://localhost:3000 manually)');
      console.log('========================================\n');

      // Open browser
      open('https://localhost:3000');
    });

  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();
