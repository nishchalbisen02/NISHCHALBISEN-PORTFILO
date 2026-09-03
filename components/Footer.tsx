import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer shell">
      <span className="mono">
        &copy; {new Date().getFullYear()} {site.name} — {site.location}
      </span>
      <span className="mono">Designed &amp; built by {site.name}. Set in Space Grotesk &amp; Space Mono.</span>
      <a href="#top" className="mono">
        Back to top &uarr;
      </a>
    </footer>
  );
}
