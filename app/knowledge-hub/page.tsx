"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileText,
  MapPin,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHero, SectionBlock, SiteSection, StatRack } from "@/components/site/PageFrame";

const publications = [
  {
    title: "Agriculture Is an Asset Class: The Data Investors Are Missing",
    category: "Agriculture",
    type: "Research Brief",
    author: "GrowNovis Research Team",
    date: "April 2026",
    verified: true,
    summary:
      "A data-driven case for treating African agriculture as a sophisticated investment category — with AI-analysed sector performance, risk profiles, and opportunity signals.",
  },
  {
    title: "Beyond the Village: Reframing Agriculture for the Modern Economy",
    category: "Agriculture",
    type: "Whitepaper",
    author: "GrowNovis Research Team",
    date: "March 2026",
    verified: true,
    summary:
      "An evidence-based challenge to the outdated narrative around African agriculture — covering supply chain sophistication, tech adoption, and the sectors attracting serious capital.",
  },
  {
    title: "West Africa Agri Funding Landscape: 2026 Brief",
    category: "Agriculture",
    type: "Research Brief",
    author: "GrowNovis Research Team",
    date: "February 2026",
    verified: true,
    summary:
      "A verified overview of available grants, impact funds, and investor appetite for agricultural operators across West Africa — with GrowNovis AI-generated opportunity signals.",
  },
  {
    title: "AI in Agriculture: What the Data Actually Shows",
    category: "Agriculture",
    type: "Research Paper",
    author: "GrowNovis Research Team",
    date: "January 2026",
    verified: true,
    summary:
      "An honest analysis of where AI is creating real value in African agriculture — from market pricing to yield forecasting — and where the hype outpaces the evidence.",
  },
];

const news = [
  {
    title: "GrowNovis AI Signals: April 2026 Agri Opportunity Digest",
    category: "Agriculture",
    date: "April 12, 2026",
    readTime: "4 min read",
    excerpt:
      "This month's AI-generated digest covers emerging opportunities in West African agri-processing, input markets, and export corridors — with data sourced from GrowNovis public datasets.",
  },
  {
    title: "Agri Funding Round-Up: Q1 2026",
    category: "Agriculture",
    date: "April 10, 2026",
    readTime: "4 min read",
    excerpt:
      "A review of agricultural funding activity in Q1 2026 — which sectors attracted capital, what operators are asking for, and what funders are prioritising.",
  },
  {
    title: "Why Agriculture Keeps Losing the Narrative — And How to Fix It",
    category: "Agriculture",
    date: "April 8, 2026",
    readTime: "6 min read",
    excerpt:
      "The perception problem in African agriculture is not a farming problem — it's a data and visibility problem. GrowNovis is built to address exactly that.",
  },
  {
    title: "The Agri Sectors Attracting Serious Investment in 2026",
    category: "Agriculture",
    date: "April 5, 2026",
    readTime: "5 min read",
    excerpt:
      "AI-analysed data from GrowNovis shows which agricultural sub-sectors are drawing the most investor attention across Africa — and what's driving the shift.",
  },
];

const events = [
  {
    title: "Agri Fundraising Readiness Workshop",
    date: "May 22, 2026",
    location: "Virtual Event",
    type: "Workshop",
    status: "Upcoming",
  },
  {
    title: "Agriculture Sector Research Submissions — Call Open",
    date: "June 5, 2026",
    location: "Virtual Event",
    type: "Submission",
    status: "Upcoming",
  },
];

const categoryVariant: Record<string, "blue" | "default" | "orange"> = {
  Tech: "blue",
  Commerce: "orange",
  Agriculture: "default",
};

function EmptyState({ label }: { label: string }) {
  return (
    <article className="surface-card p-6">
      <p className="eyebrow">No results</p>
      <p className="mt-4 text-base leading-8 text-muted-foreground">
        No {label} matched that search. Try a broader term or clear the query.
      </p>
    </article>
  );
}

