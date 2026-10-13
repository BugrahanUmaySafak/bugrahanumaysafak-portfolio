import type { IconComponent } from "@/lib/utils";
import {
  SiBitbucket,
  SiCloudinary,
  SiCloudflare,
  SiConfluence,
  SiCss,
  SiCypress,
  SiDocker,
  SiDrizzle,
  SiEslint,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGoogleanalytics,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiJsonwebtokens,
  SiLighthouse,
  SiLinux,
  SiLoom,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNotion,
  SiNpm,
  SiPnpm,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiSocketdotio,
  SiSqlite,
  SiStorybook,
  SiSwagger,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
  SiTrello,
  SiTrpc,
  SiTurborepo,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiYarn,
  SiZod,
} from "react-icons/si";
import { FaAws, FaSlack } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  Box,
  Drama,
  KeyRound,
  Languages,
  PenLine,
  Repeat,
  Search,
  SquareKanban,
  Webhook,
} from "lucide-react";

export type TechnologyCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tooling"
  | "workflow";

export const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  "frontend",
  "backend",
  "database",
  "devops",
  "tooling",
  "workflow",
];

export type Technology = {
  id: string;
  title: string;
  category: TechnologyCategory;
  icon: IconComponent;
};

export const TECHNOLOGIES = [
  { id: "html", title: "HTML5", category: "frontend", icon: SiHtml5 },
  { id: "css", title: "CSS3", category: "frontend", icon: SiCss },
  { id: "javascript", title: "JavaScript", category: "frontend", icon: SiJavascript },
  { id: "typescript", title: "TypeScript", category: "frontend", icon: SiTypescript },
  { id: "react", title: "React", category: "frontend", icon: SiReact },
  { id: "nextjs", title: "Next.js", category: "frontend", icon: SiNextdotjs },
  { id: "tailwind", title: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },
  { id: "shadcn", title: "shadcn/ui", category: "frontend", icon: SiShadcnui },
  { id: "radix", title: "Radix UI", category: "frontend", icon: SiRadixui },
  { id: "framer-motion", title: "Framer Motion", category: "frontend", icon: SiFramer },
  { id: "tanstack-query", title: "TanStack Query", category: "frontend", icon: SiReactquery },
  { id: "redux-toolkit", title: "Redux Toolkit", category: "frontend", icon: SiRedux },
  { id: "zustand", title: "Zustand", category: "frontend", icon: Box },
  { id: "react-hook-form", title: "React Hook Form", category: "frontend", icon: SiReacthookform },
  { id: "zod", title: "Zod", category: "frontend", icon: SiZod },
  { id: "tiptap", title: "Tiptap Editor", category: "frontend", icon: PenLine },
  { id: "seo", title: "SEO", category: "frontend", icon: Search },
  { id: "i18n", title: "next-intl / i18n", category: "frontend", icon: Languages },
  { id: "sass", title: "Sass", category: "frontend", icon: SiSass },
  { id: "vite", title: "Vite", category: "frontend", icon: SiVite },

  { id: "nodejs", title: "Node.js", category: "backend", icon: SiNodedotjs },
  { id: "express", title: "Express.js", category: "backend", icon: SiExpress },
  { id: "nestjs", title: "NestJS", category: "backend", icon: SiNestjs },
  { id: "rest-api", title: "REST APIs", category: "backend", icon: Webhook },
  { id: "graphql", title: "GraphQL", category: "backend", icon: SiGraphql },
  { id: "trpc", title: "tRPC", category: "backend", icon: SiTrpc },
  { id: "prisma", title: "Prisma", category: "backend", icon: SiPrisma },
  { id: "drizzle", title: "Drizzle ORM", category: "backend", icon: SiDrizzle },
  { id: "nextauth", title: "NextAuth / OAuth", category: "backend", icon: KeyRound },
  { id: "jwt", title: "JWT", category: "backend", icon: SiJsonwebtokens },
  { id: "swagger", title: "Swagger / OpenAPI", category: "backend", icon: SiSwagger },
  { id: "socketio", title: "Socket.IO", category: "backend", icon: SiSocketdotio },

  { id: "postgresql", title: "PostgreSQL", category: "database", icon: SiPostgresql },
  { id: "mysql", title: "MySQL", category: "database", icon: SiMysql },
  { id: "mongodb", title: "MongoDB", category: "database", icon: SiMongodb },
  { id: "redis", title: "Redis", category: "database", icon: SiRedis },
  { id: "sqlite", title: "SQLite", category: "database", icon: SiSqlite },
  { id: "supabase", title: "Supabase", category: "database", icon: SiSupabase },
  { id: "firebase", title: "Firebase", category: "database", icon: SiFirebase },

  { id: "docker", title: "Docker", category: "devops", icon: SiDocker },
  { id: "nginx", title: "Nginx", category: "devops", icon: SiNginx },
  { id: "linux", title: "Linux / Ubuntu", category: "devops", icon: SiLinux },
  { id: "vercel", title: "Vercel", category: "devops", icon: SiVercel },
  { id: "cloudflare", title: "Cloudflare", category: "devops", icon: SiCloudflare },
  { id: "aws", title: "AWS", category: "devops", icon: FaAws },
  { id: "cloudinary", title: "Cloudinary", category: "devops", icon: SiCloudinary },
  { id: "github-actions", title: "GitHub Actions", category: "devops", icon: SiGithubactions },

  { id: "git", title: "Git", category: "tooling", icon: SiGit },
  { id: "github", title: "GitHub", category: "tooling", icon: SiGithub },
  { id: "gitlab", title: "GitLab", category: "tooling", icon: SiGitlab },
  { id: "pnpm", title: "pnpm", category: "tooling", icon: SiPnpm },
  { id: "npm", title: "npm", category: "tooling", icon: SiNpm },
  { id: "yarn", title: "Yarn", category: "tooling", icon: SiYarn },
  { id: "turbo", title: "Turborepo", category: "tooling", icon: SiTurborepo },
  { id: "eslint", title: "ESLint", category: "tooling", icon: SiEslint },
  { id: "prettier", title: "Prettier", category: "tooling", icon: SiPrettier },
  { id: "vitest", title: "Vitest", category: "tooling", icon: SiVitest },
  { id: "jest", title: "Jest", category: "tooling", icon: SiJest },
  { id: "testing-library", title: "Testing Library", category: "tooling", icon: SiTestinglibrary },
  { id: "playwright", title: "Playwright", category: "tooling", icon: Drama },
  { id: "cypress", title: "Cypress", category: "tooling", icon: SiCypress },
  { id: "storybook", title: "Storybook", category: "tooling", icon: SiStorybook },
  { id: "postman", title: "Postman", category: "tooling", icon: SiPostman },
  { id: "vscode", title: "VS Code", category: "tooling", icon: VscVscode },
  { id: "lighthouse", title: "Lighthouse", category: "tooling", icon: SiLighthouse },
  { id: "google-analytics", title: "Google Analytics", category: "tooling", icon: SiGoogleanalytics },

  { id: "jira", title: "Jira", category: "workflow", icon: SiJira },
  { id: "confluence", title: "Confluence", category: "workflow", icon: SiConfluence },
  { id: "bitbucket", title: "Bitbucket", category: "workflow", icon: SiBitbucket },
  { id: "trello", title: "Trello", category: "workflow", icon: SiTrello },
  { id: "loom", title: "Loom", category: "workflow", icon: SiLoom },
  { id: "slack", title: "Slack", category: "workflow", icon: FaSlack },
  { id: "notion", title: "Notion", category: "workflow", icon: SiNotion },
  { id: "figma", title: "Figma", category: "workflow", icon: SiFigma },
  { id: "scrum", title: "Agile / Scrum", category: "workflow", icon: Repeat },
  { id: "kanban", title: "Kanban", category: "workflow", icon: SquareKanban },
] as const satisfies readonly Technology[];

export type TechnologyId = (typeof TECHNOLOGIES)[number]["id"];

export const FEATURED_TECHNOLOGY_IDS: TechnologyId[] = [
  "nextjs",
  "react",
  "typescript",
  "tailwind",
  "shadcn",
  "nodejs",
  "mongodb",
  "zod",
  "nginx",
  "vercel",
  "aws",
  "git",
  "jira",
  "confluence",
  "slack",
  "figma",
];

const TECHNOLOGY_MAP = new Map<string, Technology>(
  TECHNOLOGIES.map((tech) => [tech.id, tech])
);

export function getTechnologies(ids: readonly TechnologyId[]): Technology[] {
  return ids.flatMap((id) => {
    const tech = TECHNOLOGY_MAP.get(id);
    return tech ? [tech] : [];
  });
}

export function getTechnologiesByCategory(category: TechnologyCategory) {
  return TECHNOLOGIES.filter((tech) => tech.category === category);
}
