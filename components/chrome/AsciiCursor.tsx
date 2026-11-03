"use client";
import { useEffect, useState } from "react";
import { useIsClient } from "@/lib/useIsClient";

export function AsciiCursor() {
  const isClient = useIsClient();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [show] = useState(() => (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches));
  useEffect(() => {
    if (!show) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [show]);
  if (!isClient || !show) return null;
  return (
    <div
      className="fixed z-[70] pointer-events-none text-acid text-[12px] select-none"
      style={{ left: pos.x + 12, top: pos.y + 12 }}
    >
      [+]
    </div>
  );
}
