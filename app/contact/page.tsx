import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import PageTexture from "@/components/layout/PageTexture";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} — ${profile.positioning}.`,
};

export default function ContactPage() {
  return (
    <div className="container flex min-h-[70vh] flex-col justify-center py-16 sm:py-24">
      <PageTexture name="indigo" position="center" />
      <span className="meta">Contact</span>
      <h1 className="mt-4 text-display-1 font-bold uppercase leading-[0.86] tracking-tightest">
        Let&rsquo;s make
        <br />
        something<span className="text-accent">.</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <MagneticButton>
          <a
            href={`mailto:${profile.email}`}
            className="border border-ink bg-ink px-6 py-4 text-base uppercase tracking-[0.06em] text-paper transition-colors hover:bg-transparent hover:text-ink"
          >
            {profile.email}
          </a>
        </MagneticButton>
        {profile.statusNote ? (
          <span className="flex items-center gap-2 meta">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.statusNote}
          </span>
        ) : null}
      </div>

      <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer noopener"
            className="group flex flex-col gap-1 bg-paper p-5 transition-colors hover:bg-ink hover:text-paper"
          >
            <span className="flex items-center gap-1 meta group-hover:text-paper">
              {s.label}
              {s.href.startsWith("http") && <ArrowUpRight size={12} />}
            </span>
            <span className="text-sm">{s.value}</span>
          </a>
        ))}
      </div>

      <p className="meta mt-10">
        {profile.location} — {profile.roleLong}
      </p>
    </div>
  );
}
