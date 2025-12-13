// src/features/about/components/about-working-style.tsx
"use client";

import { Link } from "@/i18n/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  MessageSquare,
  Workflow,
  ArrowRight,
} from "lucide-react";

export function AboutWorkingStyle() {
  return (
    <div className="space-y-8 md:space-y-10">
      <div className="grid gap-6 md:gap-8 md:grid-cols-2 md:items-start">
        {/* Card: nasıl çalışırım */}
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Nasıl çalışırım?</CardTitle>
            <CardDescription>
              Net iletişim, düzenli feedback ve ölçülebilir çıktılar.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 text-xs md:text-sm text-muted-foreground">
            <div className="space-y-3">
              <div className="flex gap-3 rounded-lg bg-muted/60 px-3 py-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                <div className="space-y-0.5">
                  <p className="font-medium text-foreground">
                    Problem odaklı yaklaşım
                  </p>
                  <p>
                    Önce problemi doğru tanımlayıp kapsamı netleştiriyorum.
                    Gerektiğinde iş sahipleriyle birlikte detayları
                    sadeleştiriyorum.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-lg bg-muted/60 px-3 py-2">
                <MessageSquare className="mt-0.5 h-4 w-4 text-sky-500" />
                <div className="space-y-0.5">
                  <p className="font-medium text-foreground">Şeffaf iletişim</p>
                  <p>
                    Tasarım, ürün ve geliştirme ekipleriyle düzenli iletişimi
                    önemsiyorum; roadmap ve öncelikler konusunda net olmayı
                    tercih ederim.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-lg bg-muted/60 px-3 py-2">
                <Workflow className="mt-0.5 h-4 w-4 text-violet-500" />
                <div className="space-y-0.5">
                  <p className="font-medium text-foreground">
                    Uçtan uca düşünme
                  </p>
                  <p>
                    Sadece ekrana değil; veri akışı, performans, bakım maliyeti
                    ve geliştirici deneyimini birlikte değerlendiririm.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <p>
              Kod kalitesini, testleri ve dokümantasyonu sürecin ekstra işi
              değil, doğal parçası olarak görmeye çalışıyorum.
            </p>
          </CardContent>
        </Card>

        {/* Card: sonraki adım / diğer sayfalara yönlendirme */}
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Sonraki adım</CardTitle>
            <CardDescription>
              Beni daha iyi tanımak için diğer sayfalara göz atabilirsin.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 text-xs md:text-sm text-muted-foreground">
            <div className="space-y-3">
              <div className="rounded-lg border bg-background/60 p-3">
                <p className="font-medium text-foreground mb-1">
                  Projeleri incele
                </p>
                <p>
                  Gerçek projeler üzerinden nasıl kararlar verdiğimi görmek için{" "}
                  <Link
                    href="/projects"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Projects
                  </Link>{" "}
                  sayfasını ziyaret edebilirsin.
                </p>
              </div>

              <div className="rounded-lg border bg-background/60 p-3">
                <p className="font-medium text-foreground mb-1">
                  Teknoloji tercihleri
                </p>
                <p>
                  Hangi teknolojileri nerede, neden tercih ettiğimi{" "}
                  <Link
                    href="/technologies"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Technologies
                  </Link>{" "}
                  sayfasında daha detaylı olarak toplamayı planlıyorum.
                </p>
              </div>

              <div className="rounded-lg border bg-background/60 p-3">
                <p className="font-medium text-foreground mb-1">
                  İlerideki iletişim kanalı
                </p>
                <p>
                  Ayrı bir{" "}
                  <Link
                    href="/contact"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Contact
                  </Link>{" "}
                  sayfası üzerinden proje / iş fırsatı detaylarını doğrudan
                  paylaşabileceksin.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5"
                >
                  <span>Projeleri gör</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="sm" variant="outline">
                <Link
                  href="/technologies"
                  className="inline-flex items-center gap-1.5"
                >
                  <span>Teknolojiler</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
