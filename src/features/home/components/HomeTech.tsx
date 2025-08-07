"use client";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { techSections } from "@/data/technologies";
import { fadeInLeftVariants, fadeInRightVariants } from "@/lib/framer-variants";

export function HomeTech() {
  const previewItems = techSections
    .flatMap((section) => section.items)
    .slice(0, 8);

  return (
    <section className="h-screen flex items-center justify-center bg-background">
      <Container className="h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeftVariants}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="text-primary w-5 h-5" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                Skills
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Deneyim Sahibi Olduğum <br /> Teknolojiler
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-md">
              Frontend, Backend ve DevOps alanlarında kullandığım modern
              teknolojileri detaylıca keşfetmek için hemen göz at.
            </p>
            <Button asChild className="rounded-full px-6 mt-2">
              <Link href="/skills">
                <ArrowRight className="w-4 h-4 mr-2" />
                Tüm Yetenekleri Gör
              </Link>
            </Button>
          </motion.div>

          {/* Sağ Alan: Teknoloji İkonları */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRightVariants}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-4 sm:grid-cols-4 gap-6 justify-center"
          >
            {previewItems.map(({ name, icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 p-4 border border-border rounded-2xl hover:bg-muted/20 transition-all"
              >
                <Image
                  src={icon || "/placeholder.svg"}
                  alt={name}
                  width={40}
                  height={40}
                  className="object-contain dark:text-white"
                />
                <span className="text-xs text-muted-foreground text-center">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
