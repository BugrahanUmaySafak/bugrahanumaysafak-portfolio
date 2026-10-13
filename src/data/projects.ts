import type { TechnologyId } from "@/data/technologies";
import type { Localized } from "@/lib/localize";

export type ProjectKind = "fulltime" | "freelance";

export type BrandLogo = { src: string; background: string };

export type ProjectImage = {
  src: string;
  alt: Localized;
  device: "desktop" | "mobile";
  url?: string;
};

export type ProjectLink = {
  label: Localized;
  href: string;
  kind: "website" | "admin" | "linkedin";
};

export type Project = {
  slug: string;
  kind: ProjectKind;
  name: string;
  client: Localized;
  sector: Localized;
  role: Localized;
  period?: Localized;
  location?: Localized;
  status: "live" | "offline" | "evolving";
  logo?: BrandLogo;
  summary: Localized;
  overview: Localized<string[]>;
  highlights: Localized<string[]>;
  features: Localized<string[]>;
  roadmap?: Localized;
  technologies: TechnologyId[];
  links: ProjectLink[];
  gallery: ProjectImage[];
};

export const PROJECTS: Project[] = [
  {
    slug: "alpertunaozkan",
    kind: "freelance",
    name: "alpertunaozkan.com",
    client: { tr: "Av. Alper Tuna Özkan", en: "Att. Alper Tuna Özkan" },
    sector: { tr: "Hukuk", en: "Legal" },
    role: {
      tr: "Full-stack Developer (tek kişi)",
      en: "Full-stack Developer (solo)",
    },
    status: "live",
    logo: { src: "/works/alpertunaozkan/logo.svg", background: "#0a1631" },
    summary: {
      tr: "Kırıkkale'de gayrimenkul hukuku alanında çalışan bir avukat için kurumsal web sitesi ve makale, video, kategori ve iletişim mesajlarının yönetildiği yönetim paneli. Tasarımdan sunucu kurulumuna kadar tüm süreci tek başıma yürüttüm.",
      en: "A professional website for a real estate lawyer in Kırıkkale, plus an admin panel for managing articles, videos, categories and contact messages. I handled the whole process solo, from design to server setup.",
    },
    overview: {
      tr: [
        "Av. Alper Tuna Özkan için faaliyet alanlarını, makalelerini ve videolarını tek çatı altında toplayan bir web sitesi ve tüm içeriğin yönetildiği bir yönetim paneli geliştirdim. Site yayına alındıktan sonra kapsamlı bir revizyonla baştan yazıldı.",
        "Revizyonla birlikte, önceden ayrı bir alt alan adında (panel.alpertunaozkan.com) çalışan panel /admin altına taşındı. Site ve panel artık ayrı bir API sunucusu olmadan, Server Actions kullanan tek bir Next.js 16 uygulamasında çalışıyor. Eski panel adresi Nginx ile yeni panele yönlendiriliyor; eski makale adresleri korunarak SEO kaybının önüne geçildi.",
        "Veriler MongoDB Atlas'ta, makale görselleri Cloudinary'de tutuluyor. Uygulama Ubuntu sunucuda systemd hizmeti olarak çalışıyor ve Nginx ters vekil ile Let's Encrypt SSL üzerinden yayında.",
      ],
      en: [
        "I built a website for Att. Alper Tuna Özkan that brings practice areas, articles and videos together in one place, plus an admin panel to manage all of the content. After launch, the site was rewritten from scratch in a major revision.",
        "With the revision, the panel that used to live on a separate subdomain (panel.alpertunaozkan.com) moved under /admin. The site and the panel now run in a single Next.js 16 app using Server Actions, with no separate API server. The old panel address redirects to the new one via Nginx, and the old article URLs were preserved to avoid any SEO loss.",
        "Data lives in MongoDB Atlas and article images in Cloudinary. The app runs as a systemd service on an Ubuntu server, served through an Nginx reverse proxy with Let's Encrypt SSL.",
      ],
    },
    highlights: {
      tr: [
        "Tasarımdan sunucu kurulumuna kadar tüm süreci uçtan uca tek başıma yürüttüm.",
        "Tiptap tabanlı zengin metin editörü, SEO önizlemesi, anahtar kelime ve kapak görseli seçimiyle makale yönetimi geliştirdim.",
        "Makale, kategori, video (YouTube kapakları otomatik çekiliyor) ve iletişim mesajı yönetimini tek panelde topladım.",
        "Güvenli bir kimlik doğrulama kurdum: scrypt ile şifre özeti, veritabanında yalnızca özeti tutulan oturum anahtarları ve giriş/iletişim formları için istek sınırlama (rate limiting).",
        "Makale içeriğini sunucuda temizleyerek (HTML sanitization) XSS riskine karşı korudum; tüm girdileri Zod ile doğruladım.",
        "Sitemap, robots, schema.org yapılandırılmış verisi ve bölgesel açılış sayfasıyla SEO altyapısını kurdum; bot ve yönetici ziyaretlerini saymayan bir görüntülenme sayacı ekledim.",
        "Ubuntu sunucuda Nginx, systemd ve Let's Encrypt ile yayın sürecini kurdum.",
      ],
      en: [
        "Owned the entire process end to end, from design to server setup.",
        "Built article management with a Tiptap-based rich text editor, SEO preview, keywords and cover image selection.",
        "Brought article, category, video (YouTube covers fetched automatically) and contact message management into a single panel.",
        "Set up secure authentication: scrypt password hashing, session tokens stored only as hashes in the database, and rate limiting for the login and contact forms.",
        "Sanitized article HTML on the server to guard against XSS, and validated all input with Zod.",
        "Built the SEO foundation with a sitemap, robots, schema.org structured data and a local landing page, plus a view counter that ignores bots and admin visits.",
        "Set up deployment on an Ubuntu server with Nginx, systemd and Let's Encrypt.",
      ],
    },
    features: {
      tr: [
        "Yönetim paneli (/admin) + dashboard",
        "Tiptap makale editörü",
        "Kategori ve video yönetimi",
        "İletişim mesajları kutusu",
        "Makale görüntülenme sayacı",
        "Sitemap + schema.org",
      ],
      en: [
        "Admin panel (/admin) + dashboard",
        "Tiptap article editor",
        "Category and video management",
        "Contact message inbox",
        "Article view counter",
        "Sitemap + schema.org",
      ],
    },
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "nodejs",
      "mongodb",
      "zod",
      "tiptap",
      "cloudinary",
      "seo",
      "nginx",
      "linux",
      "pnpm",
    ],
    links: [
      {
        kind: "website",
        href: "https://www.alpertunaozkan.com/",
        label: { tr: "Web sitesi", en: "Website" },
      },
      {
        kind: "admin",
        href: "https://www.alpertunaozkan.com/admin/login",
        label: { tr: "Yönetim paneli", en: "Admin panel" },
      },
    ],
    gallery: [
      {
        src: "/works/alpertunaozkan/home.webp",
        device: "desktop",
        url: "alpertunaozkan.com",
        alt: {
          tr: "alpertunaozkan.com ana sayfası",
          en: "alpertunaozkan.com home page",
        },
      },
      {
        src: "/works/alpertunaozkan/articles.webp",
        device: "desktop",
        url: "alpertunaozkan.com/makalelerim",
        alt: {
          tr: "Kategori filtreli makaleler sayfası",
          en: "Articles page with category filters",
        },
      },
      {
        src: "/works/alpertunaozkan/admin-login.webp",
        device: "desktop",
        url: "alpertunaozkan.com/admin/login",
        alt: {
          tr: "Yönetim paneli giriş ekranı",
          en: "Admin panel sign-in screen",
        },
      },
      {
        src: "/works/alpertunaozkan/about.webp",
        device: "desktop",
        url: "alpertunaozkan.com/hakkimda",
        alt: { tr: "Hakkımda sayfası", en: "About page" },
      },
      {
        src: "/works/alpertunaozkan/mobile.webp",
        device: "mobile",
        alt: {
          tr: "alpertunaozkan.com mobil görünüm",
          en: "alpertunaozkan.com on mobile",
        },
      },
    ],
  },
  {
    slug: "lunaden",
    kind: "freelance",
    name: "Luna Den Spa & Sports",
    client: { tr: "Luna Den Spa & Sports", en: "Luna Den Spa & Sports" },
    sector: { tr: "Spa & Wellness", en: "Spa & Wellness" },
    role: {
      tr: "Full-stack Developer (tek kişi)",
      en: "Full-stack Developer (solo)",
    },
    status: "live",
    summary: {
      tr: "Aynı markanın İzmir, Bodrum ve Şanlıurfa şubeleri için; her şubenin kendi kimliğini taşıyan, iki dilli (TR/EN) ve WhatsApp üzerinden randevu alınabilen üç ayrı web sitesi.",
      en: "Three separate websites for the İzmir, Bodrum and Şanlıurfa branches of the same brand, each with its own identity, bilingual (TR/EN) content and WhatsApp booking.",
    },
    overview: {
      tr: [
        "Luna Den Spa & Sports'un üç şubesi için ayrı alan adlarında yayınlanan web sitelerini geliştirdim: Balçova Ege Park AVM (İzmir), Bodrum ve Dedeman Şanlıurfa. Her site şubenin hizmetlerine, çalışma saatlerine ve iletişim bilgilerine göre şekillenirken ortak bir marka dili korunuyor.",
        "Ziyaretçilerin hızlıca randevu oluşturabilmesi için WhatsApp odaklı bir randevu akışı kurguladım. Siteler Türkçe ve İngilizce yayında; Google Analytics entegrasyonu ve yapılandırılmış veriyle hem ölçümleme hem de yerel arama görünürlüğü destekleniyor.",
      ],
      en: [
        "I built the websites for three branches of Luna Den Spa & Sports, each on its own domain: Balçova Ege Park Mall (İzmir), Bodrum and Dedeman Şanlıurfa. Each site is shaped around its branch's services, opening hours and contact details while keeping a shared brand language.",
        "I designed a WhatsApp-first booking flow so visitors can book quickly. The sites are live in Turkish and English, with Google Analytics and structured data supporting both measurement and local search visibility.",
      ],
    },
    highlights: {
      tr: [
        "Ortak marka dilini koruyan, şubeye özel üç ayrı site geliştirdim.",
        "TR/EN çok dilli yapı ve şubeye özel içerik kurguladım.",
        "WhatsApp üzerinden hızlı randevu akışı ve şube telefonlarına doğrudan erişim ekledim.",
        "Google Analytics / Tag Manager entegrasyonunu ve yerel SEO çalışmalarını yaptım.",
        "Siteleri Cloudflare arkasında yayına aldım.",
      ],
      en: [
        "Built three branch-specific sites that share one brand language.",
        "Set up a bilingual TR/EN structure with branch-specific content.",
        "Added a quick WhatsApp booking flow and direct access to branch phone lines.",
        "Integrated Google Analytics / Tag Manager and handled local SEO.",
        "Deployed the sites behind Cloudflare.",
      ],
    },
    features: {
      tr: [
        "3 şube, 3 alan adı",
        "TR / EN dil desteği",
        "WhatsApp randevu",
        "Hizmetler ve şube sayfaları",
        "Google Analytics",
        "Yerel SEO",
      ],
      en: [
        "3 branches, 3 domains",
        "TR / EN languages",
        "WhatsApp booking",
        "Services and branch pages",
        "Google Analytics",
        "Local SEO",
      ],
    },
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "shadcn",
      "i18n",
      "google-analytics",
      "cloudflare",
    ],
    links: [
      {
        kind: "website",
        href: "https://www.lunadenspaizmir.com/",
        label: { tr: "İzmir · Balçova Ege Park", en: "İzmir · Balçova Ege Park" },
      },
      {
        kind: "website",
        href: "https://www.lunadenspabodrum.com/",
        label: { tr: "Bodrum", en: "Bodrum" },
      },
      {
        kind: "website",
        href: "https://www.lunadenspaurfa.com/",
        label: { tr: "Şanlıurfa · Dedeman", en: "Şanlıurfa · Dedeman" },
      },
    ],
    gallery: [
      {
        src: "/works/lunaden/izmir-home.webp",
        device: "desktop",
        url: "lunadenspaizmir.com",
        alt: { tr: "Luna Den Spa İzmir ana sayfası", en: "Luna Den Spa İzmir home page" },
      },
      {
        src: "/works/lunaden/bodrum-home.webp",
        device: "desktop",
        url: "lunadenspabodrum.com",
        alt: { tr: "Luna Den Spa Bodrum ana sayfası", en: "Luna Den Spa Bodrum home page" },
      },
      {
        src: "/works/lunaden/urfa-home.webp",
        device: "desktop",
        url: "lunadenspaurfa.com",
        alt: {
          tr: "Luna Den Spa Şanlıurfa ana sayfası",
          en: "Luna Den Spa Şanlıurfa home page",
        },
      },
      {
        src: "/works/lunaden/izmir-services.webp",
        device: "desktop",
        url: "lunadenspaizmir.com/hizmetlerimiz",
        alt: { tr: "Hizmetler sayfası", en: "Services page" },
      },
      {
        src: "/works/lunaden/izmir-mobile.webp",
        device: "mobile",
        alt: { tr: "Luna Den Spa İzmir mobil görünüm", en: "Luna Den Spa İzmir on mobile" },
      },
    ],
  },
  {
    slug: "kimsmasaj",
    kind: "freelance",
    name: "Kim's Spa",
    client: { tr: "Kim's Spa", en: "Kim's Spa" },
    sector: { tr: "Spa & Wellness", en: "Spa & Wellness" },
    role: {
      tr: "Full-stack Developer (tek kişi)",
      en: "Full-stack Developer (solo)",
    },
    status: "live",
    summary: {
      tr: "İstanbul Bahçeşehir'deki bir spa merkezi için hizmetleri, mekân galerisini ve müşteri yorumlarını öne çıkaran, ziyaretçiyi WhatsApp üzerinden randevuya yönlendiren kurumsal web sitesi.",
      en: "A business website for a spa in Bahçeşehir, Istanbul, showcasing its services, venue gallery and customer reviews, and guiding visitors to book via WhatsApp.",
    },
    overview: {
      tr: [
        "Kim's Spa için mekânın sakin atmosferini yansıtan; masaj terapilerini, Türk hamamı ve jakuzi deneyimlerini anlatan bir web sitesi tasarlayıp geliştirdim.",
        "Kategoriye göre filtrelenebilen ve büyütülebilen fotoğraf galerisi, müşteri yorumları sayfası ve harita destekli iletişim bölümüyle ziyaretçinin karar sürecini kolaylaştırmayı hedefledim.",
      ],
      en: [
        "I designed and built a website for Kim's Spa that reflects the calm atmosphere of the venue and presents its massage therapies, Turkish bath and jacuzzi experiences.",
        "With a filterable gallery with a lightbox, a customer reviews page and a contact section with a map, the goal was to make it easy for visitors to decide.",
      ],
    },
    highlights: {
      tr: [
        "Marka renklerine uygun, sakin ve premium hissettiren bir arayüz tasarladım.",
        "Kategori filtreli, büyütme (lightbox) destekli galeri geliştirdim.",
        "Hizmetler, yorumlar ve iletişim sayfalarını SEO odaklı yapılandırdım (schema.org).",
        "WhatsApp randevu akışı ve Google Analytics entegrasyonu ekledim.",
      ],
      en: [
        "Designed a calm, premium-feeling interface that follows the brand colors.",
        "Built a filterable gallery with lightbox support.",
        "Structured the services, reviews and contact pages for SEO (schema.org).",
        "Added a WhatsApp booking flow and Google Analytics.",
      ],
    },
    features: {
      tr: [
        "Filtreli galeri + lightbox",
        "Müşteri yorumları",
        "WhatsApp randevu",
        "Haritalı iletişim",
        "Google Analytics",
      ],
      en: [
        "Filterable gallery + lightbox",
        "Customer reviews",
        "WhatsApp booking",
        "Contact with map",
        "Google Analytics",
      ],
    },
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "google-analytics",
    ],
    links: [
      {
        kind: "website",
        href: "https://kimsmasaj.com/",
        label: { tr: "Web sitesi", en: "Website" },
      },
    ],
    gallery: [
      {
        src: "/works/kimsmasaj/home.webp",
        device: "desktop",
        url: "kimsmasaj.com",
        alt: { tr: "Kim's Spa ana sayfası", en: "Kim's Spa home page" },
      },
      {
        src: "/works/kimsmasaj/gallery.webp",
        device: "desktop",
        url: "kimsmasaj.com/galeri",
        alt: { tr: "Galeri sayfası", en: "Gallery page" },
      },
      {
        src: "/works/kimsmasaj/services.webp",
        device: "desktop",
        url: "kimsmasaj.com/hizmetler",
        alt: { tr: "Hizmetler sayfası", en: "Services page" },
      },
      {
        src: "/works/kimsmasaj/mobile.webp",
        device: "mobile",
        alt: { tr: "Kim's Spa mobil görünüm", en: "Kim's Spa on mobile" },
      },
    ],
  },
  {
    slug: "senpluses",
    kind: "freelance",
    name: "senpluses",
    client: { tr: "Akif Şencan", en: "Akif Şencan" },
    sector: { tr: "Eğitim", en: "Education" },
    role: {
      tr: "Full-stack Developer (tek kişi)",
      en: "Full-stack Developer (solo)",
    },
    status: "evolving",
    summary: {
      tr: "Matematik öğretmeni Akif Şencan için TYT, AYT, KPSS, LGS ve DGS matematik özel derslerini tanıtan kişisel web sitesi. İlerleyen aşamada online ders platformuna dönüştürülecek.",
      en: "A personal website for math teacher Akif Şencan, presenting private lessons for the TYT, AYT, KPSS, LGS and DGS exams. It will grow into an online course platform.",
    },
    overview: {
      tr: [
        "Akif Şencan'ın Zoom üzerinden verdiği birebir matematik derslerini tanıtmak için dersleri, çalışma sistemini, veli takip sürecini ve sık sorulan soruları anlatan bir kişisel marka sitesi geliştirdim.",
        "Her sınav alanı için ayrı ders sayfası, açık/koyu tema desteği ve WhatsApp ile hızlı iletişim seçenekleri sunuluyor. Proje, ilerleyen aşamada bir online ders platformuna genişletilecek şekilde kurgulandı.",
      ],
      en: [
        "I built a personal brand site for Akif Şencan's one-on-one math lessons on Zoom, covering the lessons, the study system, parent follow-up and frequently asked questions.",
        "Each exam has its own lesson page, and the site supports light/dark themes and quick contact via WhatsApp. The project is set up to grow into an online course platform.",
      ],
    },
    highlights: {
      tr: [
        "5 sınav alanı için ayrı, SEO uyumlu ders sayfaları oluşturdum.",
        "Çalışma sistemi, veli takip ve SSS sayfalarıyla güven veren bir içerik yapısı kurdum.",
        "Açık / koyu tema desteği ekledim.",
        "Altyapıyı ileride online ders platformuna genişletilebilecek şekilde planladım.",
      ],
      en: [
        "Created separate, SEO-friendly lesson pages for 5 exams.",
        "Built a trust-building content structure with study system, parent follow-up and FAQ pages.",
        "Added light / dark theme support.",
        "Planned the codebase so it can grow into an online course platform.",
      ],
    },
    features: {
      tr: [
        "5 ders sayfası",
        "Çalışma sistemi",
        "Veli takip",
        "SSS",
        "Açık / koyu tema",
        "WhatsApp iletişim",
      ],
      en: [
        "5 lesson pages",
        "Study system",
        "Parent follow-up",
        "FAQ",
        "Light / dark theme",
        "WhatsApp contact",
      ],
    },
    roadmap: {
      tr: "Site, ilerleyen aşamada öğrencilerin derslere çevrim içi erişebileceği bir online ders platformuna dönüştürülecek.",
      en: "The site will grow into an online course platform where students can access lessons online.",
    },
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "shadcn",
      "cloudflare",
    ],
    links: [
      {
        kind: "website",
        href: "https://senpluses.com/",
        label: { tr: "Web sitesi", en: "Website" },
      },
    ],
    gallery: [
      {
        src: "/works/senpluses/home.webp",
        device: "desktop",
        url: "senpluses.com",
        alt: { tr: "senpluses ana sayfası", en: "senpluses home page" },
      },
      {
        src: "/works/senpluses/home-dark.webp",
        device: "desktop",
        url: "senpluses.com",
        alt: { tr: "Koyu tema", en: "Dark theme" },
      },
      {
        src: "/works/senpluses/lessons.webp",
        device: "desktop",
        url: "senpluses.com/dersler",
        alt: { tr: "Dersler sayfası", en: "Lessons page" },
      },
      {
        src: "/works/senpluses/mobile.webp",
        device: "mobile",
        alt: { tr: "senpluses mobil görünüm", en: "senpluses on mobile" },
      },
    ],
  },
  {
    slug: "getclinic",
    kind: "fulltime",
    name: "getClinic",
    client: { tr: "getClinic", en: "getClinic" },
    sector: { tr: "Sağlık teknolojisi", en: "Health tech" },
    role: { tr: "Frontend Developer", en: "Frontend Developer" },
    period: { tr: "Haz 2024 – Tem 2025", en: "Jun 2024 – Jul 2025" },
    location: { tr: "Ataşehir, İstanbul · Uzaktan", en: "Ataşehir, Istanbul · Remote" },
    status: "offline",
    logo: { src: "/works/getclinic/logo.jpeg", background: "#016be3" },
    summary: {
      tr: "Şirketin backoffice ve portal sistemlerinin uçtan uca geliştirilmesinde aktif rol aldığım tam zamanlı Frontend Developer pozisyonu. Next.js tabanlı frontend mimarisini tasarladım; çok dilli, hızlı ve SEO uyumlu arayüzler geliştirdim.",
      en: "A full-time Frontend Developer role where I took an active part in building the company's backoffice and portal systems end to end. I designed the Next.js-based frontend architecture and built multilingual, fast and SEO-friendly interfaces.",
    },
    overview: {
      tr: [
        "getClinic'te tam zamanlı Frontend Developer olarak şirketin backoffice ve portal sistemlerinin uçtan uca geliştirilmesinde aktif rol aldım. Next.js tabanlı frontend mimarisini tasarladım; next-intl ile çok dilli yapıyı kurdum ve shadcn/ui'yi bileşen kütüphanesi olarak kullanarak tutarlı, yeniden kullanılabilir arayüz bileşenleri oluşturdum.",
        "Tailwind CSS ve Sass ile özel ve responsive arayüzler geliştirdim. Form ve veri doğrulamasında Zod'u, kimlik doğrulamada NextAuth ve OAuth'u kullanarak güvenli ve ölçeklenebilir akışlar kurguladım. Backend ekibinin Swagger ile dokümante ettiği API'leri Postman ile test edip arayüze entegre ettim.",
        "Performans ve görünürlük, işin merkezindeydi: Lighthouse denetimleriyle performans, erişilebilirlik ve best practices skorlarını sürekli 95'in üzerinde tuttum. SSR, metadata optimizasyonu ve yapılandırılmış veriyle arama motoru görünürlüğünü güçlendirdim.",
        "Uzaktan çalışan ekipte Agile/Scrum ile ilerledik. Günlük stand-up'lara ve sprint planlamalarına katılarak backend geliştiriciler ve diğer ekip üyeleriyle yakın çalıştım; iş takibini Jira, dokümantasyonu Confluence, iletişimi Slack üzerinden yürüttük.",
      ],
      en: [
        "As a full-time Frontend Developer at getClinic, I took an active part in building the company's backoffice and portal systems end to end. I designed the Next.js-based frontend architecture, set up multilingual support with next-intl and used shadcn/ui as the component library to build consistent, reusable UI elements.",
        "I built custom, responsive interfaces with Tailwind CSS and Sass. I used Zod for form and data validation, and NextAuth with OAuth to design secure, scalable authentication flows. I tested the APIs the backend team documented with Swagger in Postman and integrated them into the UI.",
        "Performance and visibility were at the core of the work: I used Lighthouse audits to keep performance, accessibility and best practices scores consistently above 95, and strengthened search visibility with SSR, metadata optimization and structured data.",
        "We worked remotely following Agile/Scrum. I took part in daily stand-ups and sprint planning and worked closely with backend developers and other team members, using Jira for tracking, Confluence for documentation and Slack for communication.",
      ],
    },
    highlights: {
      tr: [
        "Backoffice ve portal sistemleri için Next.js tabanlı frontend mimarisini tasarladım.",
        "next-intl ile çok dilli yapıyı kurdum; shadcn/ui üzerine tutarlı ve yeniden kullanılabilir bir bileşen seti oluşturdum.",
        "Lighthouse denetimleriyle performans, erişilebilirlik ve best practices skorlarını sürekli 95'in üzerinde tuttum.",
        "SSR, metadata optimizasyonu ve yapılandırılmış veriyle arama motoru görünürlüğünü güçlendirdim.",
        "NextAuth ve OAuth ile güvenli ve ölçeklenebilir kimlik doğrulama süreçleri tasarladım.",
        "Özel hook'lar ve render optimizasyonlarıyla hızlı açılan, kullanıcı dostu arayüzler geliştirdim.",
        "Swagger ile dokümante edilen API'leri Postman ile test ederek arayüze entegre ettim.",
      ],
      en: [
        "Designed the Next.js-based frontend architecture for the backoffice and portal systems.",
        "Set up multilingual support with next-intl and built a consistent, reusable component set on top of shadcn/ui.",
        "Kept Lighthouse performance, accessibility and best practices scores consistently above 95.",
        "Strengthened search visibility with SSR, metadata optimization and structured data.",
        "Designed secure, scalable authentication flows with NextAuth and OAuth.",
        "Built fast, user-friendly interfaces with custom hooks and render optimizations.",
        "Tested APIs documented with Swagger in Postman and integrated them into the UI.",
      ],
    },
    features: {
      tr: [
        "Backoffice + portal",
        "Çok dilli yapı (next-intl)",
        "Lighthouse 95+",
        "SSR + yapılandırılmış veri",
        "NextAuth / OAuth",
        "Uzaktan · Agile / Scrum",
      ],
      en: [
        "Backoffice + portal",
        "Multilingual (next-intl)",
        "Lighthouse 95+",
        "SSR + structured data",
        "NextAuth / OAuth",
        "Remote · Agile / Scrum",
      ],
    },
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "shadcn",
      "i18n",
      "tailwind",
      "sass",
      "zod",
      "seo",
      "nextauth",
      "aws",
      "swagger",
      "postman",
      "lighthouse",
      "git",
      "npm",
      "yarn",
      "jira",
      "confluence",
      "slack",
      "scrum",
    ],
    links: [
      {
        kind: "linkedin",
        href: "https://www.linkedin.com/company/getcliniccom/",
        label: { tr: "LinkedIn sayfası", en: "LinkedIn page" },
      },
    ],
    gallery: [],
  },
];

export const FREELANCE_PROJECTS = PROJECTS.filter((p) => p.kind === "freelance");
export const FULLTIME_PROJECTS = PROJECTS.filter((p) => p.kind === "fulltime");

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectCover(project: Project) {
  return project.gallery.find((image) => image.device === "desktop");
}

export const LIVE_WEBSITE_COUNT = PROJECTS.filter(
  (p) => p.status !== "offline"
).reduce(
  (count, p) => count + p.links.filter((l) => l.kind === "website").length,
  0
);

export const SECTOR_COUNT = new Set(PROJECTS.map((p) => p.sector.en)).size;
