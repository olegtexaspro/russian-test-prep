# Cloudinary Setup Instructions - Audio File Upload

Follow these steps to enable automatic audio file uploads to Cloudinary with email links.

## Why Cloudinary?

- **10GB Free Storage** - Plenty for audio recordings
- **Direct Download Links** - Parent gets clickable link in email
- **Simple Setup** - Only 3 values needed (no OAuth!)
- **Permanent Storage** - Keep all practice recordings organized
- **Fast Upload** - Single API endpoint

## Step 1: Create Cloudinary Account (2 minutes)

1. Go to https://cloudinary.com/
2. Click **"Sign Up for Free"** (top right)
3. Enter email and create password (or sign up with Google)
4. Verify your email address
5. **Free plan gives you 10GB storage + 25GB monthly bandwidth**

## Step 2: Get Your Cloud Name (30 seconds)

1. After login, you'll see your **Dashboard**
2. Look at the top of the page - you'll see:
   ```
   Product Environment Credentials
   Cloud name: dabc123xyz
   ```
3. **Copy the Cloud Name** (looks like: `dbc123xyz` or similar)

## Step 3: Create Upload Preset (2 minutes)

1. Click the ⚙️ **Settings** icon (bottom left sidebar)
2. Click **"Upload"** tab
3. Scroll down to **"Upload presets"** section
4. Click **"Add upload preset"**
5. Configure the preset:
   - **Upload preset name:** `russian_audio` (or any name you like)
   - **Signing Mode:** Select **"Unsigned"** ⚠️ IMPORTANT
   - **Folder:** `student-russian-speaking` (optional, helps organize files)
   - Leave other settings as default
6. Click **"Save"**
7. **Copy the Upload Preset Name** (the name you just created, e.g., `russian_audio`)

## Step 4: Update Dashboard Configuration (1 minute)

1. Open the file `email-config.js` in a text editor (Notepad, VS Code, etc.)
2. Find the CLOUDINARY_CONFIG section:

```javascript
const CLOUDINARY_CONFIG = {
    CLOUD_NAME: 'YOUR_CLOUD_NAME_HERE',
    UPLOAD_PRESET: 'YOUR_UPLOAD_PRESET_HERE'
};
```

3. Replace with your actual values:

```javascript
const CLOUDINARY_CONFIG = {
    CLOUD_NAME: 'dbc123xyz',        // From Step 2
    UPLOAD_PRESET: 'russian_audio'  // From Step 3
};
```

4. Save the file

## Step 5: Test It! (2 minutes)

1. Open `russian-test-prep.html` in MS Edge (regular mode)
2. Go to **Speaking** tab
3. Record a short test (say "Привет" for 3 seconds)
4. Click "⏹️ Stop Recording"
5. Click "📧 Email to Parent"
6. Wait for "✅ Email Sent!" (upload takes 3-5 seconds)
7. Check parent's email inbox
8. Click the download link in the email
9. Audio file should play directly in browser or download!

## How It Works

### Upload Process:
1. Student records audio in browser
2. Click "📧 Email to Parent"
3. **Dashboard uploads audio to Cloudinary** (3-5 seconds)
4. **Cloudinary generates secure public URL**
5. **Email sent with clickable link**
6. Parent receives email with direct audio link

### Email Format:
```
Student Name - Speaking Practice Submission

Prompt: Расскажите о своей семье / Tell me about your family
Date: 12/11/2024, 10:30 AM

Recording Details:
Duration: 2:15
File Size: 245.67 KB

🎧 LISTEN TO RECORDING:
https://res.cloudinary.com/dbc123xyz/video/upload/v1702234567/student-russian-speaking-1702234567890.webm

Click the link above to download and listen to the audio recording.
```

## Troubleshooting

### "Cloudinary not configured" error
- Make sure you saved `email-config.js` after editing
- Verify CLOUD_NAME and UPLOAD_PRESET are filled in (not still "YOUR_CLOUD_NAME_HERE")
- Hard refresh: Ctrl+Shift+R

