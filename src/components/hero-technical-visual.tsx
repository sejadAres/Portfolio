const capabilities = [
  { label: "Automation", value: "PowerShell" },
  { label: "Backend", value: "C# / ASP.NET Core" },
  { label: "Data", value: "MySQL" },
  { label: "Systems", value: "Intune / Active Directory" },
  { label: "Network", value: "VLAN / Meraki" },
];

const processSteps = ["validate", "normalize", "deduplicate", "sort", "summary updated"];

export function HeroTechnicalVisual() {
  return (
    <div className="technical-grid relative isolate overflow-hidden rounded-[1.35rem] bg-black p-4 text-background shadow-[0_35px_90px_-42px_rgba(17,17,17,0.8)] sm:p-5 lg:min-h-[34rem] lg:p-6">
      <div className="hero-glow pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72" />
      <div className="flex items-center justify-between border-b border-background/15 pb-4 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-background/55 sm:text-xs">
        <span>Developer system / 01</span>
        <span className="flex items-center gap-2 text-background/75"><span className="status-pulse h-2 w-2 rounded-full bg-indigo-700" />Operational</span>
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="gentle-float rounded-xl border border-background/15 bg-background/[0.06] p-4 backdrop-blur-sm sm:p-5">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-indigo-700">Automation process</p>
          <p className="mt-4 font-mono text-sm text-background/85"><span className="text-indigo-700">›</span> processing order history...</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 font-mono text-[0.68rem] text-background/65 sm:text-xs lg:grid-cols-1 lg:text-sm">
            {processSteps.map((step) => <li key={step} className="flex items-center gap-3"><span className="text-indigo-700">✓</span>{step}</li>)}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {capabilities.slice(0, 3).map((item) => (
            <div key={item.label} className="rounded-lg border border-background/10 bg-black/55 p-3.5">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-background/45">{item.label}</p>
              <p className="mt-2 text-xs font-semibold sm:text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {capabilities.slice(3).map((item) => (
          <div key={item.label} className="rounded-lg border border-background/10 bg-black/55 p-3.5">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-background/45">{item.label}</p>
            <p className="mt-2 text-xs font-semibold sm:text-sm">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-background/15 pt-4 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-background/40">
        <span>Software × infrastructure</span><span>NL / 2026</span>
      </div>
    </div>
  );
}
