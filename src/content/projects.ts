import type { Project } from "@/types/project";

export interface DemoOrder {
  date: string;
  request: string;
  description: string;
  quantity: number;
  duplicate?: boolean;
}

export const rawDemoOrders: DemoOrder[] = [
  { date: "03-03-2026", request: "DEMO-001", description: 'Normal 16"', quantity: 1 },
  { date: "04-03-2026", request: "DEMO-002", description: '14"', quantity: 2 },
  { date: "07-03-2026", request: "DEMO-003", description: "Standard Laptop", quantity: 1 },
  { date: "05-03-2026", request: "DEMO-004", description: "Monitor", quantity: 2 },
  { date: "04-03-2026", request: "DEMO-002", description: '14"', quantity: 2, duplicate: true },
  { date: "10-03-2026", request: "DEMO-005", description: "Lightweight Laptop", quantity: 1 },
];

export const processedDemoOrders: DemoOrder[] = [
  { date: "03-03-2026", request: "DEMO-001", description: "Standard Laptop", quantity: 1 },
  { date: "04-03-2026", request: "DEMO-002", description: "Lightweight Laptop", quantity: 2 },
  { date: "05-03-2026", request: "DEMO-004", description: "Monitor", quantity: 2 },
  { date: "07-03-2026", request: "DEMO-003", description: "Standard Laptop", quantity: 1 },
  { date: "10-03-2026", request: "DEMO-005", description: "Lightweight Laptop", quantity: 1 },
];

export const hardwareSummary = [
  { hardware: "Monitor", quantity: 2 },
  { hardware: "Lightweight Laptop", quantity: 3 },
  { hardware: "Standard Laptop", quantity: 2 },
];

export const projects: Project[] = [
  {
    slug: "it-hardware-order-automation",
    number: "01",
    title: "IT Hardware Order History Automation",
    category: "Workflow Automation",
    context: "Professional IT Environment",
    summary: "Automated a repetitive hardware-order administration workflow by normalizing order data, preventing duplicate records, organizing monthly order history, and maintaining a consistent hardware summary.",
    fullDescription: "A PowerShell automation that applies repeatable business rules to an Excel workbook used for hardware-order history. It makes routine maintenance more structured while keeping the workbook practical for people to use.",
    technologies: ["PowerShell", "Microsoft Excel"],
    role: "Automation Development",
    problem: "Manual workbook maintenance introduced repetitive work and data-quality risks: inconsistent hardware names, duplicate records, unsorted dates, month-based organization, and summary figures that needed to remain aligned with the order history.",
    contributions: [
      "Translated operational workbook rules into a repeatable PowerShell workflow.",
      "Standardized known description variants into consistent hardware categories.",
      "Added duplicate handling and chronological ordering for processed records.",
      "Maintained month-based order sheets and the related hardware summary.",
    ],
    solution: "The automation reads order information, validates and normalizes it, handles duplicates, sorts records by date, places information in the appropriate month/year sheet, and keeps the hardware summary consistent with the normalized data.",
    challenges: "Different descriptions could represent the same logical hardware. The workflow needed explicit normalization rules so repeat processing would not fragment reporting or unnecessarily repeat records.",
    result: "The automation turns repetitive workbook maintenance into a consistent set of data transformations, reducing manual handling and helping keep order history standardized.",
    links: [],
    status: "Completed",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
