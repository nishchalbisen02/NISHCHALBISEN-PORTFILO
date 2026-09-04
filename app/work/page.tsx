import type { Metadata } from "next";
import { WorkIndex } from "@/components/work/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects across technology, AI, design and film — professional work at IBT, freelance engagements and independent projects.",
};

export default function WorkPage() {
  return (
    <div className="container py-10 sm:py-16">
      <span className="meta">Index</span>
      <h1 className="mt-3 text-display-1 font-bold uppercase leading-[0.88] tracking-tightest">
        Work
      </h1>
      <p className="mt-6 max-w-prose text-ink-2">
        Selected projects across technology, AI, design and film — professional
        work at Innovative Business Technologies, freelance engagements and
        independent projects.
      </p>
      <div className="mt-12">
        <WorkIndex />
      </div>
    </div>
  );
}
