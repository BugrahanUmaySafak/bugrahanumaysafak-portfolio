// src/data/projects.ts
import type { TechnologyId } from "@/data/technologies";

export type ProjectKind = "experience" | "freelance";

export type ExperienceProjectItem = {
  id: string;
  kind: ProjectKind;
  name: string;
  role: string;
  company?: string;
  period?: string;
  startDate?: string;
  endDate?: string;
  logoSrc: string;
  logoAlt: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  technologies: TechnologyId[];
  links?: {
    website?: string;
    panelUrl?: string;
    repo?: string;
  };
};

export const EXPERIENCE_PROJECTS: ExperienceProjectItem[] = [
  {
    id: "getclinic",
    kind: "experience",
    name: "getClinic",
    role: "Software Engineer",
    company: "getClinic",
    period: "Haziran 2024 – Temmuz 2025",
    startDate: "2024-06-01",
    endDate: "2025-07-01",
    logoSrc: "/works/getClinic.jpeg",
    logoAlt: "getClinic",
    shortDescription:
      "Sağlık sektörüne yönelik bir platformda full-time Software Engineer olarak çalıştım. Ürün geliştirme, bakım ve performans iyileştirmelerinde aktif rol aldım.",
    longDescription:
      "Burayı ileride /projects/getclinic sayfasında daha detaylı şekilde kullanacaksın. Takımdaki rolün, frontend/backend tarafında yaptığın işler, kullandığın teknolojiler ve ürüne kattığın iş değeri gibi konuları burada anlatabilirsin.",
    highlights: [
      "Kritik kullanıcı akışlarının stabilitesi ve performansı üzerinde çalıştım.",
      "Tasarım ekibiyle birlikte yeni arayüzlerin hayata geçirilmesinde görev aldım.",
      "Kod kalitesini artırmak için best practice’ler ve code review süreçlerine katkı sağladım.",
    ],
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "nodejs",
      "postgresql",
    ],
    links: {
      website: "https://www.linkedin.com/company/getcliniccom/",
    },
  },
  {
    id: "alpertunaozkan",
    kind: "freelance",
    name: "alpertunaozkan.com",
    role: "Freelance Frontend Developer",
    company: "alpertunaozkan",
    period: "Freelance",
    logoSrc: "/works/alpertunaozkan.svg",
    logoAlt: "alpertunaozkan.com",
    shortDescription:
      "Kişisel marka odaklı bir web sitesi için tasarımın uygulanması ve frontend geliştirme sürecinde freelance olarak çalıştım.",
    longDescription:
      "Bu alanı /projects/alpertunaozkan sayfasında projeyi detaylı anlatmak için kullanacaksın. Sayfanın amacı, kullanıcı kitlesi, tasarım süreci, performans odaklı yaptığın iyileştirmeler ve teknik kararları burada açıklayabilirsin.",
    highlights: [
      "Responsive ve hızlı açılan bir kişisel marka sitesi geliştirdim.",
      "Tasarım sistemine uygun, yeniden kullanılabilir UI bileşenleri oluşturdum.",
      "SEO ve erişilebilirlik konularını göz önünde bulundurarak geliştirme yaptım.",
    ],
    technologies: ["nextjs", "react", "typescript", "tailwind"],
    links: {
      website: "https://alpertunaozkan.com",
    },
  },
  {
    id: "panel-alpertunaozkan",
    kind: "freelance",
    name: "panel.alpertunaozkan.com",
    role: "Freelance Frontend Developer",
    company: "alpertunaozkan",
    period: "Freelance",
    logoSrc: "/works/alpertunaozkan.svg",
    logoAlt: "panel.alpertunaozkan.com",
    shortDescription:
      "Yönetim paneli (dashboard) tarafında veri odaklı ekranlar ve kontrol panelleri geliştirdiğim bir freelance çalışma.",
    longDescription:
      "Bu bölümde panelin kapsamını, geliştirdiğin modülleri, rol bazlı yetkilendirme, filtreleme/sort etkileşimleri, grafikler ve veri görselleştirme gibi konuları detaylandırabilirsin.",
    highlights: [
      "Karmaşık veri setleri için anlaşılır ve kullanılabilir arayüzler tasarladım.",
      "Dashboard bileşenlerini tekrar kullanılabilir ve genişletilebilir yapıda kurguladım.",
      "Müşteri ihtiyaçlarına göre hızlı iterasyonlar ve geliştirmeler yaptım.",
    ],
    technologies: ["react", "typescript", "tailwind", "tanstack-query"],
    links: {
      panelUrl: "https://panel.alpertunaozkan.com",
    },
  },
];
