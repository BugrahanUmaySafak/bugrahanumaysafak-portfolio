"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const LOCALE_ORDER: Locale[] = ["tr", "en"];

export function LocaleSwitch({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Common");
  const [isPending, startTransition] = React.useTransition();

  return (
    <ToggleGroup
      type="single"
      variant="outline"
      size="sm"
      value={locale}
      aria-label={t("changeLanguage")}
      disabled={isPending}
      onValueChange={(next) => {
        if (!next || next === locale) return;
        startTransition(() => {
          router.replace(pathname, { locale: next as Locale });
        });
      }}
      className={cn("font-mono", className)}
    >
      {LOCALE_ORDER.map((code) => (
        <ToggleGroupItem
          key={code}
          value={code}
          lang={code}
          aria-label={code === "tr" ? "Türkçe" : "English"}
          className="h-8 px-2.5 text-[11px] uppercase data-[state=on]:bg-foreground data-[state=on]:text-background"
        >
          {code}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
