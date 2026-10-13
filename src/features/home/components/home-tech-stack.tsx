import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/layout/section-heading";
import { TechBadgeList } from "@/components/tech/tech-badge";
import { TECHNOLOGY_CATEGORIES, getTechnologiesByCategory } from "@/data/technologies";

const PREVIEW_ICON_COUNT = 6;

export function HomeTechStack() {
  const t = useTranslations("Home.Tech");
  const tc = useTranslations("Technologies");

  return (
    <div className="space-y-10 md:space-y-12">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <div className="reveal divide-y rounded-xl border bg-card shadow-sm">
        {TECHNOLOGY_CATEGORIES.map((category, index) => {
          const items = getTechnologiesByCategory(category);

          return (
            <details key={category} className="disclosure group">
              <summary className="flex cursor-pointer list-none items-center gap-4 rounded-xl px-4 py-5 outline-none transition-colors hover:text-brand focus-visible:ring-[3px] focus-visible:ring-inset focus-visible:ring-ring/50 sm:px-6 [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-xs text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-semibold tracking-tight transition-colors group-open:text-brand md:text-lg">
                  {tc(`categories.${category}.title`)}
                </span>
                <span className="ml-auto hidden items-center gap-2.5 text-muted-foreground md:flex">
                  {items.slice(0, PREVIEW_ICON_COUNT).map((tech) => (
                    <tech.icon key={tech.id} aria-hidden className="size-4" />
                  ))}
                </span>
                <span className="ml-auto font-mono text-[11px] uppercase tracking-wider text-muted-foreground md:ml-4">
                  {tc("count", { count: items.length })}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                />
              </summary>

              <div className="space-y-4 px-4 pb-6 sm:px-6">
                <p className="text-sm text-muted-foreground md:text-base">
                  {tc(`categories.${category}.description`)}
                </p>
                <TechBadgeList technologies={items} />
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
