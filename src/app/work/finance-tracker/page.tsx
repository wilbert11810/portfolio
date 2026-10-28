import CaseStudyShell from "@/components/CaseStudy";
import { pageMetadata } from "@/data/metadata";

export const metadata = pageMetadata({
  title: "Finance Tracker case study",
  description:
    "A university finance app that only ran on the campus server, rebuilt to run anywhere: the security holes I found and fixed, and a containerised deploy on Render + Aiven.",
  path: "/work/finance-tracker",
});

const REPO = "https://github.com/wilbert11810/finance-tracker";
const DEMO = "https://finance-tracker-hupw.onrender.com";

const facts = [
  ["MY ROLE", "Sole developer"],
  ["CONTEXT", "University project, revisited"],
  ["STACK", "PHP, Vue 3, MySQL, Docker"],
  ["DEPLOY", "Render + Aiven (TLS)"],
];

const outcomes = [
  ["8", "Security issues fixed across auth, input and error handling"],
  ["0", "Plaintext passwords — replaced with bcrypt hashing"],
  ["1", "SQL injection closed by allow-listing the sort column"],
  ["Live", "Public demo, same Docker image locally and in production"],
];

export default function FinanceTracker() {
  return (
    <CaseStudyShell
      tag="UNIVERSITY, REVISITED"
      period="Revisited Oct 2026 · Solo"
      title="Fixing the security holes in a university project and shipping it"
      lede={
        <>
          A finance tracker I built for a university unit that only ran on the campus
          server, with its URLs and credentials hardcoded. I came back to it, found the
          app was storing passwords in plain text and was open to SQL injection, fixed
          those, and deployed it so anyone can try it.
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
          <a href={DEMO} target="_blank" rel="noreferrer">Live demo</a> ·{" "}
          <a href={REPO} target="_blank" rel="noreferrer">Source on GitHub</a>
          <br />
          <span style={{ color: "var(--muted)" }}>
            Demo login: demo@example.com / Demo-Pass-2026 — on a free tier, so the first
            request after it has been idle can take a minute to wake.
          </span>
        </p>
      </section>

      <section className="wrap section prose">
        <h2 className="section__head">The problem</h2>
        <p>
          The app worked, but only in one place. It was wired to the university&rsquo;s
          server: the API URLs and a student base path were hardcoded, so it could not be
          run or hosted anywhere else. Underneath that, a review turned up problems that
          mattered more than portability.
        </p>
        <p>
          Passwords were stored exactly as typed. The login response handed the whole user
          row, password included, back to the browser. The list endpoint dropped the
          <code> sortBy</code> query parameter straight into the SQL, several endpoints
          did no login check at all, and raw database errors were sent to the client. For
          a finance app, that list is hard to look away from.
        </p>
      </section>

      <section className="wrap section prose">
        <h2 className="section__head">What I did</h2>
        <p>
          I worked through it one problem per commit, so the history reads as a sequence of
          named fixes rather than one large rewrite. The work fell into three groups.
        </p>
        <div className="grid-3" style={{ marginTop: "8px" }}>
          <div className="card">
            <h3>Unpicked the platform lock-in</h3>
            <p>
              Hardcoded campus URLs and base paths became environment-based config, and the
              routes moved to the app root, so it runs anywhere.
            </p>
          </div>
          <div className="card">
            <h3>Closed the security gaps</h3>
            <p>
              bcrypt password hashing, sessions that store only a user id, a login check on
              every data endpoint, server-side validation, and generic error messages.
            </p>
          </div>
          <div className="card">
            <h3>Made it deployable</h3>
            <p>
              A MySQL schema and demo data, a multi-stage Dockerfile and compose setup, then
              a deploy on Render with the database on Aiven over TLS.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap section prose">
        <h2 className="section__head">The one worth showing</h2>
        <div className="card" style={{ maxWidth: "900px", padding: "30px 32px" }}>
          <h3 style={{ fontSize: "20px", fontFamily: "var(--sans)" }}>
            A sort dropdown that could read the whole database
          </h3>
          <p>
            The transactions list let you sort by date or amount. That choice was sent as a
            <code> sortBy</code> parameter and concatenated into the query&rsquo;s
            <code> ORDER BY</code>, while every other input was a bound parameter.
          </p>
          <p style={{ marginBottom: 0 }}>
            Because a column name can&rsquo;t be a bound parameter, the fix isn&rsquo;t to
            parameterise it — it&rsquo;s to allow-list it: accept only the handful of column
            names the app actually uses and fall back to a default for anything else. Before
            that, a crafted <code>sortBy</code> could order the results by the answer to a
            yes/no question about any row in the database — another user&rsquo;s password
            hash included — and read it out one character at a time.
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
              Add automated tests — I verified each fix by hand and with ad-hoc requests,
              which was enough to catch regressions but isn&rsquo;t a safety net. I&rsquo;d
              also move the monthly budget out of the browser&rsquo;s local storage into the
              database, and debounce the search so it stops firing a request on every
              keystroke.
            </p>
          </div>
          <div className="card" style={{ width: "300px", background: "#f0eee7", borderColor: "#dedbd1", padding: "30px 32px" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--muted)" }}>
              ON THE CODE
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.6 }}>
              The repository is public and the commit history walks through each fix in turn.{" "}
              <a href={REPO} target="_blank" rel="noreferrer">See it on GitHub</a>.
            </p>
          </div>
        </div>
      </section>
    </CaseStudyShell>
  );
}
