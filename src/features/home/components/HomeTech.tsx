"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/Container";
import { ChevronDown, Sparkles } from "lucide-react";
import { techSections } from "@/data/technologies";

export function HomeTech() {
  const [openSection, setOpenSection] = useState<string | null>("");

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Technologies
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Tech Stack & Tools</h2>
        </motion.div>

        <div className="space-y-4 mx-auto">
          {techSections.map(({ title, items }, index) => {
            const isOpen = openSection === title;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-card/50 backdrop-blur-sm border rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 ${
                  isOpen
                    ? "shadow-2xl shadow-primary/10 border-primary/20"
                    : "hover:border-primary/10"
                }`}
              >
                <button
                  onClick={() => toggleSection(title)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        isOpen ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                    <span className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
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
                      <div className="px-8 pb-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                          {items.map(({ name, icon }, itemIndex) => (
                            <motion.div
                              key={name}
                              initial={{ opacity: 0, scale: 0.8, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{
                                delay: itemIndex * 0.05,
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                              className="group/item flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-muted/30 transition-all duration-300 cursor-pointer"
                            >
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                <Image
                                  src={icon}
                                  alt={name}
                                  width={48}
                                  height={48}
                                  className="h-12 w-12 object-contain relative z-10 group-hover/item:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <span className="text-sm font-medium text-center group-hover/item:text-primary transition-colors">
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
    </section>
  );
}
