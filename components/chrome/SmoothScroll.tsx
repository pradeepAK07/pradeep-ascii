"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { registerLenis } from "@/lib/lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, autoResize: true });
    registerLenis(lenis);
    let raf = 0;

    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // The ascii scenes resize after mount, which changes the document height.
    // Lenis caches its scroll limit, so re-measure whenever the page grows.
    const resize = () => lenis.resize();
    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);
    ro.observe(document.body);

    window.addEventListener("load", resize);
    document.fonts?.ready.then(resize).catch(() => {});
    const settle = window.setTimeout(resize, 800);
    const settle2 = window.setTimeout(resize, 2000);

    return () => {
      ro.disconnect();
      window.clearTimeout(settle);
      window.clearTimeout(settle2);
      window.removeEventListener("load", resize);
      cancelAnimationFrame(raf);
      registerLenis(null);
      document.body.style.overflow = "";
      lenis.destroy();
    };
  }, []);

  return null;
}
