import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AboutPageWrapper } from "@/features/about/containers/about-page-wrapper";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { personSchema, profilePageSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About.meta" });

  return pageMetadata({
    locale,
    path: "/about",
    title: t("title"),
    description: t("description"),
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd graph={[profilePageSchema(locale), personSchema()]} />
      <PageTransition>
        <AboutPageWrapper />
      </PageTransition>
    </>
  );
}
