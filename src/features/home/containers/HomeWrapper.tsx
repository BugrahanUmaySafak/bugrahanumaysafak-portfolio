"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HomeHero } from "../components/HomeHero";
import { HomeTech } from "../components/HomeTech";
import { HomeContact } from "../components/HomeContact";
import { useScrollNavigation } from "@/hooks/use-scroll-navigation";

const sections = [
  { id: "hero", Component: HomeHero },
  { id: "tech", Component: HomeTech },
  { id: "contact", Component: HomeContact },
];

export function HomeWrapper() {
  const { index, goToSection } = useScrollNavigation({
    totalSections: sections.length,
    animationDuration: 1000,
    swipeThreshold: 50, // Added swipe threshold for touch sensitivity
  });

  const CurrentSection = sections[index].Component;

  return (
    <div className="fixed inset-0 overflow-hidden">
      {" "}
      {/* This ensures full-page scroll behavior only for HomeWrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[index].id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute w-full h-full"
        >
          <CurrentSection />
        </motion.div>
      </AnimatePresence>
      {/* Dikey dot nav */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((section, i) => (
          <button
            key={i}
            onClick={() => goToSection(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to ${section.id} section`}
          />
        ))}
      </div>
    </div>
  );
}
