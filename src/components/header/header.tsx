"use client";

import * as React from "react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { LocaleSwitch } from "@/components/switches/locale-switch";
import { ThemeSwitch } from "@/components/switches/theme-switch";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Tech Stack" },
] as const; // Contact sadece CTA'da

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      {/* Mobilde daha yüksek, desktop'ta önceki gibi */}
      <Container className="flex h-24 md:h-20 items-center justify-between">
        {/* Sol: Avatar + isim + rol */}
        <div className="flex items-center gap-4 md:gap-5">
          {/* Avatar placeholder – mobilde de daha büyük */}
          <div className="flex h-14 w-14 md:h-12 md:w-12 items-center justify-center rounded-full border border-border bg-white dark:bg-black" />

          <div className="flex flex-col leading-tight">
            {/* İsim: mobilde text-lg, desktop'ta text-xl */}
            <span className="text-lg md:text-xl font-semibold">
              Bugrahan Umay Şafak
            </span>
            {/* Rol: mobilde text-sm, desktop'ta text-base */}
            <span className="text-sm md:text-base text-muted-foreground">
              Software Engineer
            </span>
          </div>
        </div>

        {/* Orta: nav (sadece md ve üstünde) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sağ: locale + theme + Contact CTA (sadece md ve üstü) */}
        <div className="hidden md:flex items-center gap-3">
          <LocaleSwitch />
          <ThemeSwitch />
          <Button asChild size="sm" className="ml-1">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile: hamburger + sheet menu */}
        <div className="md:hidden">
          <MobileMenu items={NAV_ITEMS} />
        </div>
      </Container>
    </header>
  );
}
