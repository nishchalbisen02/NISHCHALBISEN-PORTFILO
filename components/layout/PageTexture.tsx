const MAP = {
  lines: "/bg/lines.webp",
  curves: "/bg/curves.webp",
  marble: "/bg/marble.webp",
  indigo: "/bg/indigo.webp",
  stipple: "/bg/stipple.webp",
} as const;

export type TextureName = keyof typeof MAP;

/**
 * Page background — a bleed of texture from one edge, masked so it
 * fades out well before the reading column. Visible as a designed
 * background, never behind body copy.
 */
export default function PageTexture({
  name = "lines",
  position = "right",
}: {
  name?: TextureName;
  position?: "right" | "left" | "center" | "cover";
}) {
  if (position === "center" || position === "cover") {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${MAP[name]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "calc(var(--texture) * 0.6)",
            mixBlendMode: "var(--texture-blend)" as React.CSSProperties["mixBlendMode"],
            maskImage:
              "radial-gradient(120% 90% at 50% 40%, transparent, #000 85%)",
            WebkitMaskImage:
              "radial-gradient(120% 90% at 50% 40%, transparent, #000 85%)",
          }}
        />
      </div>
    );
  }

  const side = position === "left" ? "left-0" : "right-0";
  const mask =
    position === "left"
      ? "linear-gradient(90deg, #000 0%, #000 34%, transparent 74%)"
      : "linear-gradient(270deg, #000 0%, #000 34%, transparent 74%)";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute inset-y-0 ${side} w-[52%] max-w-[620px]`}
        style={{
          backgroundImage: `url(${MAP[name]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "var(--texture)",
          mixBlendMode: "var(--texture-blend)" as React.CSSProperties["mixBlendMode"],
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
    </div>
  );
}
