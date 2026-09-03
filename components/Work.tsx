"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { projects, categories, type Category } from "@/lib/projects";

type Open = { p: number; g: number } | null;

export default function Work() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [open, setOpen] = useState<Open>(null);

  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const active = open ? projects[open.p] : null;
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((dir: number) => {
    setOpen((o) => {
      if (!o) return o;
      const g = projects[o.p].gallery;
      return { p: o.p, g: (o.g + dir + g.length) % g.length };
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className="filters" aria-label="Filter work by discipline">
        {categories.map((c) => (
          <button key={c} data-active={filter === c} onClick={() => setFilter(c)} type="button">
            {c}
          </button>
        ))}
      </div>

      <div className="work-list">
        {list.map((p) => {
          const idx = projects.indexOf(p);
          return (
            <article className="project" key={p.slug} id={p.slug}>
              <div
                className="project__media"
                onClick={() => setOpen({ p: idx, g: 0 })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen({ p: idx, g: 0 });
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${p.title}`}
              >
                <img src={p.cover} alt={p.title} loading="lazy" decoding="async" />
              </div>

              <div className="project__body">
                <div className="project__index mono">
                  {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </div>
                <h3 className="project__title">{p.title}</h3>
                <div className="project__meta mono">
                  <span>{p.category}</span>
                  <span>&middot;</span>
                  <span>{p.client}</span>
                  <span>&middot;</span>
                  <span>{p.year}</span>
                </div>
                <p className="project__blurb">{p.blurb}</p>
                <div className="project__tags">
                  {p.role.map((r) => (
                    <span key={r}>{r}</span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {active && open && (
        <div
          className="lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div className="lightbox__bar" onClick={(e) => e.stopPropagation()}>
            <span className="mono">
              {active.title} — {open.g + 1}/{active.gallery.length}
            </span>
            <button className="lightbox__close" onClick={close} aria-label="Close" type="button">
              &#10005;
            </button>
          </div>

          <img
            src={active.gallery[open.g]}
            alt={`${active.title} — image ${open.g + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          {active.gallery.length > 1 && (
            <div className="lightbox__nav">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
                type="button"
              >
                &larr;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
                type="button"
              >
                &rarr;
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
