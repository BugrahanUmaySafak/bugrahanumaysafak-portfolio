import { Badge } from "@/components/ui/badge";
import type { Technology } from "@/data/technologies";
import { cn } from "@/lib/utils";

export function TechBadge({
  tech,
  className,
}: {
  tech: Technology;
  className?: string;
}) {
  const Icon = tech.icon;

  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1.5 rounded-md bg-background px-2 py-1 text-muted-foreground [&>svg]:size-3.5",
        className
      )}
    >
      <Icon aria-hidden />
      {tech.title}
    </Badge>
  );
}

export function TechBadgeList({
  technologies,
  max,
  className,
}: {
  technologies: Technology[];
  max?: number;
  className?: string;
}) {
  const visible = max ? technologies.slice(0, max) : technologies;
  const hiddenCount = technologies.length - visible.length;

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {visible.map((tech) => (
        <li key={tech.id} className="flex">
          <TechBadge tech={tech} />
        </li>
      ))}
      {hiddenCount > 0 && (
        <li className="flex">
          <Badge variant="outline" className="rounded-md border-dashed px-2 py-1 font-mono">
            +{hiddenCount}
          </Badge>
        </li>
      )}
    </ul>
  );
}
