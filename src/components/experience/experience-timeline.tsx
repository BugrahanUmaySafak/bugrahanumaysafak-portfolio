import { BriefcaseBusiness } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { ClientLogo } from "@/components/projects/client-logo";
import { TechBadgeList } from "@/components/tech/tech-badge";
import { Link } from "@/i18n/navigation";
import { EXPERIENCE } from "@/data/experience";
import { getProject } from "@/data/projects";
import { getTechnologies } from "@/data/technologies";
import { localize } from "@/lib/localize";
import { cn } from "@/lib/utils";

const VISIBLE_TECH_COUNT = 6;

export function ExperienceTimeline({ className }: { className?: string }) {
  const locale = useLocale();
  const t = useTranslations("Experience");

  return (
    <ol className={cn("relative space-y-10 border-l pl-6 md:pl-8", className)}>
      {EXPERIENCE.map((item) => {
        const projects = item.projectSlugs.flatMap((slug) => {
          const project = getProject(slug);
          return project ? [project] : [];
        });
        const technologies = getTechnologies([
          ...new Set(projects.flatMap((project) => project.technologies)),
        ]);
        const company = localize(item.company, locale);

        return (
          <li key={item.id} className="reveal relative">
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-7.25 top-1.5 size-2.5 border-2 border-background md:-left-9.25",
                item.current ? "bg-brand" : "bg-muted-foreground/60"
              )}
            />

            <div className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-8">
              <div className="space-y-1 md:pt-1">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {localize(item.period, locale)}
                </p>
                {[item.duration, item.location].map(
                  (detail) =>
                    detail && (
                      <p key={detail.en} className="text-xs text-muted-foreground">
                        {localize(detail, locale)}
                      </p>
                    )
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex shrink-0">
                    {item.logo ? (
                      <ClientLogo logo={item.logo} alt={company} className="size-9 rounded-lg" />
                    ) : (
                      <span className="inline-flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground">
                        <BriefcaseBusiness className="size-4" />
                      </span>
                    )}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {localize(item.role, locale)}
                    <span className="text-muted-foreground">
                      {" · "}
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        >
                          {company}
                        </a>
                      ) : (
                        company
                      )}
                    </span>
                  </h3>
                </div>

                <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                  {localize(item.description, locale)}
                </p>

                <dl className="space-y-3">
                  {projects.length > 0 && (
                    <div className="space-y-2">
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {t("projects")}
                      </dt>
                      <dd>
                        <ul className="flex flex-wrap gap-2">
                          {projects.map((project) => (
                            <li key={project.slug} className="flex">
                              <Badge
                                asChild
                                variant="outline"
                                className="rounded-md bg-background px-2.5 py-1 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                              >
                                <Link href={`/projects/${project.slug}`}>{project.name}</Link>
                              </Badge>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                  {technologies.length > 0 && (
                    <div className="space-y-2">
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {t("stack")}
                      </dt>
                      <dd>
                        <TechBadgeList technologies={technologies} max={VISIBLE_TECH_COUNT} />
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
