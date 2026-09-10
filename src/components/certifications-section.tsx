import { CertificateIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

function credentialParts(certification: string) {
  if (certification.startsWith("ITIL")) return { provider: "ITIL", name: certification };
  const [provider, name] = certification.split(": ");
  return { provider, name };
}

export function CertificationsSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Credentials / 05" title="Professional development." />
        <ul className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2">
          {siteContent.certifications.map((certification) => {
            const credential = credentialParts(certification);
            return <li key={certification} className="flex gap-4 rounded-xl bg-surface p-5 sm:p-6"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-700/10 text-indigo-700"><CertificateIcon className="h-5 w-5" /></span><div><p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-indigo-700">{credential.provider}</p><p className="mt-2 font-medium leading-7 text-black/75 sm:text-lg">{credential.name}</p></div></li>;
          })}
        </ul>
      </Container>
    </section>
  );
}
