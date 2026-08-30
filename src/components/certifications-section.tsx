import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function CertificationsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading eyebrow="Certifications" title="Professional foundations across Microsoft technology and IT service management." />
        <ul className="mt-10 grid border-t border-black/20 sm:mt-14 sm:grid-cols-2">
          {siteContent.certifications.map((certification) => (
            <li key={certification} className="border-b border-black/20 py-5 text-lg font-bold leading-7 sm:py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">{certification}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
