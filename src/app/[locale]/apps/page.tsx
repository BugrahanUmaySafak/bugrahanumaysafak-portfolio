import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AppsPageWrapper } from "@/features/apps/containers/apps-page-wrapper";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Apps.meta" });

  return pageMetadata({
    locale,
    path: "/apps",
    title: t("title"),
    description: t("description"),
  });
}

export default async function AppsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageTransition>
      <AppsPageWrapper />
    </PageTransition>
  );
}
