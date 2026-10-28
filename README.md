# Portfolio — Wilbert Kruskie

Personal site. Next.js 15 (App Router), TypeScript, no CSS framework.

Live at: https://portfolio-navy-delta-52.vercel.app

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

```
src/
  app/
    layout.tsx              header, footer, fonts, metadata
    page.tsx                home — hero, method diagram, work grid
    about/page.tsx
    connect/page.tsx        contact cards, no form
    work/
      third-cache/          finished case study
      planforge/            shell, to fill in
      a-star/               shell, to fill in
      sfia/                 shell, to fill in
      iss-notifier/         shell, to fill in
      finance-tracker/      finished case study (not linked from the card)
    icon.svg                favicon
    opengraph-image.tsx     link preview image, built from site.ts
    not-found.tsx           404 page
    sitemap.ts, robots.ts   for search engines; use site.url
    globals.css             all styling; design tokens at the top
  components/
    Header.tsx
    Footer.tsx
    ProjectCard.tsx         renders one project from data
    CaseStudy.tsx           shared header for /work pages (back link, tag, title)
    MethodDiagram.tsx       the verification loop, inline SVG
  data/
    site.ts                 site URL, EVERY link, email, phone, CV path
    projects.ts             the six projects
public/
  portrait-hero.jpg         hero photo, 1400 × 2100
  Wilbert_Kruskie_CV.pdf    linked from every "Download CV" button
```

## Changing content

**Links and contact details** are all in `src/data/site.ts`. Nothing is
hardcoded in a component, so a change there updates every page.

**Projects** are in `src/data/projects.ts`. Each one has a `link` of one of
three kinds:

```ts
{ kind: "caseStudy", href: "/work/third-cache" }   // renders "Read how it was built"
{ kind: "repo", href: "...", live: false, demo: null } // renders "Repository coming soon"
{ kind: "private", note: "Client-owned, code private" }
```

When a repo goes public, flip `live` to `true` in `src/data/site.ts` under
`repos` and the card becomes a working link. Set `demo` to the deployed URL
and the card adds a "Live demo" link beside it.

**Case studies** live under `src/app/work/<slug>/page.tsx`. Each page wraps
its content in `CaseStudyShell`, which renders the back link, tag, date line
and title. Everything below that is free-form, so each page can have its own
layout and images. Put images in `public/` and use `next/image`.

To link a project card to its page, set its `link` in `projects.ts` to
`{ kind: "caseStudy", href: "/work/<slug>" }`.

**Portrait** is `public/portrait-hero.jpg`. To replace it, export the new
photo at around 1400px wide rather than dropping in a full-size camera file.
Large originals are slow for Next's image optimiser and can render broken in
dev. Size and crop are set by `.portrait` in `globals.css`.

## Still to do

- [x] Add a portrait to the hero
- [x] Drop the CV PDF into `public/` as `Wilbert_Kruskie_CV.pdf`
- [x] Publish the Finance Tracker repo and live demo
- [x] Deploy to Vercel
- [ ] Publish the ISS notifier repo, then set `live: true`
- [ ] Fill in the case study shells under `work/` (PlanForge, A*, SFIA, ISS notifier)
- [ ] Point the PlanForge and A* cards at finished pages

## Deploying

Hosted on Vercel, connected to this GitHub repo. Every push to `main`
redeploys. If a custom domain is added, change `url` in `src/data/site.ts`;
the metadata, sitemap and robots file all read from it.

## Notes

Fonts are Fraunces (headings) and Public Sans (body), loaded from Google Fonts
in `layout.tsx`. To self-host them instead, swap to `next/font/google` —
slightly faster, needs network access at build time.
