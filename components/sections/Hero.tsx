"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Ascii, Banner } from "ascii.rest/react";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { AsciiMarquee } from "@/components/ascii/AsciiMarquee";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen pt-16 overflow-hidden">
      {/* colored scene backdrop */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10 opacity-40 mix-blend-screen pointer-events-none">
        <Ascii
          piece="night-coast"
          style={{ width: "100%" }}
          options={{ fps: 8 }}
          label="night coast scene"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-paper/40 to-paper" />

      <div className="mx-auto max-w-[1180px] px-5 pt-14 sm:pt-20 pb-20 sm:pb-24">
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-mute mb-8 sm:mb-10">
          <span className="text-acid pulse">●</span>
          <span>{site.status}</span>
          <span className="hidden sm:inline">· {site.location}</span>
        </div>

        <motion.div style={{ opacity }} className="max-w-4xl">
          <Banner
            text={site.name.toUpperCase()}
            color={["#c6f24e", "#7bd1ff"]}
            shadow="rounded"
            effect="glint"
            style={{ width: "100%", maxWidth: 760 }}
            className="art"
            label={site.name}
          />
        </motion.div>

        <Reveal delay={0.2} className="mt-8 max-w-2xl">
          <p className="text-[15px] text-mute leading-relaxed">{site.tagline}</p>
          <p className="mt-4 text-[13px] text-dim">
            {site.role} · {site.now}
          </p>
        </Reveal>

        <Reveal delay={0.35} className="mt-10 flex flex-wrap items-center gap-3 text-[12px]">
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-4 py-2 border border-acid text-acid hover:bg-acid hover:text-paper transition-colors"
          >
            [ view work ]
          </a>
          <a
            href={`mailto:${site.email}`}
            className="px-4 py-2 border border-dotted border-dim text-mute hover:text-acid hover:border-acid transition-colors"
          >
            [ get in touch ]
          </a>
        </Reveal>

        <div className="mt-16">
          <AsciiMarquee
            items={[
              "frontend engineer",
              "react · next.js · typescript",
              "real-time · ai tooling · web3",
              "4.5+ years shipping products",
              "chennai, india",
            ]}
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-mute flex flex-col items-center gap-1">
        <span>scroll</span>
        <span className="blink">↓</span>
      </div>
    </section>
  );
}
