import { bannerSvg } from "ascii.rest/svg";

export function GET() {
  const svg = bannerSvg("PRADEEP", {
    color: ["#c6f24e", "#7bd1ff"],
    shadow: "rounded",
    tagline: "frontend developer · react · next.js · typescript",
  });
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
