import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  title: "Pradeep A — Frontend Engineer",
  description:
    "Frontend engineer with 4.5+ years building performant React and Next.js products — real-time platforms, AI document tooling, and Web3 marketplaces.",
  openGraph: {
    title: "Pradeep A — Frontend Engineer",
    description: "React, Next.js, and TypeScript — real-time platforms, AI tooling, and Web3.",
    type: "website",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og"] },
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="dark";}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
