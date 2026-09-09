import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function SkillsSection() {
  return (
    <section className="border-t border-black/20 py-12 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Capabilities" title="Skills & technologies." />
        <div className="mt-8 grid gap-x-10 gap-y-8 border-t border-black/20 pt-7 sm:mt-12 sm:grid-cols-2 sm:gap-y-10 sm:pt-8 lg:grid-cols-3">
          {siteContent.skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-700">{group.category}</h3>
              <ul className="mt-4 grid gap-1.5 text-base leading-7 text-black/70">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
