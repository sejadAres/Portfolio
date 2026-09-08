import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectGrid } from "@/components/project-grid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software projects and technical case studies by Sejad Sahib.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="py-14 sm:py-20 lg:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">Projects</p>
        <h1 className="mt-5 max-w-5xl text-[clamp(2.5rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Software built around real problems.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-black/70">A growing collection of practical work, documented around the problem, the decisions, and my contribution.</p>
        <div className="mt-12 sm:mt-16"><ProjectGrid projects={projects} /></div>
        <Link href="/" className="mt-12 inline-block font-bold underline decoration-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">← Back home</Link>
      </Container>
    </main>
  );
}
