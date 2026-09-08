"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/nav";
import { profile } from "@/data/profile";
import PaletteMenu from "@/components/layout/PaletteMenu";
import { cn } from "@/lib/cn";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-14 items-center justify-between sm:h-16">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-tight"
        >
          {profile.name}
          {profile.statusNote ? (
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              title={profile.statusNote}
            />
          ) : null}
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "link-underline text-sm transition-opacity",
                isActive(n.href) ? "opacity-100" : "opacity-60 hover:opacity-100"
              )}
            >
              {n.label}
            </Link>
          ))}
          <PaletteMenu />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <PaletteMenu />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-line-strong"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-14 bottom-0 z-40 flex flex-col bg-paper sm:top-16 md:hidden"
          >
            <nav className="container flex flex-1 flex-col justify-center gap-1 py-8">
              {nav.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={reduce ? undefined : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={n.href}
                    className={cn(
                      "block py-2 text-display-3 font-bold uppercase tracking-tight",
                      isActive(n.href) ? "text-ink" : "text-ink-2"
                    )}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container flex items-center justify-between border-t border-line py-5 meta">
              <span>{profile.positioning}</span>
              <a href={`mailto:${profile.email}`} className="link-underline normal-case tracking-normal">
                {profile.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
