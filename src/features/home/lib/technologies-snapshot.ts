import {
  TECHNOLOGIES,
  type TechnologyCategory,
  type TechnologyId,
  type Technology,
} from "@/data/technologies";

const SNAPSHOT_TECH_IDS: Record<TechnologyCategory, TechnologyId[]> = {
  frontend: ["nextjs", "react", "typescript", "tailwind", "javascript"],
  backend: ["nodejs", "rest-api", "postgresql", "mongodb", "prisma"],
  tooling: ["git", "github", "docker", "aws", "eslint"],
  workflow: ["jira", "confluence", "notion", "slack", "figma"],
};

const SNAPSHOT_TITLES: Record<TechnologyCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tooling: "Tooling",
  workflow: "Workflow & Collaboration",
};

export type TechnologySnapshotGroup = {
  category: TechnologyCategory;
  title: string;
  items: Technology[];
};

export function getHomeTechnologySnapshot(): TechnologySnapshotGroup[] {
  return (Object.keys(SNAPSHOT_TECH_IDS) as TechnologyCategory[]).map(
    (category) => {
      const ids = SNAPSHOT_TECH_IDS[category];

      const items = TECHNOLOGIES.filter(
        (tech) => tech.category === category && ids.includes(tech.id)
      );

      return {
        category,
        title: SNAPSHOT_TITLES[category],
        items,
      };
    }
  );
}
