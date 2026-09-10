import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-black py-8 text-background">
      <Container className="grid gap-6 text-sm sm:grid-cols-[1fr_auto] sm:items-end">
        <div><p className="font-semibold">© {new Date().getFullYear()} {siteContent.name}</p><p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-background/40">Software / automation / infrastructure</p></div>
        <div className="flex gap-6 font-medium text-background/65">
          <a href={siteContent.contact.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">LinkedIn</a>
          <a href={siteContent.contact.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">GitHub</a>
        </div>
      </Container>
    </footer>
  );
}
