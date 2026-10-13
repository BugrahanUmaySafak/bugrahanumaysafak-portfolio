import { routing, type Locale } from "@/i18n/routing";

export type Localized<T = string> = Record<Locale, T>;

export function localize<T>(value: Localized<T>, locale: string): T {
  const key = (routing.locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  return value[key];
}
