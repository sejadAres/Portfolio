"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-black/15 bg-background sm:static">
      <Container className="py-3 sm:flex sm:min-h-20 sm:items-center sm:justify-between sm:gap-8 sm:py-4">
        <Link href="/" className="inline-flex min-h-9 items-center text-lg font-extrabold tracking-[-0.025em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">
          {siteContent.name}
        </Link>
        <nav aria-label="Primary navigation" className="mt-2 sm:mt-0">
          <ul className="grid grid-cols-4 gap-1 sm:flex sm:items-center sm:gap-2">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-11 w-full items-center justify-center border px-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 sm:px-4 ${active ? "border-indigo-700 bg-indigo-700 text-background" : "border-black/20 hover:border-black hover:bg-black hover:text-background"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
