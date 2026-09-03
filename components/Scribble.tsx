type Variant = "spiral" | "underline" | "loop" | "arrow" | "spark";

const PATHS: Record<Variant, { vb: string; d: string[] }> = {
  spiral: {
    vb: "0 0 220 120",
    d: [
      "M8 62c22-46 52-52 70-30s-6 62 18 60 34-44 58-42 40 34 60 20",
    ],
  },
  underline: {
    vb: "0 0 240 40",
    d: [
      "M6 14c48 10 150 12 228 2",
      "M14 28c60 8 140 8 214 0",
    ],
  },
  loop: {
    vb: "0 0 200 140",
    d: [
      "M100 12C42 12 12 44 12 78s34 52 88 52 90-26 88-58C185 40 150 16 108 16",
    ],
  },
  arrow: {
    vb: "0 0 160 90",
    d: [
      "M8 44c40 6 96 4 140-14",
      "M120 6c12 10 22 18 28 24-10 6-20 16-26 30",
    ],
  },
  spark: {
    vb: "0 0 80 80",
    d: ["M40 6v22", "M40 52v22", "M6 40h22", "M52 40h22", "M16 16l14 14", "M50 50l14 14"],
  },
};

export default function Scribble({
  variant = "spiral",
  className = "",
  draw = true,
  color,
}: {
  variant?: Variant;
  className?: string;
  draw?: boolean;
  color?: string;
}) {
  const { vb, d } = PATHS[variant];
  return (
    <span
      className={`scribble ${draw ? "scribble--draw" : ""} ${className}`}
      aria-hidden="true"
      style={color ? { color } : undefined}
    >
      <svg viewBox={vb} preserveAspectRatio="none">
        {d.map((p, i) => (
          <path key={i} d={p} />
        ))}
      </svg>
    </span>
  );
}
