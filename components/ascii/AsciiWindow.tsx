import { cn } from "@/lib/cn";

export function AsciiWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("term", className)}>
      <div className="term-bar">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="ml-2 truncate">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
