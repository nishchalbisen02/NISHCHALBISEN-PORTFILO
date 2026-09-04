"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

/** First-visit loader — name masks in, panel wipes up. Session-scoped. */
export default function Intro() {
  const [phase, setPhase] = useState<"idle" | "in" | "out" | "done">("idle");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("nb-intro") === "1";
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      setPhase("done");
      return;
    }
    document.documentElement.style.overflow = "hidden";
    setPhase("in");
    const t1 = setTimeout(() => setPhase("out"), 1200);
    const t2 = setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
      try {
        sessionStorage.setItem("nb-intro", "1");
      } catch {}
    }, 1950);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (phase === "done" || phase === "idle") return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[10000] grid place-items-center bg-paper transition-transform duration-[700ms] ease-[cubic-bezier(0.7,0,0.2,1)]"
      style={{ transform: phase === "out" ? "translateY(-101%)" : "translateY(0)" }}
    >
      <div className="container">
        <div className="overflow-hidden">
          <span
            className="block text-display-2 font-bold uppercase leading-[0.9] tracking-tightest"
            style={{ animation: "introWord 0.7s cubic-bezier(0.22,1,0.36,1) forwards" }}
          >
            Nishchal
          </span>
        </div>
        <div className="overflow-hidden">
          <span
            className="block text-display-2 font-bold uppercase leading-[0.9] tracking-tightest text-accent"
            style={{ animation: "introWord 0.7s cubic-bezier(0.22,1,0.36,1) 0.08s forwards" }}
          >
            Bisen
          </span>
        </div>
        <p className="meta mt-4">{profile.positioning}</p>
      </div>
      <style>{`@keyframes introWord{from{transform:translateY(110%)}to{transform:translateY(0)}}`}</style>
    </div>
  );
}
