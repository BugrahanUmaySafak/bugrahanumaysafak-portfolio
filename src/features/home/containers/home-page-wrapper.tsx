"use client";

import { Section } from "@/components/layout/section";
import { HomeHero } from "@/features/home/components/home-hero";
import { HomeMiniAbout } from "@/features/home/components/home-mini-about";
import { HomeTechnologiesSnapshot } from "../components/home-technologies-snapshot";
import { HomeExperienceProjects } from "../components/home-experience-projects";
import { HomeContact } from "../components/home-contact";

export function HomePageWrapper() {
  return (
    <>
      <Section as="main" className="items-start pt-6 md:items-center md:pt-0">
        <HomeHero />
      </Section>
      <Section as="main" className="items-start pt-4 md:pt-0 md:items-center ">
        <HomeMiniAbout />
      </Section>
      <Section as="main" className="items-start pt-4 md:pt-0 md:items-center ">
        <HomeExperienceProjects />
      </Section>
      <Section as="main" className="items-start pt-4 md:pt-0 md:items-center ">
        <HomeTechnologiesSnapshot />
      </Section>

      <Section as="main" className="items-start pt-4 md:pt-0 md:items-center ">
        <HomeContact />
      </Section>
    </>
  );
}
