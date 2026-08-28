"use client";

import { useSyncExternalStore } from "react";
import * as motion from "motion/react-client";
import { HugeiconsIcon } from "@hugeicons/react";
import { MonitorIcon, SunIcon, MoonIcon } from "@hugeicons/core-free-icons";

export type ThemePreference = "system" | "light" | "dark";

const storageKey = "theme";
const themeChangeEvent = "themechange";

const themeOptions = [
  { value: "system", label: "System", icon: MonitorIcon },
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
] as const;

function getStoredTheme(): ThemePreference {
  if (typeof window === "undefined") {
    return "system";
  }

  const storedTheme = localStorage.getItem(storageKey);
  return storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : "system";
}

function subscribeThemeChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(themeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(themeChangeEvent, onStoreChange);
  };
}

function applyTheme(theme: ThemePreference) {
  const root = document.documentElement;

  if (theme === "system") {
    root.removeAttribute("data-theme");
    localStorage.removeItem(storageKey);
  } else {
    root.dataset.theme = theme;
    localStorage.setItem(storageKey, theme);
  }

  window.dispatchEvent(new Event(themeChangeEvent));
}

export default function ThemeSwitcher() {
  const theme = useSyncExternalStore<ThemePreference>(
    subscribeThemeChanges,
    getStoredTheme,
    () => "system",
  );

  return (
    <motion.div
      className="border-fg/20 bg-bg/50 inline-flex items-center gap-1 rounded-lg border p-1 text-sm"
      aria-label="Theme preference"
      initial={{ opacity: 0, filter: "blur(10px)", y: -2 }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          delay: 0.9,
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
    >
      {themeOptions.map((option) => {
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => applyTheme(option.value)}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors duration-200 ${
              isActive
                ? "bg-yellow text-bg"
                : "text-magenta hover:bg-fg/10 hover:text-yellow"
            }`}
            aria-label={`Use ${option.label} theme`}
            aria-pressed={isActive}
            title={option.label}
          >
            <HugeiconsIcon icon={option.icon} size={18} strokeWidth={1.75} />
          </button>
        );
      })}
    </motion.div>
  );
}
