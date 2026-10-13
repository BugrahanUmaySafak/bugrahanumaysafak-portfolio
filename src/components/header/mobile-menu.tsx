"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LocaleSwitch } from "@/components/switches/locale-switch";
import { getSocialLinks } from "@/components/brand/social-links";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, isActivePath } from "./nav-items";

const MENU_ITEMS = [{ href: "/", labelKey: "home" } as const, ...NAV_ITEMS];

export function MobileMenu() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [lastPathname, setLastPathname] = React.useState(pathname);
  const socials = getSocialLinks();

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={open ? t("closeMenu") : t("openMenu")}
        >
          <span aria-hidden="true" className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
                open && "translate-y-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-opacity duration-200",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition-transform duration-300",
                open && "-translate-y-1.5 -rotate-45"
              )}
            />
          </span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="top"
        showCloseButton={false}
        className="top-16 max-h-[calc(100dvh-4rem)] gap-0 overflow-y-auto md:hidden"
        overlayClassName="top-16 md:hidden"
      >
        <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
        <SheetDescription className="sr-only">{t("menuDescription")}</SheetDescription>

        <div className="flex flex-col gap-6 px-4 pb-6 pt-2 sm:px-6">
          <nav aria-label={t("menu")}>
            <ul>
              {MENU_ITEMS.map((item, index) => {
                const active = isActivePath(pathname, item.href);
                const highlighted = active && item.href !== "/";

                return (
                  <li
                    key={item.href}
                    className="animate-menu-item"
                    style={{ "--i": index } as React.CSSProperties}
                  >
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-baseline gap-4 py-4 text-3xl font-semibold tracking-tight transition-colors",
                          active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                          highlighted && "-mx-2 rounded-xl bg-brand px-2 text-brand-foreground"
                        )}
                      >
                        <span
                          className={cn(
                            "font-mono text-xs text-brand",
                            highlighted && "text-brand-foreground"
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {t(item.labelKey)}
                      </Link>
                    </SheetClose>
                    <Separator />
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className="animate-menu-item flex items-center justify-between gap-4"
            style={{ "--i": MENU_ITEMS.length } as React.CSSProperties}
          >
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>{t("language")}</span>
              <LocaleSwitch />
            </div>
            <div className="flex items-center gap-1">
              {socials.map((social) => (
                <Button key={social.id} asChild variant="ghost" size="icon-sm">
                  <a
                    href={social.href}
                    target={social.id === "email" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon aria-hidden className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <SheetClose asChild>
            <Button variant="outline" size="sm" className="sr-only focus:not-sr-only">
              {t("closeMenu")}
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
