import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/layout/page-transition";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/layout/section-heading";
import { Link } from "@/i18n/navigation";

export default function LocaleNotFound() {
  const t = useTranslations("NotFound");

  return (
    <PageTransition>
      <main>
        <Section pattern className="py-24 md:py-32">
          <div className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              {t("title")}
            </h1>
            <p className="text-muted-foreground md:text-lg">{t("description")}</p>
            <Button asChild>
              <Link href="/">
                <ArrowLeft />
                {t("back")}
              </Link>
            </Button>
          </div>
        </Section>
      </main>
    </PageTransition>
  );
}
