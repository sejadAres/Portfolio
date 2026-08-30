import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/20 py-8">
      <Container className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteContent.name}</p>
        <div className="flex gap-5 font-semibold">
          <a href={siteContent.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">LinkedIn</a>
          <a href={siteContent.contact.github} target="_blank" rel="noreferrer" className="hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">GitHub</a>
        </div>
      </Container>
    </footer>
  );
}
