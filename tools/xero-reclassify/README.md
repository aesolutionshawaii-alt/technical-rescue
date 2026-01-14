# Xero Transaction Reclassifier

Reclassifies Xero bank transactions containing "schwab" to account 1600 (Shareholder Advance).

## Setup

1. Install dependencies:
   ```bash
   cd tools/xero-reclassify
   npm install
   ```

2. Configure credentials in `.env` (already configured):
   ```
   XERO_CLIENT_ID=your_client_id
   XERO_CLIENT_SECRET=your_client_secret
   XERO_REDIRECT_URI=https://localhost:3000/callback
   ```

## Usage

### Step 1: Authenticate with Xero

```bash
npm run auth
```

This will:
- Start a local HTTPS server
- Open your browser to authenticate with Xero
- Save tokens to `tokens.json`

**Note:** Your browser may warn about the self-signed certificate. Click "Advanced" and proceed to localhost.

### Step 2: Run the reclassifier

Preview mode (no changes):
```bash
npm start -- --dry-run
```

Execute reclassification:
```bash
npm start
```

## What it does

1. Authenticates with Xero using saved OAuth2 tokens
2. Searches all bank transactions for entries containing "schwab"
3. Displays found transactions for review
4. Reclassifies matching transactions from their current account to account 1600 (Shareholder Advance)

## Files

- `auth-server.js` - OAuth2 authentication server
- `index.js` - Main reclassification script
- `tokens.json` - Saved OAuth2 tokens (auto-generated, gitignored)
- `.env` - API credentials (gitignored)
