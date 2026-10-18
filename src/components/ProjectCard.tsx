import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { link } = project;

  return (
    <article className="card">
      <h3>{project.name}</h3>
      <p>{project.does}</p>
      <div className="chips">
        {project.stack.map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {link.kind === "caseStudy" && (
        <Link href={link.href} className="card__action">
          Read how it was built &rarr;
        </Link>
      )}

      {link.kind === "repo" &&
        (link.live ? (
          <a
            href={link.href}
            className="card__action"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open on GitHub &rarr;
          </a>
        ) : (
          <span className="card__note">Repository coming soon</span>
        ))}

      {link.kind === "private" && <span className="card__note">{link.note}</span>}
    </article>
  );
}
