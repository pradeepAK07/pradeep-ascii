import { Ascii } from "ascii.rest/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <Ascii piece="not-found" style={{ width: "100%", maxWidth: 480 }} label="not found" className="art" />
      <p className="mt-6 text-mute text-[13px]">this route does not exist.</p>
      <Link href="/" className="mt-4 text-acid text-[12px]">[ go home ]</Link>
    </div>
  );
}
