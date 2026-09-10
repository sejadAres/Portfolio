import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

export function ExperienceSection() {
  return (
    <section className="bg-black py-14 text-background sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-4 md:grid-cols-12">
          <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 md:col-span-4"><span className="h-px w-7 bg-indigo-700" />Experience / 02</p>
          <h2 className="max-w-3xl text-[clamp(2rem,8.5vw,2.5rem)] font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl md:col-span-8 md:text-5xl">Professional IT experience.</h2>
        </div>
        <div className="mt-10 md:ml-[33.333%] md:mt-14">
          {siteContent.experience.map((item, index) => (
            <article key={`${item.role}-${item.organization}`} className={`relative border-l border-background/20 pb-10 pl-7 last:pb-0 sm:pl-9 ${index === 0 ? "" : "text-background/65"}`}>
              <span className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-indigo-700 shadow-[0_0_0_6px_rgba(79,70,229,0.18)]" : "bg-background/35"}`} />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700">{item.period}</p>
              <h3 className={`${index === 0 ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"} mt-3 font-semibold tracking-[-0.035em] text-background`}>{item.role}</h3>
              <p className="mt-2 font-medium text-background/85">{item.organization}</p>
              {item.context ? <p className="mt-1 text-sm text-background/45">{item.context}</p> : null}
              <p className={`mt-5 max-w-2xl leading-8 ${index === 0 ? "text-lg text-background/70" : "text-base"}`}>{item.summary}</p>
              {item.highlights.length > 0 ? <ul className="mt-6 grid max-w-2xl gap-3 text-sm leading-6 text-background/65 sm:text-base">{item.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-700" />{highlight}</li>)}</ul> : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
