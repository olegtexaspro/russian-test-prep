# Inworld TTS-1.5 Setup Guide

## Overview

Inworld TTS-1.5 is the **PRIMARY (Tier 1)** text-to-speech service for the Russian Test Prep Dashboard, providing premium quality Russian voice synthesis using the Nikolai voice.

**Key Features:**
- Premium quality Russian male voice (Nikolai)
- Model: inworld-tts-1.5-max (highest quality)
- Fast response times
- Reliable API with good uptime

**Pricing (verified May 2026):**
- **Free On-Demand tier:** ~40 minutes of TTS/month
- **Paid:** `inworld-tts-1.5-max` = $25 per 1M characters (best quality)
- **Cheaper option:** `inworld-tts-1.5-mini` = $15 per 1M characters
- Set up spending alerts to control costs

**Position in Fallback Chain (3 tiers):**
1. **Tier 1 (Primary): Inworld TTS-1.5** ← You are here
2. Tier 2 (Backup): Google Cloud WaveNet — 1M chars/mo free, then ~$16 per 1M
3. Tier 3 (Offline): Browser Web Speech API — free, unlimited, works offline

---

## Setup Instructions

### Step 1: Get API Key

1. **Go to Inworld Studio:**
   - Visit: https://studio.inworld.ai/
   - Sign up for an account

2. **Create API Key:**
   - Navigate to Settings → API Keys
   - Click "Create New API Key"
   - Copy the API key (should be Base64 encoded)

