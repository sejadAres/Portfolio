import { hardwareSummary, processedDemoOrders, rawDemoOrders, type DemoOrder } from "@/content/projects";

const pipelineSteps = ["Order history", "Validate", "Normalize", "Deduplicate", "Sort", "Monthly sheet", "Hardware summary"];

function OrderTable({ orders, compact = false }: { orders: DemoOrder[]; compact?: boolean }) {
  return (
    <div className="min-w-0 max-w-full overflow-x-auto" tabIndex={0} aria-label="Scrollable order data table">
      <table className={`w-full border-collapse text-left ${compact ? "min-w-[31rem] text-xs" : "min-w-[38rem] text-sm"}`}>
        <thead><tr className="border-b border-black/25 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-black/55">
          <th className="px-3 py-3">Date</th><th className="px-3 py-3">Request</th><th className="px-3 py-3">Description</th><th className="px-3 py-3 text-right">Qty</th>
        </tr></thead>
        <tbody>{orders.map((order, index) => (
          <tr key={`${order.request}-${order.date}-${index}`} className={`border-b border-black/10 last:border-0 ${order.duplicate ? "bg-indigo-700 text-background line-through decoration-2" : ""}`}>
            <td className="whitespace-nowrap px-3 py-3">{order.date}</td><td className="whitespace-nowrap px-3 py-3 font-semibold">{order.request}</td><td className="whitespace-nowrap px-3 py-3">{order.description}</td><td className="px-3 py-3 text-right tabular-nums">{order.quantity}</td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}

export function OrderAutomationPreview({ wide = false }: { wide?: boolean }) {
  return (
    <div className={`technical-grid relative isolate flex aspect-[14/9] min-w-0 flex-col justify-between overflow-hidden rounded-xl bg-black p-5 text-background sm:p-8 ${wide ? "lg:aspect-[16/6]" : ""}`} aria-hidden="true">
      <div className="hero-glow pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64" />
      <div className="flex items-start justify-between gap-5"><span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-background/55 sm:text-xs">Raw data / automation / standardized</span><span className="font-mono text-3xl font-semibold tracking-[-0.06em] text-indigo-700 sm:text-5xl">01</span></div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
        <div className="min-w-0 border-t border-background/30 pt-3"><p className="text-xs uppercase tracking-[0.15em] text-background/50">Raw</p><p className="mt-2 text-xs font-bold sm:text-xl">Normal 16&quot;</p><p className="mt-1 text-xs font-bold sm:text-xl">14&quot;</p></div>
        <span className="text-xl text-indigo-700 sm:text-3xl">→</span>
        <div className="min-w-0 border-t border-indigo-700 pt-3"><p className="text-[0.6rem] uppercase tracking-[0.1em] text-background/50 sm:text-xs">Standardized</p><p className="mt-2 text-xs font-bold leading-tight sm:text-xl">Standard Laptop</p><p className="mt-1 text-xs font-bold leading-tight sm:text-xl">Lightweight Laptop</p></div>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-background/45 sm:text-xs"><span>Validate</span><span>Normalize</span><span>Deduplicate</span><span>Sort</span></div>
    </div>
  );
}

export function AutomationPipeline() {
  return (
    <ol className="technical-grid grid overflow-hidden rounded-2xl bg-black p-3 text-background shadow-[0_28px_70px_-48px_rgba(17,17,17,0.8)] lg:grid-cols-7">
      {pipelineSteps.map((step, index) => (
        <li key={step} className="relative min-h-24 border-b border-background/12 bg-background/[0.035] p-4 last:border-b-0 lg:min-h-32 lg:border-b-0 lg:border-r lg:last:border-r-0">
          <span className="font-mono text-[0.66rem] font-semibold tabular-nums text-indigo-700">{String(index + 1).padStart(2, "0")}</span><p className="mt-4 text-sm font-semibold leading-tight text-background/85 lg:mt-8">{step}</p>{index < pipelineSteps.length - 1 ? <span className="absolute bottom-3 right-4 text-indigo-700 lg:bottom-auto lg:top-1/2 lg:right-2 lg:-translate-y-1/2" aria-hidden="true"><span className="lg:hidden">↓</span><span className="hidden lg:inline">→</span></span> : null}
        </li>
      ))}
    </ol>
  );
}

export function BeforeAfterDemo() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="min-w-0 max-w-full overflow-hidden rounded-xl bg-surface shadow-[0_20px_55px_-45px_rgba(17,17,17,0.7)]"><div className="flex items-center justify-between border-b border-black/10 px-4 py-4 sm:px-5"><h3 className="text-lg font-semibold">Before</h3><span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-black/45">Raw data</span></div><OrderTable orders={rawDemoOrders} compact /></section>
      <section className="min-w-0 max-w-full overflow-hidden rounded-xl bg-black text-background shadow-[0_24px_60px_-42px_rgba(17,17,17,0.8)] [&_thead_tr]:border-background/20 [&_thead_tr]:text-background/55 [&_tbody_tr]:border-background/10"><div className="flex items-center justify-between border-b border-background/15 px-4 py-4 sm:px-5"><h3 className="text-lg font-semibold">After</h3><span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-indigo-700">Processed</span></div><OrderTable orders={processedDemoOrders} compact /></section>
    </div>
  );
}

export function NormalizationVisual() {
  const rules = [
    { raw: ['Normal 16"', "Standard Laptop"], result: "Standard Laptop" },
    { raw: ['14"', "Lightweight Laptop"], result: "Lightweight Laptop" },
  ];
  return (
    <div className="grid gap-px overflow-hidden rounded-xl bg-black/10 shadow-[0_20px_55px_-45px_rgba(17,17,17,0.7)]">
      {rules.map((rule) => <div key={rule.result} className="grid items-center gap-5 bg-surface p-5 sm:grid-cols-[1fr_auto_1fr] sm:p-7">
        <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-black/50">Raw descriptions</p><p className="mt-3 font-semibold">{rule.raw.join(" · ")}</p></div><span className="text-2xl text-indigo-700" aria-hidden="true">→</span><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-700">Standard category</p><p className="mt-3 text-xl font-bold">{rule.result}</p></div>
      </div>)}
    </div>
  );
}

export function DemoWorkbook() {
  return (
    <div className="overflow-hidden rounded-xl bg-background shadow-[0_24px_65px_-48px_rgba(17,17,17,0.7)] ring-1 ring-black/10">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/20 px-4 py-4 sm:px-6"><div><p className="font-bold">Order history workbook</p><p className="mt-1 text-xs uppercase tracking-[0.14em] text-black/50">Sanitized demonstration</p></div><span className="bg-indigo-700 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-background">Demo data</span></div>
      <div className="p-3 sm:p-6"><OrderTable orders={processedDemoOrders} /></div>
      <div className="flex flex-wrap gap-px border-t border-black/20 bg-black/20 text-xs font-bold sm:text-sm">{["January", "February", "March", "Hardware Summary"].map((tab) => <span key={tab} className={`${tab === "March" ? "bg-indigo-700 text-background" : "bg-background"} px-4 py-3`}>{tab}</span>)}</div>
      <div className="grid gap-px border-t border-black/20 bg-black/20 sm:grid-cols-3">{hardwareSummary.map((item) => <div key={item.hardware} className="flex items-center justify-between gap-4 bg-background p-4"><span className="font-semibold">{item.hardware}</span><span className="text-xl font-extrabold text-indigo-700">{item.quantity}</span></div>)}</div>
    </div>
  );
}
