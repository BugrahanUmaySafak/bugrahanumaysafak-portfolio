import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  blink?: boolean;
};

export function LogoMark({ className, blink = false }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      shapeRendering="crispEdges"
      className={cn("size-9", className)}
    >
      <rect width="10" height="10" rx="2.2" className="fill-foreground" />
      <g className="fill-background">
        <rect x="1.5" y="2" width="1" height="5" />
        <rect x="5.5" y="2" width="1" height="5" />
        <rect x="2.5" y="7" width="3" height="1" />
      </g>
      <rect
        x="7.5"
        y="7"
        width="1"
        height="1"
        className={cn("fill-brand", blink && "animate-caret")}
      />
    </svg>
  );
}
