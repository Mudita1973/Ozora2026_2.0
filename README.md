# Ozora 2026 Festival Planner v5.2

This folder is ready for direct publication with GitHub Pages.

## Publish

1. Upload **the contents of this folder** to the root of the GitHub repository. Do not upload the outer folder itself.
2. Confirm that `index.html`, `app.js`, `styles.css`, `schedule-data.js`, `jszip.min.js`, `manifest.json` and `service-worker.js` are visible at repository root.
3. In GitHub open **Settings → Pages**.
4. Choose **Deploy from a branch**, branch **main**, folder **/(root)** and save.
5. Open `https://mudita1973.github.io/Ozora2026_2.0/` after deployment finishes.

The `.nojekyll` file is intentional and must stay in the repository.

After publishing, verify these two addresses:

- `https://mudita1973.github.io/Ozora2026_2.0/DEPLOYMENT-CHECK.txt`
- `https://mudita1973.github.io/Ozora2026_2.0/?v=520`

If an older design still appears, open `https://mudita1973.github.io/Ozora2026_2.0/cache-reset.html?v=520` and use the reset button. On iPhone, also remove an older Home Screen installation and add the page again from Safari. The new version is identified by **Festival Planner · v5.2** in the header and **All (303)** in the first tab.

## New in v4.2

- **Discover:** a fresh mix of twelve acts not yet saved or rated, with genre selection and a New Mix button.
- **Recommendations:** ranked from saved acts and personal ratings, with genre and stage reasons; curated highlights are used until preferences exist.
- **Genre filter:** All genres, Ambient / Dub, Psytrance, Techno and World / Live in the schedule and Discover view.
- **Local reminders:** optional browser notifications 5, 10, 15 or 30 minutes before saved acts. They are checked while the app is open or active in the background; fully closed delivery is not guaranteed without a push server.

## New in v4.3

- A clearly visible **Share app by QR** panel on the home screen and in the footer.
- The QR dialog contains the direct app address plus copy-link and native share actions.
- QR sharing is explained in all four guide translations.

## New in v4.4

- Local `.xlsx` import for ratings, comments, YouTube/Spotify links and My Plan selections; files never leave the device.
- Direct support for the normalized Ozora template and compatible multi-sheet workbooks, including mixed rating formats such as `6.5-8.0`, `4.0/6.4` and single scores.
- A downloadable, pre-filled `Ozora-2026-Import-Template.xlsx` with all 303 schedule slots, stable IDs and validated 0–10 fields.
- A dedicated Indian Spirit view containing 15 confirmed Ozora overlaps, with IS tags on their schedule cards.
- JSZip is bundled locally under its included license; no CDN or external import service is used.

## New in v5.1

- **Imported recommendations:** every act whose personal data was imported from Excel appears in a dedicated view, carries a neutral IMPORTED badge and is sorted by rating. After a successful import, the app opens this view automatically.
- All donation links and related guide text have been removed. App sharing remains available through the QR button.
- **Excel import repaired and expanded:** the app now recognizes standard import sheets even when the header is not in the first row, accepts common English and German header variants, and can recover ratings and links from `Original Rating` / `Original Links` columns.
- The import preview now separates recognized Excel rows, acts with actual importable personal data, and unmatched artists. A blank template therefore produces an explicit explanation instead of the misleading `0 / 0` result.
- Parser and offline-cache versions were advanced together so an older cached importer cannot silently remain active after deployment.
- **Artist profiles** now include a complete 0–10 rating selector for every listed performance. The value is shared with the schedule, recommendations, plan and journal and remains saved locally after reloading.
- **Mein Plan** is now the second top navigation tab from every view, in addition to the fixed bottom navigation.
- **Ratings** have a clearly labelled `0–10` button and one-tap choices for 5, 6, 7, 8, 9 or 10; the precise min/max range remains available underneath.
- Rating controls use persistent delegated touch/click handling, update the card immediately and remain saved after reloading the app.
- `jszip.min.js` is now at repository root and included in the new offline cache. This fixes the `JSZip missing` error when the full v5.1 upload package replaces the older files.

## New in v5.2

- **Portable backup:** download My Plan, ratings, comments, imported links, language, compact mode and reminder settings as a local JSON file.
- **Restore on another device:** the backup is validated and previewed before it replaces existing local data.
- Invalid files, unknown act IDs and unsafe external links are rejected or removed during import.
- Browser notification permission is intentionally not transferred and must be granted again on the new device.
- Backup and restore are fully translated in German, English, Spanish and Hungarian and remain completely local without upload or account.

See `FEATURE-AUDIT.md` for the completed checklist and the remaining source-data differences.

## Content audit notes

- The supplied posters yield 303 schedule slots across the five requested main stages after Cooking Groove and Dragon's Nest are separated by their published hours. A 304th main-stage act is not present in the supplied source material, so none was invented.
- Pumpui Day -1 (25 July) and Day 0 (26 July) are included.
- The supplied Visium/Ambyss poster starts on 28 July. The Ambyss/Y2KZERO line-up for 25–26 July was not supplied; the app shows this honestly in the First Timer tab.
- The First Timer choices are a configurable starter selection and credit Astro S / PsySmurfs. Replace them in `FIRST` inside `app.js` when the exact external recommendation list is available.
- The Indian Spirit list follows a confirmed festival comparison. `GMS` is represented by the scheduled Ozora act `GMS & Dickster`.

## Storage and privacy

The app uses browser `localStorage` for language, compact mode, plan, ratings/comments, imported links and reminder preferences. Excel files and JSON backups are processed locally and are not uploaded. It has no login, tracker or external data API. YouTube and Spotify open only when their links are tapped.
