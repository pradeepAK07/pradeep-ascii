"use client";
import { useEffect, useState } from "react";

export function AsciiProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const h = doc.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      setPct(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const ro = new ResizeObserver(onScroll);
    ro.observe(document.documentElement);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro.disconnect();
    };
  }, []);

  const blocks = 24;
  const filled = Math.round(pct * blocks);
  const bar = "█".repeat(filled) + "░".repeat(blocks - filled);
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-3 text-[10px] text-mute bg-paper/70 backdrop-blur-sm px-3 py-1 border border-dotted border-dim">
      <span className="tabular-nums">{bar}</span>
      <span className="tabular-nums text-ink">{Math.round(pct * 100)}%</span>
    </div>
  );
}
