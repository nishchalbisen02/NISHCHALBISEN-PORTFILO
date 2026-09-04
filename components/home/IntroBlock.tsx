import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

const FACTS = [
  { k: "Based in", v: profile.location },
  { k: "Education", v: "B.Tech CSIT · RGPV" },
  { k: "Recognition", v: "Re-Imagine 2024 Finalist" },
  { k: "Delivered", v: "32+ freelance projects" },
];

export default function IntroBlock() {
  return (
    <section className="container border-t border-line py-16 sm:py-24">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <span className="meta">One person. Four mediums.</span>
        </Reveal>
        <Reveal className="md:col-span-9" delay={1}>
          <p className="max-w-[52ch] text-display-3 font-medium leading-[1.15] tracking-tight">
            A multidisciplinary creative technologist working across technology,
            AI, design and visual storytelling — building digital products, using
            AI as a medium, designing brands, and directing cinematic content.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-14 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
        {FACTS.map((f) => (
          <div key={f.k} className="bg-paper p-4">
            <p className="meta">{f.k}</p>
            <p className="mt-1 text-sm">{f.v}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
