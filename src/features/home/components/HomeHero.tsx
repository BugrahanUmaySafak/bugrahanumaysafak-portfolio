"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations with delay
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(textRef.current?.children || [], {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
      })
        .from(
          imageRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          buttonsRef.current?.children || [],
          {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
      });

      // Wave animation for emoji
      gsap.to(".wave-emoji", {
        rotation: 20,
        duration: 0.6,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
        repeatDelay: 2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: "#tech",
      ease: "power2.inOut",
    });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                Merhaba <span className="wave-emoji inline-block">👋</span>
                <br />
                ben <span className="text-primary">Umay</span>
              </h1>

              <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl leading-relaxed">
                Full Stack geliştirici, modern web teknolojileriyle uçtan uca
                çözümler üreten yazılım tutkunu.
              </p>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="text-xl px-10 py-8 rounded-full shadow-2xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                onClick={scrollToNext}
              >
                Projelerimi Keşfet
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-xl px-10 py-8 rounded-full bg-transparent border-2 hover:bg-primary/5"
                onClick={() =>
                  gsap.to(window, {
                    duration: 1.5,
                    scrollTo: "#contact",
                    ease: "power2.inOut",
                  })
                }
              >
                İletişime Geç
              </Button>
            </div>
          </div>

          <div ref={imageRef} className="relative flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full animate-pulse" />
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Umay - Full Stack Developer"
                width={600}
                height={600}
                className="relative z-10 rounded-full shadow-2xl max-w-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className="w-8 h-12 border-2 border-primary rounded-full flex justify-center cursor-pointer"
          onClick={scrollToNext}
        >
          <div className="w-2 h-4 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
