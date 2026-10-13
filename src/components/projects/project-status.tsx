import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const DOT_CLASS: Record<Project["status"], string> = {
  live: "bg-emerald-500",
  evolving: "bg-amber-500",
  offline: "bg-muted-foreground/50",
};

export function ProjectStatus({
  status,
  className,
}: {
  status: Project["status"];
  className?: string;
}) {
  const t = useTranslations("Projects.status");

  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1.5 bg-background font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
        className
      )}
    >
      <span className="relative flex size-1.5">
        {status === "live" && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
        )}
        <span className={cn("relative inline-flex size-1.5 rounded-full", DOT_CLASS[status])} />
      </span>
      {t(status)}
    </Badge>
  );
}
