"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { ModeToggle } from "@/components/ModeToggle";
import { ModeLanguage } from "@/components/ModeLanguage";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const navigationItems = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Teknolojiler", href: "#tech" },
  { label: "Hakkımda", href: "#about" },
  { label: "Projeler", href: "#projects" },
  { label: "İletişim", href: "#contact", isCTA: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = navigationItems.map((item) =>
        item.href.replace("#", "")
      );
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: target, offsetY: 0 },
        ease: "power2.inOut",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-foreground leading-tight cursor-pointer hover:text-primary transition-colors duration-300"
            onClick={() => scrollToSection("#hero")}
          >
            <div>My</div>
            <div className="-mt-1">
              Portfolio<span className="text-primary">.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navigationItems.map(({ label, href, isCTA }) => {
              const isActive = activeSection === href.replace("#", "");

              return (
                <Button
                  key={label}
                  variant={isCTA ? "default" : isActive ? "secondary" : "ghost"}
                  className={`rounded-full px-6 py-3 text-lg font-medium transition-all duration-300 ${
                    isCTA
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 scale-105"
                      : isActive
                      ? "bg-primary/10 text-primary shadow-md"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => scrollToSection(href)}
                >
                  {label}
                </Button>
              );
            })}
          </nav>

          {/* Right side controls */}
          <div className="flex gap-3 items-center">
            <div className="hidden sm:flex gap-2">
              <ModeToggle />
              <ModeLanguage />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-12 h-12 rounded-full hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/98 backdrop-blur-xl">
            <div className="py-6">
              <nav className="flex flex-col gap-3">
                {navigationItems.map(({ label, href, isCTA }) => {
                  const isActive = activeSection === href.replace("#", "");

                  return (
                    <Button
                      key={label}
                      variant={
                        isCTA ? "default" : isActive ? "secondary" : "ghost"
                      }
                      className="justify-start text-lg py-4"
                      onClick={() => scrollToSection(href)}
                    >
                      {label}
                    </Button>
                  );
                })}
              </nav>

              <div className="flex gap-3 mt-6 pt-6 border-t">
                <ModeToggle />
                <ModeLanguage />
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
