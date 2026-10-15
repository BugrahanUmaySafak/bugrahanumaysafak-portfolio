import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";

export function ContactVisual() {
  const t = useTranslations("Contact.visual");
  const { email } = siteConfig.contact;

  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-sm animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both"
    >
      <div className="overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-pixel">
        <div className="flex items-center gap-3 border-b bg-muted/60 px-4 py-3">
          <div className="flex shrink-0 gap-1.5">
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
            <span className="size-2.5 rounded-full bg-foreground/15" />
          </div>
          <span className="mx-auto font-mono text-xs text-muted-foreground">
            <span className="text-brand">~/</span>contact
          </span>
          <span className="w-10.5 shrink-0" />
        </div>

        <div className="divide-y font-mono text-xs sm:text-sm">
          {email && (
            <p className="truncate px-4 py-3 sm:px-5">
              <span className="text-muted-foreground">{t("to")}</span> {email}
            </p>
          )}
          <p className="truncate px-4 py-3 sm:px-5">
            <span className="text-muted-foreground">{t("subject")}</span> {t("subjectValue")}
          </p>
          <div className="relative min-h-40 px-4 py-4 sm:min-h-56 sm:px-5">
            <div className="absolute inset-0 bg-pixel-grid opacity-40 mask-fade-b" />
            <p className="relative">
              {t("greeting")}
              <br />
              <span className="inline-block h-3.5 w-1.5 translate-y-0.5 animate-caret bg-foreground sm:h-4 sm:w-2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
