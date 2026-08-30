import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-8 py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="Development direction grounded in practical IT experience." />
        <div className="mt-10 grid gap-5 text-lg leading-8 text-black/70 sm:mt-12 sm:gap-6 md:ml-[33.333%] md:max-w-2xl">
          {siteContent.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Container>
    </section>
  );
}
