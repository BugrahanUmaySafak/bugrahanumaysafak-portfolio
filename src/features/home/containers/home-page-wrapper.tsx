import { Section } from "@/components/layout/section";
import { ContactCta } from "@/components/cta/contact-cta";
import { CertificationsOverview } from "@/components/certifications/certifications-overview";
import { HomeHero } from "../components/home-hero";
import { HomeExperience } from "../components/home-experience";
import { HomeProjects } from "../components/home-projects";
import { HomeTechStack } from "../components/home-tech-stack";
import { HomeApps } from "../components/home-apps";

export function HomePageWrapper() {
  return (
    <main>
      <HomeHero />
      <Section id="experience">
        <HomeExperience />
      </Section>
      <Section id="projects" className="border-y bg-surface">
        <HomeProjects />
      </Section>
      <Section id="tech-stack">
        <HomeTechStack />
      </Section>
      <Section id="certifications" className="border-y bg-surface">
        <CertificationsOverview />
      </Section>
      <Section>
        <div className="space-y-6">
          <HomeApps />
          <ContactCta />
        </div>
      </Section>
    </main>
  );
}
