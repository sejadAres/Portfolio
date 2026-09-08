import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

const contactItems = [
  { label: "Email", value: siteContent.contact.email, href: `mailto:${siteContent.contact.email}` },
  { label: "GitHub", value: "sejadAres", href: siteContent.contact.github },
  { label: "LinkedIn", value: "Sejad Sahib", href: siteContent.contact.linkedin },
];

export function ContactSection() {
  return (
    <section className="border-t border-black/20 py-12 sm:py-20 lg:py-24">
      <Container>
        <h2 className="sr-only">Contact details</h2>
        <div className="grid border-t border-black/20">
          {contactItems.map((item) => (
            <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="group grid min-h-20 items-center gap-2 border-b border-black/20 py-4 transition-colors hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700 sm:grid-cols-12">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700 sm:col-span-4">{item.label}</span>
              <span className="flex items-center justify-between gap-4 text-lg font-bold sm:col-span-8 sm:text-xl">{item.value}<span aria-hidden="true">↗</span></span>
            </a>
          ))}
          <div className="grid min-h-20 items-center gap-2 border-b border-black/20 py-4 sm:grid-cols-12">
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700 sm:col-span-4">Location</span>
            <span className="text-lg font-bold sm:col-span-8 sm:text-xl">{siteContent.location}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
