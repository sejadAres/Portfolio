import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software projects and case studies by Sejad Sahib as they become ready to share.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="py-16 sm:py-24 lg:py-28">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">Projects</p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.5rem,11vw,3.25rem)] font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-7xl">Work worth explaining, not just listing.</h1>
        <div className="mt-12 grid gap-6 border-y border-black/20 py-7 sm:mt-16 sm:py-8 md:grid-cols-12">
          <h2 className="text-xl font-bold md:col-span-4">Case studies coming soon</h2>
          <div className="max-w-2xl md:col-span-8">
            <p className="text-lg leading-8 text-black/70">
              I am preparing software projects for publication. When they are ready, this page will document the problem, my contribution, the technology used, and what I learned—without presenting test work as a finished portfolio project.
            </p>
            <a href="https://github.com/sejadAres" target="_blank" rel="noreferrer" className="mt-7 inline-block font-bold underline decoration-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">
              Visit GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <Link href="/" className="mt-10 inline-block font-bold underline decoration-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">← Back home</Link>
      </Container>
    </main>
  );
}
