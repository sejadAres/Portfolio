import Link from "next/link";
import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-black/15">
      <Container className="flex min-h-20 flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3 sm:gap-y-3 sm:py-4">
        <Link href="/" className="text-lg font-extrabold tracking-[-0.025em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">
          {siteContent.name}
        </Link>
        <nav aria-label="Primary navigation" className="w-full sm:w-auto">
          <ul className="flex flex-wrap items-center justify-between gap-x-4 text-sm font-semibold sm:gap-x-8">
            {navigation.map((item) => (
              <li key={item.label}><Link className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-indigo-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700" href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
