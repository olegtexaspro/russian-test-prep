# Setup Guide — Russian Test Prep Dashboard

This is the **master setup guide**. It tells you what to install and in what order. Each section has a short overview and a link to the detailed per-service guide.

> 🟢 **Good news:** The dashboard works **out of the box** with no setup at all — Russian audio plays via your browser's built-in voice (Tier 3). Email and high-quality cloud voices are optional upgrades.

---

## What You Need

1. **A web browser** — MS Edge or Chrome, regular mode (not Incognito).
2. **Internet connection** — only required for cloud voices and email features. The dashboard itself runs offline.
3. **All project files in one folder** — open `russian-test-prep.html` to start.

That's it for basic use. The rest of this guide is for the **optional cloud features**.

---

## Optional Features Overview

| Feature | What it gives you | Cost | Setup time |
|---|---|---|---|
| **Inworld TTS** (Tier 1 voice) | High-quality Russian voice (Nikolai) | ~40 min/mo free, then $15-25/M chars | 5 min |
| **Google Cloud TTS** (Tier 2 voice) | Backup voice when Inworld fails | 1M chars/mo free, then ~$16/M | 10 min |
| **EmailJS** | Auto-email writing/recording to a parent | 200 emails/mo free | 15 min |
| **Cloudinary** | Audio file uploads with shareable links | 10 GB free | 5 min |

If you skip everything, the **browser's built-in voice (Tier 3)** still plays Russian audio for free, forever.

---

## Recommended Setup Order

Set up in this order. Each step is independent — you can stop after any step and still have a working app.

### Step 1: Inworld TTS (Best Russian voice)

**Why first:** This is the primary voice your students will hear. The voice "Nikolai" sounds natural and clear.

- **Detailed guide:** [INWORLD_TTS_SETUP.md](INWORLD_TTS_SETUP.md)
- **Quick version:**
  1. Sign up at https://studio.inworld.ai/
  2. Settings → API Keys → Create
  3. Copy key into `listening.js` line ~6:
     ```javascript
     const INWORLD_API_KEY = 'YOUR_KEY_HERE';
     ```
- **Cost:** Free for ~40 min/month. After that, ~$25 per 1M characters with the `max` model.

### Step 2: Google Cloud TTS (Free backup voice)

**Why second:** When Inworld free tier runs out, Google takes over with **1 million free characters per month**. That's about 3,000 listening exercises — far more than two students will use.

- **Detailed guide:** [GOOGLE_CLOUD_TTS_SETUP.md](GOOGLE_CLOUD_TTS_SETUP.md)
- **Quick version:**
  1. Sign up at https://console.cloud.google.com/
  2. Enable "Cloud Text-to-Speech API"
  3. Create API key under "Credentials"
  4. **Restrict the key** to just Text-to-Speech (security)
  5. Paste into `listening.js` line ~10:
     ```javascript
     const GOOGLE_CLOUD_API_KEY = 'YOUR_KEY_HERE';
     ```
- **Cost:** 1M chars/month FREE for WaveNet voices (4M for Standard).
- ⚠️ Requires a billing card on file even for the free tier.

### Step 3: EmailJS (Send work to parent)

**Why third:** Lets the dashboard email writing submissions and recording info to a parent or teacher automatically.

- **Detailed guide:** [EMAIL-SETUP-INSTRUCTIONS.md](EMAIL-SETUP-INSTRUCTIONS.md)
- **Quick version:**
  1. Sign up at https://www.emailjs.com/
  2. Add an email service (Gmail, Outlook, etc.)
  3. Create an email template (template content provided in the detailed guide)
  4. Copy 3 keys (Public Key, Service ID, Template ID) into `email-config.js`
  5. Set `STUDENT_NAME` and `PARENT_EMAIL` in the same file
- **Cost:** 200 emails/month free.

### Step 4: Cloudinary (Audio file uploads)

**Why last:** Adds clickable download links to recording emails. Without this, parent only sees recording info — they cannot listen directly.

- **Detailed guide:** [CLOUDINARY-SETUP-INSTRUCTIONS.md](CLOUDINARY-SETUP-INSTRUCTIONS.md)
- **Quick version:**
  1. Sign up at https://cloudinary.com/
  2. Copy your "Cloud Name" from the dashboard
  3. Settings → Upload → Add upload preset → set Signing Mode to **Unsigned**
  4. Paste cloud name + preset name into `email-config.js` (`CLOUDINARY_CONFIG` block)
- **Cost:** 10 GB storage + 25 GB bandwidth/month free.

---

## Where the API keys live

| File | What it stores |
|---|---|
| `listening.js` (top of file) | `INWORLD_API_KEY`, `GOOGLE_CLOUD_API_KEY` |
| `email-config.js` | `EMAIL_CONFIG` (EmailJS), `CLOUDINARY_CONFIG`, `STUDENT_NAME`, `PARENT_EMAIL` |

`mocktest.js` and `personal-drills.js` read the same keys from `listening.js` automatically — no need to edit them.

---

## ⚠️ Security Warning

API keys go directly into browser-side JavaScript files. Anyone who opens the HTML can see them via "View Page Source".

**Mitigations:**
1. **Restrict each API key to one service** (Inworld → TTS only; Google → TTS only).
2. **Set spending alerts** on Inworld and Google Cloud so you get warned before charges.
3. **Don't share the folder publicly** with your real keys inside. Use the `RusPrepProd/` clean copy if sharing.

For a fully secure setup, host the API calls on a backend server (out of scope for this project).

---

## Verifying Setup Works

After each setup step:
1. Open `russian-test-prep.html` in MS Edge (regular mode, not Incognito).
2. Open the browser console (F12 → Console).
3. Test the feature:
   - **TTS:** Listening tab → click any exercise → "Play Audio". Console shows which tier was used.
   - **Email:** Writing tab → finish a prompt → "Email to Parent". Check parent's inbox.
   - **Cloudinary:** Speaking tab → record → "Email to Parent". Email should contain a clickable audio link.

---

## Troubleshooting

| Problem | First thing to check |
|---|---|
| No audio plays at all | Browser supports speechSynthesis? Try `testAudio()` in console. |
| "Inworld TTS failed" message | API key correct? Billing set up in Inworld Studio? |
| Email not arriving | Check spam folder. Verify all 3 EmailJS keys are correct. |
| "Cloudinary upload failed" | Upload preset must be set to **Unsigned** mode. |
| Latest changes not loading | Hard refresh: Ctrl+Shift+R. Or clear browser cache. |

---

## Files in This Project

**Core app:**
- `russian-test-prep.html` — main dashboard
- `style.css` — styling
- 12 `.js` modules (reading, listening, writing, etc.)

**Setup docs:**
- `SETUP.md` — this file (start here)
- `INWORLD_TTS_SETUP.md` — Tier 1 voice
- `GOOGLE_CLOUD_TTS_SETUP.md` — Tier 2 voice
- `EMAIL-SETUP-INSTRUCTIONS.md` — EmailJS
- `CLOUDINARY-SETUP-INSTRUCTIONS.md` — Cloudinary

**Other:**
- `ABOUT.md` — what the app does (English + Russian)
- `README.md` — quick overview

---

**Total setup time if you do everything:** ~35 minutes
**Setup time for "good enough":** 0 minutes (browser TTS works immediately)
