import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { BrandLogo } from "@/data/projects";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((part) => /^\p{L}/u.test(part))
    .slice(-2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function ClientLogo({
  logo,
  alt,
  className,
}: {
  logo: BrandLogo;
  alt: string;
  className?: string;
}) {
  return (
    <Avatar
      className={cn("size-7 rounded-md border", className)}
      style={{ backgroundColor: logo.background }}
    >
      <AvatarImage src={logo.src} alt={alt} className="object-contain p-0.5" />
      <AvatarFallback className="rounded-md bg-transparent text-[10px] font-semibold text-white">
        {initials(alt)}
      </AvatarFallback>
    </Avatar>
  );
}
