import Image from "next/image";
import type { ReactNode } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

type BrowserFrameProps = FrameProps & {
  url?: string;
  caption?: string;
  bare?: boolean;
  imageClassName?: string;
};

export function BrowserFrame({
  src,
  alt,
  url,
  caption,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  bare = false,
  className,
  imageClassName,
}: BrowserFrameProps) {
  return (
    <Card
      className={cn(
        "gap-0 overflow-hidden py-0",
        bare && "rounded-none border-0 shadow-none",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b bg-muted/60 px-3 py-2">
        <div className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
        </div>
        {url && (
          <div className="mx-auto min-w-0 truncate rounded-md bg-background px-3 py-0.5 font-mono text-[10px] text-muted-foreground sm:text-[11px]">
            {url}
          </div>
        )}
        <div className="w-8.5 shrink-0" aria-hidden="true" />
      </div>

      <AspectRatio ratio={16 / 10} className="overflow-hidden bg-muted">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover object-top", imageClassName)}
        />
      </AspectRatio>

      {caption && (
        <CardFooter className="border-t px-4 py-3 text-sm text-muted-foreground">
          {caption}
        </CardFooter>
      )}
    </Card>
  );
}

export function PhoneShell({
  className,
  screenClassName,
  children,
}: {
  className?: string;
  screenClassName?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-65 rounded-[2.25rem] border-[7px] border-zinc-900 bg-zinc-900 dark:border-zinc-700 dark:bg-zinc-700",
        className
      )}
    >
      <AspectRatio ratio={390 / 844} className={cn("overflow-hidden rounded-[1.75rem] bg-muted", screenClassName)}>
        {children}
      </AspectRatio>
    </div>
  );
}

export function PhoneFrame({ src, alt, priority, sizes = "260px", className }: FrameProps) {
  return (
    <PhoneShell className={cn("shadow-xl", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top"
      />
    </PhoneShell>
  );
}
