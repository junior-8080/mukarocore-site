import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MukaroCore Enterprise in Accra, Ghana for software, infrastructure, and automation services tailored to your business.",
  keywords: [
    "contact MukaroCore",
    "MukaroCore Accra",
    "software development company Accra",
    "IT services Ghana contact",
    "MukaroCore email",
  ],
  alternates: { canonical: "/contact" },
  twitter: {
    title: "Contact Us | MukaroCore Enterprise",
    description: "Reach the MukaroCore team at Innovation Hub, Accra, Ghana.",
  },
  openGraph: {
    title: "Contact Us | MukaroCore Enterprise",
    description:
      "Get in touch with MukaroCore Enterprise. Reach our team in Accra, Ghana.",
    url: "https://www.mukarocore.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
