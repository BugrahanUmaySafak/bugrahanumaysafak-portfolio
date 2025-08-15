"use client";
import { motion } from "framer-motion";
import {
  itemFadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/framer-variants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { bio } from "@/data/about";

export function AboutIntro() {
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full"
          >
            <motion.div
              variants={itemFadeInUpVariants}
              className="md:col-span-2 order-2 md:order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {bio.name}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {bio.title} • {bio.location}
              </p>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-3xl">
                {bio.summary}
              </p>
              <div className="mt-6">
                <Button asChild className="rounded-full px-6">
                  <Link href="/contact">İletişime geç</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
