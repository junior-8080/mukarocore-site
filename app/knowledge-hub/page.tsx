"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHero, SectionBlock, SiteSection, StatRack } from "@/components/site/PageFrame";

const publications = [
  {
    title: "Digital Payment Integration: A Complete Guide for SMEs",
    category: "Commerce",
    type: "Whitepaper",
    author: "Dr. Sarah Mitchell",
    date: "March 2026",
    verified: true,
    downloads: 1247,
    summary:
      "Comprehensive analysis of digital payment systems and their impact on small to medium enterprises.",
  },
  {
    title: "Precision Agriculture in East Africa: Data-Driven Approaches",
    category: "Agriculture",
    type: "Research Paper",
    author: "Prof. James Okoye",
    date: "February 2026",
    verified: true,
    downloads: 892,
    summary:
      "Exploring the implementation and benefits of precision agriculture technologies in East African farming.",
  },
  {
    title: "Cybersecurity Best Practices for Growing Businesses",
    category: "Tech",
    type: "Whitepaper",
    author: "MukaroCore Security Team",
    date: "January 2026",
    verified: true,
    downloads: 2103,
    summary:
      "Essential security strategies for businesses transitioning to digital operations.",
  },
  {
    title: "Revenue Recovery Through Digital Transformation",
    category: "Commerce",
    type: "Case Study",
    author: "Emily Chen",
    date: "April 2026",
    verified: true,
    downloads: 1567,
    summary:
      "Real-world case studies demonstrating revenue improvements through digital integration.",
  },
];

const news = [
  {
    title: "Mobile Money Adoption Reaches 78% in Regional Markets",
    category: "Commerce",
    date: "April 12, 2026",
    readTime: "5 min read",
    excerpt:
      "Latest statistics show unprecedented growth in mobile money usage across regional markets, creating new opportunities for digital commerce.",
  },
  {
    title: "New AgriTech Partnerships Announced",
    category: "Agriculture",
    date: "April 10, 2026",
    readTime: "3 min read",
    excerpt:
      "MukaroCore Enterprise partners with agricultural institutions to deliver data-driven farming solutions.",
  },
  {
    title: "Cloud Infrastructure Trends for 2026",
    category: "Tech",
    date: "April 8, 2026",
    readTime: "7 min read",
    excerpt:
      "Analysis of emerging cloud technologies and their implications for small business IT infrastructure.",
  },
  {
    title: "The Future of Digital Payment Security",
    category: "Tech",
    date: "April 5, 2026",
    readTime: "6 min read",
    excerpt:
      "Exploring advanced security measures protecting digital transactions in emerging markets.",
  },
];

const events = [
  {
    title: "Digital Commerce Summit 2026",
    date: "May 15-17, 2026",
    location: "Nairobi Convention Center",
    type: "Conference",
    attendees: 500,
    status: "Upcoming",
  },
  {
    title: "AgriTech Innovation Workshop",
    date: "May 22, 2026",
    location: "Virtual Event",
    type: "Workshop",
    attendees: 150,
    status: "Upcoming",
  },
  {
    title: "Small Business Tech Meetup",
    date: "April 28, 2026",
    location: "MukaroCore Office",
    type: "Meetup",
    attendees: 50,
    status: "Registration Open",
  },
  {
    title: "Cybersecurity for Enterprises",
    date: "June 5, 2026",
    location: "Virtual Event",
    type: "Webinar",
    attendees: 200,
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
        eyebrow="Knowledge Hub"
        title={<>Verified research, reporting, and live market signals.</>}
        description={
          <div className="space-y-6">
            <p>
              The hub is where MukaroCore turns working insight into usable public
              material. Every entry is designed to be cited, shared, and acted on.
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
                { value: "50+", label: "Published pieces" },
                { value: "3", label: "Coverage domains" },
                { value: "4", label: "Live events listed" },
                { value: "100%", label: "Verified editorial pass" },
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
                        <div className="flex items-center gap-2">
                          <Download size={15} className="text-primary" />
                          <span>{publication.downloads.toLocaleString()} downloads</span>
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
                        <div className="flex items-start gap-3">
                          <Users size={16} className="mt-1 shrink-0 text-primary" />
                          <div>
                            <dt className="eyebrow">Attendance</dt>
                            <dd className="mt-2 text-foreground">
                              {event.attendees} expected attendees
                            </dd>
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
                Contribute research, reporting, or events to the hub.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                If you have material that adds real value to operators in tech,
                commerce, or agriculture, we can review it for the verified pipeline.
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
