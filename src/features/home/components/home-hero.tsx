import Image from "next/image";

export function HomeHero() {
  return (
    <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
      <div className="space-y-4 md:space-y-6">
        <h1 className="flex items-center gap-2 text-2xl md:text-4xl font-bold tracking-tight">
          <span>Merhaba, Ben Umay</span>
          <span className="animate-wave">👋</span>
        </h1>

        <p className="max-w-xl text-base md:text-lg text-muted-foreground">
          Yazılım geliştirme, modern web teknolojileri ve kullanıcı odaklı
          arayüzler üzerinde çalışan bir yazılım mühendisiyim. Üretmeyi,
          öğrenmeyi ve paylaştıkça büyümeyi seviyorum.
        </p>
      </div>

      {/* Sağ taraf: görsel */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-56 md:w-72 lg:w-80 overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src="/pixel.webp" // public/pixel.webp içinde olmalı
            alt="Umay'in pixel tarzı portre görseli"
            width={1024}
            height={1536}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
