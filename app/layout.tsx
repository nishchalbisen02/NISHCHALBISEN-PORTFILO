import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/layout/Intro";

const SITE_URL = "https://nishchalbisen.com"; // TODO: set real domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — Creative Technologist · Technology, AI, Design & Film`,
    template: `%s — ${profile.name}`,
  },
  description: profile.statement,
  keywords: [
    "Nishchal Bisen",
    "creative technologist",
    "web designer",
    "frontend developer",
    "UI UX designer",
    "AI",
    "brand identity",
    "motion graphics",
    "film",
    "Bhopal",
    "India",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: profile.name,
    title: `${profile.name} — ${profile.positioning}`,
    description: profile.statement,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.positioning}`,
    description: profile.statement,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0d0c" },
  ],
};

const noFlash = `(function(){try{var t=localStorage.getItem('nb-theme');var d=(t==='dark'||t==='light')?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10001] focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Intro />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