### "Upload failed" error
- Check internet connection
- Verify cloud name is correct (check Dashboard)
- Verify upload preset name matches exactly (case-sensitive!)
- Make sure Upload Preset is set to **"Unsigned"** mode

### "Upload preset must be whitelisted" error
- Go to Cloudinary Settings > Upload
- Find your upload preset
- Change **Signing Mode** to **"Unsigned"**
- Save and try again

### Email arrives but link doesn't work
- Link should start with `https://res.cloudinary.com/`
- Try copying link to browser address bar
- Check Cloudinary Media Library - file should be visible there
- Click file in Cloudinary to get alternate URL

### Audio file not visible in Cloudinary account
- Login to Cloudinary Dashboard
- Click **"Media Library"** (left sidebar)
- Look for files starting with `student-russian-speaking-`
- Files are sorted by upload date (newest first)

## Storage Management

### File Organization:
- All recordings are named: `student-russian-speaking-[timestamp].webm`
- Timestamp format: Unix milliseconds (e.g., 1702234567890)
- Easy to identify by date/time
- Stored in folder: `student-russian-speaking` (if configured in upload preset)

### Storage Limits:
- **Free Plan:** 10GB storage + 25GB monthly bandwidth
- Average recording: ~100-300 KB for 3 minutes
- **Can store ~35,000 recordings** before running out of space!

### Bandwidth Limits:
- **Free Plan:** 25GB/month download bandwidth
- Each 300KB file = ~83 downloads per month before hitting limit
- Resets monthly

### Cleanup (Optional):
1. Log in to Cloudinary
2. Click **Media Library**
3. Select old recordings (checkboxes)
4. Click **Delete** (trash icon)
5. Confirm deletion
6. Or upgrade to paid plan for more storage

## Security & Privacy

### Upload Preset Security:
- **Unsigned presets** allow uploads without authentication (simpler but less secure)
- Only your dashboard can upload (others would need your cloud name + preset name)
- Consider this acceptable risk for private family use
- For production use, switch to **Signed** mode with backend

### File Privacy:
- Public URLs allow anyone with the link to access
- Links are long and random (hard to guess)
- Only shared via email to parent
- Can manually delete files from Media Library anytime
- Can set expiration dates on files if needed

### Recommended Settings (Optional):
1. Go to Settings > Security
2. Enable **"Restricted media types"** - only allow audio/video
3. Enable **"Resource list"** - prevent URL guessing

## Cost

- **Free Forever:** 10GB storage, 25GB bandwidth/month
- **Plus Plan (Optional):** $89/month for 100GB + 100GB bandwidth
- **Advanced Plan (Optional):** Custom pricing
- For family use, **Free plan is plenty!**

## Advanced Features (Optional)

### Auto-Delete Old Files:
- Upload presets can be configured to auto-delete files after X days
- Settings > Upload > Edit preset > "Delete after" field

### File Transformations:
- Cloudinary can automatically convert WebM to MP3
- Add `f_mp3` to URL: `.../upload/f_mp3/v1234/filename.webm`
- Makes files playable on all devices

### Custom Folder Structure:
- Organize by date: `student-russian-speaking/2024-12`
- Organize by level: `student-russian-speaking/novice`
- Configure in upload preset "Folder" field

## Support

- Cloudinary Docs: https://cloudinary.com/documentation
- Cloudinary Support: https://support.cloudinary.com/
- Dashboard Issues: Check CLAUDE.MD file

---

**Setup Time:** ~5 minutes total
**Cost:** FREE (10GB storage)
**Difficulty:** Very Easy - just 3 values to copy!

## Next Steps

After setup is complete:
1. Test with a short recording
2. Verify email arrives with working link
3. Start using for daily practice!
4. Check Media Library occasionally to see all recordings

---

**Important:** Make sure to also complete EmailJS setup (see EMAIL-SETUP-INSTRUCTIONS.md) for the email delivery to work!
