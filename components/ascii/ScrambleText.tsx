"use client";
import { useEffect, useRef, useState } from "react";

const GLYPHS = "·•●░▒▓█/\\|-_+=*#@%$!?";

export function ScrambleText({
  text,
  className = "",
  speed = 30,
  trigger = true,
}: {
  text: string;
  className?: string;
  speed?: number;
  trigger?: boolean;
}) {
  const [out, setOut] = useState(text);
  const frame = useRef<number | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    const target = text;
    let i = 0;
    const total = target.length * 6;
    const step = () => {
      const progress = Math.min(1, i / total);
      const revealed = Math.floor(progress * target.length);
      let s = "";
      for (let k = 0; k < target.length; k++) {
        if (k < revealed) s += target[k];
        else if (target[k] === " " || target[k] === "\n") s += target[k];
        else s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOut(s);
      i += 1;
      if (i <= total) frame.current = requestAnimationFrame(step);
      else setOut(target);
    };
    frame.current = requestAnimationFrame(step);
    return () => { if (frame.current) cancelAnimationFrame(frame.current); };
  }, [text, trigger, speed]);

  return <span className={className}>{out}</span>;
}
