import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "tr"],
  defaultLocale: "en",
  localePrefix: "always",
  alternateLinks: false,
});

export const { locales, defaultLocale } = routing;

export type Locale = (typeof routing.locales)[number];
