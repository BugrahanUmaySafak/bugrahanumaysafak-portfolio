import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";
import { getTechnologies } from "@/data/technologies";
import { TechBadgeList } from "@/components/tech/tech-badge";
import { localize } from "@/lib/localize";
import { cn } from "@/lib/utils";
import { ProjectCover } from "./project-cover";
import { ProjectStatus } from "./project-status";

const VISIBLE_TECH_COUNT = 4;

export function ProjectCard({
  project,
  priority,
  className,
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  const locale = useLocale();
  const t = useTranslations("Projects");
  const technologies = getTechnologies(project.technologies);

  return (
    <Card
      className={cn(
        "reveal group relative gap-0 overflow-hidden py-0 transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50",
        className
      )}
    >
      <ProjectCover
        project={project}
        bare
        priority={priority}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="border-b"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <CardHeader className="gap-3 px-5 pt-5 md:px-6 md:pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {localize(project.sector, locale)} ·{" "}
            {project.period ? localize(project.period, locale) : t(`kind.${project.kind}`)}
          </span>
          <ProjectStatus status={project.status} />
        </div>

        <CardTitle className="flex items-center gap-1.5 text-lg tracking-tight md:text-xl">
          <h4>
            <Link
              href={`/projects/${project.slug}`}
              className="outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline"
            >
              {project.name}
            </Link>
          </h4>
          <ArrowUpRight className="size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </CardTitle>

        <CardDescription className="line-clamp-3">
          {localize(project.summary, locale)}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-auto px-5 pb-5 pt-4 md:px-6 md:pb-6">
        <TechBadgeList technologies={technologies} max={VISIBLE_TECH_COUNT} />
      </CardFooter>
    </Card>
  );
}
