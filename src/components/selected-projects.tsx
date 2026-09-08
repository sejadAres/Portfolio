import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";

export function SelectedProjects() {
  return (
    <section id="projects" className="scroll-mt-8 py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading eyebrow="Selected projects" title="Real problems solved with focused, maintainable software." />
        <div className="mt-10 sm:mt-14"><ProjectGrid projects={projects.filter((project) => project.featured)} /></div>
        <div className="mt-6 text-right">
          <Link href="/projects" className="font-bold underline decoration-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">
            Projects overview
          </Link>
        </div>
      </Container>
    </section>
  );
}
