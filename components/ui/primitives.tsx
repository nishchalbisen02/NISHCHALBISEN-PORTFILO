import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function Wrap({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
}) {
  return <Tag className={cn("container", className)}>{children}</Tag>;
}

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-line px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-2",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  index,
  title,
  aside,
  className,
}: {
  index?: string;
  title: string;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-baseline justify-between gap-3 border-t border-line pt-4",
        className
      )}
    >
      <h2 className="flex items-baseline gap-3 text-heading font-bold">
        {index && <span className="meta translate-y-[-2px]">{index}</span>}
        {title}
      </h2>
      {aside && <div className="meta">{aside}</div>}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  external,
  className,
  variant = "inline",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  variant?: "inline" | "button";
}) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const content = (
    <span
      className={cn(
        "group inline-flex items-center gap-2",
        variant === "button" &&
          "border border-ink px-5 py-3 text-sm uppercase tracking-[0.08em] transition-colors duration-300 hover:bg-ink hover:text-paper",
        className
      )}
    >
      <span className={variant === "inline" ? "link-underline" : ""}>
        {children}
      </span>
      <Icon
        size={variant === "button" ? 16 : 15}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
      />
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
        {content}
      </a>
    );
  }
  return <Link href={href}>{content}</Link>;
}
