import { ArrowRight, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eyebrow } from "@/components/layout/section-heading";
import { Link } from "@/i18n/navigation";

export function HomeApps() {
  const t = useTranslations("Apps");

  return (
    <Card className="reveal border-dashed bg-transparent py-0 shadow-none">
      <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-8">
        <div className="flex items-start gap-4">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background text-brand">
            <Smartphone className="size-5" />
          </span>
          <div className="max-w-xl space-y-2">
            <Eyebrow>{t("status")}</Eyebrow>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{t("title")}</h2>
            <p className="text-pretty text-sm text-muted-foreground md:text-base">
              {t("description")}
            </p>
          </div>
        </div>
        <Button asChild variant="outline" className="self-start md:self-auto">
          <Link href="/apps">
            {t("more")}
            <ArrowRight />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
