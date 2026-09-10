import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function EducationSection() {
  const education = siteContent.education;
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Education / 03" title="Software Engineering education." />
        <div className="mt-8 grid gap-7 rounded-2xl bg-surface p-6 sm:mt-12 sm:p-8 md:grid-cols-12 md:p-10">
          <div className="md:col-span-4"><p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700">{education.started}</p><p className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-black/15">03</p></div>
          <div className="md:col-span-8"><h3 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{education.program}</h3><p className="mt-3 font-medium text-black/75">{education.institution}</p><p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">{education.description}</p></div>
        </div>
      </Container>
    </section>
  );
}
