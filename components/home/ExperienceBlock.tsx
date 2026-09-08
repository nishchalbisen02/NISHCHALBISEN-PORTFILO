import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, ArrowLink } from "@/components/ui/primitives";
import { profile } from "@/data/profile";

export default function ExperienceBlock() {
  const ibt = profile.experience.find((e) =>
    e.company.includes("Innovative Business Technologies")
  );
  if (!ibt) return null;

  return (
    <section className="border-y border-ink bg-paper-2/30 py-16 sm:py-24">
      <div className="container">
        <SectionHeading index="08" title="Currently" aside="Present" />

        <Reveal className="mt-8 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-display-3 font-bold uppercase leading-[0.95] tracking-tight">
              Innovative Business
              <br />
              Technologies
            </p>
            <p className="meta mt-3 normal-case tracking-normal">
              {ibt.period} · {ibt.location}
            </p>
          </div>

          <div className="md:col-span-7 md:pt-1">
            <ul className="flex flex-col gap-2">
              {(ibt.roles ?? [ibt.role]).map((r, i) => (
                <li
                  key={r}
                  className="flex items-baseline gap-3 border-b border-line pb-2 text-sm font-medium"
                >
                  <span className="meta">{String(i + 1).padStart(2, "0")}</span>
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-prose text-sm text-ink-2">{ibt.summary}</p>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-line pt-5">
          <ArrowLink href="/about">Full experience &amp; skills</ArrowLink>
        </div>
      </div>
    </section>
  );
}
