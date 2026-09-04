import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";

export default function ContactCta() {
  return (
    <section id="contact" className="container py-20 sm:py-28">
      <Reveal>
        <p className="meta">10 — Contact</p>
        <h2 className="mt-4 text-display-2 font-bold uppercase leading-[0.92] tracking-tightest">
          Have a project
          <br />
          in mind<span className="text-accent">?</span>
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <MagneticButton>
            <a
              href={`mailto:${profile.email}`}
              className="border border-ink bg-ink px-6 py-3.5 text-sm uppercase tracking-[0.08em] text-paper transition-colors hover:bg-transparent hover:text-ink"
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
      </Reveal>
    </section>
  );
}
