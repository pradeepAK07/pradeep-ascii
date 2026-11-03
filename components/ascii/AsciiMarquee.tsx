import { cn } from "@/lib/cn";

export function AsciiMarquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("overflow-hidden border-y border-dotted border-dim py-3", className)}>
      <div className="marquee-track flex gap-10 whitespace-nowrap text-[12px] text-mute">
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="text-acid">◆</span> {it}
          </span>
        ))}
      </div>
    </div>
  );
}
