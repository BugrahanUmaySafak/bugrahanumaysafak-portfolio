// src/data/technologies.ts

export type TechnologyCategory =
  | "frontend"
  | "backend"
  | "tooling"
  | "workflow";

export type TechnologyId =
  // Frontend
  | "html"
  | "css"
  | "sass"
  | "tailwind"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "react-router"
  | "redux-toolkit"
  | "zustand"
  | "tanstack-query"
  | "react-hook-form"
  | "zod"
  | "framer-motion"
  | "storybook"
  // Backend
  | "nodejs"
  | "express"
  | "nestjs"
  | "rest-api"
  | "graphql"
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "sqlite"
  | "redis"
  | "prisma"
  // Tooling
  | "docker"
  | "aws"
  | "vercel"
  | "github-actions"
  | "git"
  | "github"
  | "gitlab"
  | "postman"
  | "pnpm"
  | "yarn"
  | "npm"
  | "eslint"
  | "prettier"
  | "turbo"
  | "vitest"
  | "jest"
  | "testing-library"
  | "cypress"
  // Workflow / Collaboration
  | "jira"
  | "notion"
  | "slack"
  | "confluence"
  | "figma"
  | "kanban"
  | "scrum";

export type Technology = {
  id: TechnologyId;
  title: string;
  category: TechnologyCategory;
  logoLight: string;
  logoDark: string;
};

