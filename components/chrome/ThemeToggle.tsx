"use client";
import { useState } from "react";
import { useIsClient } from "@/lib/useIsClient";

export function ThemeToggle() {
  const isClient = useIsClient();
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    typeof document !== "undefined" && document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  };
  return (
    <button
      type="button"
      suppressHydrationWarning
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="text-mute hover:text-acid transition-colors"
    >
      [{isClient ? theme : "theme"}]
    </button>
  );
}
