"use client";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** True only after hydration, so browser-only UI can render without mismatching the server. */
export function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
