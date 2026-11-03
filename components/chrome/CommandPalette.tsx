"use client";
import { useEffect, useState, useMemo } from "react";

const cmds = [
  { label: "go to hero", id: "hero" },
  { label: "go to about", id: "about" },
  { label: "go to work", id: "work" },
  { label: "go to stack", id: "stack" },
  { label: "go to timeline", id: "timeline" },
  { label: "go to contact", id: "contact" },
  { label: "toggle theme", id: "__theme" },
  { label: "copy email", id: "__email" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "/" && !open) {
        const t = e.target as HTMLElement;
        if (t && /^(INPUT|TEXTAREA)$/.test(t.tagName)) return;
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const filtered = useMemo(() => {
    const needle = q.toLowerCase().trim();
    if (!needle) return cmds;
    return cmds.filter((c) => c.label.includes(needle));
  }, [q]);

  // reset selection when query changes (handled in onChange below)

  const run = (id: string) => {
    setOpen(false);
    setQ("");
    if (id === "__theme") {
      document.querySelector<HTMLButtonElement>("button[aria-label^='Switch']")?.click();
      return;
    }
    if (id === "__email") {
      navigator.clipboard?.writeText("pradeep@example.com");
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90] bg-paper/70 backdrop-blur-sm flex items-start justify-center px-4 pt-[18vh]">
      <div className="w-full max-w-md border border-dotted border-dim bg-panel shadow-2xl">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-dotted border-dim text-[12px]">
          <span className="text-acid">›</span>
          <input
            autoFocus
            value={q}
            onChange={(e) => { setQ(e.target.value); setSel(0); }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(filtered.length - 1, s + 1)); }
              else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
              else if (e.key === "Enter") { const c = filtered[sel]; if (c) run(c.id); }
            }}
            placeholder="type a command..."
            className="flex-1 bg-transparent outline-none text-ink placeholder:text-mute"
          />
          <span className="text-mute text-[10px]">esc</span>
        </div>
        <ul className="max-h-64 overflow-auto py-1 text-[12px]">
          {filtered.map((c, i) => (
            <li key={c.id}>
              <button
                onClick={() => run(c.id)}
                className={`w-full text-left px-3 py-1.5 flex items-center gap-2 ${i === sel ? "bg-acid/10 text-acid" : "text-ink hover:bg-panel"}`}
              >
                <span className="text-mute">›</span> {c.label}
              </button>
            </li>
          ))}
          {filtered.length === 0 && <li className="px-3 py-2 text-mute">no matches</li>}
        </ul>
        <div className="px-3 py-1.5 border-t border-dotted border-dim text-[10px] text-mute flex justify-between">
          <span>↑↓ navigate · ↵ run</span>
          <span>⌘K / /</span>
        </div>
      </div>
    </div>
  );
}
