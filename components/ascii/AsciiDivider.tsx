export function AsciiDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 text-mute text-[11px] my-6">
      <span className="flex-1 border-t border-dotted border-dim" />
      {label && <span className="uppercase tracking-widest">{label}</span>}
      {label && <span className="flex-1 border-t border-dotted border-dim" />}
      {!label && <span className="flex-1 border-t border-dotted border-dim" />}
    </div>
  );
}
