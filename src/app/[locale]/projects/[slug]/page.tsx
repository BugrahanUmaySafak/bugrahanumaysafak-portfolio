import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectDetailWrapper } from "@/features/projects/containers/project-detail-wrapper";
import { JsonLd } from "@/components/seo/json-ld";
import { PROJECTS, getProject } from "@/data/projects";
import { localize } from "@/lib/localize";
import { pageMetadata, projectOgImage } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return pageMetadata({
    locale,
    path: `/projects/${project.slug}`,
    title: project.name,
    description: localize(project.summary, locale),
    image: projectOgImage(project),
  });
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(slug);

  if (!project) notFound();

  const nav = await getTranslations({ locale, namespace: "Navigation" });

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema([
            { name: nav("projects"), path: `/${locale}#projects` },
            { name: project.name, path: `/${locale}/projects/${project.slug}` },
          ]),
        ]}
      />
      <PageTransition>
        <ProjectDetailWrapper project={project} />
      </PageTransition>
    </>
  );
}
