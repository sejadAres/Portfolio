import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

export function ContactSection() {
  const links = [
    { label: "Email", href: `mailto:${siteContent.contact.email}` },
    { label: "GitHub", href: siteContent.contact.github },
    { label: "LinkedIn", href: siteContent.contact.linkedin },
  ];
  return (
    <section id="contact" className="scroll-mt-8 py-20 sm:py-28">
      <Container>
        <div className="border-t border-black/20 pt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">Contact</p>
          <h2 className="mt-8 max-w-5xl text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-7xl">Have a role, project, or technical challenge in mind? Let&apos;s talk.</h2>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {links.map((link) => <a key={link.label} href={link.href} className="text-lg font-bold underline decoration-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700" target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>{link.label} <span aria-hidden="true">↗</span></a>)}
          </div>
          <p className="mt-8 text-sm text-black/60">{siteContent.location}</p>
        </div>
      </Container>
    </section>
  );
}
