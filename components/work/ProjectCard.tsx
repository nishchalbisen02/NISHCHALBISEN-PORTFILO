"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";

const ratio: Record<NonNullable<Project["layout"]>, string> = {
  full: "aspect-[16/10] md:aspect-[2/1]",
  wide: "aspect-[4/3]",
  tall: "aspect-[4/5]",
  standard: "aspect-[3/2]",
};

export function ProjectCard({
  project,
  priority = false,
  className,
  sizes,
}: {
  project: Project;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  const reduce = useReducedMotion();
  const caseHref = project.caseStudy ? `/work/${project.slug}` : null;
  const extHref = !project.caseStudy && project.liveUrl ? project.liveUrl : null;

  const inner = (
    <>
      <div
        className={cn(
          "relative overflow-hidden border border-line",
          ratio[project.layout ?? "standard"]
        )}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={reduce ? undefined : { scale: 1.035 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Media
            src={project.cover}
            alt={project.title}
            title={project.title}
            discipline={project.discipline}
            priority={priority}
            sizes={sizes ?? "(max-width: 768px) 100vw, 55vw"}
            className="h-full w-full"
          />
        </motion.div>

        {(caseHref || extHref) && !project.placeholder && (
          <span className="absolute bottom-3 right-3 flex items-center gap-1 bg-accent px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-accent-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {extHref ? "Visit" : "Case study"} <ArrowUpRight size={12} />
          </span>
        )}
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-heading font-bold leading-[1.08]">{project.title}</h3>
          <p className="meta mt-1 normal-case tracking-normal text-ink-2">
            {project.client}
          </p>
        </div>
        <span className="meta shrink-0 text-right">{project.year}</span>
      </div>

      <p className="mt-2 max-w-prose text-sm text-ink-2">{project.description}</p>

      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {project.categories.map((c) => (
          <span
            key={c}
            className="border border-line px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-2"
          >
            {c}
          </span>
        ))}
      </div>
    </>
  );

  if (caseHref) {
    return (
      <Link href={caseHref} className={cn("group block", className)}>
        {inner}
      </Link>
    );
  }
  if (extHref) {
    return (
      <a
        href={extHref}
        target="_blank"
        rel="noreferrer noopener"
        className={cn("group block", className)}
      >
        {inner}
      </a>
    );
  }
  return <div className={cn("group block", className)}>{inner}</div>;
}
