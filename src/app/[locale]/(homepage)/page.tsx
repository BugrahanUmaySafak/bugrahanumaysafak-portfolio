"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <Section>
        <Container>
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </Container>
      </Section>
    </main>
  );
}
