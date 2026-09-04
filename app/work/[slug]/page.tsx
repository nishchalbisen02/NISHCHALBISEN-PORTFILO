import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/project/CaseStudy";
import { getProject, caseStudySlugs } from "@/data/projects";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.client}`,
      description: project.description,
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.caseStudy) notFound();
  return <CaseStudy project={project} />;
}
