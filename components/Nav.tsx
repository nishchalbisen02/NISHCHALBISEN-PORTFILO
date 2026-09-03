"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function Nav() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    let stored: "light" | "dark" | null = null;
    try {
      stored = localStorage.getItem("nb-theme") as "light" | "dark" | null;
    } catch {}
    const initial =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("nb-theme", next);
    } catch {}
  };

  return (
    <header className="nav">
      <div className="shell nav__inner">
        <a href="#top" className="nav__brand">
          {site.name.toUpperCase()}
          <span style={{ color: "var(--accent)" }}>®</span>
        </a>
        <nav className="nav__links">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle colour theme"
            suppressHydrationWarning
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
      </div>
    </header>
  );
}
