import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { HeroTechnicalVisual } from "@/components/hero-technical-visual";
import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section className="technical-grid-light relative isolate overflow-hidden py-12 sm:py-20 lg:py-24">
      <div className="hero-glow pointer-events-none absolute -left-40 -top-48 -z-10 h-[34rem] w-[34rem]" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700"><span className="h-px w-8 bg-indigo-700" />{siteContent.role}</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(3.25rem,13.5vw,4rem)] font-extrabold leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-[6.5rem]">{siteContent.name}</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-black/65 sm:text-xl sm:leading-9">{siteContent.introduction}</p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Link href="/projects" className="group inline-flex min-h-12 items-center gap-3 rounded-lg bg-indigo-700 px-5 font-semibold text-background shadow-[0_14px_30px_-18px_rgba(79,70,229,0.9)] transition duration-200 hover:-translate-y-0.5 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">View Projects <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center rounded-lg border border-black/20 bg-background px-5 font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">Get in touch</Link>
            </div>
          </div>
          <div className="lg:col-span-6"><HeroTechnicalVisual /></div>
        </div>
      </Container>
    </section>
  );
}
