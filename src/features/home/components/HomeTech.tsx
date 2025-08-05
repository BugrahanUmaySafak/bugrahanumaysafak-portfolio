"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Container } from "@/components/Container";
import { ChevronDown, Sparkles } from "lucide-react";
import { techSections } from "@/data/technologies";

export function HomeTech() {
  const [openSection, setOpenSection] = useState<string | null>("Frontend");
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards stagger animation
      gsap.from(cardsRef.current?.children || [], {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Floating animation for sparkles
      gsap.to(".sparkles-icon", {
        y: -15,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-muted/10 via-background to-muted/10"
    >
      <Container>
        <div ref={headerRef} className="text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="sparkles-icon w-8 h-8 text-primary" />
            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider">
              Technologies
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold">
            Tech Stack & <span className="text-primary">Tools</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Modern teknolojiler ve araçlarla güçlü çözümler geliştiriyorum
          </p>
        </div>

        <div ref={cardsRef} className="space-y-8 max-w-4xl mx-auto">
          {techSections.map(({ title, items }) => {
            const isOpen = openSection === title;

            return (
              <div
                key={title}
                className={`group relative bg-card/60 backdrop-blur-sm border-2 rounded-3xl transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 ${
                  isOpen
                    ? "shadow-2xl shadow-primary/15 border-primary/30 scale-105"
                    : "hover:border-primary/20 hover:scale-102"
                }`}
              >
                <button
                  onClick={() => toggleSection(title)}
                  className="w-full flex items-center justify-between px-10 py-8 text-left transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        isOpen
                          ? "bg-primary scale-150 shadow-lg shadow-primary/50"
                          : "bg-muted-foreground/40 group-hover:bg-primary/60"
                      }`}
                    />
                    <span className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                      {title}
                    </span>
                  </div>
                  <div
                    className={`transform transition-all duration-500 ${
                      isOpen ? "rotate-180 scale-110" : "group-hover:scale-110"
                    }`}
                  >
                    <ChevronDown className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-10 pb-10">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-10" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                      {items.map(({ name, icon }, itemIndex) => (
                        <div
                          key={name}
                          className="group/item flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-muted/40 transition-all duration-500 cursor-pointer hover:scale-110 hover:-translate-y-2"
                          style={{
                            animationDelay: `${itemIndex * 100}ms`,
                          }}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-all duration-500 blur-xl" />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                            <Image
                              src={
                                icon || "/placeholder.svg?height=56&width=56"
                              }
                              alt={name}
                              width={56}
                              height={56}
                              className="h-14 w-14 object-contain relative z-10 group-hover/item:scale-125 transition-transform duration-500"
                            />
                          </div>
                          <span className="text-sm font-semibold text-center group-hover/item:text-primary transition-colors duration-300">
                            {name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
