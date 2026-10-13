import { siteConfig } from "@/config/site";
import { PROJECTS, getProject } from "@/data/projects";
import { getTechnologies } from "@/data/technologies";
import { renderOgImage } from "@/lib/og-image";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ file: `${project.slug}.png` }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;
  const project = getProject(file.replace(/\.png$/, ""));

  if (!project) return new Response(null, { status: 404 });

  return renderOgImage({
    eyebrow: siteConfig.name,
    title: project.name,
    tags: getTechnologies(project.technologies)
      .slice(0, 5)
      .map((tech) => tech.title),
  });
}
