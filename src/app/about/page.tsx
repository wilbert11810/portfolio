import type { Metadata } from "next";
import { contact, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Computer Science graduate from Swinburne, based in Melbourne. Five months as the sole developer on a commercial product.",
};

const experience = [
  {
    when: "Dec 2025 – Apr 2026",
    where: "Sunbury, VIC · Hybrid",
    role: "Full Stack Developer",
    org: "Third Cache",
    body: "Sole developer working with the founder across 334 logged hours. Designed and maintained 111 REST API routes and a 21-table schema, kept a 1,100-test suite green, and wrote up 30 architectural decisions so they could be revisited rather than rediscovered.",
  },
  {
    when: "Jan – Feb 2026",
    where: "Internship",
    role: "Business Analyst Intern",
    org: "99aupairs",
    body: "Found that customers were being missed by a manual email process and replaced it with an automated CRM workflow. Investigated an AI support platform under evaluation and documented reproducible defects that informed the team's decision. Received the Positive Impact Award.",
  },
  {
    when: "Feb 2023 – Feb 2026",
    where: "Melbourne",
    role: "Bachelor of Computer Science",
    org: "Swinburne University of Technology",
    body: "Major in software development. Final-year capstone delivered to an external industry client over nine months in a team of five. Worked in retail and hospitality throughout the degree.",
  },
];

const skills = [
  { label: "LANGUAGES", items: "Python · TypeScript · JavaScript · SQL · PHP · HTML/CSS" },
  { label: "BACKEND", items: "FastAPI · Node.js · REST API design · OAuth · caching" },
  { label: "FRONTEND", items: "React · Next.js · Remix · Vue.js · Shopify Polaris" },
  { label: "DATA", items: "PostgreSQL · Supabase · MySQL · Redis" },
  { label: "TESTING", items: "Automated suites · CI pipelines · Selenium · Postman" },
  { label: "TOOLS", items: "Git · GitHub Actions · Docker · Vercel · Railway · Render · Aiven" },
];

export default function About() {
  return (
    <>
      <section className="wrap" style={{ paddingBlock: "clamp(40px, 6vw, 72px) 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)", gap: "clamp(32px, 5vw, 64px)", alignItems: "start" }}>
          <div className="prose">
            <h1 style={{ fontSize: "clamp(34px, 5vw, 52px)", letterSpacing: "-0.025em", marginBottom: "26px", lineHeight: 1.08 }}>
              About
            </h1>
            <p style={{ fontSize: "18px" }}>
              I finished a Computer Science degree at Swinburne in February 2026,
              majoring in software development. For most of that degree I was also
              working shifts in retail and hospitality, which is where I learned
              that the hard part of a problem is usually the person waiting on the
              other side of it.
            </p>
            <p style={{ fontSize: "18px" }}>
              My first commercial role was as the only developer on a Shopify
              application, working directly with its founder. There was nobody to
              escalate to. If a merchant could not install the app, that was mine
              to find and fix, and the fix turned out to be three layers away from
              where the symptom appeared.
            </p>
            <p style={{ fontSize: "18px", marginBottom: 0 }}>
              That is the part of the work I have come to like most: the gap
              between something appearing to work and being shown to work. It is
              why I ran my own test suite against deliberately broken code, and why
              I benchmark a change before claiming it made anything faster.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div className="card">
              <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.09em", color: "var(--muted)" }}>
                AT A GLANCE
              </div>
              <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: "13px" }}>
                {[
                  ["Based in", "Melbourne, VIC"],
                  ["Degree", "BCompSci, Swinburne"],
                  ["Graduated", "February 2026"],
                  ["Open to", "Onsite, hybrid, remote"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
                    <dt style={{ fontSize: "15px", color: "var(--muted)" }}>{k}</dt>
                    <dd style={{ fontSize: "15px", fontWeight: 600, textAlign: "right", margin: 0 }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <a href={contact.cv} download className="btn btn--lg btn--ghost" style={{ textAlign: "center" }}>
              Download my CV
            </a>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <h2 className="section__head" style={{ marginBottom: "28px" }}>Experience</h2>
        <div>
          {experience.map((item) => (
            <div
              key={item.org}
              style={{ display: "flex", gap: "34px", padding: "26px 0", borderTop: "1px solid var(--rule)", flexWrap: "wrap" }}
            >
              <div style={{ width: "180px", flexShrink: 0 }}>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--pine)" }}>{item.when}</div>
                <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "3px" }}>{item.where}</div>
              </div>
              <div style={{ flexGrow: 1, minWidth: "260px" }}>
                <h3 style={{ fontSize: "19px", fontFamily: "var(--sans)", marginBottom: "6px" }}>
                  {item.role} · <span style={{ color: "var(--muted)", fontWeight: 500 }}>{item.org}</span>
                </h3>
                <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--body)" }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2 className="section__head" style={{ marginBottom: "26px" }}>What I work with</h2>
        <div className="grid-3">
          {skills.map((group) => (
            <div className="card" key={group.label}>
              <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--muted)" }}>
                {group.label}
              </div>
              <p style={{ fontSize: "15px", lineHeight: 1.7 }}>{group.items}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
