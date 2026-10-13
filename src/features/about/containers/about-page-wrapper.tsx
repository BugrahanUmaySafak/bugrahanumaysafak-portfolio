import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { CertificationsOverview } from "@/components/certifications/certifications-overview";
import { ContactCta } from "@/components/cta/contact-cta";
import { AboutHero } from "../components/about-hero";

export function AboutPageWrapper() {
  const t = useTranslations("About.Journey");

  return (
    <main>
      <AboutHero />

      <Section id="experience">
        <div className="space-y-10 md:space-y-12">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
          <ExperienceTimeline />
        </div>
      </Section>

      <Section id="certifications" className="border-y bg-surface">
        <CertificationsOverview />
      </Section>

      <Section>
        <ContactCta />
      </Section>
    </main>
  );
}
