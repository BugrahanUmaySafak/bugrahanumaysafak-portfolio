"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";

export function HomeHero() {
  return (
    <section className="h-screen flex items-center justify-center overflow-hidden">
      <Container className="h-full flex items-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
          <motion.div
            className="flex-1 flex flex-col justify-center text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Merhaba{" "}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.span>
              , ben Umay
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Full Stack geliştirici, modern web teknolojileriyle uçtan uca
              çözümler üreten yazılım tutkunu.
            </motion.p>
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                Projelerimi Gör
              </button>
              <button className="border border-border px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors">
                İletişime Geç
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center md:justify-end items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Image
                src="/pixel.webp"
                alt="Pixel Avatar"
                width={400}
                height={400}
                className="rounded-2xl object-contain max-h-[400px] w-auto relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
