"use client";

import * as React from "react";
import Link from "next/link";
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

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  items: readonly NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  return (
    <Sheet>
      {/* Hamburger butonu (sadece mobil) */}
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      {/* Sağdan açılan panel */}
      <SheetContent side="right" className="md:hidden px-6 py-8">
        {/* A11y için – görünmez başlık/açıklama */}
        <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
        <SheetDescription className="sr-only">
          Navigation links and language/theme toggles
        </SheetDescription>

        {/* Merkezde nav + CTA + alt kontroller */}
        <div className="flex h-full flex-col items-center justify-center gap-10">
          {/* Nav linkleri + aralarına ince çizgi */}
          <nav className="flex flex-col items-center text-lg font-medium">
            {items.map((item, index) => (
              <React.Fragment key={item.href}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="py-1 text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {item.label}
                  </Link>
                </SheetClose>

                {index < items.length - 1 && (
                  <div className="my-4 h-0.5 w-24 bg-muted-foreground/40 dark:bg-muted-foreground/60 rounded-full" />
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Contact CTA – header’dakiyle aynı buton, mobilde menünün ortasında */}
          <SheetClose asChild>
            <Button asChild className="w-full max-w-xs">
              <Link href="#contact">Contact</Link>
            </Button>
          </SheetClose>

          {/* Alt kısım: Locale + Theme – yatay tek satır */}
          <div className="flex items-center justify-center gap-6">
            <LocaleSwitch />
            <ThemeSwitch />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
