import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "Verified publications, industry news, and events across technology, commerce, and agriculture from MukaroCore Enterprise.",
  keywords: [
    "MukaroCore knowledge hub",
    "Africa business insights",
    "tech publications Africa",
    "agri-tech news Africa",
    "commerce trends Africa",
    "business intelligence Ghana",
    "MukaroCore blog",
  ],
  openGraph: {
    title: "Knowledge Hub | MukaroCore Enterprise",
    description:
      "Insights, publications, and industry news on Technology, Commerce, and Agriculture from MukaroCore Enterprise.",
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
