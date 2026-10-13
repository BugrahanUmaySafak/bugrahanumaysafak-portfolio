"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { LocaleSwitch } from "@/components/switches/locale-switch";
import { ThemeSwitch } from "@/components/switches/theme-switch";
import { LogoMark } from "@/components/brand/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";
import { NAV_ITEMS, isActivePath } from "./nav-items";

export function Header() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="sticky top-0 z-60 border-b border-border/70 bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/70"
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <LogoMark
            blink
            className="size-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-semibold">{siteConfig.name}</span>
            <span className="truncate font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
              {siteConfig.title}
            </span>
          </span>
          <span className="sr-only">{t("home")}</span>
        </Link>

        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList>
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    active={active}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-muted-foreground",
                      active &&
                        "bg-brand text-brand-foreground hover:bg-brand hover:text-brand-foreground focus:bg-brand focus:text-brand-foreground"
                    )}
                  >
                    <Link href={item.href} aria-current={active ? "page" : undefined}>
                      {t(item.labelKey)}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitch />
          <ThemeSwitch />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeSwitch />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
