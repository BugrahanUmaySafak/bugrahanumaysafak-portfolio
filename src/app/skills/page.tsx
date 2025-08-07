"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { ChevronDown, Sparkles } from "lucide-react";
import { techSections } from "@/data/technologies";
import {
  fadeInUpVariants,
  itemFadeInUpVariants,
  itemScaleInSpringVariants,
} from "@/lib/framer-variants";

export default function SkillsPage() {
  const [openSection, setOpenSection] = useState<string | null>("");

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <div className="h-screen pt-20 pb-10 overflow-x-hidden">
      <Container>
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Technologies
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tech Stack & Tools
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projelerimde kullandığım teknolojiler ve araçlar. Her kategoride
            uzmanlaştığım teknolojileri keşfedin.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8">
          {techSections.map(({ title, items }, index) => {
            const isOpen = openSection === title;
            return (
              <motion.div
                key={title}
                initial="hidden"
                animate="visible"
                variants={itemFadeInUpVariants}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-card/50 backdrop-blur-sm border rounded-xl transition-all duration-500
                  ${
                    isOpen
                      ? "shadow-2xl shadow-primary/10 border-primary/20"
                      : "hover:border-primary/10 hover:shadow-2xl hover:shadow-primary/5"
                  }`}
              >
                <button
                  onClick={() => toggleSection(title)}
                  className="w-full flex items-center justify-between px-6 md:px-8 py-5 text-left transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-primary"
                          : "bg-muted-foreground/30 group-hover:bg-primary"
                      }`}
                    />
                    <span className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                      {title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                          {items.map(({ name, icon }, itemIndex) => (
                            <motion.div
                              key={name}
                              initial="hidden"
                              animate="visible"
                              variants={itemScaleInSpringVariants}
                              transition={{
                                delay: itemIndex * 0.05,
                              }}
                              className="group/item flex flex-col items-center gap-3 p-3 md:p-4 rounded-lg hover:bg-muted/30 transition-all duration-300 cursor-pointer"
                            >
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                <Image
                                  src={icon || "/placeholder.svg"}
                                  alt={name}
                                  width={56}
                                  height={56}
                                  className="h-12 w-12 md:h-14 md:w-14 object-contain max-w-full"
                                />
                              </div>
                              <span className="text-xs md:text-sm font-medium text-center text-muted-foreground group-hover/item:text-primary transition-colors">
                                {name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
