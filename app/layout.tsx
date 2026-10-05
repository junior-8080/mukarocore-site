import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteUrl } from "@/lib/brand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MukaroCore Enterprise | Software Development & IT Services in Accra, Ghana",
    template: "%s | MukaroCore Enterprise",
  },
  description:
    "MukaroCore Enterprise builds, runs, and scales the technology behind growing businesses: custom software, DevOps, QA testing, cloud, and systems integration from Accra, Ghana.",
  keywords: [
    "software development Ghana",
    "custom software Accra",
    "DevOps Ghana",
    "QA testing Accra",
    "systems integration Ghana",
    "cloud infrastructure Ghana",
    "mobile app development Ghana",
    "IT services Accra",
    "MukaroCore",
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
    locale: "en_GB",
    url: siteUrl,
    siteName: "MukaroCore Enterprise",
    title: "MukaroCore Enterprise | Software Development & IT Services in Accra, Ghana",
    description:
      "Custom software, DevOps, QA testing, cloud, and systems integration for growing businesses across Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MukaroCore Enterprise | Software Development & IT Services in Accra, Ghana",
    description:
      "Custom software, DevOps, QA testing, cloud, and systems integration from Accra, Ghana.",
    creator: "@mukarocore",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "MukaroCore Enterprise",
  alternateName: ["MukaroCore", "Mukaro Core"],
  url: siteUrl,
  logo: `${siteUrl}/brand-logo.png`,
  description:
    "Technology services company in Accra, Ghana providing custom software, mobile apps, DevOps, cloud, QA testing, data, security, and systems integration.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Innovation Hub",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@mukarocore.com",
    telephone: "+233545543359",
    contactType: "customer service",
  },
  sameAs: [],
  areaServed: ["Ghana", "Africa"],
  knowsAbout: services.map((service) => service.title),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technology services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: `${siteUrl}/services/${service.slug}`,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('mukaro-theme')||((window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark')})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
          <Navigation />
          <main className="overflow-x-clip">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
