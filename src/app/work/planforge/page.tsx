import CaseStudyShell from "@/components/CaseStudy";
import { pageMetadata } from "@/data/metadata";
import { projects } from "@/data/projects";

// TODO: replace with a description of the case study once it's written.
const project = projects.find((p) => p.slug === "planforge")!;

export const metadata = pageMetadata({
  title: "PlanForge case study",
  description: project.does,
  path: "/work/planforge",
});

export default function PlanForge() {
  return (
    <CaseStudyShell tag="TODO" period="TODO" title="PlanForge">
      {/* Page content goes here. */}
    </CaseStudyShell>
  );
}
