import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { CertificationsSection } from "@/components/certifications-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { PageHeader } from "@/components/page-header";
import { SkillsSection } from "@/components/skills-section";

export const metadata: Metadata = {
  title: "About",
  description: "Professional background, experience, education, technical skills, and certifications for Sejad Sahib.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeader eyebrow="About" title="Professional background." introduction="Freelance Software Engineer with experience across software development and professional IT environments." />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
    </main>
  );
}
