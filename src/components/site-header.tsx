"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

function isActiveRoute(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-background/95 backdrop-blur-md">
      <Container className="flex min-h-16 items-center justify-between gap-6 sm:min-h-20">
        <Link href="/" className="inline-flex min-h-11 items-center text-lg font-extrabold tracking-[-0.035em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">
          {siteContent.name}<span className="ml-1 text-indigo-700">.</span>
        </Link>

        <button type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 sm:hidden">
          <span>{menuOpen ? "Close" : "Menu"}</span>
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>

        <nav aria-label="Primary navigation" className="hidden sm:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return <li key={item.label}><Link href={item.href} aria-current={active ? "page" : undefined} className={`relative inline-flex min-h-11 items-center text-sm font-semibold transition-colors after:absolute after:bottom-1 after:left-0 after:h-0.5 after:bg-indigo-700 after:transition-[width] ${active ? "text-indigo-700 after:w-full" : "after:w-0 hover:text-indigo-700 hover:after:w-full"} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700`}>{item.label}</Link></li>;
            })}
          </ul>
        </nav>
      </Container>

      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b border-black/10 bg-background shadow-[0_24px_45px_-30px_rgba(17,17,17,0.5)] sm:hidden">
          <ul className="mx-auto grid max-w-7xl px-5 py-3">
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return <li key={item.label}><Link href={item.href} aria-current={active ? "page" : undefined} onClick={() => setMenuOpen(false)} className={`flex min-h-12 items-center justify-between rounded-lg px-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700 ${active ? "bg-indigo-700 text-background" : "hover:bg-black/5 hover:text-indigo-700"}`}><span>{item.label}</span><span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-background" : "bg-black/15"}`} aria-hidden="true" /></Link></li>;
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
