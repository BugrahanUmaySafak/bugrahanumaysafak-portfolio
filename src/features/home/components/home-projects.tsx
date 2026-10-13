import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { FREELANCE_PROJECTS, FULLTIME_PROJECTS } from "@/data/projects";

const GROUPS = [
  { key: "freelance", projects: FREELANCE_PROJECTS },
  { key: "fulltime", projects: FULLTIME_PROJECTS },
] as const;

export function HomeProjects() {
  const t = useTranslations("Home.Projects");
  const tp = useTranslations("Projects");

  return (
    <div className="space-y-10 md:space-y-12">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <div className="space-y-14 md:space-y-16">
        {GROUPS.map(({ key, projects }) => (
          <div key={key} className="space-y-8">
            <GroupHeading
              title={tp(`groups.${key}.title`)}
              description={tp(`groups.${key}.description`)}
              count={projects.length}
            />
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  className="md:last:odd:col-span-2 md:last:odd:mx-auto md:last:odd:w-[calc(50%-0.75rem)]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GroupHeading({
  title,
  description,
  count,
}: {
  title: string;
  description: string;
  count: number;
}) {
  return (
    <div className="reveal space-y-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
          <p className="text-sm text-muted-foreground md:text-base">{description}</p>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {String(count).padStart(2, "0")}
        </span>
      </div>
      <Separator />
    </div>
  );
}
