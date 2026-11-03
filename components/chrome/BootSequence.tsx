"use client";
import { useEffect, useState } from "react";
import { useIsClient } from "@/lib/useIsClient";

const lines = [
  "booting pradeep.portfolio v0.1.0 ...",
  "loading modules: next.js, ascii.rest, motion ...",
  "mounting sections: hero · about · work · stack · timeline · contact ...",
  "calibrating scroll ...",
  "ready.",
];

export function BootSequence() {
  const isClient = useIsClient();
  const [done, setDone] = useState(() => {
    try { return !!sessionStorage.getItem("booted"); } catch { return false; }
  });
  const [visible] = useState(() => {
    try { return !sessionStorage.getItem("booted"); } catch { return true; }
  });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (done || !visible) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(i);
      if (i >= lines.length) {
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          try { sessionStorage.setItem("booted", "1"); } catch {}
        }, 500);
      }
    }, 220);
    return () => clearInterval(id);
  }, [done, visible]);

  if (!isClient || done || !visible) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-paper text-ink flex items-center justify-center">
      <div className="w-full max-w-md px-6 font-mono text-xs">
        <div className="mb-4 text-mute">pradeep.portfolio :: boot</div>
        {lines.slice(0, shown).map((l, i) => (
          <div key={i} className="leading-6">
            <span className="text-acid">›</span> {l}
          </div>
        ))}
        <div className="mt-2 text-mute blink">_</div>
        <button
          type="button"
          onClick={() => { setDone(true); try { sessionStorage.setItem("booted", "1"); } catch {} }}
          className="mt-6 text-mute hover:text-acid text-[11px]"
        >
          [skip]
        </button>
      </div>
    </div>
  );
}
