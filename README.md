# Trinarix Website

Marketing site for **Trinarix** — an AI + cybersecurity deep-tech initiative.

Built with React, Vite, and React Router. No CSS framework — a small hand-rolled
design system (tokens in `src/styles/global.css`).

## Structure

```
src/
  App.jsx              Route definitions
  main.jsx             Entry point, router + global styles
  components/          Navbar, Footer, Icon sprite, scroll-reveal, section headers
  pages/                Home, About, Solutions, SolutionDetail, Research,
                         Resources, Contact, NotFound
  data/                 solutions.js, research.js, resources.js — edit these
                         to add/update content without touching page markup
  styles/
    global.css          Design tokens, nav, footer, buttons, shared cards
    pages.css           Page-specific layout (hero, timeline, detail grid, etc.)
```

Routes: `/`, `/about`, `/solutions`, `/solutions/:slug`, `/research`,
`/resources`, `/contact`, plus a catch-all 404.

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

`data/research.js` and `data/resources.js` are intentionally empty until
there's real material to publish — the pages are built to show a clean
"coming soon" state rather than placeholder content pretending to be real.
Update those files (and `data/solutions.js`) as the actual product and
research progress.

## Next steps

- Wire the contact form to a real backend/email service (it currently opens
  a `mailto:` link).
- Populate `data/research.js` and `data/resources.js` as real work is published.
- Add a CI deploy step once a hosting target is chosen.
