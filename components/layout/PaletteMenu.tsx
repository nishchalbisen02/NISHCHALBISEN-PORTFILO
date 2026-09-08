"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/cn";

type PaletteId = "hagi" | "willow" | "incense" | "mulberry" | "sunflower";
type ThemeMode = "light" | "dark";

const PALETTES: { id: PaletteId; name: string; note: string; dot: string }[] = [
  { id: "hagi", name: "Hagi", note: "Autumn wine", dot: "#7a2740" },
  { id: "willow", name: "Willow", note: "Spring green", dot: "#3d6b4c" },
  { id: "incense", name: "Incense", note: "Burnt amber", dot: "#9c5a24" },
  { id: "mulberry", name: "Mulberry", note: "Iris violet", dot: "#5a3a7c" },
  { id: "sunflower", name: "Sunflower", note: "Deep indigo", dot: "#2c3b66" },
];

export default function PaletteMenu() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [palette, setPalette] = useState<PaletteId>("hagi");
  const [theme, setTheme] = useState<ThemeMode>("light");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const p = localStorage.getItem("nb-palette") as PaletteId | null;
      if (p && PALETTES.some((x) => x.id === p)) setPalette(p);
      const t = localStorage.getItem("nb-theme") as ThemeMode | null;
      setTheme(
        t ??
          (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      );
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pickPalette(id: PaletteId) {
    setPalette(id);
    document.documentElement.setAttribute("data-palette", id);
    try {
      localStorage.setItem("nb-palette", id);
    } catch {}
  }

  function pickTheme(mode: ThemeMode) {
    setTheme(mode);
    document.documentElement.setAttribute("data-theme", mode);
    try {
      localStorage.setItem("nb-theme", mode);
    } catch {}
  }

  const active = PALETTES.find((p) => p.id === palette) ?? PALETTES[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change colour palette"
        aria-expanded={open}
        className="grid h-9 w-9 place-items-center rounded-full border border-line-strong transition-colors hover:border-ink"
      >
        <span
          className="h-3.5 w-3.5 rounded-full ring-1 ring-inset ring-black/10"
          style={{ background: "var(--accent)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-full z-[60] mt-2 w-56 origin-top-right border border-line-strong bg-paper p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]"
            role="menu"
          >
            <p className="px-2 pb-1.5 pt-1 meta">Palette</p>
            {PALETTES.map((p) => (
              <button
                key={p.id}
                onClick={() => pickPalette(p.id)}
                role="menuitemradio"
                aria-checked={palette === p.id}
                className={cn(
                  "flex w-full items-center gap-2.5 px-2 py-2 text-left transition-colors hover:bg-paper-2",
                  palette === p.id && "bg-paper-2"
                )}
              >
                <span
                  className="h-3.5 w-3.5 shrink-0 rounded-full ring-1 ring-inset ring-black/10"
                  style={{ background: p.dot }}
                />
                <span className="flex-1 min-w-0">
                  <span className="block text-[0.82rem] font-medium leading-tight">
                    {p.name}
                  </span>
                  <span className="meta block normal-case tracking-normal">
                    {p.note}
                  </span>
                </span>
                {palette === p.id && <Check size={14} className="shrink-0 text-accent" />}
              </button>
            ))}

            <div className="my-1.5 border-t border-line" />
            <div className="grid grid-cols-2 gap-1 p-1">
              {(["light", "dark"] as ThemeMode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => pickTheme(m)}
                  className={cn(
                    "flex items-center justify-center gap-1.5 border py-1.5 text-[0.72rem] uppercase tracking-[0.1em] transition-colors",
                    theme === m
                      ? "border-ink bg-ink text-paper"
                      : "border-line-strong text-ink-2 hover:border-ink"
                  )}
                >
                  {m === "light" ? <Sun size={12} /> : <Moon size={12} />}
                  {m}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
