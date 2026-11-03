"use client";
import { useState } from "react";
import { Ascii, Banner } from "ascii.rest/react";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(site.email); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="mx-auto max-w-[1180px] px-5 py-20 sm:py-24">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-acid text-[11px]">05</span>
          <h2 className="text-[22px] font-medium">contact</h2>
          <span className="flex-1 border-t border-dotted border-dim" />
        </div>
      </Reveal>

      <Banner
        text="LETS TALK"
        color={["#c6f24e", "#7bd1ff"]}
        shadow="rounded"
        effect="glint"
        style={{ width: "100%", maxWidth: 720 }}
        className="art"
        label="let's talk"
      />

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-xl text-mute text-[13px]">
          {site.status} · usually replies within a day. Tell me what you&apos;re building.
        </p>
      </Reveal>

      <div className="mt-10 grid lg:grid-cols-[1fr_320px] gap-6 items-start">
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.2}>
          <aside className="space-y-6">
            <div className="card p-5">
              <div className="text-[10px] uppercase tracking-widest text-mute mb-3">direct outreach</div>
              <a
                href={`mailto:${site.email}`}
                className="block text-[13px] break-all hover:text-acid transition-colors"
              >
                {site.email}
              </a>
              <button
                onClick={copy}
                className="mt-4 text-[11px] text-mute hover:text-acid transition-colors"
              >
                [ {copied ? "copied ✓" : "copy email"} ]
              </button>
            </div>

            <div className="card p-5">
              <div className="text-[10px] uppercase tracking-widest text-mute mb-3">socials</div>
              <ul className="space-y-2 text-[12px]">
                {site.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between text-mute hover:text-acid transition-colors"
                    >
                      <span>{l.label}</span>
                      <span className="text-dim">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card overflow-hidden p-4">
              <div className="text-[10px] uppercase tracking-widest text-mute mb-2">ocean-sunset.ascii</div>
              <Ascii piece="ocean-sunset" style={{ width: "100%" }} options={{ fps: 6 }} label="the sun setting over the sea" />
            </div>
          </aside>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 pt-6 border-t border-dotted border-dim flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-dim">
          <div>built with next.js, motion, lenis, and ascii.rest</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>jetbrains mono · 2026</span>
            <span>© pradeep a</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
