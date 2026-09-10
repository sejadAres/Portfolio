import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ProjectGrid } from "@/components/project-grid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software projects and technical case studies by Sejad Sahib.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHeader eyebrow="Projects" title="Software built around real problems." introduction="A growing collection of practical work, documented around the problem, the decisions, and my contribution." />
      <section className="py-12 sm:py-20 lg:py-24">
        <Container>
          <ProjectGrid projects={projects} />
          <Link href="/" className="mt-12 inline-flex min-h-11 items-center font-semibold text-indigo-700 underline decoration-indigo-700/30 decoration-2 underline-offset-4 transition-colors hover:decoration-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">← Back home</Link>
        </Container>
      </section>
    </main>
  );
}
