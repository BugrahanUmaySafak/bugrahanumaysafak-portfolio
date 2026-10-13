import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { getSocialLinks } from "@/components/brand/social-links";
import { ContactVisual } from "../components/contact-visual";
import { CopyButton } from "../components/copy-button";

export function ContactPageWrapper() {
  const t = useTranslations("Contact");
  const socials = getSocialLinks();

  return (
    <main>
      <Section
        pattern
        containerClassName="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20"
      >
        <div className="space-y-12">
          <SectionHeading as="h1" eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

          <div className="max-w-2xl space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t("channels")}
            </h2>

            <ul className="space-y-3">
              {socials.map((social, index) => (
                <li
                  key={social.id}
                  className="animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
                  style={{ animationDelay: `${120 + index * 80}ms` }}
                >
                  <Card className="group relative py-0 transition-[translate,border-color] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50">
                    <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex min-w-0 items-center gap-4">
                        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background">
                          <social.icon aria-hidden className="size-5" />
                        </span>
                        <span className="min-w-0">
                          <a
                            href={social.href}
                            target={social.id === "email" ? undefined : "_blank"}
                            rel="noreferrer"
                            className="flex items-center gap-1 font-semibold outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline"
                          >
                            {social.label}
                            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </a>
                          <span className="block truncate font-mono text-sm text-muted-foreground">
                            {social.display}
                          </span>
                        </span>
                      </div>
                      {social.id === "email" && (
                        <div className="relative z-10">
                          <CopyButton value={social.display} />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactVisual />
      </Section>
    </main>
  );
}
