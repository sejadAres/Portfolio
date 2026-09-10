import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function AboutSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Profile / 01" title="Software and systems, understood together." />
        <div className="mt-8 grid overflow-hidden rounded-2xl bg-surface sm:mt-12 md:grid-cols-12">
          <div className="technical-grid-light relative min-h-40 overflow-hidden p-6 md:col-span-4 md:min-h-full md:p-8">
            <div className="hero-glow absolute -left-20 -top-24 h-64 w-64" />
            <p className="relative font-mono text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">Profile signal</p>
            <p className="relative mt-12 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.035em]">Development informed by the environments software runs in.</p>
          </div>
          <div className="grid gap-5 bg-background/75 p-6 text-lg leading-8 text-black/65 sm:p-8 md:col-span-8 md:p-10">
            {siteContent.about.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "text-xl leading-9 text-black/80" : ""}>{paragraph}</p>)}
          </div>
        </div>
      </Container>
    </section>
  );
}
