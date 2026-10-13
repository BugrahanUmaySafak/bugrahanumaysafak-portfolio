export const NAV_ITEMS = [
  { href: "/about", labelKey: "about" },
  { href: "/apps", labelKey: "apps" },
  { href: "/contact", labelKey: "contact" },
] as const;

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
