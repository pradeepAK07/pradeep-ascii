import type Lenis from "lenis";

let instance: Lenis | null = null;

export function registerLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function stopScroll() {
  instance?.stop();
  document.body.style.overflow = "hidden";
}

export function startScroll() {
  instance?.start();
  document.body.style.overflow = "";
}

export function resizeScroll() {
  instance?.resize();
}
