import Link from "next/link";
import MethodDiagram from "@/components/MethodDiagram";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { contact, site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div>
          {site.available && <p className="pill">Open to junior developer roles</p>}
          <h1>{site.tagline}</h1>
          <p>
            Computer Science graduate in Melbourne. A year as the only developer on
            a commercial product, a nine-month delivery to an external client in a
            team of five, and a security review that found six ways one user could
            read another user&rsquo;s records.
          </p>
          <p>
            What ties them together is the part after the code works, when you
            still have to prove it.
          </p>
          <div className="hero__actions">
            <Link href="/#work" className="btn btn--lg">
              See the work
            </Link>
            <a href={contact.cv} className="btn btn--lg btn--ghost" download>
              Download CV
            </a>
          </div>
        </div>

        <div className="placeholder">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8c9089"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="placeholder__label">PHOTO PLACEHOLDER</span>
          <span className="placeholder__note">
            A portrait, or a photograph of your desk setup. 880 &times; 920px or
            larger.
          </span>
        </div>
      </section>

      <section className="wrap section">
        <h2 className="section__head">How I know something works</h2>
        <p className="section__lede">
          The same loop runs through every project below. A passing test tells you
          nothing until you have watched it fail against something you know is
          broken. It is how I caught a generated test suite that was asserting
          nothing, and why I check a faster algorithm still returns the same answer.
        </p>
        <div className="diagram">
          <MethodDiagram />
        </div>
      </section>

      <section className="wrap section" id="work">
        <h2 className="section__head">Work</h2>
        <p className="section__lede">
          Six projects. Three have a write-up with diagrams explaining how they
          were built; the rest you can open and use.
        </p>
        <div className="grid-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="cta">
          <div style={{ flexGrow: 1, minWidth: "280px" }}>
            <h2>Looking for a junior developer who reads the logs?</h2>
            <p>
              Melbourne-based, available now, and happy to talk through any of the
              work above in detail.
            </p>
          </div>
          <Link href="/connect" className="btn btn--lg btn--light">
            Let&rsquo;s connect
          </Link>
        </div>
      </section>
    </>
  );
}
