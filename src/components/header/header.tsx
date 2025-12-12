"use client";

import { Container } from "@/components/layout/container";
import { LocaleSwitch } from "@/components/switches/locale-switch";
import { ThemeSwitch } from "@/components/switches/theme-switch";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const NAV_ITEMS = [
  { href: "/about", labelKey: "about" },
  { href: "/projects", labelKey: "projects" },
  { href: "/technologies", labelKey: "techStack" },
] as const;

export function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-24 md:h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Go to home"
          className="flex items-center gap-4 md:gap-5 group"
        >
          <div className="flex h-14 w-14 md:h-12 md:w-12 items-center justify-center rounded-full border border-border bg-white dark:bg-black transition-colors group-hover:border-foreground" />
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-semibold">
              Buğrahan Umay Şafak
            </span>
            <span className="text-sm md:text-base text-muted-foreground transition-colors group-hover:text-foreground">
              Software Engineer
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LocaleSwitch />
          <ThemeSwitch />
          <Button asChild size="sm" className="ml-1">
            <Link href="#contact">{t("contact")}</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <MobileMenu items={NAV_ITEMS} />
        </div>
      </Container>
    </header>
  );
}
