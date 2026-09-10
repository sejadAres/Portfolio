import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { siteContent } from "@/content/site";

const capabilityPreview = [
  { number: "01", title: "Software", description: "Web and backend development with practical, maintainable technology." },
  { number: "02", title: "Automation", description: "Repeatable workflows that turn operational rules into reliable processing." },
  { number: "03", title: "Infrastructure", description: "Systems and networking context that grounds software in real environments." },
];

export function HomeAbout() {
  return (
    <section className="bg-surface py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-9 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">About / Profile</p>
            <h2 className="mt-4 max-w-xl text-[clamp(2rem,8.5vw,2.65rem)] font-semibold leading-[1.07] tracking-[-0.045em] sm:text-5xl">Software grounded in practical IT experience.</h2>
            <div className="mt-6 grid max-w-xl gap-4 text-lg leading-8 text-black/65">
              {siteContent.homeAbout.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Link href="/about" className="group mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-indigo-700 underline decoration-indigo-700/30 decoration-2 underline-offset-4 transition-colors hover:decoration-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">More about me <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <ol className="overflow-hidden rounded-2xl bg-background shadow-[0_24px_60px_-45px_rgba(17,17,17,0.65)] lg:col-span-7 lg:self-center">
            {capabilityPreview.map((item) => (
              <li key={item.number} className="grid gap-3 border-b border-black/8 p-5 last:border-b-0 sm:grid-cols-[4rem_1fr] sm:p-6">
                <span className="font-mono text-xs font-semibold text-indigo-700">/{item.number}</span>
                <div><h3 className="text-xl font-semibold tracking-[-0.025em]">{item.title}</h3><p className="mt-2 max-w-lg leading-7 text-black/60">{item.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
