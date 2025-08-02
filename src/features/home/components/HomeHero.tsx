"use client";

import Image from "next/image";
import { Container } from "@/components/Container";

export function HomeHero() {
  return (
    <section className="h-[calc(100vh-80px)] flex items-center">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-start h-full">
          {/* Sol: Yazı */}
          <div className="flex-1 flex flex-col justify-center text-left space-y-4 h-full min-w-[120px]">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Merhaba <span className="wave">👋</span>, ben Umay
            </h1>
            <p className="text-muted-foreground text-lg">
              Full Stack geliştirici, modern web teknolojileriyle uçtan uca
              çözümler üreten yazılım tutkunu.
            </p>
          </div>

          {/* Sağ: Görsel */}
          <div className="flex-1 flex justify-end items-center h-full min-w-[120px]">
            <Image
              src="/pixel.webp"
              alt="Pixel Avatar"
              width={400}
              height={400}
              className="rounded-xl object-contain max-h-[500px] w-auto"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
