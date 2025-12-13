// src/features/home/components/home-contact.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function HomeContact() {
  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
      <Card className="h-full">
        <CardHeader className="space-y-3 md:space-y-4">
          <CardTitle className="text-xl md:text-2xl">
            Birlikte çalışalım mı?
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            Yeni projeler, iş fırsatları veya sadece teknik bir sohbet için
            ileride ayrı bir iletişim sayfası hazırlayacağım. Şimdilik tek tıkla
            o sayfaya yönlendirecek bir bağlantı bırakıyorum.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button asChild size="sm">
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>İletişim sayfasına git</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="h-full">
        <CardHeader className="space-y-2">
          <CardTitle className="text-sm md:text-base">
            Ne bekleyebilirsin?
          </CardTitle>
          <CardDescription className="text-xs md:text-sm">
            İletişim sayfasında proje detaylarını paylaşabileceğin basit bir
            form ve tercih ettiğin iletişim kanallarını seçebileceğin alanlar
            olacak.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2 text-xs md:text-sm text-muted-foreground">
          <p>• Projeni / fikrini kısaca anlatabileceğin bir form.</p>
          <p>• Dönüş yapılmasını istediğin kanalı seçme (e-posta vb.).</p>
          <p>• Net, kısa ve anlaşılır bir iletişim akışı.</p>
        </CardContent>
      </Card>
    </div>
  );
}
