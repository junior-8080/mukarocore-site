import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const siteUrl = "https://www.mukarocore.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MukaroCore Enterprise | Tech, Commerce & Agriculture Solutions",
    template: "%s | MukaroCore Enterprise",
  },
  description:
    "MukaroCore Enterprise designs the operating layer behind technology, commerce, and agriculture for businesses building across Africa.",
  keywords: [
    "MukaroCore",
    "Mukaro Core",
    "enterprise systems Africa",
    "technology operations Ghana",
    "digital commerce infrastructure",
    "agri-tech solutions Africa",
    "business transformation Africa",
    "knowledge hub Africa",
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
      "Technology, commerce, and agriculture systems for businesses that need clear operations, verified insight, and durable growth.",
    images: [
      {
        url: `${siteUrl}/brand-logo.png`,
        width: 677,
        height: 369,
        alt: "MukaroCore brand logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MukaroCore Enterprise | Tech, Commerce & Agriculture Solutions",
    description:
      "Technology, commerce, and agriculture systems for businesses building across Africa.",
    images: [`${siteUrl}/brand-logo.png`],
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
  logo: `${siteUrl}/brand-logo.png`,
  description:
    "MukaroCore Enterprise designs the operating layer behind technology, commerce, and agriculture for businesses building across Africa.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@mukarocore.com",
    contactType: "customer service",
  },
  sameAs: [],
  foundingLocation: {
    "@type": "Place",
    name: "Accra, Ghana",
  },
  areaServed: "Africa",
  serviceType: [
    "Technology Systems",
    "Commerce Operations",
    "Agriculture Intelligence",
    "Business Consulting",
  ],
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
      </body>
    </html>
  );
}
