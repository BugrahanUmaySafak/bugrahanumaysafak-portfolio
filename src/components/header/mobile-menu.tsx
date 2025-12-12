"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocaleSwitch } from "@/components/switches/locale-switch";
import { ThemeSwitch } from "@/components/switches/theme-switch";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type NavItem = {
  href: string;
  labelKey: string;
};

type MobileMenuProps = {
  items: readonly NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const t = useTranslations("Navigation");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="md:hidden bg-transparent"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="md:hidden px-6 py-8">
        <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
        <SheetDescription className="sr-only">
          Navigation links and language/theme toggles
        </SheetDescription>

        <div className="flex h-full flex-col items-center justify-center gap-10">
          <nav className="flex flex-col items-center text-lg font-medium">
            {items.map((item, index) => (
              <React.Fragment key={item.href}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="py-1 text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {t(item.labelKey)}
                  </Link>
                </SheetClose>

                {index < items.length - 1 && (
                  <div className="my-4 h-0.5 w-24 bg-muted-foreground/40 dark:bg-muted-foreground/60 rounded-full" />
                )}
              </React.Fragment>
            ))}
          </nav>

          <SheetClose asChild>
            <Button asChild className="w-full max-w-xs">
              <Link href="#contact">{t("contact")}</Link>
            </Button>
          </SheetClose>

          <div className="flex items-center justify-center gap-6">
            <LocaleSwitch />
            <ThemeSwitch />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
