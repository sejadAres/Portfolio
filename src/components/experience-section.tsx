import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function ExperienceSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Experience" title="Technical support in a professional infrastructure environment." />
        <div className="mt-14 border-t border-black/20">
          {siteContent.experience.map((item) => (
            <article key={`${item.role}-${item.organization}`} className="grid gap-7 border-b border-black/20 py-9 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-indigo-700">{item.period}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em]">{item.role}</h3>
                <p className="mt-2 font-semibold">{item.organization}</p>
                {item.context ? <p className="mt-1 text-sm text-black/60">{item.context}</p> : null}
              </div>
              <div className="md:col-span-8">
                <p className="max-w-2xl text-lg leading-8 text-black/70">{item.summary}</p>
                {item.highlights.length > 0 ? (
                  <ul className="mt-6 grid gap-3 text-black/70">
                    {item.highlights.map((highlight) => <li key={highlight} className="border-l-2 border-indigo-700 pl-4">{highlight}</li>)}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
