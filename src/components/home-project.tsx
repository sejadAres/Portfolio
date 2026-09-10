import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";

export function HomeProject() {
  const project = projects.find((item) => item.featured);
  if (!project) return null;

  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Selected project / 01" title="Automation built around a real operational problem." />
        <div className="mt-8 sm:mt-12"><ProjectCard project={project} /></div>
      </Container>
    </section>
  );
}
