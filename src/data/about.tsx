export const bio = {
  name: "Buğrahan Umay Şafak",
  title: "Frontend Developer",
  location: "İzmir, Turkey",
  summary:
    "Next.js, React ve Tailwind CSS ile yüksek performanslı, kullanıcı dostu ve SEO-odaklı web uygulamaları geliştiriyorum. Lighthouse denetimlerinde %95+ performans ve erişilebilirlik odaklıyım; ölçeklenebilir mimari ve responsive UI tasarımlarını benimsiyorum.",
};

export const experience = [
  {
    company: "Getclinic",
    role: "Frontend Developer",
    location: "Remote",
    period: "Jan 2024 – Present",
    bullets: [
      "Next.js ve React ile backoffice ve portal sistemlerinin frontend mimarisini kurup geliştirdim.",
      "shadcn ile tekrar kullanılabilir UI bileşenleri; çok dillilik NextIntl.",
      "Tailwind ve Sass ile responsive arayüzler.",
      "Lighthouse ile gelişmiş SEO ve performans: %95+ skorlar.",
      "OAuth/NextAuth ile güvenli kimlik doğrulama.",
      "AWS, Swagger, Postman, Git, Jira, Slack, Confluence ile Agile/Scrum süreçleri.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Özkan Hukuk Danışmanlık Website & Portal",
    href: "https://ozkan-hukuk-danismanlik.vercel.app",
    bullets: [
      "Kurumsal, güven veren arayüz ve portal.",
      "Semantik HTML, meta etiketleri, yapılandırılmış verilerle SEO.",
      "Lighthouse tüm kategorilerde %95+.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Kişisel Portfolyo",
    href: "https://bugrahanumaysafak.vercel.app",
    bullets: [
      "Projeleri ve yetenekleri sergileyen modern site.",
      "Erişilebilirlik ve performans odaklı optimizasyonlar.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Realtime Weather App",
    href: "https://github.com/BugrahanUmaySafak/Realtime_Weather_App",
    bullets: ["Gerçek zamanlı hava durumu bilgisi sunan Android uygulaması."],
    stack: ["Kotlin", "Android Studio", "OpenWeather API"],
  },
] as const;

export const education = [
  {
    school: "Anadolu University",
    program: "Web Design and Coding",
    period: "Sept 2020 – June 2022",
  },
] as const;
