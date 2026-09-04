import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
  sep = "✳",
}: {
  items: string[];
  className?: string;
  sep?: string;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={cn(
        "flex overflow-hidden whitespace-nowrap border-y border-ink py-2",
        className
      )}
      aria-hidden="true"
    >
      <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8 motion-reduce:animate-none">
        {row.map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-display-3 font-bold uppercase"
          >
            {it}
            <span className="text-accent">{sep}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
