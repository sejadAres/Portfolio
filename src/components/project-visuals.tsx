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

export function OrderAutomationPreview() {
  return (
    <div className="flex aspect-[14/9] min-w-0 flex-col justify-between overflow-hidden bg-black p-5 text-background sm:p-8" aria-hidden="true">
      <div className="flex items-start justify-between gap-5"><span className="text-xs font-bold uppercase tracking-[0.18em] text-background/60">Order history / processing</span><span className="text-4xl font-extrabold tracking-[-0.06em] text-indigo-700 sm:text-6xl">01</span></div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6">
        <div className="min-w-0 border-t border-background/30 pt-3"><p className="text-xs uppercase tracking-[0.15em] text-background/50">Raw</p><p className="mt-2 text-xs font-bold sm:text-xl">Normal 16&quot;</p><p className="mt-1 text-xs font-bold sm:text-xl">14&quot;</p></div>
        <span className="text-xl text-indigo-700 sm:text-3xl">→</span>
        <div className="min-w-0 border-t border-indigo-700 pt-3"><p className="text-[0.6rem] uppercase tracking-[0.1em] text-background/50 sm:text-xs">Standardized</p><p className="mt-2 text-xs font-bold leading-tight sm:text-xl">Standard Laptop</p><p className="mt-1 text-xs font-bold leading-tight sm:text-xl">Lightweight Laptop</p></div>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-semibold uppercase tracking-[0.12em] text-background/60"><span>Normalize</span><span>Deduplicate</span><span>Sort</span></div>
    </div>
  );
}

export function AutomationPipeline() {
  return (
    <ol className="grid border border-black/20 sm:grid-cols-2 lg:grid-cols-7">
      {pipelineSteps.map((step, index) => (
        <li key={step} className="relative min-h-28 border-b border-black/20 p-4 last:border-b-0 sm:border-r sm:[&:nth-child(even)]:border-r-0 lg:border-b-0 lg:border-r lg:[&:nth-child(even)]:border-r lg:last:border-r-0">
          <span className="text-xs font-bold tabular-nums text-indigo-700">{String(index + 1).padStart(2, "0")}</span><p className="mt-5 font-bold leading-tight">{step}</p>{index < pipelineSteps.length - 1 ? <span className="absolute bottom-3 right-3 text-indigo-700" aria-hidden="true">↓</span> : null}
        </li>
      ))}
    </ol>
  );
}

export function BeforeAfterDemo() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="min-w-0 max-w-full overflow-hidden border border-black/20"><div className="flex items-center justify-between border-b border-black/20 px-4 py-4 sm:px-5"><h3 className="text-lg font-bold">Before</h3><span className="text-xs font-semibold uppercase tracking-[0.14em] text-black/50">Raw data</span></div><OrderTable orders={rawDemoOrders} compact /></section>
      <section className="min-w-0 max-w-full overflow-hidden border border-black bg-black text-background"><div className="flex items-center justify-between border-b border-background/25 px-4 py-4 sm:px-5"><h3 className="text-lg font-bold">After</h3><span className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700">Processed</span></div><OrderTable orders={processedDemoOrders} compact /></section>
    </div>
  );
}

export function NormalizationVisual() {
  const rules = [
    { raw: ['Normal 16"', "Standard Laptop"], result: "Standard Laptop" },
    { raw: ['14"', "Lightweight Laptop"], result: "Lightweight Laptop" },
  ];
  return (
    <div className="grid gap-px border border-black/20 bg-black/20">
      {rules.map((rule) => <div key={rule.result} className="grid items-center gap-5 bg-background p-5 sm:grid-cols-[1fr_auto_1fr] sm:p-7">
        <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-black/50">Raw descriptions</p><p className="mt-3 font-semibold">{rule.raw.join(" · ")}</p></div><span className="text-2xl text-indigo-700" aria-hidden="true">→</span><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-700">Standard category</p><p className="mt-3 text-xl font-bold">{rule.result}</p></div>
      </div>)}
    </div>
  );
}

export function DemoWorkbook() {
  return (
    <div className="border border-black/25 bg-background">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/20 px-4 py-4 sm:px-6"><div><p className="font-bold">Order history workbook</p><p className="mt-1 text-xs uppercase tracking-[0.14em] text-black/50">Sanitized demonstration</p></div><span className="bg-indigo-700 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-background">Demo data</span></div>
      <div className="p-3 sm:p-6"><OrderTable orders={processedDemoOrders} /></div>
      <div className="flex flex-wrap gap-px border-t border-black/20 bg-black/20 text-xs font-bold sm:text-sm">{["January", "February", "March", "Hardware Summary"].map((tab) => <span key={tab} className={`${tab === "March" ? "bg-indigo-700 text-background" : "bg-background"} px-4 py-3`}>{tab}</span>)}</div>
      <div className="grid gap-px border-t border-black/20 bg-black/20 sm:grid-cols-3">{hardwareSummary.map((item) => <div key={item.hardware} className="flex items-center justify-between gap-4 bg-background p-4"><span className="font-semibold">{item.hardware}</span><span className="text-xl font-extrabold text-indigo-700">{item.quantity}</span></div>)}</div>
    </div>
  );
}
