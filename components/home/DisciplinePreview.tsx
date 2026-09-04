import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink, Tag } from "@/components/ui/primitives";
import { Media } from "@/components/ui/Media";
import { disciplineById, type DisciplineId } from "@/data/disciplines";
import { projectsByDiscipline } from "@/data/projects";

export default function DisciplinePreview({ id }: { id: DisciplineId }) {
  const d = disciplineById[id];
  const items = projectsByDiscipline(id).slice(0, 3);

  return (
    <section id={id} className="container border-t border-line py-16 sm:py-24">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <span className="meta">
            {d.index} — {d.label}
          </span>
          <h2 className="mt-3 text-display-3 font-bold uppercase leading-[0.95] tracking-tight">
            {d.title}
          </h2>
          <p className="mt-4 text-lg font-medium">{d.line}</p>
          <p className="mt-3 max-w-prose text-sm text-ink-2">{d.blurb}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {d.capabilities.slice(0, 5).map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
          </div>
          <div className="mt-6">
            <ArrowLink href={d.href}>Explore {d.label}</ArrowLink>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:col-span-8 lg:grid-cols-3">
          {items.map((p) => (
            <Reveal key={p.slug}>
              <Link
                href={p.caseStudy ? `/work/${p.slug}` : "/work"}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-line">
                  <Media
                    src={p.cover}
                    alt={p.title}
                    title={p.title}
                    discipline={p.discipline}
                    sizes="(max-width: 768px) 45vw, 24vw"
                    className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-2 text-sm font-bold leading-tight">{p.title}</p>
                <p className="meta mt-0.5">{p.client}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
