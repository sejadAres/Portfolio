import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return <div className="grid gap-12 sm:gap-16">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>;
}
