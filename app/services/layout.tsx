import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MukaroCore Enterprise provides structured services across technology, commerce, and agri-intelligence for businesses building across Africa.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
