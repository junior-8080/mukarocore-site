import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
    ],
  },
  async redirects() {
    return [
      // GrowNovis moved to its own site.
      ...["/knowledge-hub", "/knowledge-hub/:path*", "/grownovis", "/grownovis/:path*"].map(
        (source) => ({
          source,
          destination: "https://grownovis.com",
          statusCode: 301 as const,
        })
      ),
      // Single-page site: old routes point at their homepage sections.
      ...[
        ["/services", "services"],
        ["/services/:path*", "services"],
        ["/about", "about"],
        ["/contact", "contact"],
      ].map(([source, section]) => ({
        source,
        destination: `/#${section}`,
        statusCode: 301 as const,
      })),
    ];
  },
};

export default nextConfig;