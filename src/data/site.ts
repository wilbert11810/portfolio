/**
 * Every external link and contact detail lives here.
 * When the GitHub repos go up, change the URLs in this file and nowhere else.
 */

export const site = {
  /** The live address. Change this if a custom domain is added. */
  url: "https://portfolio-navy-delta-52.vercel.app",
  /** First live deploy. Used as the publish date in link previews. */
  launched: "2026-10-28",
  name: "Wilbert Kruskie",
  role: "Junior Software Developer",
  location: "Melbourne, Australia",
  tagline: "I build and debug things that run in production.",
  available: true,
  availabilityNote:
    "Based in Melbourne and open to onsite, hybrid or remote work, including relocating elsewhere in Australia for the right role. Full working rights, no sponsorship needed.",
} as const;

export const contact = {
  email: "wilbertkruskie@gmail.com",
  phone: "0423 000 802",
  phoneHref: "tel:+61423000802",
  linkedin: "https://www.linkedin.com/in/wilbert-kruskie-ba26a22ba",
  linkedinHandle: "wilbert-kruskie",
  github: "https://github.com/wilbert11810",
  githubHandle: "wilbert11810",
  /** Drop the PDF in /public and this works. */
  cv: "/Wilbert_Kruskie_CV.pdf",
} as const;

/**
 * Repositories the site links to.
 * Set `live` to true once a repo is public, and the card shows a working link
 * instead of "Coming soon".
 * Set `demo` to the deployed URL once the project is hosted, and the card adds
 * a "Live demo" link. Leave it null for projects with nothing to visit.
 */
type Repo = { url: string; live: boolean; demo: string | null };

export const repos = {
  issNotifier: {
    url: "https://github.com/wilbert11810/iss-overhead-notifier",
    live: false,
    demo: null,
  },
  financeTracker: {
    url: "https://github.com/wilbert11810/finance-tracker",
    live: true,
    demo: "https://finance-tracker-hupw.onrender.com",
  },
} satisfies Record<string, Repo>;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
] as const;
