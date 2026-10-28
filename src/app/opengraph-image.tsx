import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview card shown when the site is shared on LinkedIn, Slack and the like. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f7f6f2",
          borderLeft: "24px solid #17564a",
          color: "#181a19",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "#17564a" }}>
          {site.role} · {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 40, color: "#3d423f", marginTop: 24, maxWidth: 900 }}>
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#5a605c" }}>
          Case studies · Experience · Contact
        </div>
      </div>
    ),
    size,
  );
}
