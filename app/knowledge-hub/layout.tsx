import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrowNovis",
  description:
    "GrowNovis by MukaroCore uses AI to surface agricultural insight, publish verified data publicly, and reframe agriculture as a modern, data-driven industry.",
  keywords: [
    "GrowNovis",
    "AI agricultural intelligence Africa",
    "agri data Africa",
    "modern agriculture Ghana",
    "agricultural investment Africa",
    "agri research publishing",
    "MukaroCore GrowNovis",
  ],
  openGraph: {
    title: "GrowNovis | MukaroCore Enterprise",
    description:
      "AI-powered agricultural intelligence — making agri data public and reframing agriculture as the sophisticated, investable industry it is.",
    url: "https://www.mukarocore.com/knowledge-hub",
  },
};

export default function KnowledgeHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
