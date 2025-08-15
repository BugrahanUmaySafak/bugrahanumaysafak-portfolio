"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  itemFadeInUpVariants,
  staggerContainerVariants,
} from "@/lib/framer-variants";

export function HomeHero() {
  return (
    <section className="h-full">
      <div
        className="
          min-h-full
          p-4 sm:p-6 md:p-8
          overflow-y-auto md:overflow-y-visible
          max-h-[calc(100dvh-80px)]
          supports-[height:100svh]:max-h-[calc(100svh-80px)]
          md:max-h-none
        "
      >
        <Container
          className="
            flex items-center
            min-h-[calc(100dvh-80px)]
            supports-[height:100svh]:min-h-[calc(100svh-80px)]
            py-6 md:py-0
          "
        >
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
            {/* Sol metin */}
            <motion.div
              className="flex-1 min-w-0 flex flex-col justify-center text-center md:text-left space-y-4 sm:space-y-6"
              initial="hidden"
              animate="visible"
              variants={fadeInLeftVariants}
              transition={{ delay: 0.15 }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainerVariants}
              >
                <motion.h1
                  variants={itemFadeInUpVariants}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight"
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
                    aria-hidden
                  >
                    👋
                  </motion.span>
                  , ben Umay
                </motion.h1>

                <motion.p
                  variants={itemFadeInUpVariants}
                  className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0"
                >
                  Full Stack geliştirici, modern web teknolojileriyle uçtan uca
                  çözümler üreten yazılım tutkunu.
                </motion.p>

                <motion.div
                  variants={itemFadeInUpVariants}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start"
                >
                  <Link
                    href="/projects"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors text-center"
                  >
                    Projelerimi Gör
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-border px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors text-center"
                  >
                    İletişime Geç
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Sağ görsel (desktop'ta tam sağ, padding boşluğu yok) */}
            <motion.div
              className="
                flex-1 min-w-0
                flex justify-center md:justify-end items-center
              "
              initial="hidden"
              animate="visible"
              variants={fadeInRightVariants}
              transition={{ delay: 0.25 }}
            >
              <div
                className="
                  relative w-full
                  max-w-[min(480px,80vw)]
                  sm:max-w-[min(420px,70vw)]
                  md:max-w-[min(520px,40vw)]
                  aspect-square
                  min-h-[220px]
                  /* Container'ın sağ padding'ini sıfırla: */
                  mr-[-1rem] sm:mr-[-1.5rem] lg:mr-[-2rem]
                "
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl"
                  aria-hidden
                  animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="/pixel.webp"
                  alt="Pixel Avatar"
                  fill
                  sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 40vw, (min-width: 640px) 70vw, 80vw"
                  className="rounded-2xl object-contain relative z-10"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
