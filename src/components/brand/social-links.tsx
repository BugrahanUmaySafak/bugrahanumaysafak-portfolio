import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import type { IconComponent } from "@/lib/utils";

export type SocialLink = {
  id: "email" | "github" | "linkedin";
  label: string;
  href: string;
  display: string;
  icon: IconComponent;
};

export function getSocialLinks(): SocialLink[] {
  const { email, github, linkedin } = siteConfig.contact;
  const links: SocialLink[] = [];

  if (email) {
    links.push({
      id: "email",
      label: "E-mail",
      href: `mailto:${email}`,
      display: email,
      icon: Mail,
    });
  }
  if (linkedin) {
    links.push({
      id: "linkedin",
      label: "LinkedIn",
      href: linkedin,
      display: linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
      icon: FaLinkedin,
    });
  }
  if (github) {
    links.push({
      id: "github",
      label: "GitHub",
      href: github,
      display: github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
      icon: SiGithub,
    });
  }

  return links;
}
