import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

export type OgImage = { url: string; width: number; height: number; alt: string };

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export const DEFAULT_OG_IMAGE: OgImage = {
  url: "/og.png",
  ...OG_IMAGE_SIZE,
  alt: siteConfig.name,
};

export function projectOgImage(project: { slug: string; name: string }): OgImage {
  return { url: `/og/projects/${project.slug}.png`, ...OG_IMAGE_SIZE, alt: project.name };
}

export function ogLocale(locale: string) {
  return locale === "tr" ? "tr_TR" : "en_US";
}

export function languageAlternates(path: string, base = "") {
  return {
    ...Object.fromEntries(routing.locales.map((l) => [l, `${base}/${l}${path}`])),
    "x-default": `${base}${path || "/"}`,
  };
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE,
}: {
  locale: string;
  path: string;
  title?: string;
  description?: string;
  image?: OgImage;
}): Metadata {
  return {
    ...(title && { title }),
    ...(description && { description }),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: ogLocale(locale),
      alternateLocale: routing.locales.filter((l) => l !== locale).map(ogLocale),
      ...(title && { title }),
      ...(description && { description }),
      url: `/${locale}${path}`,
      images: [image],
    },
  };
}
