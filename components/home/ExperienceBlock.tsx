import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, ArrowLink } from "@/components/ui/primitives";
import { Media } from "@/components/ui/Media";
import { ibtProjects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function ExperienceBlock() {
  const ibt = profile.experience.find((e) =>
    e.company.includes("Innovative Business Technologies")
  );

  return (
    <section className="border-y border-ink bg-paper-2/40 py-16 sm:py-24">
      <div className="container">
        <SectionHeading
          index="08"
          title="Professional experience"
          aside="Present"
        />

        <Reveal className="mt-8 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-display-3 font-bold uppercase leading-[0.95] tracking-tight">
              Innovative Business
              <br />
              Technologies
            </p>
            <p className="meta mt-3 normal-case tracking-normal">
              {ibt?.period} · {ibt?.location}
            </p>
          </div>
          <p className="max-w-prose text-sm text-ink-2 md:col-span-7 md:pt-1">
            {ibt?.summary} The projects below were completed as part of this role.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {ibtProjects.map((project) => (
            <Reveal key={project.slug}>
              <Link
                href={project.caseStudy ? `/work/${project.slug}` : "/work"}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-line">
                  <Media
                    src={project.cover}
                    alt={project.title}
                    title={project.title}
                    discipline={project.discipline}
                    sizes="(max-width: 768px) 45vw, 22vw"
                    className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-2 text-sm font-bold leading-tight">
                  {project.title}
                </p>
                <p className="meta mt-0.5">{project.categories[0]}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-5">
          <ArrowLink href="/about">Full experience &amp; skills</ArrowLink>
        </div>
      </div>
    </section>
  );
}