3. **Important Notes:**
   - API key is already Base64 encoded (no additional encoding needed)
   - Keep your API key secure (don't share publicly)
   - The key format looks like: `ABcdEF12GHijKL34MNopQR56...`

### Step 2: Add API Key to Dashboard

1. **Open `listening.js` in text editor**

2. **Find line 4** (at the top of the file):
   ```javascript
   const INWORLD_API_KEY = ''; // Add your Inworld API key here
   ```

3. **Paste your API key** between the quotes:
   ```javascript
   const INWORLD_API_KEY = 'YOUR_BASE64_ENCODED_API_KEY_HERE';
   ```

4. **Save the file**

### Step 3: Configure Billing Protection

1. **Set up spending alerts in Inworld Studio:**
   - Go to Billing → Alerts
   - Set monthly budget alert (recommended: $5-10)
   - Enable email notifications

2. **Monitor usage:**
   - Dashboard displays character usage in "Overall Progress" section
   - Counter auto-resets monthly (1st of each month)
   - Console logs show detailed usage per request

### Step 4: Test the Setup

1. **Open `russian-test-prep.html` in MS Edge** (regular mode, NOT Incognito)

2. **Go to Listening tab**

3. **Click any exercise**, then click "Play Audio"

4. **Check console (F12):**
   - Should see: `"[TTS] Attempting Inworld TTS-1.5..."`
   - Should see: `"[TTS] ✅ Inworld TTS-1.5 successful"`
   - Should hear natural Russian male voice (Nikolai)

5. **If successful:**
   - ✅ Inworld TTS-1.5 is working
   - Usage counter should increment in dashboard

6. **If failed:**
   - System automatically tries Tier 2 (Google Cloud WaveNet)
   - Finally falls back to Tier 3 (Browser Web Speech API — free, offline)

---

## API Configuration Details

### Inworld TTS-1.5 API Request Format

```javascript
const response = await fetch(
    'https://studio.inworld.ai/v1/text-to-speech',
    {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${INWORLD_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: cleanText,        // Russian text to speak
            voice: 'Nikolai',       // Russian male voice
            model: 'inworld-tts-1.5-max'  // Highest quality model
        })
    }
);
```

### Voice: Nikolai
- **Language:** Russian (native speaker quality)
- **Gender:** Male
- **Style:** Natural, clear, professional
- **Age:** Adult
- **Accent:** Standard Russian

### Model: inworld-tts-1.5-max
- **Quality:** Maximum (highest available)
- **Speed:** Fast generation
- **Output:** MP3 format
- **Sample Rate:** 24kHz (high quality)

---

## Usage & Cost Estimation

### Typical Usage Scenarios

**Listening Tab Exercises:**
- Average passage: ~300-500 characters
- Cost per passage: ~$0.0015-0.0050 (0.15-0.5 cents)
- 40 exercises total: ~$0.06-0.20

**Mock Test:**
- Listening section: 10 questions
- Average per question: ~400 characters
- Cost per test: ~$0.02-0.04 (2-4 cents)
- With 2-play limit: ~$0.04-0.08 per test

**Monthly Estimates:**
- Light practice (5 passages/week): ~$0.30-0.50/month
- Moderate practice (10 passages/week): ~$0.60-1.00/month
- Heavy practice (20 passages/week): ~$1.20-2.00/month
- With mock tests (1 per week): +$0.16-0.32/month

### Cost Control Tips

1. **Practice smartly:**
   - Read text first before listening
   - Use 2-play limit wisely
   - Don't replay unnecessarily

2. **Use fallback tiers:**
   - Tier 3 (Browser Web Speech API) is free and works offline
   - Good for basic practice when cost matters

3. **Monitor usage:**
   - Check dashboard counter regularly
   - Review monthly spending in Inworld Studio

---

## Troubleshooting

### ❌ "Inworld TTS failed, trying Google Cloud..."

**Possible causes:**
1. API key is missing or incorrect
2. Billing account not set up
3. Network connection issue
4. API quota exceeded

**Solutions:**
1. Verify API key in `listening.js` line 4
2. Check Inworld Studio billing status
3. Check internet connection (Inworld requires internet)
4. Review usage in Inworld Studio dashboard

### ❌ Audio plays but voice is wrong

**Problem:** Hearing female voice or non-Russian voice

**Solution:**
- Verify `voice: 'Nikolai'` in API request
- Check Inworld Studio for available Russian voices
- May need to update voice name in code

### ❌ "Authorization failed"

**Problem:** API key format incorrect

**Solution:**
- API key should be Base64 encoded (already encoded from Inworld)
- Don't add "Bearer" prefix (uses "Basic" auth)
- No additional encoding needed

### ⚠️ Slow audio generation

**Expected behavior:**
- First request: ~1-2 seconds (cold start)
- Subsequent requests: ~0.5-1 second
- Audio preloading adds 1000ms buffer

**If slower:**
- Check network speed
- Verify Inworld API status
- System will auto-fallback to faster tiers

---

## Three-Tier Fallback Logic

```javascript
try {
    // Tier 1: Inworld TTS-1.5 (Primary)
    await playInworldTTS(text);
} catch (error) {
    try {
        // Tier 2: Google Cloud WaveNet (Backup)
        await playGoogleCloudTTS(text);
    } catch (googleError) {
        // Tier 3: Browser Web Speech API (Offline, free)
        await playFallbackTTS(text);
    }
}
```

**Fallback Triggers:**
- Network errors
- API authentication failures
- Quota exceeded
- Service unavailable
- Timeout (10+ seconds)

---

## API Key Security

### ✅ Best Practices

1. **Never commit API key to public repos:**
   - Add `listening.js` to `.gitignore` if sharing code
   - Use environment variables for production

2. **Rotate keys periodically:**
   - Create new key every 90 days
   - Delete old keys in Inworld Studio

3. **Limit key permissions:**
   - Only enable TTS access
   - Disable unnecessary API features

### ⚠️ If Key Compromised

1. **Immediately revoke in Inworld Studio:**
   - Go to Settings → API Keys
   - Click "Revoke" on compromised key

2. **Create new key:**
   - Generate new API key
   - Update `listening.js` line 4

3. **Monitor billing:**
   - Check for unauthorized usage
   - Contact Inworld support if needed

---

## Support & Resources

**Inworld Studio:**
- Dashboard: https://studio.inworld.ai/
- Documentation: https://docs.inworld.ai/
- Support: support@inworld.ai

**Dashboard Files:**
- `listening.js` (line 4): Inworld API key
- `mocktest.js`: Uses same config from listening.js
- `russian-test-prep.html`: Usage tracking display

**Related Setup Guides:**
- `GOOGLE_CLOUD_TTS_SETUP.md` - Tier 2 (backup)
- `SETUP.md` - Master setup guide (start here)

---

**Last Updated:** 2026-05-14
**Tier Position:** Tier 1 (Primary)
**Pricing:** $25 per 1M characters (max model), $15 per 1M (mini model)
**Free Tier:** ~40 minutes of TTS/month (On-Demand plan)
