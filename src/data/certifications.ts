import { SiAnthropic } from "react-icons/si";
import type { Localized } from "@/lib/localize";
import type { IconComponent } from "@/lib/utils";

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issuerIcon?: IconComponent;
  date: Localized;
  credentialId?: string;
  credentialUrl?: string;
  image?: { src: string; width: number; height: number };
  pdf?: string;
  description: Localized;
  skills?: string[];
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "anthropic-ai-fluency",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic Education",
    issuerIcon: SiAnthropic,
    date: { tr: "Mart 2026", en: "March 2026" },
    credentialId: "bcqd3enwr4oy",
    credentialUrl: "https://verify.skilljar.com/c/bcqd3enwr4oy",
    image: { src: "/certificates/ai-fluency.webp", width: 2000, height: 1515 },
    pdf: "/certificates/ai-fluency.pdf",
    description: {
      tr: "İnsan ve yapay zekâ iş birliğinin pratik temellerine odaklanan bu eğitimde, yapay zekâ sistemleriyle etkili, etik, sorumlu ve iyi yapılandırılmış şekilde çalışmayı; Delegation, Description, Discernment ve Diligence (4D) çerçevesiyle ele aldım.",
      en: "This course focused on the practical foundations of effective human–AI collaboration, covering how to work with AI systems in effective, ethical, responsible and well-structured ways through the Delegation, Description, Discernment and Diligence (4D) framework.",
    },
    skills: ["Delegation", "Description", "Discernment", "Diligence"],
  },
];
