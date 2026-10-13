import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eyebrow } from "@/components/layout/section-heading";
import { Link } from "@/i18n/navigation";

export function ContactCta() {
  const t = useTranslations("ContactCta");

  return (
    <Card className="reveal relative overflow-hidden rounded-3xl py-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-pixel-grid opacity-60 mask-[radial-gradient(ellipse_60%_80%_at_100%_100%,black,transparent)]"
      />
      <CardContent className="relative flex flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-12 md:py-16">
        <div className="max-w-2xl space-y-4">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
          <p className="text-pretty text-muted-foreground md:text-lg">{t("description")}</p>
        </div>
        <Button asChild size="lg" className="self-start md:self-auto">
          <Link href="/contact">
            {t("button")}
            <ArrowRight />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
