import { siteConfig } from "@/config/site";
import { CERTIFICATIONS } from "@/data/certifications";
import { FEATURED_TECHNOLOGY_IDS, getTechnologies } from "@/data/technologies";

const PERSON_ID = `${siteConfig.url}/#person`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

export function personSchema() {
  const { email, github, linkedin } = siteConfig.contact;

  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    image: `${siteConfig.url}/bugrahanumaysafak.JPEG`,
    jobTitle: siteConfig.title,
    ...(email && { email }),
    sameAs: [github, linkedin].filter(Boolean),
    knowsAbout: getTechnologies(FEATURED_TECHNOLOGY_IDS)
      .filter((tech) => tech.category !== "workflow")
      .map((tech) => tech.title),
    hasCredential: CERTIFICATIONS.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.title,
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: cert.issuer },
      ...(cert.credentialUrl && { url: cert.credentialUrl }),
    })),
  };
}

export function websiteSchema(locale: string) {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: locale,
    publisher: { "@id": PERSON_ID },
  };
}

export function profilePageSchema(locale: string) {
  return {
    "@type": "ProfilePage",
    url: `${siteConfig.url}/${locale}/about`,
    inLanguage: locale,
    mainEntity: { "@id": PERSON_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
