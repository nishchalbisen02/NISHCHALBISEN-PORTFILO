import { site } from "@/lib/site";
import Scribble from "@/components/Scribble";

function Cols({ items }: { items: string[] }) {
  const mid = Math.ceil(items.length / 2);
  return (
    <>
      <ul>
        {items.slice(0, mid).map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <ul>
        {items.slice(mid).map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </>
  );
}

export default function About() {
  return (
    <div className="about shell">
      <Scribble variant="loop" className="scribble--about" />
      <figure className="about__portrait">
        <img
          src="/about-portrait.webp"
          alt={`${site.name} — portrait`}
          loading="lazy"
          width={1100}
          height={1100}
        />
      </figure>

      <div className="about__text">
        {site.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        <div className="deflist">
          <h3 className="mono">Capabilities</h3>
          <Cols items={site.capabilities} />
        </div>

        <div className="deflist">
          <h3 className="mono">Selected clients &amp; projects</h3>
          <Cols items={site.clients} />
        </div>

        <div className="deflist">
          <h3 className="mono">Tools</h3>
          <Cols items={site.tools} />
        </div>
      </div>
    </div>
  );
}
