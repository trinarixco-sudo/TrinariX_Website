# Trinarix Website

Marketing site for **Trinarix** — a student-led games, experiences and
product-innovation startup connected with RV University's Centre for
Innovation & Entrepreneurship (CIEn).

Built with React, Vite, and React Router. No CSS framework — a small
hand-rolled design system (tokens in `src/styles/global.css`).

## Structure

```
src/
  App.jsx              Route definitions
  main.jsx             Entry point, router + global styles
  components/          Navbar, Footer, Icon sprite, scroll-reveal, section headers
  pages/                Home, About, Products, Team, Achievements, Contact, NotFound
  data/                 products.js, team.js, achievements.js — edit these
                         to add/update content without touching page markup
  styles/
    global.css          Design tokens, nav, footer, buttons, shared cards
    pages.css           Page-specific layout (hero, timeline, team, achievements, etc.)
```

Routes: `/`, `/about`, `/products`, `/team`, `/achievements`, `/contact`,
plus a catch-all 404.

## Running locally

```bash
npm install
npm run dev
```

Then visit the printed localhost URL.

## Building for production

```bash
npm run build
```

Output goes to `dist/`. Any static host (Vercel, Netlify, GitHub Pages, etc.)
can serve it — just make sure the host redirects unknown paths to
`index.html` so client-side routing works.

## Content honesty

`data/achievements.js` only lists items that are independently confirmed
(RV University/CIEn affiliation, IEEE APSCON 2026 / MYOSA 4.0 selection, and
specific founder certifications/results). A few other achievements mentioned
internally — an ELEVATE result, an exact FKCCI result, a Kerala event, an
IIT Kharagpur connection — are deliberately left off until there's a
certificate or public source to cite. Add them to `data/achievements.js`
once verified.

`data/products.js` lists the ten experience categories as concepts — each
card carries a "Concept" tag since none are shipped products yet.

## Next steps

- Wire the contact form to a real backend/email service (it currently opens
  a `mailto:` link).
- Add the pending achievements once certificates/sources are available.
- Add real photos for the team page (currently initials avatars).
- Add a CI deploy step once a hosting target is chosen.
