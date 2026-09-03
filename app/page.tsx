import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Scribble from "@/components/Scribble";
import { projects, photos } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />

        <section id="work" className="shell">
          <div className="vmarquee" aria-hidden="true">
            <span>{"Selected Work — ".repeat(8)}</span>
          </div>
          <Reveal>
            <div className="section-head">
              <h2>Selected Work</h2>
              <span className="mono">
                (01) — {projects.length} projects — 2025&ndash;26
              </span>
              <Scribble variant="underline" className="scribble--head" />
            </div>
          </Reveal>
          <Work />
        </section>

        <section id="about">
          <div className="shell">
            <Reveal>
              <div className="section-head">
                <h2>About</h2>
                <span className="mono">(02) — {site.location}</span>
                <Scribble variant="underline" className="scribble--head" />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <About />
          </Reveal>

          <div className="shell">
            <div className="section-head">
              <h2 style={{ fontSize: "var(--step-1)" }}>Photography</h2>
              <span className="mono">Selected frames</span>
            </div>
            <div className="photostrip">
              {photos.map((src) => (
                <figure key={src}>
                  <img src={src} alt="" loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <Reveal>
            <Contact />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
