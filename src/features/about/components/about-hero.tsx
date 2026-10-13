import Image from "next/image";
import { BriefcaseBusiness, Crosshair, History, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/layout/section-heading";
import { siteConfig } from "@/config/site";

const PROFILE_ROWS = [
  { key: "role", icon: BriefcaseBusiness },
  { key: "focus", icon: Crosshair },
  { key: "experience", icon: History },
  { key: "approach", icon: Workflow },
] as const;

export function AboutHero() {
  const t = useTranslations("About.Hero");

  return (
    <Section
      pattern
      className="border-b"
      containerClassName="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] lg:gap-20"
    >
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          {t("title")}
        </h1>
        <div className="max-w-2xl space-y-4 text-pretty text-muted-foreground md:text-lg">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl border-2 border-foreground bg-muted shadow-pixel">
          <Image
            src="/bugrahanumaysafak.JPEG"
            alt={t("portraitAlt")}
            fill
            priority
            sizes="(min-width: 448px) 384px, calc(100vw - 2rem)"
            className="object-cover object-[50%_70%]"
          />
        </div>

        <div className="absolute -bottom-5 left-3 rounded-lg border bg-background/95 px-3 py-2 shadow-md backdrop-blur sm:-left-8">
          <p className="text-sm font-semibold">{siteConfig.name}</p>
          <p className="font-mono text-xs text-muted-foreground">{t("profile.subtitle")}</p>
        </div>
      </div>

      <dl className="grid gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both sm:grid-cols-2 md:col-span-2 lg:grid-cols-4">
        {PROFILE_ROWS.map(({ key, icon: Icon }) => (
          <div key={key} className="space-y-3 rounded-xl border bg-card p-5 shadow-sm">
            <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <Icon className="size-4 text-brand" />
              {t(`profile.${key}.label`)}
            </dt>
            <dd className="text-sm font-medium leading-relaxed">{t(`profile.${key}.value`)}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
