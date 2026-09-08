import Link from "next/link";
import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

export function HomeAbout() {
  return (
    <section className="border-t border-black/20 py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-7 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">About</p>
            <h2 className="mt-4 text-[clamp(2rem,9vw,2.5rem)] font-bold leading-[1.06] tracking-[-0.04em]">Software grounded in practical IT experience.</h2>
          </div>
          <div className="md:col-span-8 md:pt-8">
            <div className="grid max-w-2xl gap-4 text-lg leading-8 text-black/70">
              {siteContent.homeAbout.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/about" className="inline-flex min-h-11 items-center font-bold underline decoration-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">More about me <span className="ml-2" aria-hidden="true">→</span></Link>
              <Link href="/projects" className="inline-flex min-h-11 items-center font-bold underline decoration-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">Explore my work <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
