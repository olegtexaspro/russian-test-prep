# Google Cloud Text-to-Speech API Setup

## Overview

Google Cloud TTS serves as **Tier 2 fallback** in our three-tier voice system:
- **Tier 1 (Primary):** Inworld TTS-1.5 — $15-25 per 1M chars (Nikolai voice)
- **Tier 2 (Backup):** Google Cloud WaveNet — 1M chars/month free, then ~$16 per 1M chars (or 4M/mo free for Standard voices at ~$4 per 1M)
- **Tier 3 (Offline):** Browser Web Speech API — Free, works offline

## Step 1: Get Your Google Cloud API Key

1. Go to **Google Cloud Console**: https://console.cloud.google.com/
2. Create a new project (or select existing one)
3. Enable **Cloud Text-to-Speech API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Cloud Text-to-Speech API"
   - Click "Enable"
4. Create API Key:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the API key that appears
5. **Optional but HIGHLY RECOMMENDED** - Restrict your API key:
   - Click "Edit API key" (pencil icon)
   - Under "API restrictions", select "Restrict key"
   - Choose only "Cloud Text-to-Speech API"
   - Under "Website restrictions", add your domain (or leave unrestricted for localhost testing)
   - Click "Save"

## Step 2: Add API Key to Your Code

Open `listening.js` and replace the placeholder on **line 9**:

```javascript
// Google Cloud TTS Configuration
const GOOGLE_CLOUD_API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY_HERE'; // Replace with your API key
```

**Replace with:**
```javascript
const GOOGLE_CLOUD_API_KEY = 'AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Your actual API key
```

**That's it!** The API key is automatically shared with `mocktest.js` - no need to edit multiple files.

## Step 3: Test the Integration

1. Open the dashboard in MS Edge (regular mode, NOT Incognito)
2. Go to **🎧 Listening Comprehension Practice** tab
3. Click any exercise and click "Play Audio"
4. Open browser console (F12) to see fallback tier logs
5. To test Google Cloud TTS:
   - Temporarily set `INWORLD_API_KEY` to an invalid value in `listening.js` to force fallback
   - Or wait until your Inworld free tier runs out

## Pricing & Cost Management

### Pricing Tiers
- **Standard voices** (ru-RU-Standard-B): ~$4 per 1 million characters
- **WaveNet voices** (ru-RU-Wavenet-B): ~$16 per 1 million characters
- **Neural2 voices** (latest): ~$16 per 1 million characters

**We use WaveNet voices** (ru-RU-Wavenet-B) for best quality.

### Free Tier (verified May 2026)
- **WaveNet/Neural2 voices:** First 1 million characters/month FREE
- **Standard voices:** First 4 million characters/month FREE
- Free tier is perpetual (not a trial)
- After free tier: Standard pricing kicks in

### Cost Estimate
- Average listening exercise: ~300-500 characters
- 10,000 exercises = ~3-5 million characters = **FREE** (under 4M free tier)
- Even after free tier: 10k exercises = ~$4.80-$8.00 (WaveNet pricing)

### Monthly Spending Limit (Recommended)
1. Go to **Google Cloud Console** → "Billing"
2. Click "Budgets & alerts"
3. Click "Create Budget"
4. Set monthly budget (e.g., $5)
5. Set alert at 50%, 90%, 100%
6. You'll receive email warnings before hitting limit

**Important:** Google Cloud does NOT automatically stop at budget limit - you'll be charged if exceeded. Set alerts to monitor usage.

## Voice Options

### Current Voice (Default)
```javascript
voice: {
    languageCode: 'ru-RU',
    name: 'ru-RU-Wavenet-B',  // Male voice, WaveNet quality (~$16 per 1M chars)
    ssmlGender: 'MALE'
}
```

### Available Russian Voices

**Standard Voices (~$4 per 1M chars):**
- `ru-RU-Standard-A` - Female
- `ru-RU-Standard-B` - Male (current default)
- `ru-RU-Standard-C` - Female
- `ru-RU-Standard-D` - Male

**WaveNet Voices (~$16 per 1M chars) - Premium Quality:**
- `ru-RU-Wavenet-A` - Female
- `ru-RU-Wavenet-B` - Male
- `ru-RU-Wavenet-C` - Female
- `ru-RU-Wavenet-D` - Male

