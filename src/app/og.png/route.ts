import { siteConfig } from "@/config/site";
import { getTechnologies } from "@/data/technologies";
import { renderOgImage } from "@/lib/og-image";

export const dynamic = "force-static";

export function GET() {
  return renderOgImage({
    eyebrow: `${siteConfig.title} · Freelance`,
    title: siteConfig.name,
    tags: getTechnologies(["nextjs", "react", "typescript", "nodejs", "tailwind"]).map(
      (tech) => tech.title
    ),
  });
}
