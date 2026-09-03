"use client";

import { useEffect, useState } from "react";

/** First-visit loader: name masks in, then the panel wipes up. */
export default function Intro() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("done");

  useEffect(() => {
    const locked = document.documentElement.classList.contains("intro-lock");
    if (!locked) return; // repeat visit / reduced motion — handled by inline script

    setPhase("in");
    const t1 = setTimeout(() => setPhase("out"), 1500);
    const t2 = setTimeout(() => {
      setPhase("done");
      const html = document.documentElement;
      html.classList.remove("intro-lock");
      html.classList.add("intro-done");
      try {
        sessionStorage.setItem("nb-intro", "1");
      } catch {}
    }, 2250);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`intro intro--${phase}`} aria-hidden="true">
      <div className="intro__inner">
        <span className="intro__line">
          <span className="intro__word">Nishchal</span>
        </span>
        <span className="intro__line">
          <span className="intro__word">Bisen</span>
        </span>
      </div>
    </div>
  );
}
