# Ozora 2026 Festival Planner v4.1

This folder is ready for direct publication with GitHub Pages.

## Publish

1. Upload **the contents of this folder** to the root of the GitHub repository. Do not upload the outer folder itself.
2. Confirm that `index.html`, `app.js`, `styles.css`, `schedule-data.js`, `manifest.json` and `service-worker.js` are visible at repository root.
3. In GitHub open **Settings → Pages**.
4. Choose **Deploy from a branch**, branch **main**, folder **/(root)** and save.
5. Open `https://mudita1973.github.io/Ozora2026_2.0/` after deployment finishes.

The `.nojekyll` file is intentional and must stay in the repository.

After publishing, verify these two addresses:

- `https://mudita1973.github.io/Ozora2026_2.0/DEPLOYMENT-CHECK.txt`
- `https://mudita1973.github.io/Ozora2026_2.0/?v=410`

If an older design still appears, open `https://mudita1973.github.io/Ozora2026_2.0/cache-reset.html?v=410` and use the reset button. On iPhone, also remove an older Home Screen installation and add the page again from Safari. The new version is identified by **Festival Planner · v4.1** in the header and **All (303)** in the first tab.

See `FEATURE-AUDIT.md` for the completed checklist and the remaining source-data differences.

## Content audit notes

- The supplied posters yield 303 schedule slots across the five requested main stages after Cooking Groove and Dragon's Nest are separated by their published hours. A 304th main-stage act is not present in the supplied source material, so none was invented.
- Pumpui Day -1 (25 July) and Day 0 (26 July) are included.
- The supplied Visium/Ambyss poster starts on 28 July. The Ambyss/Y2KZERO line-up for 25–26 July was not supplied; the app shows this honestly in the First Timer tab.
- The First Timer choices are a configurable starter selection and credit Astro S / PsySmurfs. Replace them in `FIRST` inside `app.js` when the exact external recommendation list is available.
- `KOFI_URL` in `app.js` currently points to the Ko-fi homepage because no creator handle was supplied. Replace it with the intended Ko-fi page.

## Storage and privacy

The app uses browser `localStorage` for language, compact mode, plan and ratings/comments. It has no login, tracker or external data API. YouTube, Spotify and Ko-fi open only when their links are tapped.
