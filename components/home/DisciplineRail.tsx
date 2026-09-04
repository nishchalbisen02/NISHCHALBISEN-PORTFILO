import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/primitives";
import { disciplines } from "@/data/disciplines";
import { projectsByDiscipline } from "@/data/projects";

export default function DisciplineRail() {
  return (
    <section className="container py-16 sm:py-24">
      <SectionHeading index="—" title="Four disciplines, one practice" aside="Tech · AI · Design · Film" />

      <div className="mt-8">
        {disciplines.map((d, i) => {
          const count = projectsByDiscipline(d.id).length;
          return (
            <Reveal key={d.id} delay={i}>
              <Link
                href={d.href}
                className="group grid grid-cols-1 gap-2 border-t border-line py-7 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="meta md:col-span-1">{d.index}</span>
                <span className="text-display-3 font-bold uppercase leading-[0.95] tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:col-span-4">
                  {d.title}
                </span>
                <span className="max-w-prose text-sm text-ink-2 md:col-span-5">
                  {d.blurb}
                </span>
                <span className="flex items-center justify-between gap-2 meta md:col-span-2 md:justify-end">
                  {count} {count === 1 ? "project" : "projects"}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </Link>
            </Reveal>
          );
        })}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
