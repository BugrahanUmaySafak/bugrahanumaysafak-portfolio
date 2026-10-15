import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/layout/section";
import { Eyebrow, SectionHeading } from "@/components/layout/section-heading";
import { BrowserFrame, PhoneFrame } from "@/components/projects/device-frames";
import { ClientLogo } from "@/components/projects/client-logo";
import { ProjectCover } from "@/components/projects/project-cover";
import { ProjectStatus } from "@/components/projects/project-status";
import { TechBadgeList } from "@/components/tech/tech-badge";
import { ContactCta } from "@/components/cta/contact-cta";
import { PROJECTS, getProjectCover, type Project } from "@/data/projects";
import { getTechnologies } from "@/data/technologies";
import { Link } from "@/i18n/navigation";
import { localize } from "@/lib/localize";
import { cn } from "@/lib/utils";

function displayUrl(href: string) {
  return href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function ProjectDetailWrapper({ project }: { project: Project }) {
  const locale = useLocale();
  const t = useTranslations("ProjectDetail");
  const tp = useTranslations("Projects");
  const nav = useTranslations("Navigation");

  const technologies = getTechnologies(project.technologies);
  const desktopShots = project.gallery.filter((i) => i.device === "desktop");
  const mobileShots = project.gallery.filter((i) => i.device === "mobile");
  const galleryShots = desktopShots.slice(1);
  const hasGallery = galleryShots.length > 0 || mobileShots.length > 0;

  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  const clientName = localize(project.client, locale);

  const meta: { label: string; value: ReactNode }[] = [
    {
      label: t("meta.client"),
      value: (
        <span className="inline-flex items-center gap-2">
          {project.logo && getProjectCover(project) && (
            <ClientLogo logo={project.logo} alt={clientName} />
          )}
          {clientName}
        </span>
      ),
    },
    { label: t("meta.role"), value: localize(project.role, locale) },
    {
      label: t("meta.period"),
      value: project.period ? localize(project.period, locale) : tp(`kind.${project.kind}`),
    },
    ...(project.location
      ? [{ label: t("meta.location"), value: localize(project.location, locale) }]
      : []),
    { label: t("meta.sector"), value: localize(project.sector, locale) },
  ];

  return (
    <main>
      <Section pattern className="pb-10 md:pb-14" containerClassName="space-y-10">
        <Breadcrumb className="animate-in fade-in duration-500">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/#projects">{nav("projects")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Eyebrow>{tp(`kind.${project.kind}`)}</Eyebrow>
            <ProjectStatus status={project.status} />
          </div>
          <h1 className="text-balance wrap-break-word text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
            {project.name}
          </h1>
          <p className="max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl">
            {localize(project.summary, locale)}
          </p>

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.map((link, i) => (
                <Button key={link.href} asChild variant={i === 0 ? "default" : "outline"}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {localize(link.label, locale)}
                    <ArrowUpRight />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <Separator />
          <dl
            className={cn(
              "grid grid-cols-2 gap-6",
              meta.length > 4 ? "md:grid-cols-3 lg:grid-cols-5" : "md:grid-cols-4"
            )}
          >
            {meta.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ProjectCover
          project={project}
          priority
          sizes="(min-width: 1152px) 1104px, 100vw"
          className="shadow-xl shadow-foreground/5 animate-in fade-in zoom-in-95 duration-700 delay-150 fill-mode-both"
          logoRatio={5 / 2}
        />
      </Section>

      <Section className="pt-6 md:pt-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
          <div className="space-y-12">
            <div className="reveal space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">{t("overview")}</h2>
              <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
                {localize(project.overview, locale).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="reveal space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">{t("whatIDid")}</h2>
              <ul className="space-y-3">
                {localize(project.highlights, locale).map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand">
                      <Check className="size-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.roadmap && (
              <Card className="reveal border-dashed bg-brand-soft py-5 shadow-none">
                <CardContent className="flex gap-4 px-5">
                  <Sparkles className="mt-0.5 size-5 shrink-0 text-brand" />
                  <div className="space-y-1">
                    <p className="font-semibold">{t("roadmap")}</p>
                    <p className="text-sm text-muted-foreground">{localize(project.roadmap, locale)}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <SidebarCard title={t("stack")}>
              <TechBadgeList technologies={technologies} />
            </SidebarCard>

            <SidebarCard title={t("features")}>
              <ul className="space-y-2 text-sm">
                {localize(project.features, locale).map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span aria-hidden="true" className="size-1.5 shrink-0 bg-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
            </SidebarCard>

            {project.links.length > 0 && (
              <SidebarCard title={t("links")}>
                <ul className="-my-3">
                  {project.links.map((link, i) => (
                    <li key={link.href}>
                      {i > 0 && <Separator />}
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-3 py-3 text-sm"
                      >
                        <span className="min-w-0">
                          <span className="block font-medium">{localize(link.label, locale)}</span>
                          <span className="block truncate font-mono text-xs text-muted-foreground">
                            {displayUrl(link.href)}
                          </span>
                        </span>
                        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </a>
                    </li>
                  ))}
                </ul>
              </SidebarCard>
            )}
          </aside>
        </div>
      </Section>

      {hasGallery && (
        <Section id="gallery" className="border-y bg-surface">
          <div className="space-y-10 md:space-y-12">
            <SectionHeading eyebrow={t("galleryEyebrow")} title={t("gallery")} />

            {galleryShots.length > 0 && (
              <Carousel opts={{ align: "start" }} className="reveal">
                <CarouselContent>
                  {galleryShots.map((shot) => (
                    <CarouselItem key={shot.src} className="md:basis-1/2">
                      <BrowserFrame
                        src={shot.src}
                        alt={localize(shot.alt, locale)}
                        caption={localize(shot.alt, locale)}
                        url={shot.url}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="mt-6 flex justify-end gap-2 xl:mt-0">
                  <CarouselPrevious
                    label={t("galleryPrev")}
                    className="static translate-y-0 xl:absolute xl:-left-12 xl:top-1/2 xl:-translate-y-1/2"
                  />
                  <CarouselNext
                    label={t("galleryNext")}
                    className="static translate-y-0 xl:absolute xl:-right-12 xl:top-1/2 xl:-translate-y-1/2"
                  />
                </div>
              </Carousel>
            )}

            {mobileShots.length > 0 && (
              <Card className="reveal py-0">
                <CardContent className="grid grid-cols-1 items-center gap-10 p-6 md:grid-cols-[1fr_auto] md:p-10">
                  <div className="max-w-md space-y-3">
                    <Eyebrow>{t("mobile.eyebrow")}</Eyebrow>
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                      {t("mobile.title")}
                    </h3>
                    <p className="text-muted-foreground">{t("mobile.description")}</p>
                  </div>
                  <div className="flex justify-center gap-6">
                    {mobileShots.map((shot) => (
                      <PhoneFrame
                        key={shot.src}
                        src={shot.src}
                        alt={localize(shot.alt, locale)}
                        className="w-60"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </Section>
      )}

      <Section>
        <div className="space-y-16">
          {nextProject && nextProject.slug !== project.slug && (
            <Card className="reveal group relative py-0 transition-[translate,border-color] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 has-[a:focus-visible]:ring-[3px] has-[a:focus-visible]:ring-ring/50">
              <CardContent className="flex items-center justify-between gap-4 p-5 sm:gap-6 sm:p-6 md:p-8">
                <div className="min-w-0 space-y-2">
                  <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {t("next")}
                  </span>
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="block wrap-break-word text-xl font-semibold tracking-tight outline-none transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-brand sm:text-2xl md:text-4xl"
                  >
                    {nextProject.name}
                  </Link>
                </div>
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-all group-hover:border-foreground group-hover:bg-foreground group-hover:text-background sm:size-12">
                  <ArrowRight className="size-5" />
                </span>
              </CardContent>
            </Card>
          )}
          <ContactCta />
        </div>
      </Section>
    </main>
  );
}

function SidebarCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card className="reveal gap-4 py-5">
      <CardHeader className="px-5">
        <CardTitle className="font-mono text-xs font-normal uppercase tracking-widest text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5">{children}</CardContent>
    </Card>
  );
}