**To change voice:** Edit both `listening.js` (line ~1465) and `mocktest.js` (line ~738):
```javascript
voice: {
    languageCode: 'ru-RU',
    name: 'ru-RU-Wavenet-D',  // Example: Change to different WaveNet voice
    ssmlGender: 'MALE'
}
```

## How the Three-Tier System Works

```
1. USER CLICKS "PLAY AUDIO"
   ↓
2. TRY INWORLD TTS-1.5 (Tier 1)
   ├─ Success? → Play audio ✅
   └─ Failed? → Continue to Tier 2
      ↓
3. TRY GOOGLE CLOUD TTS (Tier 2)
   ├─ Success? → Play audio ✅
   └─ Failed? → Continue to Tier 3
      ↓
4. TRY BROWSER WEB SPEECH API (Tier 3)
   ├─ Success? → Play audio ✅
   └─ Failed? → Show error message ❌
```

**Failure triggers:**
- Inworld: Network error, API key invalid, billing issue, free tier exhausted
- Google Cloud: API limit reached, network error, API key invalid
- Browser Web Speech: No Russian voice available, speechSynthesis not supported

## Security Warning ⚠️

**Your API key is visible in browser JavaScript!**

Anyone can:
1. Right-click → "View Page Source"
2. Find your API key
3. Use it for their own projects (costing you money)

**Mitigation strategies:**
1. **Restrict API key** (highly recommended):
   - Limit to Text-to-Speech API only
   - Add website restrictions (domain whitelist)
2. **Set spending limits** in Google Cloud Console
3. **Monitor usage** regularly via Google Cloud Console
4. **Rotate keys** if you suspect unauthorized use

For production apps with public access, use a backend server to hide API keys.

## Troubleshooting

### Error: "Google Cloud TTS error: 403"
- API key is invalid or restricted
- Check API key restrictions in Google Cloud Console
- Make sure Text-to-Speech API is enabled

### Error: "Google Cloud TTS error: 429"
- Rate limit exceeded or quota reached
- Check your usage in Google Cloud Console
- Wait and try again, or upgrade quota

### Audio not playing
- Check browser console (F12) for error details
- Verify API key is correct in `listening.js` line 9
- Check network tab for failed API requests

### Still using Inworld when it should use Google Cloud
- Inworld is working correctly! Google Cloud only activates when Inworld fails
- To force Google Cloud TTS: Temporarily change Inworld API key to invalid value

### Browser falls back to Tier 3 immediately
- Both cloud services (Inworld, Google Cloud) are failing
- Check both API keys
- Check browser console for specific error messages

## Console Logs to Monitor

When audio plays successfully with Google Cloud TTS, you'll see:
```
❌ Inworld TTS-1.5 error: [error details]
🔄 Tier 1 failed, trying Tier 2 (Google Cloud TTS)...
🔄 Trying Google Cloud TTS...
✅ Audio received from Google Cloud TTS
✅ Google Cloud audio fully buffered
✅ Google Cloud TTS playback completed
```

## Files Used by the Three-Tier System

1. **listening.js**:
   - `INWORLD_API_KEY` constant (Tier 1)
   - `GOOGLE_CLOUD_API_KEY` constant (Tier 2)
   - Functions: `playInworldTTS()`, `playGoogleCloudTTS()`, `playFallbackTTS()` (browser, Tier 3)

2. **mocktest.js**:
   - Uses same INWORLD_/GOOGLE_CLOUD_ keys from listening.js
   - Functions: `playMockInworldTTS()`, `playMockGoogleCloudTTS()`, `playMockFallbackTTS()`

3. **personal-drills.js**:
   - Reads same keys via `typeof` check
   - Same 3-tier chain in `speakRussian()`

4. **russian-test-prep.html**:
   - Listening tab description references the tiered system

5. **INWORLD_TTS_SETUP.md**: Tier 1 setup guide
6. **GOOGLE_CLOUD_TTS_SETUP.md**: This file (Tier 2)
7. **SETUP.md**: Master setup guide

---

**Last Updated:** 2026-05-14
**Tier Position:** Tier 2 (Backup)
**Cost:** ~$16 per 1M characters (WaveNet voices), 1M chars/month FREE for WaveNet (4M for Standard)
**Security:** API key exposed in browser - restrict key and monitor usage

**Related Setup Guides:**
- `INWORLD_TTS_SETUP.md` - Tier 1 (primary)
- `SETUP.md` - Master setup guide (start here)
