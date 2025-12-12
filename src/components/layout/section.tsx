"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

type SectionProps = {
  as?: React.ElementType;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

export function Section({
  as: Tag = "section",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <Tag
      className={cn(
        "min-h-[calc(100dvh-6rem)]",
        "md:min-h-[calc(100vh-5rem)]",
        "flex items-center",
        className
      )}
    >
      <Container className={cn("w-full", containerClassName)}>
        {children}
      </Container>
    </Tag>
  );
}
