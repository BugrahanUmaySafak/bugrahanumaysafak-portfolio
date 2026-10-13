import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/layout/section-heading";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";

export function HomeExperience() {
  const t = useTranslations("Home.Experience");

  return (
    <div className="space-y-10 md:space-y-12">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />
      <ExperienceTimeline />
    </div>
  );
}
