import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sejad Sahib about software projects, roles, and technical challenges.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader eyebrow="Contact" title="Let’s build something useful." introduction="Have a role, project, or technical challenge in mind? Let’s talk." />
      <ContactSection />
    </main>
  );
}
