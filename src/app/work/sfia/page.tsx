import CaseStudyShell from "@/components/CaseStudy";
import { pageMetadata } from "@/data/metadata";
import { projects } from "@/data/projects";

// TODO: replace with a description of the case study once it's written.
const project = projects.find((p) => p.slug === "sfia")!;

export const metadata = pageMetadata({
  title: "SFIA self-assessment case study",
  description: project.does,
  path: "/work/sfia",
});

export default function Sfia() {
  return (
    <CaseStudyShell tag="TODO" period="TODO" title="SFIA self-assessment">
      {/* Page content goes here. */}
    </CaseStudyShell>
  );
}
