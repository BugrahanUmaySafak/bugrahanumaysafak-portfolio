"use client";

import { Section } from "@/components/layout/section";
import { HomeHero } from "@/features/home/components/home-hero";

export function HomePageWrapper() {
  return (
    <Section as="main" className="items-start pt-6 md:items-center md:pt-0">
      <HomeHero />
    </Section>
  );
}
