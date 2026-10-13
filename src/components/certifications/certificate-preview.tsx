"use client";

import Image from "next/image";
import { ArrowUpRight, Expand, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CertificatePreviewProps = {
  title: string;
  issuer: string;
  image: { src: string; width: number; height: number };
  pdf?: string;
  credentialUrl?: string;
};

export function CertificatePreview({
  title,
  issuer,
  image,
  pdf,
  credentialUrl,
}: CertificatePreviewProps) {
  const t = useTranslations("Certifications");
  const alt = t("imageAlt", { title });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={t("viewLabel", { title })}
          className="group relative block w-full overflow-hidden rounded-xl border bg-muted text-left shadow-sm outline-none transition-shadow hover:shadow-md focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <Image
            src={image.src}
            alt={alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 768px) 300px, 100vw"
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-md bg-background/90 px-2 py-1 text-[11px] font-medium shadow-sm backdrop-blur transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
            <Expand className="size-3" />
            {t("view")}
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="gap-5 p-4 sm:max-w-4xl sm:p-6" closeLabel={t("close")}>
        <DialogHeader className="pr-8 text-left">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{issuer}</DialogDescription>
        </DialogHeader>

        <Image
          src={image.src}
          alt={alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 860px, 100vw"
          loading="eager"
          className="mx-auto h-auto max-h-[calc(100dvh-14rem)] w-auto max-w-full rounded-lg border"
        />

        {(pdf || credentialUrl) && (
          <DialogFooter className="flex-row flex-wrap gap-3 sm:justify-start">
            {pdf && (
              <Button asChild>
                <a href={pdf} target="_blank" rel="noreferrer">
                  <FileText />
                  {t("openPdf")}
                </a>
              </Button>
            )}
            {credentialUrl && (
              <Button asChild variant="outline">
                <a href={credentialUrl} target="_blank" rel="noreferrer">
                  {t("verify")}
                  <ArrowUpRight />
                </a>
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
