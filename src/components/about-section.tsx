import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-8 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="Development direction grounded in practical IT experience." />
        <div className="mt-12 grid gap-6 text-lg leading-8 text-black/70 md:ml-[33.333%] md:max-w-2xl">
          {siteContent.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Container>
    </section>
  );
}
