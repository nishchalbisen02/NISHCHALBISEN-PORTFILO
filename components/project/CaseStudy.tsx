import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/primitives";
import { Media, ProjectPlaceholder } from "@/components/ui/Media";
import { ProjectCard } from "@/components/work/ProjectCard";
import { disciplineById } from "@/data/disciplines";
import { projects, type Project } from "@/data/projects";

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  if (!children) return null;
  return (
    <Reveal className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-6">
      <p className="meta md:col-span-3">{label}</p>
      <div className="max-w-prose text-ink-2 md:col-span-9">{children}</div>
    </Reveal>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const d = disciplineById[project.discipline];
  const related = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.caseStudy &&
        (p.discipline === project.discipline ||
          p.disciplines?.includes(project.discipline))
    )
    .slice(0, 2);

  const gallery = (project.images ?? []).filter((src) => src !== project.cover);

  return (
    <article className="pb-24">
      <div className="container pt-8">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 meta"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          All work
        </Link>

        <h1 className="mt-8 text-display-1 font-bold uppercase leading-[0.88] tracking-tightest">
          {project.title}
        </h1>

        <div className="mt-8 grid grid-cols-2 gap-y-4 border-t border-line pt-5 sm:grid-cols-4">
          {[
            ["Discipline", `${d.index} · ${d.title}`],
            ["Client", project.client],
            ["Year", project.year],
            ["Role", project.role.join(", ")],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="meta">{k}</p>
              <p className="mt-1 text-sm">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* hero visual */}
      <div className="container mt-10">
        {project.cover ? (
          <div className="relative aspect-[16/10] overflow-hidden border border-line md:aspect-[2/1]">
            <Media
              src={project.cover}
              alt={project.title}
              title={project.title}
              discipline={project.discipline}
              priority
              sizes="100vw"
              className="h-full w-full"
            />
          </div>
        ) : (
          <ProjectPlaceholder
            title={project.title}
            discipline={project.discipline}
            className="aspect-[16/10] md:aspect-[2/1]"
            label="Case-study visuals coming soon"
          />
        )}
      </div>

      {/* narrative */}
      <div className="container mt-14">
        <Block label="Overview">
          {project.overview ?? project.description}
        </Block>
        <Block label="The challenge">{project.challenge}</Block>
        <Block label="My role">{project.myRole}</Block>
        {project.whatIDid && project.whatIDid.length > 0 && (
          <Reveal className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-6">
            <p className="meta md:col-span-3">What I did</p>
            <ul className="max-w-prose space-y-2 text-ink-2 md:col-span-9">
              {project.whatIDid.map((x) => (
                <li key={x} className="border-b border-line pb-2">
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        {project.process && project.process.length > 0 && (
          <Reveal className="grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-6">
            <p className="meta md:col-span-3">Process</p>
            <ol className="max-w-prose space-y-2 text-ink-2 md:col-span-9">
              {project.process.map((x, i) => (
                <li key={x} className="flex gap-3 border-b border-line pb-2">
                  <span className="meta">{String(i + 1).padStart(2, "0")}</span>
                  {x}
                </li>
              ))}
            </ol>
          </Reveal>
        )}
        <Block label="Result">{project.result}</Block>
      </div>

      {/* visuals */}
      {gallery.length > 0 && (
        <div className="container mt-8 space-y-6">
          {gallery.map((src, i) => (
            <Reveal key={src}>
              <div className="relative overflow-hidden border border-line">
                <Image
                  src={src}
                  alt={`${project.title} — visual ${i + 1}`}
                  width={1600}
                  height={1000}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {/* services / tools / link */}
      <div className="container mt-14 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
        {project.services && (
          <div>
            <p className="meta">Services</p>
            <ul className="mt-3 space-y-1 text-sm text-ink-2">
              {project.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
        {project.tools && (
          <div>
            <p className="meta">Tools / Tech</p>
            <ul className="mt-3 space-y-1 text-sm text-ink-2">
              {project.tools.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
        {project.liveUrl && (
          <div>
            <p className="meta">Live</p>
            <div className="mt-3">
              <ArrowLink href={project.liveUrl} external>
                Visit project
              </ArrowLink>
            </div>
          </div>
        )}
      </div>

      {/* related */}
      {related.length > 0 && (
        <div className="container mt-20">
          <p className="meta border-t border-line pt-5">Related projects</p>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} sizes="(max-width: 768px) 100vw, 45vw" />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
