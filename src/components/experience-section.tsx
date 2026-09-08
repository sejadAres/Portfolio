import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function ExperienceSection() {
  return (
    <section className="border-t border-black/20 py-12 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Experience" title="Professional IT experience." />
        <div className="mt-8 border-t border-black/20 sm:mt-12">
          {siteContent.experience.map((item, index) => (
            <article key={`${item.role}-${item.organization}`} className={`grid gap-6 border-b border-black/20 md:grid-cols-12 ${index === 0 ? "py-8 sm:gap-8 sm:py-10" : "py-6 text-black/70 sm:py-7"}`}>
              <div className="md:col-span-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-indigo-700">{item.period}</p>
                <h3 className={`${index === 0 ? "text-3xl" : "text-xl"} mt-3 font-bold tracking-[-0.025em]`}>{item.role}</h3>
                <p className="mt-2 font-semibold">{item.organization}</p>
                {item.context ? <p className="mt-1 text-sm text-black/60">{item.context}</p> : null}
              </div>
              <div className="md:col-span-8">
                <p className={`max-w-2xl leading-8 ${index === 0 ? "text-lg text-black/70" : "text-base"}`}>{item.summary}</p>
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
