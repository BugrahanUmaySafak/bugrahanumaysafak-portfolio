import { ArrowUpRight, Award } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CERTIFICATIONS } from "@/data/certifications";
import { localize } from "@/lib/localize";
import { cn } from "@/lib/utils";
import { CertificatePreview } from "./certificate-preview";

export function CertificationList({ className }: { className?: string }) {
  const locale = useLocale();
  const t = useTranslations("Certifications");

  return (
    <ul className={cn("grid gap-4", className)}>
      {CERTIFICATIONS.map((cert) => {
        const IssuerIcon = cert.issuerIcon ?? Award;
        const date = localize(cert.date, locale);
        const issued = `${cert.issuer} · ${date}`;

        return (
          <li key={cert.id} className="reveal">
            <Card className="py-0">
              <CardContent
                className={cn(
                  "grid gap-6 p-4 sm:p-5 md:items-center md:gap-8",
                  cert.image && "md:grid-cols-[minmax(0,300px)_1fr]"
                )}
              >
                {cert.image && (
                  <CertificatePreview
                    title={cert.title}
                    issuer={issued}
                    image={cert.image}
                    pdf={cert.pdf}
                    credentialUrl={cert.credentialUrl}
                  />
                )}

                <div className="min-w-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background">
                      <IssuerIcon aria-hidden className="size-4" />
                    </span>
                    <div className="space-y-1">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        <span lang="en">{cert.issuer}</span> · {date}
                      </p>
                      <h3 className="text-lg font-semibold tracking-tight">{cert.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground md:text-base">
                    {localize(cert.description, locale)}
                  </p>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="rounded-md">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {(cert.credentialUrl || cert.credentialId) && (
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                      {cert.credentialUrl && (
                        <Button asChild variant="outline" size="sm">
                          <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                            {t("verify")}
                            <ArrowUpRight />
                          </a>
                        </Button>
                      )}
                      {cert.credentialId && (
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {t("credentialId")}: {cert.credentialId}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
