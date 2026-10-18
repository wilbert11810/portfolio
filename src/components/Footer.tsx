import { contact, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>
          {site.name} · {site.location}
        </span>
        <div className="footer__links">
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
