import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function SkillsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Skills & technologies" title="Development skills supported by practical systems and infrastructure experience." />
        <div className="mt-14 grid border-t border-black/20 sm:grid-cols-3">
          {siteContent.skills.map((group) => (
            <div key={group.category} className="border-b border-black/20 py-7 sm:border-r sm:px-6 first:pl-0 last:border-r-0 last:pr-0">
              <h3 className="font-bold">{group.category}</h3>
              <ul className="mt-5 space-y-2 text-black/65">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
