import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

const desktopSpans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4", "lg:col-span-12"];

export function SkillsSection() {
  return (
    <section className="bg-surface py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Capabilities / 04" title="Skills & technologies." />
        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-12">
          {siteContent.skills.map((group, index) => (
            <article key={group.category} className={`rounded-xl bg-background p-5 shadow-[0_20px_50px_-45px_rgba(17,17,17,0.7)] sm:p-6 ${desktopSpans[index]}`}>
              <div className="flex items-start justify-between gap-4"><h3 className="font-mono text-xs font-semibold uppercase leading-5 tracking-[0.13em] text-indigo-700">{group.category}</h3><span className="font-mono text-xs text-black/25">{String(index + 1).padStart(2, "0")}</span></div>
              <ul className={`mt-6 grid gap-x-7 gap-y-2 text-base leading-7 text-black/65 ${index === 0 || index === 4 ? "min-[400px]:grid-cols-2 lg:grid-cols-3" : ""}`}>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
