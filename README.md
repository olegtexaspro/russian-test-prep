# Russian Test Prep Dashboard

🌐 **Live demo:** https://olegtexaspro.github.io/russian-test-prep/russian-test-prep.html

A browser-based practice dashboard for the **STAMP Russian test** (targeting Level 5+ for 2 world-language credits).

Runs entirely in your browser. No install. No server. Progress saves to `localStorage` on your own computer.

## Start here

1. **[ABOUT.md](ABOUT.md)** — what the app does, in simple English + simple Russian (Простой русский).
2. **[SETUP.md](SETUP.md)** — how to enable optional cloud features (high-quality voices, email submissions).
3. Open `russian-test-prep.html` in a desktop browser (MS Edge or Chrome, regular mode — not Incognito).

## Works out of the box

You can use the dashboard **immediately** with no setup at all. The browser's built-in Russian voice (Tier 3 of the TTS chain) plays listening exercises. All other tabs — reading, writing, speaking, grammar, vocabulary, drills, mock test — work fully without any API keys.

The cloud setup steps in `SETUP.md` are **optional upgrades** for nicer voice quality and emailing student work to a parent.

## What's inside

- **12-week curriculum** with daily checkboxes (Mon/Wed/Fri + Tue/Thu), organized into 7 phase tabs
- **12 practice modules:** Reading, Listening, Writing, Speaking, Grammar, Vocabulary, Typing, Calendar, Phrases, Resources, Mock Test, Personal Drills
- **3-tier TTS:** Inworld → Google Cloud → Browser Web Speech API (browser tier is always free + offline)
- **Optional:** auto-email writing/recordings to a parent (EmailJS + Cloudinary)

## File overview

| Type | Files |
|---|---|
| App | `russian-test-prep.html`, `style.css`, 13 `.js` modules |
| Docs | `README.md` (this file), `ABOUT.md`, `SETUP.md` |
| Setup guides | `INWORLD_TTS_SETUP.md`, `GOOGLE_CLOUD_TTS_SETUP.md`, `EMAIL-SETUP-INSTRUCTIONS.md`, `CLOUDINARY-SETUP-INSTRUCTIONS.md` |

## Requirements

- Modern desktop browser with `MediaRecorder`, `localStorage`, and `speechSynthesis` support (Edge, Chrome, Firefox — all current versions work)
- Microphone (for the Speaking module)
- Internet connection (only for optional cloud features — the core app works offline)

## License

Released under the **MIT License** — see [`LICENSE`](LICENSE) for the full text.

Copyright © 2026 Oleg Korolev.

You can use, modify, and share this project freely (including commercially), as long as you keep the copyright notice in copies. If you redistribute, please **remove your own API keys first** (see security notes in [`SETUP.md`](SETUP.md)).
