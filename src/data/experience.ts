import type { BrandLogo } from "@/data/projects";
import type { Localized } from "@/lib/localize";

export type ExperienceItem = {
  id: string;
  role: Localized;
  company: Localized;
  companyUrl?: string;
  logo?: BrandLogo;
  period: Localized;
  duration?: Localized;
  location?: Localized;
  current?: boolean;
  description: Localized;
  projectSlugs: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "freelance",
    role: { tr: "Full-Stack Developer", en: "Full-Stack Developer" },
    company: { tr: "Freelance", en: "Freelance" },
    period: { tr: "2025 – Günümüz", en: "2025 – Present" },
    current: true,
    description: {
      tr: "Hukuk, spa & wellness ve eğitim sektörlerindeki müşteriler için web sitelerini ve yönetim panellerini; tasarım, geliştirme, sunucu kurulumu ve yayın dahil uçtan uca tek başıma geliştiriyorum.",
      en: "I build websites and admin panels for clients in the legal, spa & wellness and education sectors, handling design, development, server setup and deployment end to end on my own.",
    },
    projectSlugs: ["alpertunaozkan", "lunaden", "kimsmasaj", "senpluses"],
  },
  {
    id: "getclinic",
    role: { tr: "Frontend Developer", en: "Frontend Developer" },
    company: { tr: "getClinic", en: "getClinic" },
    companyUrl: "https://www.linkedin.com/company/getcliniccom/",
    logo: { src: "/works/getclinic/logo.jpeg", background: "#016be3" },
    period: { tr: "Haz 2024 – Tem 2025", en: "Jun 2024 – Jul 2025" },
    duration: { tr: "1 yıl 2 ay", en: "1 yr 2 mos" },
    location: { tr: "Ataşehir, İstanbul · Uzaktan", en: "Ataşehir, Istanbul · Remote" },
    description: {
      tr: "Şirketin backoffice ve portal sistemlerinin uçtan uca geliştirilmesinde aktif rol aldım. Next.js tabanlı frontend mimarisini tasarladım; next-intl ile çok dilli yapıyı, shadcn/ui ile tutarlı bir bileşen setini kurdum ve Lighthouse skorlarını sürekli 95'in üzerinde tuttum.",
      en: "Took an active part in building the company's backoffice and portal systems end to end. I designed the Next.js-based frontend architecture, set up multilingual support with next-intl and a consistent component set with shadcn/ui, and kept Lighthouse scores consistently above 95.",
    },
    projectSlugs: ["getclinic"],
  },
];
