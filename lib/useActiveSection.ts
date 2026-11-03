"use client";
import { useEffect, useState } from "react";
import { sections, type SectionId } from "./sections";

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const anchor = window.innerHeight * 0.38;
      let current: SectionId = "hero";

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= anchor) current = s.id;
      }

      if (window.scrollY < 40) current = "hero";
      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return active;
}
