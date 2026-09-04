import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, ArrowLink } from "@/components/ui/primitives";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.about.whoIAm,
};

export default function AboutPage() {
  return (
    <div className="pb-24">
      {/* intro */}
      <section className="container pb-14 pt-10 sm:pb-20 sm:pt-16">
        <span className="meta">About</span>
        <h1 className="mt-4 max-w-[16ch] text-display-1 font-bold uppercase leading-[0.88] tracking-tightest">
          {profile.roleShort}
        </h1>
        <p className="mt-6 max-w-[46ch] text-display-3 font-medium leading-[1.12] tracking-tight">
          {profile.positioning}
        </p>
      </section>

      <section className="container">
        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-line">
              <Image
                src="/about-portrait.webp"
                alt={`${profile.name} — portrait`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
          <div className="space-y-10 md:col-span-7 md:pt-2">
            {[
              ["Who I am", profile.about.whoIAm],
              ["What I do", profile.about.whatIDo],
              ["How I work", profile.about.howIWork],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i}>
                <p className="meta">
                  {String(i + 1).padStart(2, "0")} — {k}
                </p>
                <p className="mt-3 max-w-prose leading-relaxed text-ink-2">{v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* experience */}
      <section className="container mt-20">
        <SectionHeading title="Professional experience" aside="Selected" />
        <div className="mt-8">
          {profile.experience.map((e, i) => (
            <Reveal
              key={e.company + e.period}
              delay={i}
              className="grid gap-2 border-t border-line py-7 md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-4">
                <p className="text-heading font-bold leading-tight">{e.company}</p>
                <p className="meta mt-1 normal-case tracking-normal">{e.period}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm font-medium">
                  {e.role}
                  {e.current && (
                    <span className="ml-2 inline-flex items-center gap-1 align-middle meta">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Present
                    </span>
                  )}
                </p>
                <p className="mt-2 max-w-prose text-sm text-ink-2">{e.summary}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </section>

      {/* skills */}
      <section className="container mt-20">
        <SectionHeading title="Skills" />
        <div className="mt-8 space-y-8">
          {profile.skills.map((g, i) => (
            <Reveal
              key={g.group}
              delay={i}
              className="grid gap-3 border-t border-line pt-6 md:grid-cols-12 md:gap-6"
            >
              <p className="meta md:col-span-3">{g.group}</p>
              <div className="flex flex-wrap gap-1.5 md:col-span-9">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="border border-line px-2.5 py-1 text-xs text-ink-2"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* tools + focus + education */}
      <section className="container mt-20 grid gap-12 md:grid-cols-2">
        <Reveal>
          <SectionHeading title="Tools" />
          <div className="mt-6 flex flex-wrap gap-1.5">
            {profile.tools.map((t) => (
              <span
                key={t}
                className="border border-line px-2.5 py-1 text-xs text-ink-2"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={1}>
          <SectionHeading title="Current focus" />
          <p className="mt-6 max-w-prose text-ink-2">{profile.about.currentFocus}</p>
        </Reveal>
      </section>

      <section className="container mt-16 grid gap-12 md:grid-cols-2">
        <Reveal>
          <SectionHeading title="Education" />
          <p className="mt-6 font-medium">{profile.education.degree}</p>
          <p className="mt-1 text-sm text-ink-2">{profile.education.school}</p>
          <p className="meta mt-2 normal-case tracking-normal">
            {profile.education.period} · {profile.education.note}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <SectionHeading title="Recognition" />
          <ul className="mt-6 space-y-2">
            {profile.achievements.map((a) => (
              <li key={a} className="border-b border-line pb-2 text-sm">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="container mt-20 border-t border-line pt-6">
        <ArrowLink href="/contact">Get in touch</ArrowLink>
      </section>
    </div>
  );
}
