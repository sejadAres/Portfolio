export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-12">
      <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 md:col-span-4"><span className="h-px w-7 bg-indigo-700" />{eyebrow}</p>
      <h2 className="max-w-3xl text-[clamp(2rem,8.5vw,2.5rem)] font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl md:col-span-8 md:text-5xl">{title}</h2>
    </div>
  );
}
