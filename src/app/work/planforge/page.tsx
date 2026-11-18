import CaseStudyShell from "@/components/CaseStudy";
import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata({
  title: "PlanForge case study",
  description:
    "An AI planning tool that turns an idea into a PRD, roadmap and setup guide: closing six access-control defects, then tracing why its agent pipeline quietly failed.",
  path: "/work/planforge",
});

const LIVE = "https://plan-forge-nine.vercel.app";
/** Set to the GitHub URL once the repository is public. */
const REPO: string | null = null;

const facts = [
  ["MY ROLE", "Sole developer"],
  ["CONTEXT", "Personal project"],
  ["STACK", "Hono & Bun, Next.js, Supabase, Claude API"],
  ["DEPLOY", "Render (API) + Vercel (web)"],
];

const defects = [
  ["GET /sessions/:id", "Returned any session by ID, whoever asked."],
  ["PATCH /sessions/:id", "No owner check, and it wrote the request body straight to the row, so any column could be changed."],
  ["DELETE /sessions/:id", "Deleted any session by ID."],
  ["GET /clarifier/:sessionId", "Returned another user's answers about their idea."],
  ["POST /clarifier/submit", "Could submit answers to, and start the paid AI pipeline on, someone else's session."],
  ["POST /revise", "Could pull a deliverable from a different session into a revision."],
];

const outcomes = [
  ["6", "Access-control defects closed, each covered by a two-user test"],
  ["17 → 88", "Automated tests, from the security fix to the end of the pipeline work"],
  ["8 of 9", "Broken sessions traced back to the same unguarded step"],
  ["0", "Escalations when the idea that used to fail was run again"],
];

