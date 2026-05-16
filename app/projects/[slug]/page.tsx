import { projects } from "@/lib/data";
import ProjectDetailClient from "@/components/ProjectDetailClient";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.en.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = projects.en.find((item) => item.slug === params.slug);
  if (!project) return {};
  return { title: `${project.name} - Robin Tokarsky`, description: project.short };
}

export default function ProjectDetail({ params }: Props) {
  return <ProjectDetailClient slug={params.slug} />;
}
