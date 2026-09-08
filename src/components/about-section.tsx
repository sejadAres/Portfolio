import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function AboutSection() {
  return (
    <section className="border-t border-black/20 py-12 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Introduction" title="Software and systems, understood together." />
        <div className="mt-8 grid gap-4 text-lg leading-8 text-black/70 sm:mt-10 sm:gap-5 md:ml-[33.333%] md:max-w-2xl">
          {siteContent.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Container>
    </section>
  );
}