export default function KnowledgeHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const query = searchQuery.trim().toLowerCase();

  const filteredPublications = publications.filter((item) =>
    [item.title, item.category, item.type, item.author, item.summary]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );

  const filteredNews = news.filter((item) =>
    [item.title, item.category, item.date, item.excerpt]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );

  const filteredEvents = events.filter((item) =>
    [item.title, item.date, item.location, item.type, item.status]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );

  return (
    <>
      <PageHero
        eyebrow="GrowNovis"
        title={<>Agriculture is more than farming. Here's the data to prove it.</>}
        description={
          <div className="space-y-6">
            <p>
              GrowNovis is a MukaroCore product that uses AI to surface agricultural
              insight — analysing sector articles, advising on crops, and delivering
              daily agronomic guidance to operators in the field.
            </p>

            <div className="max-w-xl space-y-3">
              <label htmlFor="knowledge-search" className="eyebrow block">
                Search the archive
              </label>
              <div className="relative">
                <Search
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="knowledge-search"
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search publications, news, or events"
                  className="pl-11"
                />
              </div>
            </div>
          </div>
        }
        aside={
          <>
            <StatRack
              items={[
                { value: "4", label: "Published pieces" },
                { value: "3", label: "Coverage domains" },
                { value: "2", label: "Upcoming events" },
              ]}
              columns={2}
            />

            <article className="surface-card p-6">
              <p className="eyebrow">Editorial rule</p>
              <p className="mt-4 text-base leading-8 text-foreground">
                Every item should answer three questions quickly: what changed, why it
                matters, and what the reader should do next.
              </p>
            </article>
          </>
        }
      />

      <SiteSection tone="muted">
        <SectionBlock
          eyebrow="Archive"
          title={<>Browse the hub by format.</>}
          description={
            <>
              Publications go deeper, news items track movement, and events pull the
              audience into the conversation around the work.
            </>
          }
        >
          <Tabs defaultValue="publications">
            <TabsList>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            <TabsContent value="publications">
              <div className="grid gap-4">
                {filteredPublications.length === 0 ? (
                  <EmptyState label="publications" />
                ) : (
                  filteredPublications.map((publication) => (
                    <article
                      key={publication.title}
                      className="surface-card p-6 lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-8"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant={categoryVariant[publication.category] ?? "secondary"}>
                            {publication.category}
                          </Badge>
                          <Badge variant="secondary">{publication.type}</Badge>
                          {publication.verified ? (
                            <span className="tag-pill">
                              <CheckCircle2 size={14} />
                              Verified
                            </span>
                          ) : null}
                        </div>

                        <h2 className="mt-5 text-3xl">{publication.title}</h2>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                          {publication.summary}
                        </p>
                      </div>

                      <div className="mt-6 grid gap-3 text-sm text-muted-foreground lg:mt-0">
                        <div>
                          <p className="eyebrow">Author</p>
                          <p className="mt-2 text-foreground">{publication.author}</p>
                        </div>
                        <div>
                          <p className="eyebrow">Published</p>
                          <p className="mt-2 text-foreground">{publication.date}</p>
                        </div>
                        <button className="link-line text-left">
                          Open document <ExternalLink size={15} />
                        </button>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="news">
              <div className="route-list">
                {filteredNews.length === 0 ? (
                  <EmptyState label="news items" />
                ) : (
                  filteredNews.map((article) => (
                    <article key={article.title} className="lg:grid lg:grid-cols-[10rem_minmax(0,1fr)_9rem] lg:gap-6">
                      <div className="text-sm text-muted-foreground">
                        <p>{article.date}</p>
                        <p className="mt-2 flex items-center gap-2">
                          <Clock3 size={14} className="text-primary" />
                          {article.readTime}
                        </p>
                      </div>
                      <div>
                        <Badge variant={categoryVariant[article.category] ?? "secondary"}>
                          {article.category}
                        </Badge>
                        <h2 className="mt-4 text-3xl">{article.title}</h2>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="mt-5 lg:mt-0 lg:text-right">
                        <button className="link-line">
                          Read brief <ExternalLink size={15} />
                        </button>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid gap-4 lg:grid-cols-2">
                {filteredEvents.length === 0 ? (
                  <EmptyState label="events" />
                ) : (
                  filteredEvents.map((event) => (
                    <article key={event.title} className="surface-card p-6">
                      <div className="flex items-center justify-between gap-3">
                        <Badge variant="secondary">{event.type}</Badge>
                        <span className="tag-pill">{event.status}</span>
                      </div>

                      <h2 className="mt-6 text-3xl">{event.title}</h2>

                      <dl className="ledger-list mt-6 text-sm text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <Calendar size={16} className="mt-1 shrink-0 text-primary" />
                          <div>
                            <dt className="eyebrow">Date</dt>
                            <dd className="mt-2 text-foreground">{event.date}</dd>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin size={16} className="mt-1 shrink-0 text-primary" />
                          <div>
                            <dt className="eyebrow">Location</dt>
                            <dd className="mt-2 text-foreground">{event.location}</dd>
                          </div>
                        </div>
                      </dl>

                      <Button className="mt-8 w-full" size="lg">
                        Register now <ArrowUpRight size={16} />
                      </Button>
                    </article>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </SectionBlock>
      </SiteSection>

      <SiteSection className="pt-0">
        <article className="surface-card p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="eyebrow">Submission desk</p>
              <h2 className="mt-4 max-w-[12ch] text-5xl leading-none">
                Contribute research or data to GrowNovis.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                If you have verified agricultural data, research, or sector insight
                that should be public — submit it for review and we'll put it in
                front of the operators, investors, and policymakers who need it.
              </p>
            </div>

            <Button size="lg">
              Submit material <FileText size={16} />
            </Button>
          </div>
        </article>
      </SiteSection>
    </>
  );
}
