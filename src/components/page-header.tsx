import { Container } from "@/components/container";

export function PageHeader({ eyebrow, title, introduction }: { eyebrow: string; title: string; introduction?: string }) {
  return (
    <header className="py-14 sm:py-20 lg:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{title}</h1>
        {introduction ? <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70 sm:text-xl">{introduction}</p> : null}
      </Container>
    </header>
  );
}
