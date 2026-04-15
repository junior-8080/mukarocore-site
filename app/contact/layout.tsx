import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MukaroCore Enterprise. Reach our team in Nairobi, Kenya for Tech, Commerce, and Agriculture solutions tailored to your business.",
  keywords: [
    "contact MukaroCore",
    "MukaroCore Nairobi",
    "enterprise consulting contact Kenya",
    "business solutions inquiry",
    "MukaroCore email",
  ],
  openGraph: {
    title: "Contact Us | MukaroCore Enterprise",
    description:
      "Get in touch with MukaroCore Enterprise. Reach our team in Nairobi, Kenya.",
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