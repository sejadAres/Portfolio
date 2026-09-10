import { GitHubIcon, LinkedInIcon, LocationIcon, MailIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

const contactItems = [
  { label: "Email", value: siteContent.contact.email, href: `mailto:${siteContent.contact.email}` },
  { label: "GitHub", value: "sejadAres", href: siteContent.contact.github },
  { label: "LinkedIn", value: "Sejad Sahib", href: siteContent.contact.linkedin },
  { label: "Location", value: siteContent.location },
];

function ContactIcon({ label }: { label: string }) {
  const className = "h-4 w-4";
  if (label === "Email") return <MailIcon className={className} />;
  if (label === "GitHub") return <GitHubIcon className={className} />;
  if (label === "LinkedIn") return <LinkedInIcon className={className} />;
  return <LocationIcon className={className} />;
}

export function ContactSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24">
      <Container>
        <h2 className="sr-only">Contact details</h2>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-7 rounded-2xl bg-surface p-4 shadow-[0_28px_70px_-52px_rgba(17,17,17,0.7)] min-[360px]:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] sm:gap-x-12 sm:gap-y-10 sm:p-8 lg:p-10">
          {contactItems.map((item) => (
            <div key={item.label} className="min-w-0">
              <dt className="flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.13em] text-indigo-700"><ContactIcon label={item.label} />{item.label}</dt>
              <dd className="mt-1.5 min-w-0 text-sm font-medium leading-6 min-[390px]:text-[0.95rem] sm:mt-2 sm:text-xl sm:leading-7">
                {item.href ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex min-h-11 max-w-full items-center whitespace-nowrap tracking-[-0.02em] underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-indigo-700 hover:decoration-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">{item.value}</a> : item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
