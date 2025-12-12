"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SUPPORTED_LOCALES = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
] as const;

export function LocaleSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = React.useTransition();

  const current =
    SUPPORTED_LOCALES.find((l) => l.code === locale) ?? SUPPORTED_LOCALES[0];

  const changeLocale = (nextLocale: string) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
      router.refresh();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="inline-flex items-center gap-2 bg-transparent"
          disabled={isPending}
        >
          <Globe className="h-4 w-4" />
          <span className="text-xs font-medium uppercase">{current.code}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {SUPPORTED_LOCALES.map((item) => (
          <DropdownMenuItem
            key={item.code}
            onClick={() => changeLocale(item.code)}
            className="flex items-center gap-2 text-sm"
            disabled={item.code === locale}
          >
            <span>{item.flag}</span>
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
