import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

const contactItems = [
  { label: "Email", value: siteContent.contact.email, href: `mailto:${siteContent.contact.email}` },
  { label: "GitHub", value: "sejadAres", href: siteContent.contact.github },
  { label: "LinkedIn", value: "Sejad Sahib", href: siteContent.contact.linkedin },
  { label: "Location", value: siteContent.location },
];

export function ContactSection() {
  return (
    <section className="border-t border-black/20 py-12 sm:py-20 lg:py-24">
      <Container>
        <h2 className="sr-only">Contact details</h2>
        <dl className="grid gap-x-12 gap-y-7 border-y border-black/20 py-8 sm:grid-cols-2 sm:gap-y-10 sm:py-10">
          {contactItems.map((item) => (
            <div key={item.label}>
              <dt className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700">{item.label}</dt>
              <dd className="mt-2 text-lg font-medium leading-7 sm:text-xl">
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex min-h-11 items-center underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-indigo-700 hover:decoration-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">{item.value}</a>
                ) : item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
