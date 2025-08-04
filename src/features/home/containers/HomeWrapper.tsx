"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HomeHero } from "../components/HomeHero";
import { HomeTech } from "../components/HomeTech";

const sections = [
  { id: "hero", Component: HomeHero },
  { id: "tech", Component: HomeTech },
];

export function HomeWrapper() {
  const [index, setIndex] = useState(0);
  const isAnimatingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollTo = (dir: "next" | "prev") => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIndex((prev) => {
      const nextIndex =
        dir === "next"
          ? Math.min(prev + 1, sections.length - 1)
          : Math.max(prev - 1, 0);
      return nextIndex;
    });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 20) scrollTo("next");
      else if (e.deltaY < -20) scrollTo("prev");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        scrollTo("next");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        scrollTo("prev");
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const CurrentSection = sections[index].Component;

  return (
    <div className="h-screen overflow-hidden relative">
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

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isAnimatingRef.current) {
                setIndex(i);
                isAnimatingRef.current = true;
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
                timeoutRef.current = setTimeout(() => {
                  isAnimatingRef.current = false;
                }, 1000);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
