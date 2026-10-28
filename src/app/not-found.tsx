import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="wrap" style={{ paddingBlock: "clamp(56px, 10vw, 120px)" }}>
      <p style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.07em", color: "var(--pine)", marginBottom: "14px" }}>
        404
      </p>
      <h1 style={{ fontSize: "clamp(32px, 4.5vw, 50px)", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "18px" }}>
        This page doesn&rsquo;t exist
      </h1>
      <p style={{ fontSize: "18px", lineHeight: 1.62, color: "var(--body)", maxWidth: "620px", marginBottom: "28px" }}>
        The link may be out of date, or the address may have a typo. Everything on
        the site is reachable from the home page.
      </p>
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        <Link href="/" className="btn btn--lg">
          Back to home
        </Link>
        <Link href="/#work" className="btn btn--lg btn--ghost">
          See the work
        </Link>
      </div>
    </section>
  );
}
