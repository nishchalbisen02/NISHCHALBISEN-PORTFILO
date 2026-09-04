import type { Metadata } from "next";
import DisciplinePage from "@/components/discipline/DisciplinePage";
import { disciplineById } from "@/data/disciplines";

const d = disciplineById.design;
export const metadata: Metadata = {
  title: `${d.title} — ${d.line}`,
  description: d.blurb,
};

export default function Page() {
  return <DisciplinePage id="design" />;
}
