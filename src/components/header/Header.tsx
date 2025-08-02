import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { ModeToggle } from "@/components/ModeToggle";
import { ModeLanguage } from "@/components/ModeLanguage";

export default function Header() {
  return (
    <header className="bg-background/90 backdrop-blur-sm sticky top-0 z-50 border-b h-20">
      <Container className="flex items-center justify-between h-20">
        {/* Sol Logo */}
        <div className="text-xl font-bold text-foreground leading-tight">
          <div>My</div>
          <div className="-mt-1">
            Portfolio<span className="text-primary">...</span>
          </div>
        </div>

        {/* Orta Navigation */}
        <nav className="flex gap-2 md:gap-4">
          {["Home", "Projects", "Skills", "About", "Contact Me"].map(
            (label) => {
              const isActive = label === "Home"; // Aktif sayfa için örnek
              const isCTA = label === "Contact Me";

              return (
                <Button
                  key={label}
                  variant={isCTA ? "default" : isActive ? "secondary" : "ghost"}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    isCTA
                      ? "bg-primary/20 text-primary hover:bg-primary/30"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {label}
                </Button>
              );
            }
          )}
        </nav>

        {/* Sağ: Tema ve Dil Butonları */}
        <div className="flex gap-2 items-center">
          <ModeToggle />
          <ModeLanguage />
        </div>
      </Container>
    </header>
  );
}
