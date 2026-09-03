import { site } from "@/lib/site";
import Scribble from "@/components/Scribble";
import SpinBadge from "@/components/SpinBadge";

export default function Hero() {
  return (
    <section className="hero shell" id="top">
      <SpinBadge className="hero__badge" />

      <div className="hero__kicker mono">
        <span>{site.role}</span>
        <span>Portfolio &copy; 2026</span>
        <span>{site.location}</span>
      </div>

      <h1 className="hero__title">
        <span className="kw-line">
          <span className="kw" style={{ "--i": 0 } as React.CSSProperties}>Nishchal</span>
        </span>
        <span className="kw-line">
          <span className="kw" style={{ "--i": 1 } as React.CSSProperties}>
            Bisen<span className="accent">.</span>
          </span>
        </span>
      </h1>

      <p className="hero__sub">
        I build brand identities, posters and editorial systems with a bias for{" "}
        <span className="mark">bold type</span>, strict grids, and ideas that read from
        across the room.
      </p>

      <div className="hero__meta mono">
        <span>
          <span className="dot" />
          {site.availableLabel}
        </span>
        <span>Est. {site.since}</span>
        <span>&darr; Scroll to work</span>
      </div>

      <Scribble variant="spiral" draw={false} className="hero__scribble" />
    </section>
  );
}
