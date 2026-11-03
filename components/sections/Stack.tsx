import { Ascii, type PieceName } from "ascii.rest/react";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { AsciiMarquee } from "@/components/ascii/AsciiMarquee";

export function Stack() {
  return (
    <section id="stack" className="py-24">
      <div className="mx-auto max-w-[1180px] px-5">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-acid text-[11px]">03</span>
            <h2 className="text-[22px] font-medium">stack</h2>
            <span className="flex-1 border-t border-dotted border-dim" />
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {site.stack.logos.map((name) => (
              <div key={name} className="card p-4 flex flex-col items-center gap-3">
                <Ascii piece={name as PieceName} style={{ width: 96 }} label={name} />
                <span className="text-[11px] text-mute">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {site.stack.skills.map((s) => (
              <span key={s} className="text-[11px] px-2.5 py-1 border border-dotted border-dim text-mute hover:text-acid hover:border-acid transition-colors">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-16">
        <AsciiMarquee items={[...site.stack.skills, ...site.stack.logos]} />
      </div>
    </section>
  );
}
