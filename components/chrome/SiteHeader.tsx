"use client";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/lib/useActiveSection";
import { sections } from "@/lib/sections";
import { startScroll, stopScroll } from "@/lib/lenis";

const nav = sections.filter((s) => s.id !== "hero");

export function SiteHeader() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    fmt();
    const id = setInterval(fmt, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (open) stopScroll();
    else startScroll();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const jump = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-dotted border-dim bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto max-w-[1180px] px-5 h-12 flex items-center justify-between gap-4 text-[12px]">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); jump("hero"); }}
          className="flex items-center gap-2 text-ink"
          aria-current={active === "hero" ? "page" : undefined}
        >
          <span className={active === "hero" ? "text-acid" : "text-mute"}>●</span>
          <span className="font-medium">pradeep.portfolio</span>
          <span className="text-mute hidden sm:inline">/ v0.1.0</span>
        </a>

        <nav className="hidden md:flex items-center gap-5" aria-label="Sections">
          {nav.map((n) => {
            const on = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => jump(n.id)}
                aria-current={on ? "true" : undefined}
                className={`relative transition-colors ${on ? "text-acid" : "text-mute hover:text-ink"}`}
              >
                <span className="text-[9px] mr-1 opacity-60">{n.n}</span>
                {n.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-acid transition-all ${on ? "w-full" : "w-0"}`}
                />
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 text-mute">
          <span className="hidden sm:inline tabular-nums">{time}</span>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-mute hover:text-acid transition-colors"
          >
            [{open ? "close" : "menu"}]
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-dotted border-dim bg-paper px-5 py-4"
          aria-label="Mobile sections"
        >
          <ul className="flex flex-col">
            {sections.map((s) => {
              const on = active === s.id;
              return (
                <li key={s.id} className="border-b border-dotted border-dim/60 last:border-0">
                  <button
                    onClick={() => jump(s.id)}
                    aria-current={on ? "true" : undefined}
                    className={`w-full text-left py-3 flex items-center gap-3 text-[13px] ${on ? "text-acid" : "text-mute"}`}
                  >
                    <span className="text-[10px] opacity-60">{s.n}</span>
                    {s.label}
                    {on && <span className="ml-auto text-[10px]">← current</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
