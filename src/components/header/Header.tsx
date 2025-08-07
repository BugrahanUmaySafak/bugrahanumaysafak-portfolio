"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { ModeToggle } from "@/components/ModeToggle";
import { ModeLanguage } from "@/components/ModeLanguage";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { mobileMenuVariants } from "@/lib/framer-variants";

const navigationItems = [
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact Me", href: "/contact", isCTA: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <header className="bg-background/90 backdrop-blur-sm top-0 z-50 border-b h-20 sticky">
      <Container className="flex items-center justify-between h-20">
        <Link
          href="/"
          className="text-xl font-bold text-foreground leading-tight"
        >
          <div>My</div>
          <div className="-mt-1">
            Portfolio<span className="text-primary">...</span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-2 lg:gap-4">
          {navigationItems.map(({ label, href, isCTA }) => {
            const isActive = currentPath === href;
            return (
              <Button
                key={label}
                variant={isCTA ? "default" : isActive ? "secondary" : "ghost"}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isCTA
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-muted-foreground hover:text-primary"
                }`}
                asChild
              >
                <a href={href}>{label}</a>
              </Button>
            );
          })}
        </nav>
        <div className="flex gap-2 items-center">
          <div className="hidden sm:flex gap-2">
            <ModeToggle />
            <ModeLanguage />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </Container>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden border-t bg-background/95 backdrop-blur-sm overflow-hidden" // Added overflow-hidden
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-2">
                {navigationItems.map(({ label, href, isCTA }) => {
                  const isActive = currentPath === href;
                  return (
                    <Button
                      key={label}
                      variant={
                        isCTA ? "default" : isActive ? "secondary" : "ghost"
                      }
                      className="justify-start"
                      asChild
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <a href={href}>{label}</a>
                    </Button>
                  );
                })}
              </nav>
              <div className="flex gap-2 mt-4 pt-4 border-t">
                <ModeToggle />
                <ModeLanguage />
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
