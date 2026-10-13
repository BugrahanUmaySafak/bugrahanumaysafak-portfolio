"use client";

import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "@/components/providers/theme-provider";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("Common");

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="relative"
          aria-label={t("toggleTheme")}
          onClick={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const origin =
              event.clientX || event.clientY
                ? { x: event.clientX, y: event.clientY }
                : { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
            setTheme(resolvedTheme === "dark" ? "light" : "dark", origin);
          }}
        >
          <Sun className="theme-icon size-4 rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="theme-icon absolute size-4 rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{t("toggleTheme")}</TooltipContent>
    </Tooltip>
  );
}
