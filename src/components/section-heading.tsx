export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="grid gap-3 border-t border-black/20 pt-5 md:grid-cols-12">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700 md:col-span-4">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-bold tracking-[-0.035em] sm:text-4xl md:col-span-8 md:text-5xl">{title}</h2>
    </div>
  );
}
