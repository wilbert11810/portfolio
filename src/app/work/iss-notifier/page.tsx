import CaseStudyShell from "@/components/CaseStudy";
import { pageMetadata } from "@/data/metadata";
import { projects } from "@/data/projects";

// TODO: replace with a description of the case study once it's written.
const project = projects.find((p) => p.slug === "iss-notifier")!;

export const metadata = pageMetadata({
  title: "ISS overhead notifier case study",
  description: project.does,
  path: "/work/iss-notifier",
});

export default function IssNotifier() {
  return (
    <CaseStudyShell tag="TODO" period="TODO" title="ISS overhead notifier">
      {/* Page content goes here. */}
    </CaseStudyShell>
  );
}
