# Roxas City Launch Checklist

**LGU Name:** City of Roxas, Capiz
**Status:** Rebranded from BetterSolano.org; not yet public
**Created:** 2026-09-16

This is the remaining work between the Roxas City rebrand and a site that can
be shared publicly. Items are in dependency order — the critical path to a
shareable URL is items 1 through 6.

Ownership tags: **[LGU]** needs the city government, **[DEV]** is a code
change, **[DESIGN]** needs a designer, **[TRANSLATOR]** needs a language
speaker, **[OWNER]** is a project decision.

For the full inventory of what is already filled in versus still a
placeholder, see the Rebrand Status section of the root `README.md` and the
placeholder list in `.env.example` (which carries a `grep` command for each).

---

## Now — before anything else

### 1. Review and merge the rebrand pull request **[OWNER]**

Everything below assumes the rebrand is on `main`.

- [ ] Review and merge the rebrand PR

### 2. Deploy to Vercel **[OWNER]**

- [ ] Import the repository at https://vercel.com/new
- [ ] Accept the detected settings — `vercel.json` supplies the build command
      (`bash build.sh --no-bump`), the output directory (`dist`), clean URLs,
      the security headers and the cache policy. No dashboard configuration is
      needed.

### 3. Confirm the deployed subdomain **[DEV]**

The canonical URL is baked into the pages as `https://betterroxas.vercel.app`.

- [ ] Check the subdomain Vercel actually assigned
- [ ] If it differs, update `SITE_URL` in `.env`, then re-run the replacement
      across the canonical tags, `og:url`, `twitter:url` and `sitemap.xml`

Find every occurrence with:

```bash
grep -rl "betterroxas.vercel.app" --exclude-dir=dist --exclude-dir=node_modules .
```

This matters more than it looks. If the host is wrong, every canonical tag
points search engines at a site that is not this one.

---

## Before the URL goes to anyone

### 4. Official emergency hotlines **[LGU]**

**This is the top blocker.** The hotline sections currently carry the national
emergency line (911) and the City Emergency Response Team numbers from
roxascity.gov.ph, plus a note explaining what is missing. The PNP, Bureau of
Fire Protection and hospital numbers are deliberately absent: three
independent online directories give three different numbers for the Roxas City
police station, and two disagree on the fire station.

- [ ] Request a verified hotline list from City Hall, (036) 6212-049, or the
      City Emergency Response Team
- [ ] Add the confirmed numbers to the hotline bar, `contact/`,
      `services/public-safety.html`, `offline.html` and
      `react-app/src/components/layout/HotlineBar.tsx`
- [ ] Record the source and verification date in `docs/rollout/TEAM_SYNC.md`

Do not fill these from an online directory. A wrong emergency number on a
government portal is worse than a visible gap.

### 5. Service fees **[DEV]**

Every peso amount quoted on the `services/` and `service-details/` pages is
still Solano's fee schedule.

- [ ] Reconcile against the Roxas City Citizen's Charter:
      https://roxascity.gov.ph/roxas-city/citizens-charter/

```bash
grep -rn "₱" --include="*.html" services service-details
```

### 6. Logo artwork and social card **[DESIGN]**

The filenames were renamed but the artwork still reads "BetterSolano". The
wordmark is outlined vector paths, not editable text, so this needs a
designer rather than a find-and-replace.

- [ ] `assets/images/logo/better-roxas-logo.svg`
- [ ] `assets/images/logo/better-roxas-logo-white.svg`
- [ ] `assets/images/banners/opengraph.png` (1200×630 social preview)
- [ ] Mirror all three into `react-app/public/assets/images/`
- [ ] Check `assets/images/logo/favicon.svg` and `favicon.ico`

Until this is done, every social share of the site shows the old brand.

### 7. Google Analytics **[OWNER]**

The measurement ID is the inert placeholder `G-XXXXXXXXXX`, so no data is
collected and nothing leaks into BetterSolano's property.

- [ ] Either create a Roxas City GA4 property and replace the placeholder, or
      remove the gtag snippet entirely

```bash
grep -rl "G-XXXXXXXXXX" --include="*.html" .
```

### 8. Dead placeholder links **[OWNER]**

Four links point at hosts that do not resolve. Each needs a decision: stand it
up, repoint it, or remove the link.

- [ ] `quiz.betterroxas.org` — homepage CTA and every footer
- [ ] `roxasmayorsoffice-oasys.com` — the homepage appointment CTA
- [ ] `volunteer@betterroxas.org` — no mailbox exists on a `vercel.app` deploy
- [ ] `facebook.com/betterroxas` — the project's own page, footer social icon

The city's own Facebook page, `facebook.com/roxascitycomgroup`, is real and
already wired in.

---

## Content depth

These sections render a "not yet available" notice rather than wrong data.
None of them block launch.

### 9. Ordinances and resolutions **[DEV]**

Both sources are public.

- [ ] Populate `data/ordinances.json` from https://roxascity.gov.ph/sp-ordinances/
- [ ] Populate `data/resolutions.json` from https://roxascity.gov.ph/sp-resolutions/

