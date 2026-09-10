import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { OrderAutomationPreview } from "@/components/project-visuals";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden rounded-[1.25rem] bg-surface shadow-[0_28px_70px_-52px_rgba(17,17,17,0.75)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_80px_-48px_rgba(17,17,17,0.75)] lg:grid-cols-12">
      <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`} className="overflow-hidden bg-black focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-indigo-700 lg:col-span-7">
        <div className="h-full transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.012]"><OrderAutomationPreview /></div>
      </Link>
      <div className="flex flex-col p-6 sm:p-8 lg:col-span-5 lg:p-9">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]">
          <p className="text-indigo-700">Project {project.number}</p>
          <p className="text-black/45">Status / {project.status}</p>
        </div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.13em] text-black/50">{project.category} · {project.technologies.join(" · ")}</p>
        <h3 className="mt-4 text-[clamp(1.8rem,7.5vw,2.25rem)] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl">{project.title}</h3>
        <p className="mt-5 max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">{project.summary}</p>
        <Link href={`/projects/${project.slug}`} className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 font-semibold text-indigo-700 underline decoration-indigo-700/30 decoration-2 underline-offset-4 transition-colors hover:decoration-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700 lg:mt-auto">View case study <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
      </div>
    </article>
  );
}
