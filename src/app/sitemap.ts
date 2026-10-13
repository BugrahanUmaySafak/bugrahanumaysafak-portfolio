import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { PROJECTS } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { languageAlternates } from "@/lib/metadata";

const STATIC_PATHS = ["", "/about", "/contact", "/apps"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...PROJECTS.map((project) => `/projects/${project.slug}`),
  ];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      alternates: { languages: languageAlternates(path, siteConfig.url) },
    }))
  );
}
