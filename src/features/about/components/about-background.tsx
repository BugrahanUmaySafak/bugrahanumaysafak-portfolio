// src/features/about/components/about-background.tsx
"use client";

import { Link } from "@/i18n/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code2, Layers, Rocket } from "lucide-react";

export function AboutBackground() {
  return (
    <div className="space-y-8 md:space-y-10">
      <div className="grid gap-6 md:gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <Card className="h-full">
          <CardHeader className="space-y-3">
            <CardTitle>Arka planım</CardTitle>
            <CardDescription>
              Frontend ağırlıklı, gerektiğinde backend tarafına da dokunan bir
              yolculuk.
            </CardDescription>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-[11px] uppercase">
                Frontend
              </Badge>
              <Badge variant="secondary" className="text-[11px] uppercase">
                UI & DX odaklı
              </Badge>
              <Badge variant="secondary" className="text-[11px] uppercase">
                Sürekli öğrenme
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 md:space-y-5 text-sm md:text-base text-muted-foreground">
            {/* Bölüm 1 */}
            <div className="flex gap-3">
              <div className="mt-1">
                <Code2 className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">
                  Modern web teknolojileri
                </p>
                <p>
                  React ve Next.js ekosistemine odaklanarak, yeniden
                  kullanılabilir ve okunabilir component yapıları kurmayı
                  önemsiyorum. TypeScript benim için neredeyse vazgeçilmez.
                </p>
              </div>
            </div>

            <Separator />

            {/* Bölüm 2 */}
            <div className="flex gap-3">
              <div className="mt-1">
                <Layers className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">
                  Tasarım & mimari düşünme
                </p>
                <p>
                  Tasarım sistemleri, state yönetimi ve proje mimarisi
                  konularını birlikte ele alarak, ölçeklenebilir ve
                  sürdürülebilir yapılar kurmaya çalışıyorum.
                </p>
              </div>
            </div>

            <Separator />

            {/* Bölüm 3 */}
            <div className="flex gap-3">
              <div className="mt-1">
                <Rocket className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">
                  Yan projeler & deneyler
                </p>
                <p>
                  Yeni araçlar denemeyi, küçük yan projelerle öğrendiklerimi
                  test etmeyi ve bunları gerçek problemlere uygulamayı
                  seviyorum.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sağ Card: özet profil snapshot */}
        <Card className="h-full">
          <CardHeader className="pb-3">
            <CardTitle>Özet profil</CardTitle>
            <CardDescription>
              Kısaca kimim, nelerle ilgileniyorum?
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 text-xs md:text-sm text-muted-foreground">
            <div className="space-y-1">
              <p className="font-medium text-foreground">Rol</p>
              <p>Software Engineer · Frontend ağırlıklı</p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-foreground">Odak alanlar</p>
              <p>
                React, Next.js, TypeScript, Tailwind CSS, arayüz mimarisi,
                performans ve developer experience.
              </p>
            </div>

            <Separator />

            <div className="space-y-1">
              <p className="font-medium text-foreground">Şu an</p>
              <p>
                Üzerinde çalıştığım projeleri geliştirirken, aynı zamanda yeni
                teknolojileri deneyip teknik olarak derinleşmeye odaklanıyorum.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-foreground">
                İlgilendiğim başlıklar
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Design systems</Badge>
                <Badge variant="outline">Component mimarisi</Badge>
                <Badge variant="outline">Performans</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-1">
              <p className="font-medium text-foreground">Son projeler</p>
              <p>
                Detayları{" "}
                <Link
                  href="/projects"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Projects
                </Link>{" "}
                sayfasında daha kapsamlı olarak anlatmayı planlıyorum.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
