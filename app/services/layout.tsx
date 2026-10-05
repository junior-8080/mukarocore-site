import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, DevOps, QA testing, cloud, and systems integration services from MukaroCore Enterprise in Accra, Ghana.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
