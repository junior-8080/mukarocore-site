import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "Insights, publications, and industry news on Technology, Commerce, and Agriculture from MukaroCore Enterprise. Stay informed on Africa's business landscape.",
  keywords: [
    "MukaroCore knowledge hub",
    "Africa business insights",
    "tech publications Kenya",
    "agri-tech news Africa",
    "commerce trends Nairobi",
    "business intelligence Kenya",
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