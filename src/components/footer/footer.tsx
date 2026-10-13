import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { LogoMark } from "@/components/brand/logo";
import { getSocialLinks } from "@/components/brand/social-links";
import { NAV_ITEMS } from "@/components/header/nav-items";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");
  const year = new Date().getFullYear();
  const socials = getSocialLinks();

  return (
    <footer className="border-t bg-surface">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <LogoMark className="size-8" />
            <span className="text-sm font-semibold">{siteConfig.name}</span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">{t("tagline")}</p>
        </div>

        <nav aria-label={t("pages")} className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t("pages")}
          </p>
          <ul className="flex flex-col items-start gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="h-7 px-0 text-muted-foreground hover:text-foreground"
                >
                  <Link href={item.href}>{nav(item.labelKey)}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {socials.length > 0 && (
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t("elsewhere")}
            </p>
            <ul className="flex flex-col items-start gap-1">
              {socials.map((social) => (
                <li key={social.id}>
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="h-7 px-0 text-muted-foreground hover:text-foreground has-[>svg]:px-0"
                  >
                    <a
                      href={social.href}
                      target={social.id === "email" ? undefined : "_blank"}
                      rel="noreferrer"
                    >
                      <social.icon aria-hidden className="size-4" />
                      {social.label}
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>

      <Separator />

      <Container className="flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}. {t("rights")}
        </p>
        <p className="font-mono">{t("builtWith")}</p>
      </Container>
    </footer>
  );
}
