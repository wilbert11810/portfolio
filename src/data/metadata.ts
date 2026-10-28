import type { Metadata } from "next";
import { site } from "./site";

/** Shown when the home page is shared, and the fallback for any page without its own. */
export const siteDescription =
  "Computer Science graduate in Melbourne. Five months as the only developer on a commercial product, a nine-month client delivery, and a security review that closed six access-control defects.";

/**
 * Title, description, canonical URL and link-preview tags for one page.
 * Without this, every page would share the home page's preview on LinkedIn.
 * Keep descriptions over 100 characters; LinkedIn warns on anything shorter.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    // A page-level openGraph replaces the root one, including the image from
    // app/opengraph-image.tsx, so the image has to be named here.
    openGraph: {
      title: `${title} - ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_AU",
      images: [previewImage],
    },
  };
}

const previewImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} - ${site.role}`,
};
