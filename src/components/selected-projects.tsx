import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function SelectedProjects() {
  return (
    <section id="projects" className="scroll-mt-8 py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading eyebrow="Selected projects" title="New software work will be added here as it is ready to share." />
        <div className="mt-10 grid gap-6 border-y border-black/20 py-7 sm:mt-14 sm:py-8 md:grid-cols-12">
          <p className="text-lg font-bold md:col-span-4">Portfolio projects coming soon</p>
          <p className="max-w-2xl leading-7 text-black/65 md:col-span-8">
            I am preparing work that accurately represents my software development skills. This section is ready for full project case studies without presenting unfinished or test repositories as professional work.
          </p>
        </div>
        <div className="mt-6 text-right">
          <Link href="/projects" className="font-bold underline decoration-indigo-700 decoration-2 underline-offset-4 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700">
            Projects overview
          </Link>
        </div>
      </Container>
    </section>
  );
}
