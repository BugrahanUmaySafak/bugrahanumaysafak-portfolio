"use client";

import { Section } from "@/components/layout/section";
import { AboutHero } from "../components/about-hero";
import { AboutBackground } from "../components/about-background";
import { AboutWorkingStyle } from "../components/about-working-style";

export function AboutPageWrapper() {
  return (
    <>
      <Section as="main" className="items-start pt-6 md:items-center md:pt-0">
        <AboutHero />
      </Section>

      <Section className="items-start pt-6 md:items-center md:pt-0">
        <AboutBackground />
      </Section>

      <Section className="items-start pt-6 md:items-center md:pt-0">
        <AboutWorkingStyle />
      </Section>
    </>
  );
}
