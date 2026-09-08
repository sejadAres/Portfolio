import Link from "next/link";
import { OrderAutomationPreview } from "@/components/project-visuals";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project; priority?: boolean }) {
  return (
    <article className="group grid gap-6 border-t border-black/20 pt-6 lg:grid-cols-12 lg:gap-10">
      <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`} className="overflow-hidden border border-black/15 bg-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700 lg:col-span-7">
        <div className="transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.015]"><OrderAutomationPreview /></div>
      </Link>
      <div className="flex flex-col lg:col-span-5 lg:py-3">
        <div className="flex items-start justify-between gap-4 text-sm font-semibold uppercase tracking-[0.12em]">
          <p className="text-indigo-700">{project.number} / {project.status}</p>
          <p className="text-right text-black/55">{project.category} · {project.technologies[0]}</p>
        </div>
        <h3 className="mt-6 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{project.title}</h3>
        <p className="mt-5 max-w-xl text-lg leading-8 text-black/70">{project.summary}</p>
        <Link href={`/projects/${project.slug}`} className="mt-8 w-fit border-b-2 border-indigo-700 pb-1 font-bold transition-colors hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700 lg:mt-auto">View case study <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
