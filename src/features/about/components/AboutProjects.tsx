"use client";
import { motion } from "framer-motion";
import {
  itemFadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/framer-variants";
import { Container } from "@/components/Container";
import { projects } from "@/data/about";

export function AboutProjects() {
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
              Projeler
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((p) => (
                <motion.a
                  key={p.title}
                  variants={itemFadeInUpVariants}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border bg-card/50 backdrop-blur-sm p-5 sm:p-6 transition hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold group-hover:text-primary transition">
                    {p.title}
                  </h3>
                  <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm sm:text-base text-muted-foreground">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full border bg-background"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