export const TECHNOLOGIES: Technology[] = [
  // --------------------
  // Frontend
  // --------------------
  {
    id: "html",
    title: "HTML5",
    category: "frontend",
    logoLight: "/tech/html-light.svg",
    logoDark: "/tech/html-dark.svg",
  },
  {
    id: "css",
    title: "CSS3",
    category: "frontend",
    logoLight: "/tech/css-light.svg",
    logoDark: "/tech/css-dark.svg",
  },
  {
    id: "sass",
    title: "Sass",
    category: "frontend",
    logoLight: "/tech/sass-light.svg",
    logoDark: "/tech/sass-dark.svg",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    category: "frontend",
    logoLight: "/tech/tailwind-light.svg",
    logoDark: "/tech/tailwind-dark.svg",
  },
  {
    id: "javascript",
    title: "JavaScript",
    category: "frontend",
    logoLight: "/tech/javascript-light.svg",
    logoDark: "/tech/javascript-dark.svg",
  },
  {
    id: "typescript",
    title: "TypeScript",
    category: "frontend",
    logoLight: "/tech/typescript-light.svg",
    logoDark: "/tech/typescript-dark.svg",
  },
  {
    id: "react",
    title: "React",
    category: "frontend",
    logoLight: "/tech/react-light.svg",
    logoDark: "/tech/react-dark.svg",
  },
  {
    id: "nextjs",
    title: "Next.js",
    category: "frontend",
    logoLight: "/tech/nextjs-light.svg",
    logoDark: "/tech/nextjs-dark.svg",
  },
  {
    id: "react-router",
    title: "React Router",
    category: "frontend",
    logoLight: "/tech/react-router-light.svg",
    logoDark: "/tech/react-router-dark.svg",
  },
  {
    id: "redux-toolkit",
    title: "Redux Toolkit",
    category: "frontend",
    logoLight: "/tech/redux-toolkit-light.svg",
    logoDark: "/tech/redux-toolkit-dark.svg",
  },
  {
    id: "zustand",
    title: "Zustand",
    category: "frontend",
    logoLight: "/tech/zustand-light.svg",
    logoDark: "/tech/zustand-dark.svg",
  },
  {
    id: "tanstack-query",
    title: "TanStack Query",
    category: "frontend",
    logoLight: "/tech/tanstack-query-light.svg",
    logoDark: "/tech/tanstack-query-dark.svg",
  },
  {
    id: "react-hook-form",
    title: "React Hook Form",
    category: "frontend",
    logoLight: "/tech/react-hook-form-light.svg",
    logoDark: "/tech/react-hook-form-dark.svg",
  },
  {
    id: "zod",
    title: "Zod",
    category: "frontend",
    logoLight: "/tech/zod-light.svg",
    logoDark: "/tech/zod-dark.svg",
  },
  {
    id: "framer-motion",
    title: "Framer Motion",
    category: "frontend",
    logoLight: "/tech/framer-motion-light.svg",
    logoDark: "/tech/framer-motion-dark.svg",
  },
  {
    id: "storybook",
    title: "Storybook",
    category: "frontend",
    logoLight: "/tech/storybook-light.svg",
    logoDark: "/tech/storybook-dark.svg",
  },

  // --------------------
  // Backend
  // --------------------
  {
    id: "nodejs",
    title: "Node.js",
    category: "backend",
    logoLight: "/tech/nodejs-light.svg",
    logoDark: "/tech/nodejs-dark.svg",
  },
  {
    id: "express",
    title: "Express.js",
    category: "backend",
    logoLight: "/tech/express-light.svg",
    logoDark: "/tech/express-dark.svg",
  },
  {
    id: "nestjs",
    title: "NestJS",
    category: "backend",
    logoLight: "/tech/nestjs-light.svg",
    logoDark: "/tech/nestjs-dark.svg",
  },
  {
    id: "rest-api",
    title: "REST APIs",
    category: "backend",
    logoLight: "/tech/rest-api-light.svg",
    logoDark: "/tech/rest-api-dark.svg",
  },
  {
    id: "graphql",
    title: "GraphQL",
    category: "backend",
    logoLight: "/tech/graphql-light.svg",
    logoDark: "/tech/graphql-dark.svg",
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    category: "backend",
    logoLight: "/tech/postgresql-light.svg",
    logoDark: "/tech/postgresql-dark.svg",
  },
  {
    id: "mysql",
    title: "MySQL",
    category: "backend",
    logoLight: "/tech/mysql-light.svg",
    logoDark: "/tech/mysql-dark.svg",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    category: "backend",
    logoLight: "/tech/mongodb-light.svg",
    logoDark: "/tech/mongodb-dark.svg",
  },
  {
    id: "sqlite",
    title: "SQLite",
    category: "backend",
    logoLight: "/tech/sqlite-light.svg",
    logoDark: "/tech/sqlite-dark.svg",
  },
  {
    id: "redis",
    title: "Redis",
    category: "backend",
    logoLight: "/tech/redis-light.svg",
    logoDark: "/tech/redis-dark.svg",
  },
  {
    id: "prisma",
    title: "Prisma",
    category: "backend",
    logoLight: "/tech/prisma-light.svg",
    logoDark: "/tech/prisma-dark.svg",
  },

  // --------------------
  // Tooling
  // --------------------
  {
    id: "docker",
    title: "Docker",
    category: "tooling",
    logoLight: "/tech/docker-light.svg",
    logoDark: "/tech/docker-dark.svg",
  },
  {
    id: "aws",
    title: "AWS",
    category: "tooling",
    logoLight: "/tech/aws-light.svg",
    logoDark: "/tech/aws-dark.svg",
  },
  {
    id: "vercel",
    title: "Vercel",
    category: "tooling",
    logoLight: "/tech/vercel-light.svg",
    logoDark: "/tech/vercel-dark.svg",
  },
  {
    id: "github-actions",
    title: "GitHub Actions",
    category: "tooling",
    logoLight: "/tech/github-actions-light.svg",
    logoDark: "/tech/github-actions-dark.svg",
  },
  {
    id: "git",
    title: "Git",
    category: "tooling",
    logoLight: "/tech/git-light.svg",
    logoDark: "/tech/git-dark.svg",
  },
  {
    id: "github",
    title: "GitHub",
    category: "tooling",
    logoLight: "/tech/github-light.svg",
    logoDark: "/tech/github-dark.svg",
  },
  {
    id: "gitlab",
    title: "GitLab",
    category: "tooling",
    logoLight: "/tech/gitlab-light.svg",
    logoDark: "/tech/gitlab-dark.svg",
  },
  {
    id: "postman",
    title: "Postman",
    category: "tooling",
    logoLight: "/tech/postman-light.svg",
    logoDark: "/tech/postman-dark.svg",
  },
  {
    id: "pnpm",
    title: "pnpm",
    category: "tooling",
    logoLight: "/tech/pnpm-light.svg",
    logoDark: "/tech/pnpm-dark.svg",
  },
  {
    id: "yarn",
    title: "Yarn",
    category: "tooling",
    logoLight: "/tech/yarn-light.svg",
    logoDark: "/tech/yarn-dark.svg",
  },
  {
    id: "npm",
    title: "npm",
    category: "tooling",
    logoLight: "/tech/npm-light.svg",
    logoDark: "/tech/npm-dark.svg",
  },
  {
    id: "eslint",
    title: "ESLint",
    category: "tooling",
    logoLight: "/tech/eslint-light.svg",
    logoDark: "/tech/eslint-dark.svg",
  },
  {
    id: "prettier",
    title: "Prettier",
    category: "tooling",
    logoLight: "/tech/prettier-light.svg",
    logoDark: "/tech/prettier-dark.svg",
  },
  {
    id: "turbo",
    title: "Turborepo",
    category: "tooling",
    logoLight: "/tech/turbo-light.svg",
    logoDark: "/tech/turbo-dark.svg",
  },
  {
    id: "vitest",
    title: "Vitest",
    category: "tooling",
    logoLight: "/tech/vitest-light.svg",
    logoDark: "/tech/vitest-dark.svg",
  },
  {
    id: "jest",
    title: "Jest",
    category: "tooling",
    logoLight: "/tech/jest-light.svg",
    logoDark: "/tech/jest-dark.svg",
  },
  {
    id: "testing-library",
    title: "Testing Library",
    category: "tooling",
    logoLight: "/tech/testing-library-light.svg",
    logoDark: "/tech/testing-library-dark.svg",
  },
  {
    id: "cypress",
    title: "Cypress",
    category: "tooling",
    logoLight: "/tech/cypress-light.svg",
    logoDark: "/tech/cypress-dark.svg",
  },

  // --------------------
  // Workflow / Collaboration
  // --------------------
  {
    id: "jira",
    title: "Jira",
    category: "workflow",
    logoLight: "/tech/jira-light.svg",
    logoDark: "/tech/jira-dark.svg",
  },
  {
    id: "notion",
    title: "Notion",
    category: "workflow",
    logoLight: "/tech/notion-light.svg",
    logoDark: "/tech/notion-dark.svg",
  },
  {
    id: "slack",
    title: "Slack",
    category: "workflow",
    logoLight: "/tech/slack-light.svg",
    logoDark: "/tech/slack-dark.svg",
  },
  {
    id: "confluence",
    title: "Confluence",
    category: "workflow",
    logoLight: "/tech/confluence-light.svg",
    logoDark: "/tech/confluence-dark.svg",
  },
  {
    id: "figma",
    title: "Figma",
    category: "workflow",
    logoLight: "/tech/figma-light.svg",
    logoDark: "/tech/figma-dark.svg",
  },
  {
    id: "kanban",
    title: "Kanban Boards",
    category: "workflow",
    logoLight: "/tech/kanban-light.svg",
    logoDark: "/tech/kanban-dark.svg",
  },
  {
    id: "scrum",
    title: "Scrum",
    category: "workflow",
    logoLight: "/tech/scrum-light.svg",
    logoDark: "/tech/scrum-dark.svg",
  },
];
