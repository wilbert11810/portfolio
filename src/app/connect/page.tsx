import type { Metadata } from "next";
import { contact, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Let's connect",
  description: `Get in touch with ${site.name}, a junior software developer in Melbourne.`,
};

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8a5 5 0 0 0-.1-3.7s-1.2-.3-4 1.5a13.4 13.4 0 0 0-7 0C6.1.8 4.9 1.1 4.9 1.1A5 5 0 0 0 4.8 4.8 5.4 5.4 0 0 0 3.3 8.6c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 0 0-1 2.6V22" />
  </svg>
);

export default function Connect() {
  return (
    <>
      <section className="wrap" style={{ paddingBlock: "clamp(40px, 6vw, 72px) 40px" }}>
        <h1 style={{ fontSize: "clamp(34px, 5vw, 52px)", letterSpacing: "-0.025em", marginBottom: "16px" }}>
          Let&rsquo;s connect
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.62, color: "var(--body)", maxWidth: "680px" }}>
          No form. Pick whichever of these suits you and it reaches me directly. I
          usually reply within a day.
        </p>
      </section>

      <section className="wrap" style={{ paddingBlockEnd: "36px" }}>
        <div className="grid-2">
          <a href={`mailto:${contact.email}`} className="contact-card">
            <span className="contact-card__icon"><MailIcon /></span>
            <span style={{ minWidth: 0 }}>
              <span className="contact-card__label">EMAIL</span>
              <span className="contact-card__value">{contact.email}</span>
            </span>
          </a>

          <a href={contact.phoneHref} className="contact-card">
            <span className="contact-card__icon"><PhoneIcon /></span>
            <span style={{ minWidth: 0 }}>
              <span className="contact-card__label">PHONE</span>
              <span className="contact-card__value contact-card__value--plain">
                {contact.phone}
              </span>
            </span>
          </a>

          <a href={contact.linkedin} className="contact-card" target="_blank" rel="noopener noreferrer">
            <span className="contact-card__icon"><LinkedInIcon /></span>
            <span style={{ minWidth: 0 }}>
              <span className="contact-card__label">LINKEDIN</span>
              <span className="contact-card__value">{contact.linkedinHandle}</span>
            </span>
          </a>

          <a href={contact.github} className="contact-card" target="_blank" rel="noopener noreferrer">
            <span className="contact-card__icon"><GitHubIcon /></span>
            <span style={{ minWidth: 0 }}>
              <span className="contact-card__label">GITHUB</span>
              <span className="contact-card__value">{contact.githubHandle}</span>
            </span>
          </a>
        </div>
      </section>

      <section className="wrap section">
        <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", alignItems: "stretch" }}>
          <div className="note-panel" style={{ flexGrow: 1, minWidth: "320px" }}>
            <p style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "10px", fontSize: "14px", fontWeight: 600, color: "var(--pine)" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "var(--pine)", display: "inline-block" }} />
              Available now
            </p>
            <p>{site.availabilityNote}</p>
          </div>
          <a
            href={contact.cv}
            download
            className="btn btn--lg btn--ghost"
            style={{ width: "300px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", textAlign: "center" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
            <span>Download CV (PDF)</span>
          </a>
        </div>
      </section>
    </>
  );
}
