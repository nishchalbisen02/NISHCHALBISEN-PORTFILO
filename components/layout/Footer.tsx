import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { nav } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink">
      <div className="container py-14 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-display-3 font-bold uppercase leading-[0.95] tracking-tight">
              Let&rsquo;s build
              <br />
              something.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-5 inline-block text-heading font-bold"
            >
              {profile.email}
            </a>
            <p className="meta mt-4">{profile.positioning}</p>
          </div>

          <nav className="flex flex-col gap-2">
            <span className="meta mb-1">Index</span>
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="link-underline w-fit text-sm">
                {n.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-2">
            <span className="meta mb-1">Elsewhere</span>
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="group inline-flex w-fit items-center gap-1 text-sm"
              >
                <span className="link-underline">{s.label}</span>
                {s.href.startsWith("http") && (
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 meta">
          <span>
            © {year} {profile.name} — {profile.location}
          </span>
          <span>Designed &amp; built by {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}
