import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function CertificationsSection() {
  return (
    <section className="border-t border-black/20 py-12 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Certifications" title="Professional development." />
        <ul className="mt-8 grid gap-x-12 gap-y-4 border-y border-black/20 py-6 sm:mt-12 sm:grid-cols-2 sm:gap-y-5 sm:py-8">
          {siteContent.certifications.map((certification) => (
            <li key={certification} className="text-base font-medium leading-7 text-black/75 sm:text-lg">{certification}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
