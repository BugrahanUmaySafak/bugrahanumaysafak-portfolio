import * as React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function Eyebrow({
  children,
  className,
  lang,
}: {
  children: React.ReactNode;
  className?: string;
  lang?: string;
}) {
  return (
    <p
      lang={lang}
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-brand",
        className
      )}
    >
      <span aria-hidden="true" className="size-1.5 bg-brand" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className="max-w-2xl space-y-3">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading
          className={cn(
            "text-balance font-semibold tracking-tight",
            Heading === "h1"
              ? "text-3xl md:text-5xl"
              : "text-2xl md:text-4xl"
          )}
        >
          {title}
        </Heading>
        {description && (
          <p className="text-pretty text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
