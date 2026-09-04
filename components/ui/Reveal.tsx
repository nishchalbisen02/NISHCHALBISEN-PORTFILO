import { cn } from "@/lib/cn";

/**
 * Scroll reveal — CSS scroll-timeline, no JS.
 * Content is visible by default; the reveal is progressive enhancement,
 * so it can never leave anything hidden (background tab, old browser, etc.).
 * `delay` nudges the range start so stacked items stagger a little.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn("reveal-css", className)}
      style={
        delay
          ? ({ animationRange: `entry ${delay * 4}% cover 26%` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}

/** Word-by-word mask reveal for headlines — CSS only, visible by default. */
export function RevealText({
  text,
  as: Tag = "span",
  className,
}: {
  text: string;
  as?: "span" | "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <Tag className={cn("inline", className)}>
      {words.map((w, i) => (
        <span
          key={i}
          className="hero-line inline-block align-bottom"
          style={{ paddingBottom: "0.08em" }}
        >
          <span
            className="hero-word inline-block"
            style={{ ["--i" as string]: i } as React.CSSProperties}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
