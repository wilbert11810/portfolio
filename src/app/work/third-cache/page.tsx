import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third Cache — case study",
  description:
    "Making a 224-technique Shopify scanner stop talking to the network: the problem, the wrong first fix, and the one that worked.",
};

const facts = [
  ["MY ROLE", "Sole developer"],
  ["TEAM", "Founder and me"],
  ["DURATION", "334 logged hours"],
  ["STACK", "Python, Remix, Supabase"],
];

const outcomes = [
  ["0", "Outbound HTTP requests during a scan, down from 224"],
  ["3 → 10", "Request concurrency restored, no further 429 errors"],
  ["1,100+", "Tests still passing after the re-architecture"],
  ["30+", "Architectural decisions written down as they were made"],
];

export default function ThirdCache() {
  return (
    <>
      <section className="wrap" style={{ paddingBlock: "clamp(32px, 4vw, 52px) 44px" }}>
        <Link href="/#work" style={{ fontSize: "14px", fontWeight: 600, textDecoration: "none", display: "inline-block", marginBottom: "26px" }}>
          &larr; All work
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.07em", color: "var(--pine)", background: "var(--pine-tint)", padding: "5px 11px", borderRadius: "5px" }}>
            COMMERCIAL
          </span>
          <span style={{ fontSize: "14px", color: "var(--muted)" }}>
            Dec 2025 – Apr 2026 · Sole developer
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(32px, 4.5vw, 50px)", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "22px", maxWidth: "900px" }}>
          Making a 224-technique scanner stop talking to the network
        </h1>
        <p style={{ fontSize: "19px", lineHeight: 1.62, color: "var(--body)", maxWidth: "800px" }}>
          A Shopify app that audits a merchant&rsquo;s store. Every technique fetched
          what it needed itself, so a single scan meant hundreds of API calls, and
          Shopify started refusing them.
        </p>
      </section>

      <section className="wrap" style={{ paddingBlockEnd: "48px" }}>
        <dl className="facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap section prose">
        <h2 className="section__head">The problem</h2>
        <p>
          The audit engine had grown to over 200 techniques. Each one was written
          as a self-contained check, which made them easy to add, and each one made
          its own HTTP requests to the Shopify Admin API. Scans against real stores
          began failing intermittently with 429 responses.
        </p>
        <p>
          The first mitigation was to drop request concurrency from 10 to 3. That
          stopped the errors and made every scan roughly three times slower. It is
          a trade, not a fix, and I said so rather than closing the ticket.
        </p>
      </section>

      <section className="wrap section prose">
        <h2 className="section__head">What I did</h2>
        <p>
          Rewriting 224 techniques was not realistic, and it would have thrown away
          a lot of working, tested code. So I left them alone. The data each
          technique needs is fetched once at the start of a scan and written to a
          cache, and the techniques read from that through drop-in shims presenting
          exactly the same interface as the HTTP helpers they replaced.
        </p>
        <div className="grid-3" style={{ marginTop: "8px" }}>
          <div className="card">
            <h3>Pre-fetch, then read</h3>
            <p>
              One pass collects every URL and HTML document a scan will need, so the
              network cost stops scaling with the number of techniques.
            </p>
          </div>
          <div className="card">
            <h3>Shims, not rewrites</h3>
            <p>
              The cached session and HTTP helper match the old signatures, so no
              technique changed and none of their tests had to be touched.
            </p>
          </div>
          <div className="card">
            <h3>Concurrency restored</h3>
            <p>
              With outbound requests gone from the scan itself, concurrency went
              back from 3 to 10 and the 429s did not come back.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap section prose">
        <h2 className="section__head">The other one that mattered</h2>
        <div className="card" style={{ maxWidth: "900px", padding: "30px 32px" }}>
          <h3 style={{ fontSize: "20px", fontFamily: "var(--sans)" }}>
            Nobody could install the app
          </h3>
          <p>
            Installation would begin, bounce through the Shopify OAuth handshake,
            and land back at the start. The symptom looked like a redirect URL
            problem, and it was not.
          </p>
          <p style={{ marginBottom: 0 }}>
            The session created during the handshake was not surviving to the next
            request, so the callback saw an unauthenticated user and started over.
            Moving session storage to Redis ended the loop. The lesson I took from
            it is that the layer where a bug appears is rarely the layer that
            caused it.
          </p>
        </div>
      </section>

      <section className="wrap section">
        <h2 className="section__head" style={{ marginBottom: "22px" }}>Where it landed</h2>
        <div className="grid-3">
          {outcomes.map(([figure, note]) => (
            <div className="card" key={figure}>
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
              Cap the cache. It grows with the size of the store being scanned and
              nothing evicts from it, which was fine at the scale we ran but would
              not stay fine. I would also have measured the scan end to end before
              and after, rather than reasoning about the request count, so I could
              state the improvement as a number instead of a mechanism.
            </p>
          </div>
          <div className="card" style={{ width: "300px", background: "#f0eee7", borderColor: "#dedbd1", padding: "30px 32px" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--muted)" }}>
              ON THE CODE
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.6 }}>
              This is commercial work and the repository is private. Happy to talk
              through any part of it in detail.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
