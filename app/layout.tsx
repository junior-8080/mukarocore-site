import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://www.mukarocore.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MukaroCore Enterprise | Tech, Commerce & Agriculture Solutions",
    template: "%s | MukaroCore Enterprise",
  },
  description:
    "MukaroCore Enterprise delivers integrated Technology, Commerce, and Agriculture solutions for modern businesses across Africa. Build the Core. Verify the Truth. Scale the Growth.",
  keywords: [
    "MukaroCore",
    "Mukaro Core",
    "mukarocore",
    "enterprise solutions Africa",
    "tech consulting Nairobi",
    "e-commerce solutions Kenya",
    "agri-tech Africa",
    "business technology Kenya",
    "digital transformation Africa",
    "revenue recovery",
  ],
  authors: [{ name: "MukaroCore Enterprise", url: siteUrl }],
  creator: "MukaroCore Enterprise",
  publisher: "MukaroCore Enterprise",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MukaroCore Enterprise",
    title: "MukaroCore Enterprise | Tech, Commerce & Agriculture Solutions",
    description:
      "Integrated Technology, Commerce, and Agriculture solutions for modern businesses across Africa. Build the Core. Verify the Truth. Scale the Growth.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "MukaroCore Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MukaroCore Enterprise | Tech, Commerce & Agriculture Solutions",
    description:
      "Integrated Technology, Commerce, and Agriculture solutions for modern businesses across Africa.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@mukarocore",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MukaroCore Enterprise",
  alternateName: ["MukaroCore", "Mukaro Core"],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "MukaroCore Enterprise delivers integrated Technology, Commerce, and Agriculture solutions for modern businesses across Africa.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@mukarocore.com",
    contactType: "customer service",
  },
  sameAs: [],
  foundingLocation: {
    "@type": "Place",
    name: "Nairobi, Kenya",
  },
  areaServed: "Africa",
  serviceType: [
    "Technology Solutions",
    "E-Commerce Solutions",
    "Agriculture Technology",
    "Business Consulting",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-[#030712] text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}