"use client";
import { motion } from "framer-motion";
import {
  itemFadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/framer-variants";
import { Container } from "@/components/Container";
import { experience } from "@/data/about";

export function AboutExperience() {
  return (
    <section className="h-full">
      <div
        className="
          min-h-full
          max-h-[calc(100dvh-80px)]
          supports-[height:100svh]:max-h-[calc(100svh-80px)]
          md:max-h-none
          overflow-y-auto md:overflow-y-visible
          overscroll-contain touch-pan-y
        "
      >
        <Container className="min-h-full py-16 sm:py-20 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="w-full"
          >
            <motion.h2
              variants={itemFadeInUpVariants}
              className="text-2xl sm:text-3xl font-bold mb-6"
            >
              Deneyim
            </motion.h2>

            <div className="space-y-6">
              {experience.map((exp) => (
                <motion.article
                  key={exp.company}
                  variants={itemFadeInUpVariants}
                  className="rounded-2xl border bg-card/50 backdrop-blur-sm p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {exp.role} — {exp.company}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period} • {exp.location}
                    </span>
                  </div>
                  <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm sm:text-base text-muted-foreground">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
