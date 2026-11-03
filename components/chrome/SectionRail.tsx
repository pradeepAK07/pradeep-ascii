"use client";
import { sections } from "@/lib/sections";
import { useActiveSection } from "@/lib/useActiveSection";

export function SectionRail() {
  const active = useActiveSection();

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 text-[10px]">
      {sections.map((s) => {
        const on = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => jump(s.id)}
            className="flex items-center gap-2 group"
            aria-label={s.label}
            aria-current={on ? "true" : undefined}
          >
            <span className={`transition-colors ${on ? "text-acid" : "text-dim group-hover:text-mute"}`}>
              {s.n}
            </span>
            <span
              className={`h-px transition-all ${on ? "w-8 bg-acid" : "w-3 bg-dim group-hover:w-5 group-hover:bg-mute"}`}
            />
          </button>
        );
      })}
    </aside>
  );
}
