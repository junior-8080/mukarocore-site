import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MukaroCore Enterprise in Accra, Ghana for technology, commerce, and agriculture solutions tailored to your business.",
  keywords: [
    "contact MukaroCore",
    "MukaroCore Accra",
    "enterprise consulting contact Ghana",
    "business solutions inquiry",
    "MukaroCore email",
  ],
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
