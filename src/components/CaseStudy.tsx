import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The shared frame for a /work page: back link and title header.
 * Everything below the header is the page's own, passed as children.
 */
export default function CaseStudyShell({
  tag,
  period,
  title,
  lede,
  children,
}: {
  tag: string;
  period: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <>
      <section className="wrap" style={{ paddingBlock: "clamp(32px, 4vw, 52px) 44px" }}>
        <Link href="/#work" style={{ fontSize: "14px", fontWeight: 600, textDecoration: "none", display: "inline-block", marginBottom: "26px" }}>
          &larr; All work
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.07em", color: "var(--pine)", background: "var(--pine-tint)", padding: "5px 11px", borderRadius: "5px" }}>
            {tag}
          </span>
          <span style={{ fontSize: "14px", color: "var(--muted)" }}>{period}</span>
        </div>
        <h1 style={{ fontSize: "clamp(32px, 4.5vw, 50px)", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "22px", maxWidth: "900px" }}>
          {title}
        </h1>
        {lede && (
          <p style={{ fontSize: "19px", lineHeight: 1.62, color: "var(--body)", maxWidth: "800px" }}>
            {lede}
          </p>
        )}
      </section>

      {children}
    </>
  );
}
