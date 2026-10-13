import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactPageWrapper } from "@/features/contact/containers/contact-page-wrapper";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact.meta" });

  return pageMetadata({
    locale,
    path: "/contact",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageTransition>
      <ContactPageWrapper />
    </PageTransition>
  );
}
