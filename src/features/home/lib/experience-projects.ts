// src/features/home/lib/experience-projects.ts
import {
  EXPERIENCE_PROJECTS,
  type ExperienceProjectItem,
} from "@/data/projects";

export type HomeExperienceProjectCard = {
  id: ExperienceProjectItem["id"];
  typeLabel: string;
  title: string;
  subtitle: string;
  period?: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
};

const HOME_PROJECT_IDS: ExperienceProjectItem["id"][] = [
  "getclinic",
  "alpertunaozkan",
  "panel-alpertunaozkan",
];

export function getHomeExperienceProjects(): HomeExperienceProjectCard[] {
  return HOME_PROJECT_IDS.map((id) => {
    const project = EXPERIENCE_PROJECTS.find((p) => p.id === id);

    if (!project) {
      return null;
    }

    const typeLabel =
      project.kind === "experience"
        ? "Full-time · Şirket"
        : "Freelance · Proje";

    return {
      id: project.id,
      typeLabel,
      title: project.name,
      subtitle: project.role,
      period: project.period,
      logoSrc: project.logoSrc,
      logoAlt: project.logoAlt,
      description: project.shortDescription,
    };
  }).filter(Boolean) as HomeExperienceProjectCard[];
}
