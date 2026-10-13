import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HomePageWrapper } from "@/features/home/containers/home-page-wrapper";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { personSchema, websiteSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return pageMetadata({ locale, path: "", description: t("description") });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd graph={[websiteSchema(locale), personSchema()]} />
      <PageTransition>
        <HomePageWrapper />
      </PageTransition>
    </>
  );
}
