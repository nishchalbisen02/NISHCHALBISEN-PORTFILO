import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, ArrowLink } from "@/components/ui/primitives";
import { profile } from "@/data/profile";

const BLOCKS = [
  { k: "Who I am", v: profile.about.whoIAm },
  { k: "What I do", v: profile.about.whatIDo },
  { k: "How I work", v: profile.about.howIWork },
];

export default function ApproachBlock() {
  return (
    <section className="container py-16 sm:py-24">
      <SectionHeading index="09" title="Approach" aside={profile.roleShort} />

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {BLOCKS.map((b, i) => (
          <Reveal key={b.k} delay={i}>
            <p className="meta">
              {String(i + 1).padStart(2, "0")} — {b.k}
            </p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-2">
              {b.v}
            </p>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 border-t border-line pt-5">
        <ArrowLink href="/about">More about me</ArrowLink>
      </div>
    </section>
  );
}
