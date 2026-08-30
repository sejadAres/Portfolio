import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return <div className="grid gap-20 sm:gap-28">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index === 0} />)}</div>;
}
