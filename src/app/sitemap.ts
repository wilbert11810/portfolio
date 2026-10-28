import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects.flatMap((p) =>
    p.link.kind === "caseStudy" ? [p.link.href] : [],
  );

  return ["/", "/about", "/connect", ...caseStudies].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
  }));
}
