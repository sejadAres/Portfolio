export type ProjectStatus = "Completed" | "In progress" | "Concept";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  context: string;
  summary: string;
  fullDescription: string;
  image?: { src: string; alt: string };
  technologies: string[];
  role: string;
  problem?: string;
  contributions: string[];
  solution?: string;
  challenges?: string;
  result?: string;
  links: ProjectLink[];
  status: ProjectStatus;
  featured: boolean;
}
