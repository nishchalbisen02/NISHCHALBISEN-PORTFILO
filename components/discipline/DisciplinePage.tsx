import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink, SectionHeading } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/work/ProjectCard";
import { disciplines, disciplineById, type DisciplineId } from "@/data/disciplines";
import { projectsByDiscipline, photography } from "@/data/projects";

export default function DisciplinePage({ id }: { id: DisciplineId }) {
  const d = disciplineById[id];
  const items = projectsByDiscipline(id);
  const others = disciplines.filter((x) => x.id !== id);
  const isFilm = id === "film";

  return (
    <>
      {/* hero */}
      <section className="container pb-14 pt-10 sm:pb-20 sm:pt-16">
        <span className="meta">
          {d.index} — Discipline
        </span>
        <h1 className="mt-4 text-display-1 font-bold uppercase leading-[0.88] tracking-tightest">
          {d.title}
        </h1>
        <p className="mt-6 max-w-[40ch] text-display-3 font-medium leading-[1.1] tracking-tight">
          {d.line}
        </p>
        <p className="mt-5 max-w-prose text-ink-2">{d.blurb}</p>
      </section>

      {/* capabilities */}
      <section className="container border-t border-line py-12 sm:py-16">
        <SectionHeading title="Capabilities" aside={d.visualLanguage} />
        <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {d.capabilities.map((c, i) => (
            <div key={c} className="bg-paper p-4">
              <span className="meta">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-sm font-medium">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* work */}
      <section className="container py-12 sm:py-20">
        <SectionHeading
          index="—"
          title="Selected work"
          aside={`${items.length} ${items.length === 1 ? "project" : "projects"}`}
        />
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2">
          {items.map((p, i) => (
            <Reveal
              key={p.slug}
              className={
                p.layout === "full" || p.layout === "wide" ? "sm:col-span-2" : ""
              }
            >
              <ProjectCard
                project={p}
                priority={i < 2}
                sizes={
                  p.layout === "full" || p.layout === "wide"
                    ? "(max-width: 768px) 100vw, 90vw"
                    : "(max-width: 768px) 100vw, 45vw"
                }
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* film-only: photography */}
      {isFilm && (
        <section className="border-y border-ink py-12 sm:py-20">
          <div className="container">
            <SectionHeading title="Photography" aside="Selected frames" />
          </div>
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-10">
            {photography.map((src, i) => (
              <figure
                key={src}
                className="relative aspect-[4/5] w-[72vw] shrink-0 snap-start overflow-hidden border border-line sm:w-[38vw] lg:w-[26vw]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 72vw, 30vw"
                  className="object-cover"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* cross-links */}
      <section className="container py-16 sm:py-24">
        <SectionHeading title="Other disciplines" />
        <div className="mt-6">
          {others.map((o) => (
            <Link
              key={o.id}
              href={o.href}
              className="group flex items-baseline justify-between gap-6 border-t border-line py-6"
            >
              <span className="text-display-3 font-bold uppercase leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                {o.title}
              </span>
              <span className="meta shrink-0">{o.index}</span>
            </Link>
          ))}
          <div className="border-t border-line pt-5">
            <ArrowLink href="/work">All work</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
