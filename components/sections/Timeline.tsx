import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-[1180px] px-5 py-24">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-acid text-[11px]">04</span>
          <h2 className="text-[22px] font-medium">timeline</h2>
          <span className="flex-1 border-t border-dotted border-dim" />
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px border-l border-dotted border-dim" />
        <div className="space-y-10">
          {site.timeline.map((r, i) => (
            <Reveal key={r.company} delay={i * 0.08}>
              <div className="relative pl-8">
                <span className="absolute left-0 top-2 w-[15px] h-[15px] flex items-center justify-center text-acid text-[10px] bg-paper">
                  ◆
                </span>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-[16px] font-medium">{r.company}</h3>
                  <span className="text-mute text-[12px]">{r.role}</span>
                  <span className="w-full text-[11px] text-dim tabular-nums sm:ml-auto sm:w-auto">{r.period}</span>
                </div>
                {r.client && <div className="mt-1 text-[11px] text-acid">{r.client}</div>}
                <ul className="mt-3 space-y-1.5 text-[13px] text-mute">
                  {r.points.map((pt, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-dim">·</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 flex items-baseline gap-4 mb-6">
          <span className="text-dim text-[11px]">edu</span>
          <span className="text-[11px] uppercase tracking-widest text-mute">academic foundation</span>
          <span className="flex-1 border-t border-dotted border-dim" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {site.education.map((e) => (
            <div key={e.degree} className="card p-4">
              <div className="text-[13px]">{e.degree}</div>
              <div className="mt-1 text-[11px] text-mute">{e.school}</div>
              <div className="mt-2 text-[10px] text-dim tabular-nums">{e.period}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
