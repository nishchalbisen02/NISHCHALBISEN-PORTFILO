import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, ArrowLink } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/work/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function FeaturedWork() {
  // curated editorial rhythm: 1 full, 2 paired, 1 full, rest paired
  const p = featuredProjects;

  return (
    <section id="work" className="container py-16 sm:py-24">
      <SectionHeading
        index="01"
        title="Selected work"
        aside={`${p.length} featured`}
      />

      <div className="mt-10 space-y-14">
        {p[0] && (
          <Reveal>
            <ProjectCard
              project={p[0]}
              priority
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </Reveal>
        )}

        {(p.length > 1) && (
          <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
            {p.slice(1, 3).map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} sizes="(max-width: 768px) 100vw, 45vw" />
              </Reveal>
            ))}
          </div>
        )}

        {p[3] && (
          <Reveal>
            <ProjectCard project={p[3]} sizes="(max-width: 768px) 100vw, 90vw" />
          </Reveal>
        )}

        {p.length > 4 && (
          <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
            {p.slice(4).map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} sizes="(max-width: 768px) 100vw, 45vw" />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <div className="mt-14 border-t border-line pt-5">
        <ArrowLink href="/work">All projects</ArrowLink>
      </div>
    </section>
  );
}
