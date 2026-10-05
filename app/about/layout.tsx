import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MukaroCore Enterprise is a technology services company at Innovation Hub, Accra.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
