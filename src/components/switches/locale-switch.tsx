"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

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
  const [mounted, setMounted] = React.useState(false);

  const [pendingLocale, setPendingLocale] = React.useState<string | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!pendingLocale) return;

    document.cookie = `locale=${pendingLocale}; path=/; max-age=31536000`;

    router.refresh();
  }, [pendingLocale, router]);

  if (!mounted) return null;

  const current =
    SUPPORTED_LOCALES.find((l) => l.code === locale) ?? SUPPORTED_LOCALES[0];

  const changeLocale = (nextLocale: string) => {
    if (nextLocale === locale) return;
    setPendingLocale(nextLocale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="inline-flex items-center gap-2"
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
          >
            <span>{item.flag}</span>
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
