// src/components/layout/footer.tsx
"use client";

import { Container } from "@/components/layout/container";
import { Link } from "@/i18n/navigation";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/technologies", label: "Tech Stack" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/80 backdrop-blur">
      <Container className="flex h-20 flex-col items-center justify-center gap-2 py-4 text-xs text-muted-foreground md:h-16 md:flex-row md:justify-between">
        <p className="text-center">
          © {year} Buğrahan Umay Şafak. All rights reserved.
        </p>

        <nav className="flex items-center gap-4 text-[11px] md:text-xs">
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
