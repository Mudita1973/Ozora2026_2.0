# Feature audit — Ozora 2026 Planner v5.2

## Implemented

- Five main stages with separate colours and left card borders: Ozora Stage, The Dome, Cooking Groove, Dragon's Nest and Pumpui.
- 303 main-stage schedule slots transcribed from the supplied posters, including start, end and calculated duration.
- Pumpui Pre-Days on 25 and 26 July.
- Personal 0–10 min/max rating range and an English comment field, stored locally.
- YouTube and Spotify search links on every act, artist profile dialog and all five original posters.
- IS tags and a dedicated view for 15 confirmed Ozora + Indian Spirit overlaps.
- Dragon's Nest fire shows and the Monday 20:00 Opening Ceremony.
- Festival timeline from arrival to the end of the festival.
- Tabs for all acts, every main stage, Routing and First Timer.
- Day, rating and free-text filters.
- My Plan page grouped by day with stage badge, share and clear-all actions.
- Live and next-act state for 27 July–2 August, refreshed once per minute.
- Routing for personal ratings of 7+, grouped by day, with overlap alternatives and a top-five conflict section.
- First Timer cards with DON'T MISS / CORE / RESET badges and Astro S / PsySmurfs credit.
- Dark theme, stage colours, high-rating highlight, compact mode and cache-clear button.
- Complete navigation and guide UI in German, English, Spanish and Hungarian.
- First-launch language selection followed by a nine-part guide; the guide remains available through the info button.
- Installable offline PWA with 192px and 512px icons, service worker, local storage and no login, tracker or external data API.
- Direct-access QR code and persistent unofficial disclaimer.
- Visible act counts in all stage tabs, six direct feature cards on the home screen and a full-filter reset through the All tab.
- Dedicated `cache-reset.html` page for removing stale GitHub Pages service workers and caches.
- Dedicated Discover screen with genre selection and repeatable twelve-act surprise mixes that exclude already saved or rated acts.
- Personal recommendation screen based on saved acts, ratings of 7+, preferred genres and preferred stages, with a curated fallback.
- Genre filters in both the schedule and Discover views.
- Optional local reminders 5, 10, 15 or 30 minutes before saved acts, with browser permission handling and notification links back to My Plan.
- Prominent QR sharing on the home screen and footer, with direct-link display, copy-link and native sharing controls.
- QR sharing included in all four guide translations.
- Local Excel import for the normalized Ozora template and compatible multi-sheet workbooks, covering rating ranges, comments, YouTube/Spotify links and My Plan selections.
- Dedicated imported-recommendations view with neutral IMPORTED badges, rating order and automatic navigation after a successful import.
- Local JSON backup and restore for My Plan, ratings, comments, imported links, language, compact mode and reminder settings, with validation and a confirmation preview.
- A professional, pre-filled import workbook with 303 act rows, stable IDs, input validation, filters, frozen panes, instructions and source notes.
- Dedicated Indian Spirit tab with 15 confirmed artists; `GMS` maps to the scheduled `GMS & Dickster` act.

## Source-data differences that remain visible and documented

1. **303 instead of 304 main-stage slots.** The supplied posters contain 303 transcribed schedule slots across the five requested stages. No unsupported 304th act was invented.
2. **Ambyss/Y2KZERO on 25–26 July.** The supplied Visium/Ambyss poster begins on 28 July. The missing pre-day source is called out in the First Timer tab.
3. **Exact external First Timer selection.** Astro S / PsySmurfs are credited, but the exact external recommendation list was not supplied. The app contains a clearly configurable starter selection.

## Verification completed

- JavaScript and service-worker syntax.
- Manifest JSON and icon dimensions.
- All local HTML and service-worker asset references.
- Schedule IDs, required fields, stage distribution, Pumpui Pre-Days, Opening Ceremony, fire shows and IS-tag acts.
- Translation key parity and nine help sections in all four languages.
- Browser interactions: language selection, first-start guide, search, genre filters, Discover mixes, recommendations, reminder settings, Excel Import, Indian Spirit, rating range, comment, My Plan, Routing, First Timer, compact mode and QR dialog.
- Responsive browser check at 390 × 844 pixels with no page-width overflow.
- Browser console: no errors during the test flow.
