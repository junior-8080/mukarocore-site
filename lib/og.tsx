import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const ogSize = { width: 1200, height: 630 };

export async function renderOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const logo = await readFile(path.join(process.cwd(), "public/brand-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: brand.background,
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, flex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={220} height={120} style={{ objectFit: "contain", marginLeft: -24 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 24,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: brand.primary,
                fontFamily: "sans-serif",
                fontWeight: 700,
              }}
            >
              {eyebrow}
            </div>
            <div style={{ fontSize: 68, lineHeight: 1.05, color: brand.foreground, marginTop: 20, maxWidth: 760 }}>
              {title}
            </div>
          </div>
          <div style={{ fontSize: 26, color: brand.mutedForeground, fontFamily: "sans-serif" }}>
            mukarocore.com · Innovation Hub, Accra, Ghana
          </div>
        </div>
        <div
          style={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: brand.ink,
            padding: 40,
            gap: 16,
          }}
        >
          <div style={{ height: 16, width: 180, borderRadius: 8, background: brand.primaryBright }} />
          <div style={{ height: 16, width: 120, borderRadius: 8, background: brand.accentBright }} />
          <div style={{ height: 16, width: 200, borderRadius: 8, background: brand.inkMuted }} />
        </div>
      </div>
    ),
    ogSize
  );
}
