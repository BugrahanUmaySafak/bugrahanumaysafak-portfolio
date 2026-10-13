import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/layout/section-heading";
import { getSocialLinks } from "@/components/brand/social-links";
import { Link } from "@/i18n/navigation";
import { LIVE_WEBSITE_COUNT, SECTOR_COUNT } from "@/data/projects";

export function HomeHero() {
  const t = useTranslations("Home.Hero");
  const profiles = getSocialLinks().filter((social) => social.id !== "email");

  const stats = [
    { value: String(LIVE_WEBSITE_COUNT), label: t("stats.websites") },
    { value: String(SECTOR_COUNT), label: t("stats.sectors") },
    { value: "1+", label: t("stats.experience") },
  ];

  return (
    <Section pattern className="border-b" containerClassName="grid items-center gap-12 md:grid-cols-[1.3fr_1fr] lg:gap-20">
      <div className="space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Eyebrow lang="en">{t("eyebrow")}</Eyebrow>

        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
          {t("greeting")} <span className="animate-wave">👋</span>
        </h1>

        <p className="max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
          {t("intro")}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link href="/#projects">
              {t("ctaProjects")}
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">{t("ctaContact")}</Link>
          </Button>
          <div className="flex items-center gap-1">
            {profiles.map((social) => (
              <Button key={social.id} asChild size="icon-lg" variant="ghost">
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <social.icon aria-hidden className="size-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <Separator className="max-w-lg" />

        <dl className="grid max-w-lg grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight md:text-3xl">{stat.value}</dd>
              <dd className="text-xs text-muted-foreground md:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-60 animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both sm:max-w-70 md:max-w-85">
        <div className="overflow-hidden rounded-2xl border-2 border-foreground bg-muted shadow-pixel">
          <Image
            src="/pixel.webp"
            alt={t("portraitAlt")}
            width={1024}
            height={1536}
            priority
            sizes="(min-width: 768px) 340px, 280px"
            className="h-auto w-full"
          />
        </div>

        <div className="absolute -bottom-5 -left-4 rounded-lg border bg-background/95 px-3 py-2 font-mono text-xs shadow-md backdrop-blur sm:-left-8">
          <span className="text-brand">~/</span>umay
          <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-caret bg-foreground" />
        </div>
      </div>
    </Section>
  );
}
