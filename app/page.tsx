import { SmoothScroll } from "@/components/chrome/SmoothScroll";
import { SiteHeader } from "@/components/chrome/SiteHeader";
import { SectionRail } from "@/components/chrome/SectionRail";
import { AsciiProgress } from "@/components/chrome/AsciiProgress";
import { CommandPalette } from "@/components/chrome/CommandPalette";
import { BootSequence } from "@/components/chrome/BootSequence";
import { AsciiCursor } from "@/components/chrome/AsciiCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Stack } from "@/components/sections/Stack";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <BootSequence />
      <SiteHeader />
      <SectionRail />
      <AsciiProgress />
      <CommandPalette />
      <AsciiCursor />

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-acid focus:text-paper focus:px-3 focus:py-1"
      >
        skip to content
      </a>

      <main className="pt-12">
        <Hero />
        <About />
        <Work />
        <Stack />
        <Timeline />
        <Contact />
      </main>
    </>
  );
}
