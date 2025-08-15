"use client";
import { motion } from "framer-motion";
import {
  itemFadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/framer-variants";
import { Container } from "@/components/Container";
import { education } from "@/data/about";

export function AboutEducation() {
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
              Eğitim
            </motion.h2>

            <div className="grid grid-cols-1 gap-6">
              {education.map((e) => (
                <motion.div
                  key={e.school}
                  variants={itemFadeInUpVariants}
                  className="rounded-2xl border bg-card/50 backdrop-blur-sm p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{e.school}</h3>
                      <p className="text-muted-foreground">{e.program}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {e.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
