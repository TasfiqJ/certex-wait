# Waitlist Backend Setup (Free — Google Sheets)

Every email signup goes straight to a Google Sheet you own. Zero cost, no third-party accounts.

---

## Step 1: Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it **"Cortex Prep Waitlist"**
3. In row 1, add these headers:
   - A1: `Email`
   - B1: `Timestamp`
   - C1: `Status`
4. Note the **spreadsheet ID** from the URL — it's the long string between `/d/` and `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit
   ```

## Step 2: Create the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete everything in the editor
3. Paste this code:

```javascript
const SHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID_HERE';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const email = (data.email || '').trim().toLowerCase();

    if (!email || !email.includes('@')) {
      return jsonResponse({ success: false, message: 'Invalid email' });
    }

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const emails = sheet.getRange('A:A').getValues().flat().map(e => String(e).toLowerCase());

    // Check for duplicates
    if (emails.includes(email)) {
      return jsonResponse({ success: true, message: "You're already on the list!" });
    }

    // Add new row
    sheet.appendRow([
      email,
      new Date().toISOString(),
      'waitlist'
    ]);

    // Optional: send yourself a notification
    // Uncomment the line below and replace with your email
    // MailApp.sendEmail('cortextprep@yahoo.com', 'New Waitlist Signup!', 'New signup: ' + email);

    return jsonResponse({ success: true, message: "You're on the list!" });

  } catch (err) {
    return jsonResponse({ success: false, message: 'Server error: ' + err.message });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// Required for CORS preflight
function doGet(e) {
  return jsonResponse({ success: true, message: 'Waitlist API is running' });
}
```

4. Replace `PASTE_YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID from Step 1
5. If you want email notifications on each signup, uncomment the `MailApp.sendEmail` line

## Step 3: Deploy the Apps Script

1. Click **Deploy → New deployment**
2. Click the gear icon next to "Select type" → choose **Web app**
3. Settings:
   - Description: `Waitlist API`
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. **Authorize** when prompted (click through the "unsafe" warning — it's your own script)
6. Copy the **Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/XXXXX.../exec
   ```

## Step 4: Connect to your site

1. Open `site/.env.local`
2. Paste the URL:
   ```
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXX.../exec
   ```
3. Restart the dev server

## Step 5: Test it

1. Go to your site and enter an email
2. Check your Google Sheet — the email should appear
3. Try the same email again — it should say "already on the list"

---

## What you get

- **Real-time spreadsheet** of every signup
- **Duplicate detection** — no double entries
- **Timestamps** — know exactly when each person signed up
- **Export anytime** — download as CSV for Mailchimp, Resend, Loops, etc.
- **Free forever** — Google Sheets has no meaningful limits for a waitlist

## Later: Send emails to your list

When you're ready to email your waitlist:
1. Export the sheet as CSV
2. Import into [Resend](https://resend.com) (free for 3K emails/month) or [Loops](https://loops.so) (free for 1K contacts)
3. Send your launch email

## Production (Vercel)

When deploying to Vercel, add the environment variable:
- Key: `GOOGLE_SCRIPT_URL`
- Value: your Apps Script URL

Add it in Vercel dashboard → Settings → Environment Variables.
