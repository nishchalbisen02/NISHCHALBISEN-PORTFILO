import { site } from "@/lib/site";
import Scribble from "@/components/Scribble";

export default function Contact() {
  return (
    <div className="contact shell">
      <Scribble variant="spiral" className="scribble--contact" />

      <p className="mono" style={{ color: "var(--ink-2)", marginBottom: "1.2rem" }}>
        (03) — Contact
      </p>

      <h2 className="contact__big">
        Let&rsquo;s make
        <br />
        something that
        <br />
        <span className="mark">lasts</span>
        <span style={{ color: "var(--accent)" }}>.</span>
      </h2>

      <a className="contact__email" href={`mailto:${site.email}`}>
        {site.email} <span aria-hidden>&#8599;</span>
      </a>

      <div className="contact__socials">
        {site.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener">
            <span className="s-label">{s.label}</span>
            <span>{s.handle}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
