# wy_not_pics — v2 (Editorial Redesign)

A complete redesign of **Wyatt Bullock's** photography portfolio, inspired by [fishluo.com](https://www.fishluo.com).

Paper-white background, asymmetric editorial collage layout, restrained typography, quiet hover states. No dark mode, no clutter, no template feel.

## Stack

- **React 18** + **Vite 5**
- **React Router v6** (`/`, `/gallery/{sports,portraits,lifestyle}`, `/about`, `/pricing`, `/contact`)
- **Framer Motion** for entrance and page transitions
- Pure CSS, custom properties, no UI library
- Google Fonts: **Archivo** (sans), **Cormorant Garamond** (serif accents)

## Design system

| Token | Value |
|---|---|
| Paper | `#ffffff` |
| Ink | `#0a0a0a` |
| Ink Mute | `#6a6a6a` |
| Accent | `#8b6a3f` (warm sand) |
| Sans | Archivo |
| Serif | Cormorant Garamond (italic accents only) |

All tokens live in `src/styles/global.css` — change one variable to retheme.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `/dist`.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel → **Add New Project** → import the repo.
3. Framework: **Vite** (auto-detected). Build command: `npm run build`. Output: `dist`.
4. Deploy. The `vercel.json` rewrite handles SPA routing.

Custom domain: Project Settings → Domains.

## Replacing the placeholder photos

The site ships with neutral grayscale placeholders so the layout renders out of the box. The image **filenames are identical** to the previous project, so swapping in real photos is drop-in.

1. Drop the real JPEGs/PNGs into `/public/images/` using these exact filenames:
   - `wyatt-home-camera.png` *(homepage hero)*
   - `sports-football-motion.jpg`, `sports-football-catch.jpg`, `sports-football-99.jpg`, `sports-coach-pointing.jpg`, `sports-cleats-reflection.jpg`, `sports-lacrosse-celebration.jpg`, `sports-sprinter-motion.jpg`
   - `lifestyle-forest-seated.jpg`, `lifestyle-forest-stance.jpg`, `portrait-editorial-grunge.jpg`, `event-couple-watch.jpg`, `event-prom-couple.jpg`, `event-grad-lake.jpg`, `event-grad-meredith.jpg`
   - `wyatt-hero-palm.jpg`, `lifestyle-skater-street.jpg`, `lifestyle-sky-diptych.jpg`, `lifestyle-flora-diptych.jpg`
2. Optimise to ~2400px on the long edge, JPEG quality 82–88 (use [Squoosh](https://squoosh.app) or [ImageOptim](https://imageoptim.com)).
3. To add more photos or rename anything, edit `src/data/galleryData.js`.

## Editing content

| Thing | File |
|---|---|
| Gallery photos & categories | `src/data/galleryData.js` |
| Pricing packages | `src/data/pricingData.js` |
| About copy | `src/pages/About.jsx` |
| Contact email / Instagram | `src/pages/Contact.jsx` + `src/components/Footer.jsx` |
| FAQs | `src/pages/Pricing.jsx` |
| Homepage tiles (which images / category routing) | `src/pages/Home.jsx` (`tiles` array) |

## Pages

- **Home** — Brand intro stack (logo, name, "Photography", meta) → 6-tile asymmetric editorial collage → approach strip → closing CTA
- **Portfolio** (`/gallery`) — Sticky subtabs for Sports, Portraits, Lifestyle. Each category page has its own editorial asymmetric grid + lightbox.
- **About** — Bio with portrait, credits, and a 3-image selected-frames strip
- **Pricing** — 4 minimal pricing cards (Portrait / Sports / Lifestyle / Custom) + 4-item FAQ
- **Contact** — Direct info sidebar + clean inquiry form. Front-end only; wire to Formspree / Resend / Netlify Forms in `Contact.jsx`.

## What changed from v1

- Completely new visual identity: paper-white background, Archivo sans + Cormorant italic accents, no dark navy/cinematic look at all
- Homepage is now an asymmetric editorial collage instead of a full-screen hero (inspired by fishluo.com)
- Top-of-page navigation is split (left + center brand + right), with hover dropdowns on Portfolio
- Gallery categories collapsed from 5+ down to the required three (Sports, Portraits, Lifestyle); travel / nature / events all reassigned
- Contact and Pricing pages are text-first — no decorative imagery
- Removed: custom cursor, grain texture, marquee, large dark hero, gold-on-navy palette
- Added: editorial subtab navigation with hover dropdowns, asymmetric masonry on category pages, paper-white lightbox
