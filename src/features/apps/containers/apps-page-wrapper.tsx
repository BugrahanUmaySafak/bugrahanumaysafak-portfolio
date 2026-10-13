import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/layout/section-heading";
import { PhoneShell } from "@/components/projects/device-frames";
import { Link } from "@/i18n/navigation";

export function AppsPageWrapper() {
  const t = useTranslations("Apps");

  return (
    <main>
      <Section
        pattern
        className="py-20 md:py-28"
        containerClassName="grid items-center gap-14 md:grid-cols-[1.4fr_1fr] lg:gap-20"
      >
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Eyebrow>{t("status")}</Eyebrow>
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {t("title")}
          </h1>
          <p className="max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
            {t("description")}
          </p>
          <p className="max-w-xl text-pretty text-muted-foreground">{t("note")}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="/#projects">
                {t("ctaProjects")}
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">{t("ctaContact")}</Link>
            </Button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both"
        >
          <PhoneShell
            className="max-w-36 shadow-pixel md:max-w-52"
            screenClassName="flex items-center justify-center bg-background"
          >
            <span className="absolute inset-0 bg-pixel-grid opacity-60" />
            <span className="relative font-mono text-sm">
              <span className="text-brand">~/</span>apps
              <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-caret bg-foreground" />
            </span>
          </PhoneShell>
        </div>
      </Section>
    </main>
  );
}
