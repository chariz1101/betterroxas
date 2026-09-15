# BetterRoxas

A civic-tech initiative providing transparent access to city services, programs, and public funds of LGU Roxas City, Capiz, Philippines.

![Version](https://img.shields.io/badge/version-1.1.15-green)
![License](https://img.shields.io/badge/license-MIT%20%7C%20CC%20BY%204.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

## Version Notice

A **React + TypeScript** version of BetterRoxas is now available for contributors who prefer modern tooling and component-based architecture.

| Version            | Branch             | Status             | Documentation                |
| ------------------ | ------------------ | ------------------ | ---------------------------- |
| Static HTML        | `main`             | Stable             | This README                  |
| React + TypeScript | `react-typescript` | Active Development | [MIGRATION.md](MIGRATION.md) |

Both versions are actively maintained. New contributors may choose either version based on their preference. For migration guidance, see [MIGRATION.md](MIGRATION.md).

## Open Source for LGUs

This repository is open source under the **MIT License** and **CC BY 4.0** and is freely available for use, modification, redistribution, and publication by any individual or organization that wishes to implement it in their respective local government unit (LGU) across the Philippines.

We encourage adoption by other LGUs in support of:

- **Transparency** - Making government information accessible to citizens
- **Accessibility** - Ensuring services are available to all, including persons with disabilities
- **Modernization** - Bringing local government services to digital platforms
- **Public Service** - Improving the delivery of government services to the community

To adapt this project for your LGU, fork the repository and customize the content, styling, and data sources to match your city's requirements.

## About

BetterRoxas is a volunteer-driven, open-source project that empowers the people of Roxas City with easy access to local government information. The platform aggregates public data from official government portals and presents it in a user-friendly, accessible format.

**Cost to the People of Roxas City = ₱0**

## Live Demo

Visit the live website: [https://betterroxas.vercel.app](https://betterroxas.vercel.app)

## Rebrand Status

This site was rebranded from BetterSolano.org (Solano, Nueva Vizcaya) to Roxas
City, Capiz. The branding, place names, city terminology and verified
top-level facts (population, land area, barangay count, income class) are all
updated, and Solano's datasets have been cleared rather than relabelled.

**Not yet filled in — see `.env.example` for the full list and grep commands:**

- **Emergency hotlines and office phone numbers are still Solano's**, including
  the `(078)` Nueva Vizcaya landlines. These must be replaced before the site
  is shared publicly.
- Service fees quoted on the `services/` pages are Solano's schedule.
- Ordinances, resolutions, DPWH projects, news, per-barangay populations,
  historical census series and CMCI scores are empty pending Roxas City data.
- Google Analytics ID, Facebook page, quiz site, appointment system and
  contact email are placeholders.
- The logo artwork and `opengraph.png` social card still read "BetterSolano" —
  the wordmark is outlined vector paths, so it needs a designer, not a text
  edit.
- The third UI language is Ilocano, which is regional to Nueva Vizcaya.
  Hiligaynon would be the appropriate language for Capiz.

## Technology Stack

| Category            | Technologies                                                           |
| ------------------- | ---------------------------------------------------------------------- |
| **Frontend**        | HTML5, CSS3, JavaScript (ES6+)                                         |
| **Styling**         | Custom CSS, CSS Variables, Flexbox, CSS Grid, Responsive Design        |
| **Icons**           | Bootstrap Icons (CDN)                                                  |
| **Fonts**           | Google Fonts (Inter)                                                   |
| **Maps**            | Leaflet.js, OpenStreetMap                                              |
| **Charts**          | Chart.js (Canvas-based)                                                |
| **Animations**      | Lottie (dotlottie-player web component)                                |
| **Data Format**     | JSON                                                                   |
| **APIs**            | Open-Meteo (Weather), ExchangeRate API (Currency)                      |
| **Build Tools**     | Node.js, npm, Bash, Babel (@babel/preset-env)                          |
| **Minification**    | html-minifier-terser, clean-css-cli, terser                            |
| **Code Formatting** | Prettier (auto-format on commit via git pre-commit hook)               |
| **Version Control** | Git, GitHub                                                            |
| **Server**          | Apache (.htaccess), mod_rewrite, mod_deflate                           |
| **Hosting**         | Vercel (Production), cPanel (alternative), Python HTTP Server (Dev)    |
| **PWA**             | Service Worker (versioned caching, install prompt, seamless updates), Web App Manifest, offline fallback |
| **SEO**             | Open Graph, Twitter Cards, XML Sitemap, robots.txt                     |
| **Security**        | HTTPS, CSP Headers, HSTS, X-Frame-Options                              |
| **Analytics**       | Google Analytics (gtag.js)                                             |
| **Accessibility**   | WCAG 2.1, ARIA, Semantic HTML                                          |
| **Performance**     | GZIP Compression, Browser Caching, Asset Minification                  |

## Key Features

| Feature                          | Description                                                                                                                                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **City Services Directory** | Comprehensive guide to all LGU services with requirements, fees, and processing times                                                                                                                             |
| **Government Officials**         | Directory of elected officials and department heads with contact information                                                                                                                                      |
| **Budget Transparency**          | Financial reports, income/expenditure breakdowns, and infrastructure projects                                                                                                                                     |
| **Legislative Documents**        | Searchable database of ordinances and resolutions from Sangguniang Panlungsod                                                                                                                                          |
| **City Statistics**         | Demographics, economic data, and competitive index rankings                                                                                                                                                       |
| **Appointment Services**         | Online appointment scheduling integration with the Mayor's Office (OASYS), featuring branded Lottie animation                                                                                                     |
| **Roxas City Quiz**                  | Interactive quiz about Roxas City history and culture, linked from homepage CTA and footer across all pages                                                                                                           |
| **Real-time Information**        | Live weather updates, currency exchange rates, and Philippine time                                                                                                                                                |
| **Emergency Hotline Marquee**    | Clickable scrolling marquee for emergency contacts on tablet and mobile viewports, with pause-on-hover/focus accessibility                                                                                        |
| **Progressive Web App**          | Installable PWA with "Install App" prompt, seamless auto-updates via skipWaiting (no manual refresh), versioned service worker caching (static + runtime), offline fallback page with emergency hotlines, push notification foundation |
| **Auto Version Management**      | Dynamic version display from `version.json`, auto-bumped on every git commit via pre-commit hook, synced across all 51+ HTML files, `package.json`, and React app                                                 |
| **Multi-language Support**       | Full i18n coverage in English, Filipino, and Ilocano (5,546 keys per language with perfect parity)                                                                                                                |
| **Clean URLs**                   | SEO-friendly URLs without `.html` extensions, powered by Apache mod_rewrite                                                                                                                                       |
| **Brief History of Roxas City**      | Interactive timeline (1760–1957) with fully translated cards in all three languages                                                                                                                               |
| **Mobile Navigation**            | Responsive menu with GPU-accelerated open/close transitions, body scroll lock, animation guard against rapid toggles, debounced resize handling, touch-safe hover scoping, click-outside-to-close, and focus trap |
| **Accessibility**                | WCAG 2.1 compliant with skip links, ARIA labels, keyboard navigation, and semantic HTML                                                                                                                           |
| **SEO Optimized**                | Meta tags, Open Graph, Twitter Cards, structured data, and XML sitemap                                                                                                                                            |
| **Performance**                  | 90%+ size reduction through minification, GZIP compression, Babel transpilation, and browser caching                                                                                                              |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/chariz1101/betterroxas.git

# Navigate to project directory
cd betterroxas

# Install dependencies
npm install

# Start development server (with clean URL support)
py serve.py --port 8000 --directory .

# Open in browser
# http://localhost:8000
```

## Installation

### Prerequisites

| Requirement | Version | Purpose                            |
| ----------- | ------- | ---------------------------------- |
| Node.js     | v16+    | Build tools and package management |
| npm         | v8+     | Dependency management              |
| Python 3    | v3.x    | Local development server           |
| Git         | Latest  | Version control                    |

### Setup Steps

1. **Clone the repository**

```bash
git clone https://github.com/chariz1101/betterroxas.git
cd betterroxas
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in browser**
   - Development: http://localhost:8000
   - Production preview: http://localhost:8080 (after build)

## Usage

### Development Commands

| Command                      | Description                                                           |
| ---------------------------- | --------------------------------------------------------------------- |
| `npm run dev`                | Start local development server (port 8000)                            |
| `npm run build`              | Build minified production files to `dist/` (auto-bumps patch version) |
| `npm run build -- --no-bump` | Build without incrementing the version number                         |
| `npm run build:minor`        | Bump minor version and build                                          |
| `npm run build:major`        | Bump major version and build                                          |
| `npm run serve:dist`         | Serve production build (port 8080)                                    |
| `npm run version:check`      | Display current version                                               |
| `npm run version:patch`      | Bump patch version only                                               |
| `npm run version:minor`      | Bump minor version only                                               |
| `npm run version:major`      | Bump major version only                                               |
| `npm run format`             | Format all files with Prettier                                        |
| `npm run format:check`       | Check formatting without writing changes                              |

### Production Deployment

1. **Build production files**

```bash
npm run build
```

2. **Output location**
   - Minified files are generated in the `dist/` folder
   - Original size: ~17MB → Minified: ~3.9MB

3. **Deploy to server**
   - Upload contents of `dist/` to your web server's `public_html` directory
   - Ensure `.htaccess` is included for clean URLs, CSP headers, and security

### Deploying to Vercel

The repository ships a `vercel.json` so the site deploys on a free Vercel
account with no extra setup and no custom domain:

| Setting            | Value                    | Source                        |
| ------------------ | ------------------------ | ----------------------------- |
| Build command      | `bash build.sh --no-bump`| `vercel.json`                 |
| Output directory   | `dist`                   | `vercel.json`                 |
| Clean URLs         | enabled                  | `vercel.json` (`cleanUrls`)   |

To deploy: import the repository at [vercel.com/new](https://vercel.com/new)
and accept the detected settings. Vercel reads `vercel.json`, so no dashboard
configuration is needed. The site is then served from the project's
`*.vercel.app` subdomain.

`--no-bump` matters: without it every deploy would bump the patch version and
write back to `version.json`, which cannot be committed from a build container.

`vercel.json` also carries the security headers and cache policy that
`.htaccess` provides on Apache — the same CSP, `X-Frame-Options`,
`Referrer-Policy`, `Permissions-Policy` and HSTS, plus an immutable cache for
`/_next/static/*` and a no-store rule for `sw.js`. `.htaccess` is still used
for cPanel deployments; Vercel ignores it.

The canonical URL baked into the pages is `https://betterroxas.vercel.app`.
If the project deploys under a different Vercel subdomain, update `SITE_URL`
(see `.env.example`) and re-run the branding replacement for the canonical,
`og:url` and `sitemap.xml` entries.

### File Permissions (cPanel)

| Type        | Permission | Numeric |
| ----------- | ---------- | ------- |
| Files       | rw-r--r--  | 644     |
| Directories | rwxr-xr-x  | 755     |

## Multi-language Support (i18n)

The site supports three languages with full translation coverage:

| Language | Code  | Status                |
| -------- | ----- | --------------------- |
| English  | `en`  | Complete (5,546 keys) |
| Filipino | `fil` | Complete (5,546 keys) |
| Ilocano  | `ilo` | Complete (5,546 keys) |

The static site uses a `TranslationEngine` in `assets/js/translations.js` with `data-i18n` attributes on HTML elements. The React version uses a `LanguageContext` provider with a `t()` function. Both systems support fallback to English for any missing keys.

## Three-Version Architecture

The project maintains three synchronized versions:

| Version                | Location        | Purpose                              |
| ---------------------- | --------------- | ------------------------------------ |
| **Static Legacy**      | Root HTML files | Source of truth for all 52 pages     |
| **React + TypeScript** | `react-app/`    | Modern component-based homepage      |
| **Production Dist**    | `dist/`         | Minified build for cPanel deployment |

All CSS, images, animations, and translations are kept in sync across all three versions. The build script (`build.sh`) generates the dist from the static legacy source.

## Project Structure

```
betterroxas/
├── assets/
│   ├── css/              # Stylesheets (9 files)
│   ├── js/               # JavaScript modules (18 files)
│   ├── images/           # Images, icons, banners, partner logos
│   └── animation/        # Lottie JSON animation files
├── data/                 # JSON data files
│   ├── officials.json    # Government officials data
│   ├── services.json     # City services data
│   ├── news.json         # News and announcements
│   ├── ordinances.json   # Legislative ordinances
│   └── resolutions.json  # Legislative resolutions
├── react-app/            # React + TypeScript version
│   ├── src/
│   │   ├── app/          # Next.js app router (layout, page)
│   │   ├── components/   # React components (Header, Footer, HotlineBar, InfoBar, SearchAutocomplete, PWAManager)
│   │   └── contexts/     # LanguageContext (i18n provider)
│   └── public/           # Static assets, manifest, version.json (synced with root)
├── services/             # Service category pages (11 pages)
├── service-details/      # Individual service pages (22 pages)
├── government/           # Government directory pages
├── legislative/          # Legislative framework pages
├── budget/               # Budget transparency page
├── statistics/           # City statistics page
├── news/                 # News and announcements page
├── contact/              # Contact information page
├── faq/                  # Frequently asked questions
├── sitemap/              # HTML sitemap page
├── scripts/              # Build, version, and translation scripts
│   └── bump-version.js   # Cross-platform Node.js version bump script
├── dist/                 # Production build output (gitignored)
├── index.html            # Homepage
├── sw.js                 # Service worker (versioned caching, offline support)
├── manifest.webmanifest  # PWA web app manifest
├── offline.html          # Offline fallback page with emergency hotlines
├── serve.py              # Local dev server with clean URL rewriting
├── .htaccess             # Apache configuration (CSP, rewrites, caching)
├── .prettierrc           # Prettier code formatting configuration
├── .prettierignore       # Prettier ignore patterns
├── version.json          # Version tracking (auto-bumped on commit)
├── build.sh              # Build automation script
├── babel.config.json     # Babel transpilation configuration
├── package.json          # Node.js configuration
└── README.md             # Project documentation
```

## Recent Changes

### v1.1.15 — Header, PWA, Version Automation & Code Quality

#### PWA Install Prompt & Seamless Updates

- Added "Install App" prompt banner using the `beforeinstallprompt` API with Install/Dismiss buttons, respecting standalone mode and session dismissal
- Replaced manual-refresh update flow with seamless `skipWaiting` + `controllerchange` auto-reload pattern
- Service worker now accepts `SKIP_WAITING` message from clients to activate waiting worker on demand
- Install banner goes full-width (no border-radius, no margins) on mobile viewports (<=575px) with slide-up animation
- Created `PWAManager.tsx` React component handling both install prompt and SW update lifecycle
- Added `.pwa-install-banner` CSS styles to both static and React versions

#### Footer Mobile Alignment

- Added `text-align: center` for `.footer-tagline` in the <=575px mobile breakpoint, overriding the tablet `text-align: left` rule
- Synced footer CSS fix to React version

#### CI/CD Cleanup

- Removed CodeQL Advanced workflow (`.github/workflows/codeql.yml`) as it is no longer required

#### Responsive Header & Hotline Marquee

- Standardized header vertical spacing (padding, min-height, logo size) across desktop (12px/48px), tablet (10px/40px), mobile (8px/36px), and small mobile (6px/32px) breakpoints
- Raised tablet breakpoint from 991px to 1024px to properly capture iPad Pro portrait (1024px) and iPad Air landscape
- Converted emergency hotline bar into a clickable scrolling marquee on all tablet and mobile viewports (≤1024px) with pause-on-hover/focus for accessibility
- Centered hamburger menu icon between logo and language toggle on tablet viewports using flexbox ordering (logo → hamburger → lang toggle)
- Tablet footer: left-aligned BetterRoxas logo, tagline, and social icons to match the visual hierarchy of the brand column

#### Progressive Web App (PWA)

- Rewrote `sw.js` with dual-cache architecture: `STATIC_CACHE` (precached app shell) and `RUNTIME_CACHE` (dynamic content, 80-item FIFO, 7-day TTL)
- Navigation uses network-first with offline fallback; static assets use stale-while-revalidate; data/API uses network-first with cache fallback
- Added push notification and background sync foundations
- Enhanced SW registration with 30-minute update polling and non-intrusive refresh banner on new version activation
- Upgraded `manifest.webmanifest` with maskable icons, app shortcuts (Services, Contact, Government, Transparency), and `orientation: any`
- Added iOS PWA meta tags (`apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`, `apple-mobile-web-app-title`)
- Fixed theme-color from old green (#1a5f2a) to brand blue (#0032a0) across all files
- Updated offline fallback page colors to match brand

#### Automatic Version Management

- Created cross-platform `scripts/bump-version.js` (Node.js) replacing the bash-only `version.sh` for Windows compatibility
- Version bump updates `version.json`, `package.json`, all 51+ HTML files, and syncs to `react-app/public/version.json`
- Git pre-commit hook auto-bumps patch version on every commit (skips version-only commits to prevent loops)
- Footer version displayed dynamically at runtime via `version.js` fetching from `version.json`

#### React App Sync

- Created `HotlineBar.tsx` component with tablet/mobile marquee matching static site behavior
- Created `InfoBar.tsx` component with live exchange rates, weather, and Philippine time
- Created `SearchAutocomplete.tsx` component with service search dropdown
- Created `PWAManager.tsx` component handling install prompt and seamless SW updates
- Updated `Footer.tsx` to dynamically fetch version from `/version.json` instead of hardcoded value
- Updated `Header.tsx` breakpoint from 991px to 1024px, fixed ARIA attribute string values
- Updated `layout.tsx` with corrected theme-color, manifest link, Apple PWA meta tags, and PWAManager integration
- Synced `manifest.webmanifest`, `version.json`, `sw.js`, and all CSS to react-app

#### Code Quality & Tooling

- Installed Prettier as dev dependency with project-wide configuration (`.prettierrc`, `.prettierignore`)
- Formatted entire codebase (120+ files) for consistent code style
- Git pre-commit hook auto-formats staged files with Prettier before each commit
- Fixed `privacy/index.html` malformed HTML (duplicate `</body></html>` closing tags)
- Resolved all npm vulnerabilities: upgraded `@lhci/cli` to ^0.15.1, added `tmp` override to 0.2.5 (0 vulnerabilities)
- Added `npm run format` and `npm run format:check` scripts

### Previous Changes

### Content & Features

- Added Roxas City Quiz CTA section on homepage with branded Lottie animation (brand blue `#0032A0`)
- Added Roxas City Quiz link to footer Quick Links across all 51 HTML pages and React Footer
- Added Brief History of Roxas City interactive timeline section on homepage (1760–1957)
- Added quiz entry to HTML sitemap page
- Added Abakada education tools CTA on services/education page with local SVG logo

### Internationalization (i18n)

- Upgraded translation engine to 5,546 keys per language with perfect en/fil/ilo parity
- Fixed Brief History timeline cards — full paragraph translations now applied via `data-i18n` on `<p>` elements (previously only proper nouns inside `<strong>` tags were translated, leaving surrounding English text intact)
- Corrected Filipino translations: proper religious title "Padre" (not "Ama"), fully translated historical paragraphs (no half-English)
- Corrected Ilocano translations: proper Ilocano vocabulary ("Ababa a Pakasaritaan" not Filipino "Maikling Kasaysayan", "Dimteng" not "Dumating", "Ili" not "Lungsod"), fully translated paragraphs
- Added 54 translation keys for Roxas City Quiz footer link across all page contexts

### Footer & Copyright

- Standardized copyright across all 51 HTML files and React Footer: three styled spans (`footer-copyright-text`, `footer-copyright-license`, `footer-copyright-disclaimer`)
- Updated copyright year to 2026, name to "BetterRoxas"
- Footer copyright uses `flex-wrap: wrap; gap: 6px` layout with version badge right-aligned via `margin-left: auto`
- Removed trailing period after "BetterRoxas" from all pages and all 3 translation languages

### Clean URLs

- Removed `.html` extensions from 621 navigation links across 48 HTML files
- Apache `.htaccess` rewrite rules handle clean URL resolution on cPanel

### Build & Deployment

- Updated `build.sh` rsync excludes to filter out dev artifacts (`.backup`, `.md`, `package*.json`, `scripts/`, `docs/`, etc.)
- Production dist: 52 HTML pages, 106 total files, 3.9MB, zero dev artifacts
- Updated CSP headers: added `worker-src 'self' blob:`, `blob:` to `connect-src`, CDN domains to `connect-src` for dotlottie-player and Bootstrap Icons compatibility

### Cross-Version Sync

- All CSS files synced between legacy and React: `footer.css`, `style.css`, `responsive.css`, `accessibility.css`
- All image and animation assets synced between legacy and React
- React LanguageContext updated with matching translation keys for homepage sections

## Contributing

We welcome contributions from everyone! Whether you're a developer, designer, data researcher, content writer, translator, or a concerned citizen of Roxas City, your participation helps shape this project for all.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make** your changes
4. **Test** thoroughly on multiple browsers
5. **Commit** with a descriptive message
   ```bash
   git commit -m "Add: description of your changes"
   ```
6. **Push** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open** a Pull Request with detailed description

### Contribution Areas

| Area                   | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| **Bug Fixes**          | Report issues or submit fixes for existing bugs               |
| **Features**           | Propose or implement new functionality                        |
| **Content**            | Update service information, add missing city data        |
| **Translations**       | Help translate content to Filipino or Ilocano                 |
| **Design**             | Improve UI/UX, accessibility, and visual consistency          |
| **Data**               | Verify and update city statistics and records            |
| **Documentation**      | Enhance README, code comments, and guides                     |
| **API Integration**    | Propose or implement API connections for real-time data feeds |
| **Data Visualization** | Enhance charts, graphs, and interactive presentations         |

### Code Style Guidelines

| Guideline         | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| **Formatting**    | Prettier auto-formats on commit; run `npm run format` to format manually |
| **HTML**          | Use semantic HTML5 elements; validate before committing                  |
| **CSS**           | Follow BEM naming conventions; use CSS custom properties                 |
| **JavaScript**    | Keep vanilla JS unless proposing framework for data visualization        |
| **Naming**        | Use meaningful, descriptive variable and function names                  |
| **Comments**      | Add comments for complex logic and non-obvious implementations           |
| **Accessibility** | Ensure WCAG 2.1 compliance (alt text, ARIA, keyboard navigation)         |
| **Performance**   | Optimize images; minimize DOM manipulation                               |
| **Testing**       | Test on Chrome, Firefox, Safari, Edge; test mobile responsiveness        |
| **Validation**    | Validate HTML/CSS before pull requests                                   |

## Data Sources

All public information is sourced from official government portals:

| Source                             | URL                                                                       | Data Type                 |
| ---------------------------------- | ------------------------------------------------------------------------- | ------------------------- |
| LGU Roxas City Official Website        | [roxascity.gov.ph](https://roxascity.gov.ph/)                                   | Services, Officials       |
| Sangguniang Panlungsod ng Roxas City        | [roxascity.gov.ph](https://roxascity.gov.ph/) | Ordinances, Resolutions   |
| Bureau of Local Government Finance | [blgf.gov.ph](https://blgf.gov.ph/)                                       | Budget, Financial Reports |
| Philippine Statistics Authority    | [psa.gov.ph](https://psa.gov.ph/)                                         | Demographics, Census      |
| DTI CMCI Portal                    | [cmci.dti.gov.ph](https://cmci.dti.gov.ph/)                               | Competitive Index         |

## License

This project is dual-licensed:

| License     | Applies To  | Details                                |
| ----------- | ----------- | -------------------------------------- |
| MIT License | Source Code | Free to use, modify, and distribute    |
| CC BY 4.0   | Content     | Attribution required for content reuse |

See [LICENSE](LICENSE) for full details.

## Contact

| Channel  | Link                                                                      |
| -------- | ------------------------------------------------------------------------- |
| Website  | [betterroxas.vercel.app](https://betterroxas.vercel.app)                              |
| Email    | volunteer@betterroxas.org                                                |
| Facebook | [@betterroxas.org](https://www.facebook.com/betterroxas.vercel.app)            |
| LinkedIn | [BetterRoxas](https://www.linkedin.com/company/betterroxas/)            |
| Discord  | [Join Community](https://discord.com/invite/qeSu7RJkjQ)                   |
| GitHub   | [chariz1101/betterroxas](https://github.com/chariz1101/betterroxas) |

## Acknowledgments

- [BetterGov.ph](https://bettergov.ph) for the civic-tech initiative in the Philippines
- [Abakada.org](https://abakada.org) for supporting civic technology efforts
- LGU Roxas City for public data availability and transparency
- All volunteers and contributors who dedicate their time
- Open-source community for the tools and libraries used
- Citizens of Roxas City for their feedback and support

---

Made for the people of Roxas City, Capiz

## Developer

[Ramon Logan Jr.](https://ramonloganjr.com/) is a UAE-based full-stack developer and IT professional specializing in web development, design, cloud services, and cybersecurity. He is the developer behind BetterRoxas, [Abakada.org](https://abakada.org), and the founder of the small cloud-based solutions initiative, [HelloPinas.com](https://hellopinas.com). Ramon actively contributes to civic-tech efforts like [BetterGov.ph](https://bettergov.ph) and is an individual participant in the [OpenJS Foundation](https://openjsf.org/).
