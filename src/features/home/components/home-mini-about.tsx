"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function HomeMiniAbout() {
  return (
    <div className="grid gap-6 md:gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
      {/* Sol taraf: metin */}
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-xl md:text-3xl font-semibold tracking-tight">
          Kısaca ben
        </h2>

        <p className="max-w-xl text-sm md:text-base text-muted-foreground">
          Modern web teknolojileriyle ölçeklenebilir, kullanıcı odaklı arayüzler
          geliştirmeyi seviyorum. Tasarım, performans ve temiz kod benim için
          aynı derecede önemli. Yeni şeyler öğrenmeyi ve öğrendiklerimi
          projelere dönüştürmeyi önceliklendiriyorum.
        </p>

        <p className="max-w-xl text-sm md:text-base text-muted-foreground">
          Frontend ağırlıklı çalışsam da, ihtiyaç olduğunda backend tarafında da
          çalışarak uçtan uca çözümler üretmeyi hedefliyorum.
        </p>

        <Button asChild size="sm" className="mt-2">
          <Link href="/about">Daha Fazlası →</Link>
        </Button>
      </div>

      {/* Sağ taraf: Card içinde odak alanları */}
      <Card className="mt-4 md:mt-0 text-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Odaklandığım alanlar
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-2 text-muted-foreground">
            <li>• React / Next.js ile modern frontend geliştirme</li>
            <li>• TypeScript, temiz ve sürdürülebilir kod</li>
            <li>• Tailwind CSS ile esnek, responsive tasarımlar</li>
            <li>• Yan projelerle sürekli öğrenme ve deneme</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