### 10. News feed **[OWNER]**

The sync workflow already exists and the official page is known.

- [ ] Set the `FB_PAGE_ID` repository variable to the numeric ID for
      `facebook.com/roxascitycomgroup` (see `.github/workflows/facebook-sync.yml`
      and `docs/facebook-sync.md`)

### 11. DPWH infrastructure projects **[LGU]**

- [ ] Request project data from the DPWH Capiz District Engineering Office
- [ ] Populate `data/dpwh-projects.json`, including the `summary` totals

### 12. Department directory and officials' portraits **[LGU]**

The 12 Sangguniang Panlungsod members are listed by name, but the city
publishes only one trunkline and one email address, so every department card
points at those.

- [ ] Request per-office direct lines and email addresses
- [ ] Request official portraits; drop them in `assets/images/officials/` as
      `mayor.jpg`, `vice-mayor.jpg` and `sp1.jpg` … `sp12.jpg` (paths already
      referenced in `data/officials.json`)
- [ ] Request Sangguniang Panlungsod committee assignments

### 13. Schools and health facilities **[LGU]**

- [ ] School list from DepEd Capiz → `services/education.html`
- [ ] Barangay health stations and hospitals from the City Health Office →
      `services/health.html` and `react-app/src/app/services/health/page.tsx`

### 14. Economic and fiscal detail **[LGU]**

City totals for 2024 are in place. The breakdowns are not published in a
citable form.

- [ ] National Tax Allotment versus local revenue split
- [ ] Registered businesses, agricultural land, employment rate
- [ ] Sector composition
- [ ] Source: the city budget office, or the quarterly statements at
      https://roxascity.gov.ph/financial-statement/

### 15. CMCI per-indicator scores **[DEV]**

The 2024 headline rankings are in place (1st most competitive component city
in Western Visayas; 18th most improved of 116 nationwide). The per-pillar
series is only in the DTI portal, which blocks automated access.

- [ ] Transcribe manually from
      https://cmci.dti.gov.ph/lgu-profile.php?lgu=Roxas+(CZ)
- [ ] Fill the `values` arrays in `data/competitive-index.json` and the
      `cmciData` object in `assets/js/statistics-new.js`

### 16. Barangay population update **[DEV]**

The per-barangay breakdown is PSA 2020, the latest release with barangay-level
detail. City totals are 2024.

- [ ] Refresh when the PSA publishes a 2024 barangay-level breakdown

---

## Localization

### 17. Replace Ilocano with Hiligaynon **[TRANSLATOR]**

The third UI language is Ilocano, which is regional to Nueva Vizcaya.
Hiligaynon is the language of Capiz. This is roughly 5,300 strings in
`assets/js/translations.js` and 342 in
`react-app/src/contexts/LanguageContext.tsx`.

- [ ] Commission a Hiligaynon translation of the `ilo` block, or drop the
      third language until one exists
- [ ] Translate the new history and hotline copy, which is currently untagged
      for i18n and so stays English in all three languages
- [ ] Review the existing Filipino strings — they show machine-translation
      artefacts

Keep all language blocks at an identical key count. Verify with:

```bash
node -e "
const s = require('fs').readFileSync('assets/js/translations.js', 'utf8');
const b = s.split(/\n  ([a-z]{2,3}): \{\n/);
for (let i = 1; i < b.length; i += 2)
  console.log(b[i], (b[i + 1].match(/^\s*'[^']+':/gm) || []).length);"
```

All three should report the same number (5,344 at the time of writing).

---

## Housekeeping

Not blocking, and none of it caused by the rebrand.

### 18. Next.js hybrid warnings **[DEV]**

`services/health` is served by the Next.js static export merged into the
static site. It emits RSC prefetch 404s (`*.txt?_rsc=`) for routes the export
does not own, and a React hydration warning from the HTML minifier.

- [ ] Disable Next prefetching on cross-boundary links, or exclude the merged
      page from HTML minification in `build.sh`

### 19. Decide the fate of the React migration **[OWNER]**

The React app covers 2 of roughly 50 pages but adds a second lockfile, a
second i18n catalogue and a Next build step to every deploy.

- [ ] Either finish the migration or drop `react-app/` and simplify `build.sh`

### 20. Formatting baseline **[DEV]**

The root `README.md` and most HTML files were never Prettier-clean, predating
the rebrand.

- [ ] Run `npm run format` once and commit the result, or add the offenders to
      `.prettierignore`

### 21. Lighthouse CI workflow **[DEV]**

`.github/workflows/lighthouse.yml` audits a locally served `dist/`, so it needs
no live URL. Two things are worth changing:

- [ ] It runs `npm run build`, which bumps the patch version on every run;
      switch it to `bash build.sh --no-bump`
- [ ] Its `urls` list covers `/`, `/services/`, `/contact/` and `/government/`.
      Consider adding `/statistics/` and `/budget/`, the two heaviest pages
