import { repos } from "./site";
import type { Flow } from "@/components/FlowDiagram";

/**
 * The picture at the top of a card: a screenshot for live apps
 * (1280px wide, saved in public/work/), a flow diagram for the rest.
 */
export type ProjectVisual =
  | { kind: "screenshot"; src: string; alt: string }
  | { kind: "diagram"; flow: Flow };

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
  visual?: ProjectVisual;
};

export const projects: Project[] = [
  {
    slug: "third-cache",
    name: "Third Cache",
    does: "Audits a Shopify store against 224 optimisation checks and reports back what to fix, in priority order.",
    stack: ["Python", "FastAPI", "Remix", "Supabase", "Redis"],
    link: { kind: "caseStudy", href: "/work/third-cache" },
    visual: {
      kind: "diagram",
      flow: {
        title: "Third Cache scan",
        steps: [
          ["Store data", "fetched once"],
          ["Saved to a", "scan cache"],
          ["224 checks read", "from the cache"],
          ["What to fix,", "in priority order"],
        ],
      },
    },
  },
  {
    slug: "planforge",
    name: "PlanForge",
    does: "A planning tool holding private user records. I reviewed its access control and closed six defects that let any signed-in user read another user's data.",
    stack: ["Hono & Bun", "TypeScript", "Supabase", "CI"],
    link: { kind: "caseStudy", href: "/work/planforge" },
    visual: {
      kind: "screenshot",
      src: "/work/planforge-home.png",
      alt: "PlanForge home page: \"Turn your idea into a plan you can build from\", with a planning session in progress",
    },
  },
  {
    slug: "a-star",
    name: "A* pathfinding",
    does: "Finds the shortest route across a 40,000-node grid. Profiled and rebuilt to run four times faster while returning byte-identical paths.",
    stack: ["Python", "Profiling", "Benchmarking"],
    link: { kind: "caseStudy", href: "/work/a-star" },
    visual: {
      kind: "diagram",
      flow: {
        title: "A* pathfinding",
        steps: [
          ["40,000-node", "grid"],
          ["A* finds the", "shortest route"],
          ["Profile, then", "rebuild hot paths"],
          ["Same paths,", "4× faster"],
        ],
      },
    },
  },
  {
    slug: "sfia",
    name: "SFIA self-assessment",
    does: "Lets someone rate their own skills against the SFIA framework, with the OpenAI API checking each written answer against the level they claimed.",
    stack: ["React", "OpenAI API", "Supabase"],
    link: { kind: "private", note: "Client-owned, code private" },
    visual: {
      kind: "diagram",
      flow: {
        title: "SFIA self-assessment",
        steps: [
          ["Pick a SFIA", "skill"],
          ["Claim a level,", "write evidence"],
          ["AI checks answer", "against the level"],
          ["Self-assessment,", "evidence-checked"],
        ],
      },
    },
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
    visual: {
      kind: "diagram",
      flow: {
        title: "ISS overhead notifier",
        steps: [
          ["Where is the", "ISS right now?"],
          ["Is it dark", "where I am?"],
          ["Overhead", "and dark?"],
          ["Email me", "to look up"],
        ],
      },
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
    visual: {
      kind: "screenshot",
      src: "/work/finance-tracker-chart.png",
      alt: "Finance Tracker's expense chart: total spending by category for Food, Bills, Entertainment and Others",
    },
  },
];
