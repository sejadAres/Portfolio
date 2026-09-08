import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { AutomationPipeline, BeforeAfterDemo, DemoWorkbook, NormalizationVisual, OrderAutomationPreview } from "@/components/project-visuals";
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

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-5 md:grid-cols-12">
      <div className="md:col-span-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">{eyebrow}</p><h2 className="mt-3 text-[clamp(2rem,8vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.04em]">{title}</h2></div>
      <div className="max-w-2xl text-lg leading-8 text-black/70 md:col-span-8 md:pt-7">{children}</div>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <main id="main-content" className="pb-20 pt-12 sm:pb-28 sm:pt-20">
      <Container>
        <Link href="/projects" className="font-bold underline decoration-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">← All projects</Link>
        <header className="mt-10 w-full min-w-0 max-w-full border-t border-black/20 pt-6 sm:mt-14">
          <div className="grid min-w-0 grid-cols-1 gap-4 text-sm font-bold uppercase leading-6 tracking-[0.14em] sm:grid-cols-[auto_minmax(0,1fr)]"><p className="text-indigo-700">Project {project.number}</p><p className="min-w-0 [overflow-wrap:anywhere] sm:text-right">{project.category} · PowerShell · Excel</p></div>
          <div className="mt-8 grid min-w-0 grid-cols-1 gap-7 md:grid-cols-12 md:items-end"><h1 className="min-w-0 text-[clamp(3rem,12vw,5.5rem)] font-extrabold leading-[0.94] tracking-[-0.065em] md:col-span-8">{project.title}</h1><p className="min-w-0 text-lg leading-8 text-black/70 md:col-span-4">{project.summary}</p></div>
        </header>

        <div className="mt-12 sm:mt-16"><OrderAutomationPreview /></div>

        <section className="mt-16 grid gap-8 border-t border-black/20 pt-7 sm:mt-24 md:grid-cols-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700 md:col-span-4">Overview</h2>
          <div className="md:col-span-8"><p className="max-w-3xl text-xl leading-9">{project.fullDescription}</p><dl className="mt-10 grid gap-px border border-black/20 bg-black/20 sm:grid-cols-3">{[["Type", project.category], ["Context", project.context], ["Role", project.role]].map(([label, value]) => <div key={label} className="bg-background p-5"><dt className="text-xs font-bold uppercase tracking-[0.14em] text-black/50">{label}</dt><dd className="mt-3 font-bold">{value}</dd></div>)}</dl></div>
        </section>

        <section className="mt-20 border-t border-black/20 pt-8 sm:mt-28"><SectionIntro eyebrow="01 / The problem" title="Reliable data was being maintained by hand."><p>{project.problem}</p><p className="mt-5">Different labels could describe the same hardware, while repeated records and out-of-order dates made the workbook harder to maintain. The challenge was operational consistency, not technical novelty.</p></SectionIntro></section>

        <section className="mt-16 sm:mt-24"><div className="mb-8 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">02 / The approach</p><h2 className="mt-3 text-[clamp(2rem,8vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.04em]">Business rules become a repeatable processing pipeline.</h2><p className="mt-5 text-lg leading-8 text-black/70">PowerShell processes the workbook in a defined sequence, from the original order history through validation and transformation to the updated monthly sheet and summary.</p></div><AutomationPipeline /></section>

        <section className="min-w-0 mt-20 border-t border-black/20 pt-8 sm:mt-28"><SectionIntro eyebrow="03 / Demonstration" title="From inconsistent input to usable order history."><p>This fictional dataset shows the concepts without exposing production information. The repeated DEMO-002 row is removed, known descriptions are normalized, and dates are ordered chronologically.</p></SectionIntro><div className="min-w-0 mt-10"><BeforeAfterDemo /></div><p className="mt-4 text-sm leading-6 text-black/55">All identifiers and records shown above were created exclusively for this portfolio demonstration.</p></section>

        <section className="mt-20 border-t border-black/20 pt-8 sm:mt-28"><SectionIntro eyebrow="04 / Data normalization" title="One category, even when the source names differ."><p>Without normalization, logically identical hardware can be split across summaries and reporting. Explicit rules map the known input variants to stable categories before the data is maintained.</p></SectionIntro><div className="mt-10"><NormalizationVisual /></div></section>

        <section className="mt-20 grid gap-px border border-black/20 bg-black/20 sm:mt-28 md:grid-cols-2">
          <div className="bg-background p-6 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">Duplicate handling</p><h2 className="mt-4 text-3xl font-bold tracking-[-0.04em]">Safe repeat processing.</h2><p className="mt-5 leading-7 text-black/70">The workflow prevents logically identical order records from being added unnecessarily when workbook data is processed again. The case study does not expose or overstate the production duplicate-key implementation.</p></div>
          <div className="bg-background p-6 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">Monthly organization</p><h2 className="mt-4 text-3xl font-bold tracking-[-0.04em]">History stays where people expect it.</h2><p className="mt-5 leading-7 text-black/70">Processed order information is maintained in the appropriate month/year worksheet and ordered by date, preserving a workbook structure that remains useful for manual review.</p></div>
        </section>

        <section className="min-w-0 mt-20 sm:mt-28"><SectionIntro eyebrow="05 / Workbook and summary" title="Normalized detail supports a consistent overview."><p>The month-based order history remains the source for a hardware summary. This editorial workbook mockup uses only sanitized records and shows the March sheet with totals derived from the processed demonstration.</p></SectionIntro><div className="min-w-0 mt-10"><DemoWorkbook /></div></section>

        <section className="mt-20 border-y border-black/20 py-10 sm:mt-28 sm:py-14"><div className="grid gap-8 md:grid-cols-12"><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700 md:col-span-4">Outcome</p><p className="text-[clamp(1.75rem,6vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.04em] md:col-span-8">{project.result}</p></div></section>

        <section className="mt-20 grid gap-12 sm:mt-28 md:grid-cols-12">
          <div className="md:col-span-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">Technologies</p><ul className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="border border-black/25 px-4 py-3 font-bold">{technology}</li>)}</ul></div>
          <div className="md:col-span-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">What I learned</p><h2 className="mt-4 text-3xl font-bold tracking-[-0.04em]">Automation must protect data quality, not just move data faster.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-black/70">The work reinforced how important it is to translate business rules into predictable transformations, design around inconsistent source data, and keep the result understandable for the people who still work with the workbook directly.</p></div>
        </section>

        <section className="mt-20 bg-black p-6 text-background sm:mt-28 sm:p-10 md:grid md:grid-cols-12 md:gap-10"><div className="md:col-span-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">Next phase</p><h2 className="mt-4 text-3xl font-bold tracking-[-0.04em]">Future development</h2></div><div className="mt-6 text-lg leading-8 text-background/70 md:col-span-8 md:mt-0"><p>The completed automation focuses on order-history maintenance. A future phase could extend into earlier parts of the process:</p><ul className="mt-5 grid gap-3"><li>Extracting relevant information from incoming requests</li><li>Generating standardized order documents</li><li>Routing documents to the appropriate storage location</li><li>Connecting those steps more directly with order-history maintenance</li></ul><p className="mt-6 text-sm text-background/55">These capabilities are planned possibilities, not implemented features.</p></div></section>
      </Container>
    </main>
  );
}
