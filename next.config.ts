import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
  // GrowNovis moved to its own site.
  async redirects() {
    return ["/knowledge-hub", "/knowledge-hub/:path*", "/grownovis", "/grownovis/:path*"].map(
      (source) => ({
        source,
        destination: "https://grownovis.com",
        statusCode: 301 as const,
      })
    );
  },
};

export default nextConfig;