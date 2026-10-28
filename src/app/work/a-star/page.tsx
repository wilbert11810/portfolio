import CaseStudyShell from "@/components/CaseStudy";
import { pageMetadata } from "@/data/metadata";
import { projects } from "@/data/projects";

// TODO: replace with a description of the case study once it's written.
const project = projects.find((p) => p.slug === "a-star")!;

export const metadata = pageMetadata({
  title: "A* pathfinding case study",
  description: project.does,
  path: "/work/a-star",
});

export default function AStar() {
  return (
    <CaseStudyShell tag="TODO" period="TODO" title="A* pathfinding">
      {/* Page content goes here. */}
    </CaseStudyShell>
  );
}