export default function PlanForge() {
  return (
    <CaseStudyShell
      tag="PERSONAL"
      period="Apr – Nov 2026 · Solo"
      title="Six ways to read someone else's plan, and a pipeline that failed quietly"
      lede={
        <>
          PlanForge turns a rough product idea into a PRD, a roadmap and a setup guide,
          using a chain of AI agents that question, plan, challenge and write. I built it
          to show AI doing useful everyday work. Two pieces of work made it trustworthy:
          closing the gaps that let one user read another&rsquo;s plans, and finding out
          why plans were quietly failing to finish.
        </>
      }
    >
      <section className="wrap" style={{ paddingBlockEnd: "48px" }}>
        <dl className="facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p style={{ marginTop: "20px", fontSize: "15px" }}>
          <a href={LIVE} target="_blank" rel="noreferrer">Try PlanForge</a>
          {REPO && (
            <>
              {" "}·{" "}
              <a href={REPO} target="_blank" rel="noreferrer">Source on GitHub</a>
            </>
          )}
        </p>
      </section>

      <section className="wrap section prose">
        <h2 className="section__head">How it works</h2>
        <p>
          A session starts with the idea in the user&rsquo;s own words. A{" "}
          <strong>clarifier</strong> asks up to five questions and flags anything that
          blocks planning, such as a missing timeline or a legal problem. An{" "}
          <strong>architect</strong> drafts features, stack, integrations and an MVP
          split. A <strong>challenger</strong> stress-tests that draft in two lanes, market
          and resources on one side and technical and scope on the other, using live web
          research. A <strong>documenter</strong> writes the three reports. Each step is
          a Claude API call with its own versioned prompt, run in the background while the
          app polls for progress.
        </p>
        <p>
          AI also helped build it. I wrote PlanForge with Claude Code as a pair
          programmer, and the commit history credits it as co-author. For the work
          below, I decided what to fix and in what order, tested each change myself, and
          approved every commit before it went in. That is the everyday use of AI I
          wanted to show: faster work, with the judgement staying with me.
        </p>
      </section>

      <section className="wrap section prose">
        <h2 className="section__head">The problem</h2>
        <p>
          A session holds someone&rsquo;s unreleased business idea. Reviewing the API, I
          found that six handlers looked a session up by its ID and never checked who
          owned it. Signing in proved who you were, but nothing stopped you asking for
          someone else&rsquo;s data by ID.
        </p>
        <div className="card" style={{ maxWidth: "900px", padding: "8px 24px", marginTop: "8px" }}>
          <dl style={{ margin: 0 }}>
            {defects.map(([route, issue], i) => (
              <div
                key={route}
                style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "14px 0", borderTop: i ? "1px solid var(--rule)" : "none" }}
              >
                <dt style={{ fontFamily: "var(--mono)", fontSize: "14px", fontWeight: 600, minWidth: "220px" }}>{route}</dt>
                <dd style={{ margin: 0, flex: "1 1 300px", fontSize: "15px", color: "var(--body)" }}>{issue}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="wrap section prose">
        <h2 className="section__head">What I did</h2>
        <p>
          Instead of patching each route on its own, I put the rule in one place and
          made every handler go through it.
        </p>
        <pre className="code">
          <code>
            <span className="code__note">{"// apps/api/src/lib/ownership.ts (simplified)\n"}</span>
            {`export async function assertSessionOwner(sessionId: string, userId: string) {
  const { data } = await supabase
    .from("sessions")
    .select("id, user_id, status")
    .eq("id", sessionId)
    .single();

  // Missing and not-yours get the same answer.
  if (!data || data.user_id !== userId) {
    return { ok: false, status: 404, message: "Session not found." };
  }
  return { ok: true, session: data };
}`}
          </code>
        </pre>
        <div className="grid-3" style={{ marginTop: "20px" }}>
          <div className="card">
            <h3>404, not 403</h3>
            <p>
              A 403 tells an attacker the ID exists. Returning the same 404 for
              &ldquo;missing&rdquo; and &ldquo;not yours&rdquo; gives them nothing to
              probe.
            </p>
          </div>
          <div className="card">
            <h3>Whitelist, then filter twice</h3>
            <p>
              Updates accept only the name and status fields, and updates and deletes
              also filter on the user&rsquo;s ID, so a missed check upstream still
              can&rsquo;t touch another user&rsquo;s row.
            </p>
          </div>
          <div className="card">
            <h3>Two-user tests in CI</h3>
            <p>
              17 tests act as two users: user A owns a session, user B tries each of
              the six routes on it. They run on every push, so if any of those checks
              comes out, the build fails.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap section prose">
        <h2 className="section__head">The other one that mattered</h2>
        <div className="card" style={{ maxWidth: "900px", padding: "30px 32px" }}>
          <h3 style={{ fontSize: "20px", fontFamily: "var(--sans)" }}>
            Plans that never finished
          </h3>
          <p>
            Sessions were ending in an escalation, an error, or a spinner that never
            stopped. An early fix turned the model&rsquo;s thinking off, on the theory
            that it was using up the output limit. Before changing more code, I went
            through every broken session in the database.
          </p>
          <p>
            Eight of the nine began the same way: the pipeline started before the
            clarifier&rsquo;s result was usable, either with blocking questions still
            unanswered or with nothing in it at all. The architect then refused, by
            design, to plan around the gaps, the challenger rejected the empty plan,
            and the session escalated. Behind that were three more causes:
            one challenger lane was judging a plan it was never given, retries never
            told the architect why its plan was rejected, and background jobs died
            silently when the free-tier server went to sleep.
          </p>
          <p style={{ marginBottom: 0 }}>
            I fixed them one commit at a time: a flag card that lets users answer
            blocking questions before planning starts, checked database writes, a
            stored reason for every failure, a sweep that marks killed runs as failed,
            a Retry button, and routing where market and resource concerns become
            documented risks instead of stopping the plan. An idea that escalated on 4
            November completed on 18 November with the same answers. The challenger
            sent the first plan back once, with reasons, and the architect fixed it.
          </p>
        </div>
      </section>

      <section className="wrap section">
        <h2 className="section__head" style={{ marginBottom: "22px" }}>Where it landed</h2>
        <div className="grid-3">
          {outcomes.map(([figure, note]) => (
            <div className="card" key={note}>
              <div style={{ fontFamily: "var(--display)", fontSize: "32px", fontWeight: 600, color: "var(--pine)" }}>
                {figure}
              </div>
              <p style={{ fontSize: "14px", lineHeight: 1.5, color: "var(--muted)" }}>{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div className="card" style={{ flexGrow: 1, minWidth: "320px", padding: "30px 32px" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--muted)" }}>
              WHAT I&rsquo;D DO DIFFERENTLY
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.65 }}>
              Write the ownership check and the two-user tests before the first route,
              not after the twentieth. Every one of the six defects was a route added
              on its own. I&rsquo;d also have stored why each run failed from day one:
              by the time I investigated the pipeline, the server logs had expired, so
              the cause of the three runs that crashed could only be inferred, not
              confirmed.
            </p>
          </div>
          <div className="card" style={{ width: "300px", background: "#f0eee7", borderColor: "#dedbd1", padding: "30px 32px" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--muted)" }}>
              ON THE CODE
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.6 }}>
              {REPO ? (
                <>
                  The repository is public, including the security fix and its tests.{" "}
                  <a href={REPO} target="_blank" rel="noreferrer">See it on GitHub</a>.
                </>
              ) : (
                <>
                  The repository is being prepared for public release. The app itself
                  is live:{" "}
                  <a href={LIVE} target="_blank" rel="noreferrer">try PlanForge</a>.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </CaseStudyShell>
  );
}
