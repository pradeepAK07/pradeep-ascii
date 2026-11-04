import { Ascii } from "ascii.rest/react";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { AsciiWindow } from "@/components/ascii/AsciiWindow";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-5 py-24">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-acid text-[11px]">01</span>
          <h2 className="text-[22px] font-medium">about</h2>
          <span className="flex-1 border-t border-dotted border-dim" />
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
        <Reveal>
          <AsciiWindow title="pradeep@portfolio: ~">
            <div className="text-[12px] leading-7">
              <div><span className="text-acid">$</span> whoami</div>
              <div className="text-mute">pradeep — {site.role.toLowerCase()}</div>
              <div className="mt-3"><span className="text-acid">$</span> cat about.txt</div>
              {site.bio.map((p, i) => (
                <p key={i} className="text-mute mt-2">{p}</p>
              ))}
              <div className="mt-3"><span className="text-acid">$</span> cat now.txt</div>
              <div className="text-mute">{site.now}</div>
              <div className="mt-3"><span className="text-acid">$</span> ls ./links</div>
              <div className="text-mute flex flex-wrap gap-x-4">
                {site.links.map((l) => (
                  <a key={l.label} href={l.href} className="hover:text-acid transition-colors">
                    {l.label}/
                  </a>
                ))}
              </div>
              <div className="mt-3 text-dim"><span className="text-acid">$</span> <span className="blink">_</span></div>
            </div>
          </AsciiWindow>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card p-4">
            <div className="text-[10px] text-mute mb-3">avatar.ascii</div>
            <Ascii piece="cat" style={{ width: "100%" }} label="a sleeping cat" className="art about-cat" />
            <div className="mt-3 text-[11px] text-mute flex justify-between">
              <span>{site.name}</span>
              <span>{site.location}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
