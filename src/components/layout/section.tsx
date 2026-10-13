import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

type SectionProps = {
  id?: string;
  as?: React.ElementType;
  className?: string;
  containerClassName?: string;
  pattern?: boolean;
  children: React.ReactNode;
};

export function Section({
  id,
  as: Tag = "section",
  className,
  containerClassName,
  pattern = false,
  children,
}: SectionProps) {
  return (
    <Tag id={id} className={cn("relative py-16 md:py-24", pattern && "overflow-hidden", className)}>
      {pattern && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-pixel-grid mask-fade-b opacity-70"
        />
      )}
      <Container className={cn("relative", containerClassName)}>{children}</Container>
    </Tag>
  );
}
