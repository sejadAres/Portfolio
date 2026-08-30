import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export function CertificationsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Certifications" title="Professional foundations across Microsoft technology and IT service management." />
        <ul className="mt-14 grid border-t border-black/20 sm:grid-cols-2">
          {siteContent.certifications.map((certification) => (
            <li key={certification} className="border-b border-black/20 py-6 font-bold sm:odd:pr-8 sm:even:border-l sm:even:pl-8">{certification}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
