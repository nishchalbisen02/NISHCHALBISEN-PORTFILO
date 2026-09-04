"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects, type Project } from "@/data/projects";
import { disciplines } from "@/data/disciplines";
import { cn } from "@/lib/cn";

type Filter = "all" | (typeof disciplines)[number]["id"];

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  ...disciplines.map((d) => ({ id: d.id as Filter, label: d.label })),
];

export function WorkIndex({ initial }: { initial?: Project[] }) {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");

  const list = useMemo(() => {
    const src = initial ?? projects;
    if (filter === "all") return src;
    return src.filter(
      (p) => p.discipline === filter || p.disciplines?.includes(filter)
    );
  }, [filter, initial]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-t border-line py-4">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "border px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition-colors",
              filter === f.id
                ? "border-ink bg-ink text-paper"
                : "border-line-strong text-ink-2 hover:border-ink hover:text-ink"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div
        layout={!reduce}
        className="grid grid-cols-1 gap-x-6 gap-y-12 pt-8 sm:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              layout={!reduce}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                (p.layout === "full" || p.layout === "wide") && "sm:col-span-2"
              )}
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && (
        <p className="py-16 text-center meta">Nothing here yet.</p>
      )}
    </div>
  );
}
