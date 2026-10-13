import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { OG_IMAGE_SIZE } from "@/lib/metadata";

const COLORS = {
  background: "#0a0a0c",
  foreground: "#f5f5f5",
  muted: "#a0a0ab",
  brand: "#50db65",
  grid: "rgba(255, 255, 255, 0.1)",
  chip: "#121215",
  chipBorder: "rgba(255, 255, 255, 0.14)",
};

function LogoMark({ size }: { size: number }) {
  const unit = size / 10;
  const cell = (x: number, y: number, width: number, height: number, color: string) => (
    <div
      style={{
        position: "absolute",
        left: x * unit,
        top: y * unit,
        width: width * unit,
        height: height * unit,
        backgroundColor: color,
      }}
    />
  );

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: size,
        height: size,
        borderRadius: 2.2 * unit,
        backgroundColor: COLORS.foreground,
      }}
    >
      {cell(1.5, 2, 1, 5, COLORS.background)}
      {cell(5.5, 2, 1, 5, COLORS.background)}
      {cell(2.5, 7, 3, 1, COLORS.background)}
      {cell(7.5, 7, 1, 1, COLORS.brand)}
    </div>
  );
}

type OgImageProps = {
  eyebrow: string;
  title: string;
  tags?: string[];
};

export function renderOgImage({ eyebrow, title, tags = [] }: OgImageProps) {
  const domain = new URL(siteConfig.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          backgroundColor: COLORS.background,
          color: COLORS.foreground,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            backgroundImage: `linear-gradient(to right, ${COLORS.grid} 1px, transparent 1px), linear-gradient(to bottom, ${COLORS.grid} 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 90% at 100% 0%, black 20%, transparent 100%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <LogoMark size={60} />
          <div style={{ display: "flex", alignItems: "center", fontSize: 26, color: COLORS.muted }}>
            <span style={{ color: COLORS.brand }}>~/</span>
            <span>{domain}</span>
            <div style={{ width: 12, height: 28, marginLeft: 6, backgroundColor: COLORS.foreground }} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: COLORS.brand,
            }}
          >
            <div style={{ width: 10, height: 10, backgroundColor: COLORS.brand }} />
            <span>{eyebrow}</span>
          </div>
          <div style={{ display: "flex", fontSize: 84, letterSpacing: -2, lineHeight: 1.05 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "8px 18px",
                fontSize: 24,
                color: COLORS.muted,
                backgroundColor: COLORS.chip,
                border: `1px solid ${COLORS.chipBorder}`,
                borderRadius: 10,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    OG_IMAGE_SIZE
  );
}
