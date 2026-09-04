import Image from "next/image";
import { cn } from "@/lib/cn";
import { disciplineById, type DisciplineId } from "@/data/disciplines";

export function ProjectPlaceholder({
  title,
  discipline,
  className,
  label = "Visuals in progress",
}: {
  title: string;
  discipline: DisciplineId;
  className?: string;
  label?: string;
}) {
  const d = disciplineById[discipline];
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden border border-line bg-paper-2 p-6",
        className
      )}
    >
      <span className="meta relative z-10">
        {d.index} · {d.label}
      </span>
      <div className="relative z-10">
        <p className="text-heading font-bold leading-[1.05]">{title}</p>
        <p className="meta mt-3">{label}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--ink)_1px,transparent_1px),linear-gradient(90deg,var(--ink)_1px,transparent_1px)] [background-size:26px_26px]" />
    </div>
  );
}

export function Media({
  src,
  alt,
  title,
  discipline,
  fill = true,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 60vw",
  className,
  imgClassName,
  priority = false,
}: {
  src?: string;
  alt: string;
  title: string;
  discipline: DisciplineId;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <ProjectPlaceholder title={title} discipline={discipline} className={className} />
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-paper-2", className)}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width ?? 1600}
          height={height ?? 1000}
          sizes={sizes}
          priority={priority}
          className={cn("h-auto w-full", imgClassName)}
        />
      )}
    </div>
  );
}
