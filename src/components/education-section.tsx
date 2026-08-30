import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function EducationSection() {
  const education = siteContent.education;
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Education" title="Continuing my Software Engineering education." />
        <div className="mt-14 grid gap-6 border-y border-black/20 py-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-indigo-700">{education.started}</p>
            <h3 className="mt-3 text-2xl font-bold">{education.program}</h3>
          </div>
          <div className="md:col-span-8">
            <p className="font-bold">{education.institution}</p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-black/70">{education.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
