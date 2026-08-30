import { AboutSection } from "@/components/about-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { SelectedProjects } from "@/components/selected-projects";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <SelectedProjects />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
