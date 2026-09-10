import { Container } from "@/components/container";

export function PageHeader({ eyebrow, title, introduction }: { eyebrow: string; title: string; introduction?: string }) {
  return (
    <header className="technical-grid-light relative overflow-hidden border-b border-black/5 bg-surface py-12 sm:py-18 lg:py-20">
      <div className="hero-glow pointer-events-none absolute -right-40 -top-44 h-96 w-96" />
      <Container className="relative">
        <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700"><span className="h-px w-8 bg-indigo-700" />{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{title}</h1>
        {introduction ? <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65 sm:text-xl">{introduction}</p> : null}
      </Container>
    </header>
  );
}
