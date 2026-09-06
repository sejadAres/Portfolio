import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Sejad Sahib — Freelance Software Engineer", template: "%s — Sejad Sahib" },
  description:
    "Freelance Software Engineer with a background in software development, IT infrastructure, systems, and networking.",
  openGraph: {
    title: "Sejad Sahib — Freelance Software Engineer",
    description:
      "Freelance Software Engineer with a background in software development, IT infrastructure, systems, and networking.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-24 bg-indigo-700 px-4 py-3 font-bold text-background focus:translate-y-0">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
