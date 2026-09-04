import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Hero3D from "@/components/three/Hero3D";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";

const LINES = ["Technology.", "AI.", "Design.", "Visual Storytelling."];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Hero3D className="pointer-events-none absolute -right-[12%] top-0 h-full w-[70%] opacity-90 [mask-image:radial-gradient(58%_58%_at_62%_42%,#000,transparent)] md:opacity-100" />

      <div className="container relative pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pt-24">
        <div className="hero-fade flex flex-wrap gap-x-6 gap-y-1 meta" style={{ ["--d" as string]: "0.05s" } as React.CSSProperties}>
          <span>{profile.roleShort}</span>
          <span>{profile.positioning}</span>
          <span>{profile.location}</span>
        </div>

        <h1 className="mt-8 text-display-1 font-bold uppercase tracking-tightest sm:mt-12">
          {LINES.map((line, i) => (
            <span key={line} className="hero-line">
              <span
                className="hero-word"
                style={{ ["--i" as string]: i } as React.CSSProperties}
              >
                {line.slice(0, -1)}
                <span className="text-accent">.</span>
              </span>
            </span>
          ))}
        </h1>

        <p
          className="hero-fade mt-8 max-w-[46ch] text-lg leading-snug sm:text-xl"
          style={{ ["--d" as string]: "0.62s" } as React.CSSProperties}
        >
          I build digital experiences, AI-powered products, brands and visual
          stories.
        </p>

        <div
          className="hero-fade mt-10 flex flex-wrap items-center gap-4"
          style={{ ["--d" as string]: "0.74s" } as React.CSSProperties}
        >
          <MagneticButton>
            <Link
              href="/work"
              className="border border-ink bg-ink px-6 py-3.5 text-sm uppercase tracking-[0.08em] text-paper transition-colors hover:bg-transparent hover:text-ink"
            >
              View selected work
            </Link>
          </MagneticButton>
          <Link
            href="/about"
            className="link-underline text-sm uppercase tracking-[0.08em]"
          >
            About me
          </Link>
        </div>
      </div>

      <div className="container flex items-center gap-2 pb-8 meta">
        <ArrowDown size={13} className="animate-bounce motion-reduce:animate-none" />
        Scroll
      </div>
    </section>
  );
}
