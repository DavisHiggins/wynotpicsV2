# wy_not_pics, update set #1

Drop these files into the existing v3 project, replacing the matching paths. Everything below is a 1:1 path replacement. No new files were added that are not listed here.

## What changed

1. **Hero photo fix**
   `src/pages/Home.jsx` + `src/pages/Home.css` now use a real `<img>` element with `object-fit: cover` and `object-position: 72% 90%`, so Wyatt and the rocks always show on widescreen displays instead of just the empty sky.

2. **Hero layout**
   - Title `Wyatt Bullock Photography` font size reduced significantly.
   - `@wy_not_pics` handle now sits directly under the title (not at the bottom).
   - Scroll button is now absolutely centered at the bottom of the hero.

3. **Portfolio dropdown removed**
   `src/components/Navbar.jsx` + `src/components/Navbar.css`: Portfolio is now a single link. Users pick Sports, Portraits, or Lifestyle from the sticky subtabs on the gallery page itself.

4. **Cursor fixed**
   `src/components/Cursor.jsx` + `src/components/Cursor.css` rewritten:
   * `cursor: none !important` applied to every element via universal selector.
   * Initial off-screen position so the dot and ring never flash at origin.
   * Single delegated `mouseover` listener instead of per-element listeners + MutationObserver.
   * Dark cursor on the light site, auto-flips to light over the dark hero section.
   * No `mix-blend-mode: difference` (which was rendering the dot invisible in some places).

5. **Em-dashes removed**
   Every long dash replaced across copy and code comments. Verified zero occurrences in `src/`, `index.html`, and `README.md`.

6. **Background gradient**
   `src/styles/global.css`: refined three-layer radial gradient (sky blue, warm cream, soft white) sampled from the brand palette. Still minimal and aesthetic.

## File-by-file path replacements

| Replace at this path                          | Source in this zip                              |
| --------------------------------------------- | ----------------------------------------------- |
| `src/components/Cursor.css`                   | `src/components/Cursor.css`                     |
| `src/components/Cursor.jsx`                   | `src/components/Cursor.jsx`                     |
| `src/components/Navbar.css`                   | `src/components/Navbar.css`                     |
| `src/components/Navbar.jsx`                   | `src/components/Navbar.jsx`                     |
| `src/components/Footer.jsx`                   | `src/components/Footer.jsx`                     |
| `src/pages/Home.css`                          | `src/pages/Home.css`                            |
| `src/pages/Home.jsx`                          | `src/pages/Home.jsx`                            |
| `src/pages/Gallery.jsx`                       | `src/pages/Gallery.jsx`                         |
| `src/pages/Gallery.css`                       | `src/pages/Gallery.css`                         |
| `src/pages/About.jsx`                         | `src/pages/About.jsx`                           |
| `src/pages/Pricing.jsx`                       | `src/pages/Pricing.jsx`                         |
| `src/styles/global.css`                       | `src/styles/global.css`                         |
| `src/data/pricingData.js`                     | `src/data/pricingData.js`                       |
| `index.html`                                  | `index.html`                                    |

After dropping these in, run `npm run build` and redeploy.

## What I could NOT do this turn

The "wyatt logo" attachment you mentioned was actually a screenshot of the current hero. I cannot drop a new logo image into `/public/logo.png` without the actual logo file. Please upload it and I will:

* Replace the placeholder W mark in `/public/logo.png` and `/public/logo-512.png`.
* Sample the exact brand colors from it and retune the gradient to match.
