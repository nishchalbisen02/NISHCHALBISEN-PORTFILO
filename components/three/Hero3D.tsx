"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/** Loads the WebGL hero only on capable, non-reduced-motion, pointer-fine screens. */
export default function Hero3D({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [ok, setOk] = useState(false);

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
  }, [reduce]);

  if (!ok) return null;
  return (
    <div className={className} aria-hidden="true">
      <HeroScene />
    </div>
  );
}
