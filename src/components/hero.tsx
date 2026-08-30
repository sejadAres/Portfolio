import Link from "next/link";
import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section className="py-16 sm:py-24 lg:py-36">
      <Container>
        <p className="mb-7 text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">{siteContent.role}</p>
        <h1 className="max-w-6xl text-[clamp(3rem,15vw,3.75rem)] font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-8xl lg:text-[8rem]">{siteContent.name}</h1>
        <div className="mt-8 grid gap-8 sm:mt-10 md:grid-cols-12 md:items-end">
          <p className="max-w-2xl text-lg leading-8 text-black/70 md:col-span-7 md:text-xl">{siteContent.introduction}</p>
          <div className="flex flex-wrap gap-4 md:col-span-5 md:justify-end">
            <Link href="/#projects" className="inline-flex min-h-12 items-center bg-indigo-700 px-6 font-bold text-background transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">View Projects</Link>
            <Link href="/#contact" className="inline-flex min-h-12 items-center border border-black px-6 font-bold transition-colors hover:bg-black hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">Get in touch</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
