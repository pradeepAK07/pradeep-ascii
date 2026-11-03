"use client";
import { Ascii, type PieceName } from "ascii.rest/react";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { motion } from "motion/react";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1180px] px-5 py-24">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-acid text-[11px]">02</span>
          <h2 className="text-[22px] font-medium">work</h2>
          <span className="flex-1 border-t border-dotted border-dim" />
          <span className="text-mute text-[11px]">{site.projects.length} projects</span>
        </div>
      </Reveal>

      <div className="space-y-6">
        {site.projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="card grid lg:grid-cols-[420px_1fr] gap-0 overflow-hidden lg:sticky"
            style={{ top: `${96 + i * 8}px` }}
          >
            <div className="relative flex flex-col bg-panel/60 border-b lg:border-b-0 lg:border-r border-dotted border-dim p-4">
              <div className="text-[10px] text-mute mb-3 flex justify-between">
                <span>preview.ascii</span>
                <span>{p.year}</span>
              </div>
              <div className="flex flex-1 items-center justify-center min-h-[220px]">
                <Ascii
                  piece={p.preview as PieceName}
                  className="art work-art"
                  options={{ fps: 6 }}
                  label={p.name}
                />
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 text-[11px] text-mute">
                  <span className="text-acid">◆</span>
                  <span className="uppercase tracking-widest">{p.status}</span>
                  <span>· {p.year}</span>
                </div>
                <h3 className="mt-3 text-[24px] font-medium leading-tight">{p.name}</h3>
                <p className="mt-2 text-mute text-[13px] max-w-xl">{p.tagline}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 border border-dotted border-dim text-mute">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
