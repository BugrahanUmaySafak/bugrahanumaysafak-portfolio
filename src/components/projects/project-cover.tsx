import Image from "next/image";
import { useLocale } from "next-intl";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { getProjectCover, type Project } from "@/data/projects";
import { localize } from "@/lib/localize";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "./device-frames";

type ProjectCoverProps = {
  project: Project;
  priority?: boolean;
  sizes?: string;
  bare?: boolean;
  className?: string;
  imageClassName?: string;
  logoRatio?: number;
};

export function ProjectCover({
  project,
  priority,
  sizes,
  bare,
  className,
  imageClassName,
  logoRatio = 16 / 10,
}: ProjectCoverProps) {
  const locale = useLocale();
  const cover = getProjectCover(project);

  if (cover) {
    return (
      <BrowserFrame
        src={cover.src}
        alt={localize(cover.alt, locale)}
        url={cover.url}
        priority={priority}
        sizes={sizes}
        bare={bare}
        className={className}
        imageClassName={imageClassName}
      />
    );
  }

  if (!project.logo) return null;

  return (
    <Card
      className={cn(
        "gap-0 overflow-hidden py-0",
        bare && "rounded-none border-0 shadow-none",
        className
      )}
    >
      <AspectRatio
        ratio={logoRatio}
        className="flex items-center justify-center"
        style={{ backgroundColor: project.logo.background }}
      >
        <Image
          src={project.logo.src}
          alt={project.name}
          width={200}
          height={200}
          priority={priority}
          className={cn("w-2/5 max-w-55 transition-transform duration-500", imageClassName)}
        />
      </AspectRatio>
    </Card>
  );
}
