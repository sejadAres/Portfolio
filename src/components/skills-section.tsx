import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function SkillsSection() {
  return (
    <section className="border-t border-black/20 py-12 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Capabilities" title="Skills & technologies." />
        <div className="mt-8 grid gap-px border border-black/20 bg-black/20 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.skills.map((group) => (
            <div key={group.category} className="bg-background p-5 sm:p-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-700">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm font-semibold text-black/70">{group.items.map((item) => <li key={item} className="border border-black/20 px-3 py-2">{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
