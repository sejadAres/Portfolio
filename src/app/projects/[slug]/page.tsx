import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { getProject, projects } from "@/content/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const sections = [
    { title: "Problem", content: project.problem },
    { title: "Solution", content: project.solution },
    { title: "Challenges", content: project.challenges },
    { title: "Result", content: project.result },
  ].filter((section) => section.content);

  return (
    <main id="main-content" className="py-16 sm:py-24">
      <Container>
        <Link href="/projects" className="font-bold underline decoration-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">← All projects</Link>
        <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">{project.status}</p>
            <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.05em] sm:text-7xl">{project.title}</h1>
          </div>
          <p className="text-lg leading-8 text-black/70 md:col-span-4">{project.summary}</p>
        </div>
        <Image src={project.image.src} alt={project.image.alt} width={1400} height={900} priority className="mt-14 aspect-[14/9] w-full border border-black/15 bg-background" />
        <div className="mt-16 grid gap-10 border-t border-black/20 pt-8 md:grid-cols-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700 md:col-span-4">Overview</h2>
          <div className="grid gap-8 md:col-span-8">
            <p className="text-xl leading-9">{project.fullDescription}</p>
            <div><h3 className="font-bold">My role</h3><p className="mt-2 leading-7 text-black/70">{project.role}</p></div>
            <div><h3 className="font-bold">Technology</h3><p className="mt-2 leading-7 text-black/70">{project.technologies.join(" · ")}</p></div>
          </div>
        </div>
        <div className="mt-16 grid gap-14">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-5 border-t border-black/20 pt-8 md:grid-cols-12">
              <h2 className="text-2xl font-bold md:col-span-4">{section.title}</h2>
              <p className="text-lg leading-8 text-black/70 md:col-span-8">{section.content}</p>
            </section>
          ))}
          <section className="grid gap-5 border-t border-black/20 pt-8 md:grid-cols-12">
            <h2 className="text-2xl font-bold md:col-span-4">My contributions</h2>
            <ul className="grid gap-3 text-lg leading-8 text-black/70 md:col-span-8">
              {project.contributions.map((item) => <li key={item} className="border-b border-black/10 pb-3">{item}</li>)}
            </ul>
          </section>
        </div>
        {project.links.length > 0 ? (
          <div className="mt-16 flex flex-wrap gap-4 border-t border-black/20 pt-8">
            {project.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center bg-indigo-700 px-6 font-bold text-background transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">{link.label} <span className="ml-2" aria-hidden="true">↗</span></a>
            ))}
          </div>
        ) : null}
      </Container>
    </main>
  );
}
