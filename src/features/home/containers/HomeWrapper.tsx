"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { HomeHero } from "../components/HomeHero";
import { HomeTech } from "../components/HomeTech";
import { HomeAbout } from "../components/HomeAbout";
import { HomeProjects } from "../components/HomeProjects";
import { HomeContact } from "../components/HomeContact";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export function HomeWrapper() {
  useEffect(() => {
    // Smooth scrolling setup with snap-to-section
    const sections = gsap.utils.toArray(".scroll-section");

    // Create scroll snap effect
    sections.forEach((section: any, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: section, offsetY: 0 },
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: section, offsetY: 0 },
            ease: "power2.inOut",
          });
        },
      });
    });

    // Section reveal animations
    sections.forEach((section: any, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div className="scroll-section">
        <HomeHero />
      </div>
      <div className="scroll-section">
        <HomeTech />
      </div>
      <div className="scroll-section">
        <HomeAbout />
      </div>
      <div className="scroll-section">
        <HomeProjects />
      </div>
      <div className="scroll-section">
        <HomeContact />
      </div>
    </div>
  );
}
