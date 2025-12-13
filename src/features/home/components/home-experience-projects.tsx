// src/features/home/components/home-experience-projects.tsx
"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getHomeExperienceProjects } from "@/features/home/lib/experience-projects";

export function HomeExperienceProjects() {
  const items = getHomeExperienceProjects();

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="space-y-2 md:space-y-3">
        <h2 className="text-xl md:text-3xl font-semibold tracking-tight">
          Deneyim & Projeler
        </h2>
        <p className="max-w-xl text-sm md:text-base text-muted-foreground">
          Son dönemde hem tam zamanlı hem de freelance olarak farklı projelerde
          çalıştım. Aşağıda kısa bir ön izleme yer alıyor; detayları proje
          sayfalarında daha kapsamlı şekilde anlatacağım.
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3 md:pb-4">
          <CardTitle className="text-sm md:text-base">
            Son deneyimlerimden seçtiklerim
          </CardTitle>
          <CardDescription className="text-xs md:text-sm">
            getClinic ve freelance projelerimden bazılarını öne çıkarıyorum.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 md:space-y-5">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={
                index === 0
                  ? "flex gap-4 md:gap-5"
                  : "flex gap-4 md:gap-5 border-t border-border/60 pt-4 md:pt-5"
              }
            >
              <div className="relative mt-0.5 h-14 w-14 md:h-16 md:w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-background">
                <Image
                  src={item.logoSrc}
                  alt={item.logoAlt}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-1.5 md:gap-2">
                <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  {item.typeLabel}
                  {item.period ? ` · ${item.period}` : ""}
                </span>

                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-semibold">
                    {item.title}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {item.subtitle}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button asChild size="sm">
        <Link href="/projects">Detaylı İncelemek İçin →</Link>
      </Button>
    </div>
  );
}
