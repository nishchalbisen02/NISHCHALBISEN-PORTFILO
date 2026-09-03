import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import Intro from "@/components/Intro";

export const metadata: Metadata = {
  metadataBase: new URL("https://nishchalbisen.example"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Nishchal Bisen",
    "graphic designer",
    "brand identity",
    "poster design",
    "art director",
    "Bhopal",
    "India",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efe7d9" },
    { media: "(prefers-color-scheme: dark)", color: "#150d11" },
  ],
};

const noFlash = `(function(){try{
var h=document.documentElement;
var t=localStorage.getItem('nb-theme');
var d=(t==='dark'||t==='light')?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
h.setAttribute('data-theme',d);
var seen=sessionStorage.getItem('nb-intro')==='1';
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
h.classList.add((seen||rm)?'intro-done':'intro-lock');
}catch(e){document.documentElement.classList.add('intro-done');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}.intro{display:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <Intro />
        {children}
      </body>
    </html>
  );
}
