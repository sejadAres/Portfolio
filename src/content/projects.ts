import type { Project } from "@/types/project";

// Add verified portfolio projects here when they are ready to publish.
// The listing and detail routes render from this shared data automatically.
export const projects: Project[] = [];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
