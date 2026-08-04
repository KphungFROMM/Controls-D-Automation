import type { Metadata } from "next";
import { projects } from "@content/projects";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and project updates from Controls D Automation—PLC, HMI, SCADA, and migrations.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Proof of work, written for the people who run the plant"
        lede="Browse recent case studies. Add new project posts anytime by creating a content entry—see the README for the exact steps."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <ProjectsFilter projects={sorted} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have a project in mind?"
        body="Share your timeline, platform, and production constraints. We’ll help scope the next step."
        primaryHref="/contact?interest=project"
      />
    </>
  );
}
