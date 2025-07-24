# Privacy Policy – One Click Cookie Clearer

**Last updated:** 2025-07-23

This extension does not collect, transmit, store, sell, or share any personal data.

## What it does
When you click the icon, it removes cookies (and optionally local/session storage in the “+Storage” version) for the current tab’s domain. It shows a short toast and may reload the page if you enable that setting.

## Data handling
- No data leaves your browser.
- The only stored value is a single boolean (`autoRefresh`) in Chrome storage.
- No analytics, telemetry, or remote scripts are used.

## Permissions
- `cookies`: enumerate/remove cookies.
- `activeTab` & `scripting`: inject a tiny toast + optional reload into the current tab after a click.
- `storage`: save the auto-refresh preference.
- `<all_urls>`: needed so it can work on any site; nothing runs until you click.

Contact: Dark Frog Studios

=============================================================================

# 🧹 One Click Cookie Clearer

A no-nonsense Chrome extension that **clears cookies** and **refreshes the current tab** — in a single click.

> Designed for developers who want fast, hassle-free cleanup during testing.

---

## 🔧 What It Does

- Deletes **all cookies** for the current tab's domain
- Reloads the tab **after 1.1 seconds**
- Runs while showing a **simple Toast message**, via a **background script**
- No popup, no confirmation, no delay

---

## 🛠️ How to Install (Developer Mode)

1. Download or clone this repo
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the `one_click_cookie_clearer` folder

The extension icon will now appear in your toolbar.

---

## 🧠 How It Works

Behind the scenes, `background.js`:

- Uses the `chrome.scripting.executeScript` API to:
  - Clear all cookies associated with the current tab
  - Refresh the tab instantly after deletion

---

## 📁 File Structure

| File | Purpose |
|------|---------|
| `manifest.json` | Manifest V3 config |
| `background.js` | Script to clear cookies + refresh |
| `icon.png` | Toolbar icon (48x48) |
