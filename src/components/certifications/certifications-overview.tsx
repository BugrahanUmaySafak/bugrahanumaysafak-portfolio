import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/layout/section-heading";
import { CertificationList } from "./certification-list";

export function CertificationsOverview() {
  const t = useTranslations("Certifications");

  return (
    <div className="space-y-10 md:space-y-12">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <CertificationList />
    </div>
  );
}
