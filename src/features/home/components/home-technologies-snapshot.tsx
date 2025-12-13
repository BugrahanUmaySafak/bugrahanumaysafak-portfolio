"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getHomeTechnologySnapshot } from "@/features/home/lib/technologies-snapshot";

export function HomeTechnologiesSnapshot() {
  const groups = getHomeTechnologySnapshot();

  return (
    <div className="space-y-8 md:space-y-10">
      <div className="space-y-4 md:space-y-5">
        <h2 className="text-xl md:text-3xl font-semibold tracking-tight">
          Sık kullandığım teknolojiler
        </h2>

        <p className="max-w-xl text-sm md:text-base text-muted-foreground">
          Ağırlıklı olarak modern frontend teknolojileri, Node.js tabanlı
          backend çözümleri ve günlük iş akışımı hızlandıran araçlarla
          çalışıyorum. Aşağıda en sık kullandığım bazı teknolojileri
          görebilirsin.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <div key={group.category} className="space-y-3">
            <h3 className="text-xs font-semibold uppercase text-muted-foreground">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item.id}
                  variant="outline"
                  className="px-3 py-1 text-xs md:text-sm"
                >
                  {item.title}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Button asChild size="sm">
        <Link href="/technologies">Tüm Teknolojiler →</Link>
      </Button>
    </div>
  );
}
