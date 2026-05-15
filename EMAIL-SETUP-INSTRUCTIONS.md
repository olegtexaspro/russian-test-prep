# Email Setup Instructions - EmailJS Integration

Follow these steps to enable automatic email sending for Writing and Speaking modules.

## Step 1: Create EmailJS Account (5 minutes)

1. Go to https://www.emailjs.com/
2. Click "Sign Up" (top right)
3. Create account with your email
4. Verify your email address

## Step 2: Connect Your Email Service (3 minutes)

1. After login, go to "Email Services" page
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended)
   - Outlook
   - Yahoo
   - Or any other
4. Follow the connection wizard
5. **Copy the Service ID** (looks like: `service_abc1234`)

## Step 3: Create Email Template (5 minutes)

1. Go to "Email Templates" page
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
{{student_name}} - {{module_name}} Submission
```

**Content:**
```
Hello,

{{student_name}} has completed a {{module_name}} exercise.

Prompt: {{prompt_title}}
Date: {{date}}

---
{{content}}
---

This email was sent automatically from the Russian Test Prep Dashboard.
```

4. Click "Save"
5. **Copy the Template ID** (looks like: `template_xyz5678`)

## Step 4: Get Your Public Key (1 minute)

1. Go to "Account" page (top right menu)
2. Find "API Keys" section
3. **Copy the Public Key** (looks like: `a1b2c3d4e5f6g7h8`)

## Step 5: Update Dashboard Configuration (2 minutes)

1. Open the file `email-config.js` in a text editor (Notepad, VS Code, etc.)
2. Find these lines:

```javascript
const EMAIL_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',
    STUDENT_NAME: 'Student Name',
    PARENT_EMAIL: 'parent@example.com'
};
```

3. Replace with your actual values:

```javascript
const EMAIL_CONFIG = {
    PUBLIC_KEY: 'a1b2c3d4e5f6g7h8',           // From Step 4
    SERVICE_ID: 'service_abc1234',            // From Step 2
    TEMPLATE_ID: 'template_xyz5678',          // From Step 3
    STUDENT_NAME: 'Alex Johnson',             // Your student's name
    PARENT_EMAIL: 'parent@gmail.com'          // Parent's email address
};
```

4. Save the file

## Step 6: Test It! (1 minute)

1. Open `russian-test-prep.html` in MS Edge (regular mode, not Incognito)
2. Go to **Writing** tab
3. Complete a writing prompt
4. Click "✅ Submit Response"
5. Click "📧 Email to Parent"
6. Check the parent's email inbox!

## Troubleshooting

### "Email is not set up yet" message
- Make sure you saved `email-config.js` after editing
- Hard refresh the page: Ctrl+Shift+R
- Check that all three keys (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID) are filled in

### "Failed to send email" message
- Check your internet connection
- Make sure you're using **regular Edge** (not Incognito mode)
- Verify the keys are correct in `email-config.js`
- Check EmailJS dashboard for error logs

### Email not arriving
- Check spam/junk folder
- Verify the parent email address is correct in `email-config.js`
- Check EmailJS dashboard for delivery status

## Email Limits

**Free Plan:**
- 200 emails per month
- Perfect for test preparation (plenty for daily practice submissions)

If you need more, EmailJS has paid plans starting at $7/month for 1000 emails.

## How It Works

### Writing Module
When student clicks "📧 Email to Parent" after submitting:
- Sends the full Russian text
- Includes word count and character count
- Shows prompt title and date

### Speaking Module
When student clicks "📧 Email to Parent" after recording:
- Sends recording duration and file size
- Note: Actual audio file must be shared separately (downloaded from browser)
- Shows prompt title and date

## Privacy & Security

- EmailJS uses secure HTTPS connections
- Your email credentials are NOT stored in the dashboard files
- EmailJS handles all email authentication securely
- Only the API keys are in `email-config.js` (which are safe to use client-side)

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Dashboard Issues: Check CLAUDE.MD file for troubleshooting

---

**Setup Time:** ~15-20 minutes total
**Cost:** FREE (200 emails/month)
**Difficulty:** Easy - just copy/paste!
