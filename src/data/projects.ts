import { repos } from "./site";

export type ProjectLink =
  | { kind: "caseStudy"; href: string }
  | { kind: "repo"; href: string; live: boolean; demo: string | null }
  | { kind: "private"; note: string };

export type Project = {
  slug: string;
  name: string;
  /** What the project does, for someone who has never heard of it. */
  does: string;
  stack: string[];
  link: ProjectLink;
};

export const projects: Project[] = [
  {
    slug: "third-cache",
    name: "Third Cache",
    does: "Audits a Shopify store against 224 optimisation checks and reports back what to fix, in priority order.",
    stack: ["Python", "FastAPI", "Remix", "Supabase", "Redis"],
    link: { kind: "caseStudy", href: "/work/third-cache" },
  },
  {
    slug: "planforge",
    name: "PlanForge",
    does: "A planning tool holding private user records. I reviewed its access control and closed six defects that let any signed-in user read another user's data.",
    stack: ["Hono & Bun", "TypeScript", "Supabase", "CI"],
    link: { kind: "caseStudy", href: "/work/planforge" },
  },
  {
    slug: "a-star",
    name: "A* pathfinding",
    does: "Finds the shortest route across a 40,000-node grid. Profiled and rebuilt to run four times faster while returning byte-identical paths.",
    stack: ["Python", "Profiling", "Benchmarking"],
    link: { kind: "caseStudy", href: "/work/a-star" },
  },
  {
    slug: "sfia",
    name: "SFIA self-assessment",
    does: "Lets someone rate their own skills against the SFIA framework, with the OpenAI API checking each written answer against the level they claimed.",
    stack: ["React", "OpenAI API", "Supabase"],
    link: { kind: "private", note: "Client-owned, code private" },
  },
  {
    slug: "iss-notifier",
    name: "ISS overhead notifier",
    does: "Tracks the International Space Station against a fixed location and emails you when it is about to pass overhead in the dark.",
    stack: ["Python", "REST APIs", "SMTP"],
    link: {
      kind: "repo",
      href: repos.issNotifier.url,
      live: repos.issNotifier.live,
      demo: repos.issNotifier.demo,
    },
  },
  {
    slug: "finance-tracker",
    name: "Finance Tracker",
    does: "Logs expenses by category and reports them back as a bar chart over a relational schema.",
    stack: ["PHP", "Vue.js", "Chart.js", "MySQL", "Docker"],
    link: {
      kind: "repo",
      href: repos.financeTracker.url,
      live: repos.financeTracker.live,
      demo: repos.financeTracker.demo,
    },
  },
];
