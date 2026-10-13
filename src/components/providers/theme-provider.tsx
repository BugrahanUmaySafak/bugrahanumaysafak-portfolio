"use client";

import * as React from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme";
const MEDIA = "(prefers-color-scheme: dark)";

const THEME_SCRIPT = `(()=>{try{var t=localStorage.getItem("${STORAGE_KEY}");var d=t==="dark"||(t!=="light"&&matchMedia("${MEDIA}").matches);var e=document.documentElement;e.classList.toggle("dark",d);e.style.colorScheme=d?"dark":"light"}catch(_){}})()`;

const listeners = new Set<() => void>();

function readStoredTheme(): Theme {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : "system";
  } catch {
    return "system";
  }
}

function resolveTheme(theme: Theme): ResolvedTheme {
  if (theme !== "system") return theme;
  return window.matchMedia(MEDIA).matches ? "dark" : "light";
}

function applyTheme(resolved: ResolvedTheme, disableTransitions = false) {
  const root = document.documentElement;
  let style: HTMLStyleElement | undefined;

  if (disableTransitions) {
    style = document.createElement("style");
    style.textContent = "*,*::before,*::after{transition:none!important}";
    document.head.appendChild(style);
  }

  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;

  if (style) {
    window.getComputedStyle(document.body).getPropertyValue("opacity");
    window.setTimeout(() => style?.remove(), 1);
  }
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia(MEDIA);
  const onSystemChange = () => {
    if (readStoredTheme() === "system") applyTheme(resolveTheme("system"));
    onChange();
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    applyTheme(resolveTheme(readStoredTheme()));
    onChange();
  };

  listeners.add(onChange);
  media.addEventListener("change", onSystemChange);
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(onChange);
    media.removeEventListener("change", onSystemChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  const theme = readStoredTheme();
  return `${theme}:${resolveTheme(theme)}`;
}

function getServerSnapshot() {
  return "system:light";
}

type ThemeOrigin = { x: number; y: number };

export function setTheme(theme: Theme, origin?: ThemeOrigin) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
  }

  const resolved = resolveTheme(theme);
  const root = document.documentElement;
  const changes = root.classList.contains("dark") !== (resolved === "dark");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (origin && changes && !reducedMotion && typeof document.startViewTransition === "function") {
    const radius = Math.hypot(
      Math.max(origin.x, window.innerWidth - origin.x),
      Math.max(origin.y, window.innerHeight - origin.y)
    );
    root.style.setProperty("--theme-x", `${origin.x}px`);
    root.style.setProperty("--theme-y", `${origin.y}px`);
    root.style.setProperty("--theme-r", `${radius}px`);
    root.dataset.themeTransition = "";

    const freeze = document.createElement("style");
    freeze.textContent =
      "*:not(.theme-icon),*::before,*::after{transition:none!important}";

    const transition = document.startViewTransition(() => {
      document.head.appendChild(freeze);
      applyTheme(resolved);
    });
    transition.finished.finally(() => {
      freeze.remove();
      delete root.dataset.themeTransition;
    });
  } else {
    applyTheme(resolved, true);
  }

  listeners.forEach((listener) => listener());
}

export function useTheme() {
  const snapshot = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [theme, resolvedTheme] = snapshot.split(":") as [Theme, ResolvedTheme];

  return { theme, resolvedTheme, setTheme };
}

const noopSubscribe = () => () => {};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isServerRender = React.useSyncExternalStore(
    noopSubscribe,
    () => false,
    () => true
  );

  React.useLayoutEffect(() => {
    applyTheme(resolveTheme(readStoredTheme()));
  }, []);

  return (
    <>
      {isServerRender && (
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
        />
      )}
      {children}
    </>
  );
}
