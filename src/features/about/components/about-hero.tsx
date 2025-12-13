// src/features/about/components/about-hero.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function AboutHero() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="space-y-3 md:space-y-4 max-w-2xl">
        <Badge
          variant="outline"
          className="text-[11px] uppercase tracking-wide"
        >
          About
        </Badge>

        <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
          <span className="inline-flex items-center gap-2">
            <span>Kimim ve neler yapıyorum?</span>
            {/* Buradaki emoji, Home’daki el sallama gibi ama farklı bir animasyonla */}
            <span className="inline-block animate-about-emoji">✨</span>
          </span>
        </h1>

        <p className="text-sm md:text-base text-muted-foreground">
          Ağırlıklı olarak frontend odaklı çalışan, modern web teknolojileriyle
          arayüz geliştirmeyi seven bir yazılım mühendisiyim. Tasarım,
          performans ve sürdürülebilir kod yapısını aynı anda düşünerek ürün
          geliştirmeye çalışıyorum.
        </p>
      </div>

      {/* Badge’ler + altındaki butonlar */}
      <div className="space-y-4 md:space-y-5">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="text-[11px] uppercase tracking-wide"
          >
            Frontend ağırlıklı
          </Badge>
          <Badge
            variant="secondary"
            className="text-[11px] uppercase tracking-wide"
          >
            React · Next.js · TypeScript
          </Badge>
          <Badge
            variant="secondary"
            className="text-[11px] uppercase tracking-wide"
          >
            UI/UX odaklı geliştirme
          </Badge>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="sm">
            <Link href="/projects">Projeleri gör</Link>
          </Button>

          <Button asChild size="sm" variant="outline">
            <Link href="/technologies">Kullandığım teknolojiler</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
