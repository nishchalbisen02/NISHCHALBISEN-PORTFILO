"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function readAccent() {
  if (typeof window === "undefined") return "#7a2740";
  return (
    getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() ||
    "#7a2740"
  );
}

/** Loads the WebGL hero only on capable, non-reduced-motion, pointer-fine screens. */
export default function Hero3D({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [ok, setOk] = useState(false);
  const [color, setColor] = useState("#7a2740");

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(min-width: 1024px)").matches;
    const notCoarse = window.matchMedia("(pointer: fine)").matches;
    let webgl = false;
    try {
      const c = document.createElement("canvas");
      webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webgl = false;
    }
    setOk(fine && notCoarse && webgl);
    setColor(readAccent());

    const obs = new MutationObserver(() => setColor(readAccent()));
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-palette", "data-theme"],
    });
    return () => obs.disconnect();
  }, [reduce]);

  if (!ok) return null;
  return (
    <div className={className} aria-hidden="true">
      <HeroScene color={color} />
    </div>
  );
}
