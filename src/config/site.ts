type SiteConfig = {
  name: string;
  shortName: string;
  title: string;
  url: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
};

const PRODUCTION_URL = "https://bugrahanumaysafak.com";

function resolveSiteUrl() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : PRODUCTION_URL);

  return url.replace(/\/+$/, "");
}

export const siteConfig: SiteConfig = {
  name: "Buğrahan Umay Şafak",
  shortName: "Umay",
  title: "Software Engineer",
  url: resolveSiteUrl(),
  contact: {
    email: "bugrahanumaysafak@gmail.com",
    github: "https://github.com/BugrahanUmaySafak",
    linkedin: "https://www.linkedin.com/in/bugrahanumaysafak/",
  },
};
