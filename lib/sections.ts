export const sections = [
  { id: "hero", n: "00", label: "hero" },
  { id: "about", n: "01", label: "about" },
  { id: "work", n: "02", label: "work" },
  { id: "stack", n: "03", label: "stack" },
  { id: "timeline", n: "04", label: "timeline" },
  { id: "contact", n: "05", label: "contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
