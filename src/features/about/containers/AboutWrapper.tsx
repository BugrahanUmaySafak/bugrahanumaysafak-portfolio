"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useScrollNavigation } from "@/hooks/use-scroll-navigation";
import { sectionTransitionVariants } from "@/lib/framer-variants";
import { AboutIntro } from "../components/AboutIntro";
import { AboutExperience } from "../components/AboutExperience";
import { AboutProjects } from "../components/AboutProjects";
import { AboutEducation } from "../components/AboutEducation";

const sections = [
  { id: "intro", Component: AboutIntro },
  { id: "experience", Component: AboutExperience },
  { id: "projects", Component: AboutProjects },
  { id: "education", Component: AboutEducation },
] as const;

export function AboutWrapper() {
  const { index, goToSection } = useScrollNavigation({
    totalSections: sections.length,
    animationDuration: 900,
    swipeThreshold: 50,
  });

  const Current = sections[index].Component;

  return (
    <div className="fixed inset-x-0 bottom-0 top-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[index].id}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={sectionTransitionVariants}
          className="absolute w-full h-full"
        >
          <Current />
        </motion.div>
      </AnimatePresence>

      {/* dots */}
      <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goToSection(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 ${
              i === index
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to ${s.id} section`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
