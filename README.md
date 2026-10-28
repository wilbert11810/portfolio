# Portfolio — Wilbert Kruskie

Personal site. Next.js 15 (App Router), TypeScript, no CSS framework.

Live at: _(add the URL once Vercel is connected)_

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
      finance-tracker/      shell, to fill in
    globals.css             all styling; design tokens at the top
  components/
    Header.tsx
    Footer.tsx
    ProjectCard.tsx         renders one project from data
    CaseStudy.tsx           shared header for /work pages (back link, tag, title)
    MethodDiagram.tsx       the verification loop, inline SVG
  data/
    site.ts                 EVERY link, email, phone, CV path
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
{ kind: "repo", href: "...", live: false }         // renders "Repository coming soon"
{ kind: "private", note: "Client-owned, code private" }
```

When a repo goes public, flip `live` to `true` in `src/data/site.ts` under
`repos` and the card becomes a working link. That is the only change needed.

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
- [ ] Publish the ISS notifier and Finance Tracker repos, then set `live: true`
- [ ] Fill in the case study shells under `work/` (PlanForge, A*, SFIA, ISS notifier, Finance Tracker)
- [ ] Set the real domain in `metadataBase` in `layout.tsx`

## Deploying

Push to GitHub, import the repo at vercel.com, accept the defaults. Vercel
detects Next.js and builds it. Every push to `main` redeploys.

## Notes

Fonts are Fraunces (headings) and Public Sans (body), loaded from Google Fonts
in `layout.tsx`. To self-host them instead, swap to `next/font/google` —
slightly faster, needs network access at build time.
