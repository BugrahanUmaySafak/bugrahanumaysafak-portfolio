"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function ThemeSwitch() {
  const { theme, resolvedTheme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const effectiveTheme =
    (theme === "system" ? systemTheme : resolvedTheme) ?? "light";

  const isDark = effectiveTheme === "dark";

  return (
    <div className="relative inline-flex items-center">
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
        className="peer"
      />

      <Sun
        className="
          pointer-events-none
          absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2
          text-zinc-900
          transition-opacity duration-200
          peer-data-[state=checked]:opacity-0
        "
      />

      <Moon
        className="
          pointer-events-none
          absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2
          text-zinc-50
          opacity-0
          transition-opacity duration-200
          peer-data-[state=checked]:opacity-100
        "
      />
    </div>
  );
}
