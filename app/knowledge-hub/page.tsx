"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen, FileText, Calendar, TrendingUp,
  Search, CheckCircle, Download,
  ExternalLink, Clock, Users, MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const publications = [
  {
    title: "Digital Payment Integration: A Complete Guide for SMEs",
    category: "Commerce",
    type: "Whitepaper",
    author: "Dr. Sarah Mitchell",
    date: "March 2026",
    verified: true,
    downloads: 1247,
    summary: "Comprehensive analysis of digital payment systems and their impact on small to medium enterprises.",
  },
  {
    title: "Precision Agriculture in East Africa: Data-Driven Approaches",
    category: "Agriculture",
    type: "Research Paper",
    author: "Prof. James Okoye",
    date: "February 2026",
    verified: true,
    downloads: 892,
    summary: "Exploring the implementation and benefits of precision agriculture technologies in East African farming.",
  },
  {
    title: "Cybersecurity Best Practices for Growing Businesses",
    category: "Tech",
    type: "Whitepaper",
    author: "MukoraCore Security Team",
    date: "January 2026",
    verified: true,
    downloads: 2103,
    summary: "Essential security strategies for businesses transitioning to digital operations.",
  },
  {
    title: "Revenue Recovery Through Digital Transformation",
    category: "Commerce",
    type: "Case Study",
    author: "Emily Chen",
    date: "April 2026",
    verified: true,
    downloads: 1567,
    summary: "Real-world case studies demonstrating revenue improvements through digital integration.",
  },
];

const news = [
  {
    title: "Mobile Money Adoption Reaches 78% in Regional Markets",
    category: "Commerce",
    date: "April 12, 2026",
    readTime: "5 min read",
    excerpt: "Latest statistics show unprecedented growth in mobile money usage across East Africa, creating new opportunities for digital commerce.",
  },
  {
    title: "New AgriTech Partnerships Announced",
    category: "Agriculture",
    date: "April 10, 2026",
    readTime: "3 min read",
    excerpt: "MukoraCore Enterprise partners with leading agricultural institutions to deliver data-driven farming solutions.",
  },
  {
    title: "Cloud Infrastructure Trends for 2026",
    category: "Tech",
    date: "April 8, 2026",
    readTime: "7 min read",
    excerpt: "Analysis of emerging cloud technologies and their implications for small business IT infrastructure.",
  },
  {
    title: "The Future of Digital Payment Security",
    category: "Tech",
    date: "April 5, 2026",
    readTime: "6 min read",
    excerpt: "Exploring advanced security measures protecting digital transactions in emerging markets.",
  },
];

const events = [
  { title: "Digital Commerce Summit 2026", date: "May 15–17, 2026", location: "Nairobi Convention Center", type: "Conference", attendees: 500, status: "Upcoming" },
  { title: "AgriTech Innovation Workshop", date: "May 22, 2026", location: "Virtual Event", type: "Workshop", attendees: 150, status: "Upcoming" },
  { title: "Small Business Tech Meetup", date: "April 28, 2026", location: "MukoraCore Office", type: "Meetup", attendees: 50, status: "Registration Open" },
  { title: "Cybersecurity for Enterprises", date: "June 5, 2026", location: "Virtual Event", type: "Webinar", attendees: 200, status: "Upcoming" },
];

const categoryVariant: Record<string, "blue" | "default" | "orange"> = {
  Tech: "blue",
  Commerce: "orange",
  Agriculture: "default",
};

export default function KnowledgeHubPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#030712] border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#030712]/95 to-orange-950/10" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-orange-500/6 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-green-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center border border-orange-500/20 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Knowledge Hub
            </div>
            <h1 className="text-5xl font-bold mb-4 tracking-tight">The Authority</h1>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Your reliable destination for verified industry insights, research publications,
              and authoritative information across Tech, Commerce, and Agriculture.
            </p>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <Input
                type="text"
                placeholder="Search publications, news, and events…"
                className="pl-11 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="publications">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <TabsList>
                <TabsTrigger value="publications">
                  <BookOpen size={15} className="mr-1.5" />
                  Publications
                </TabsTrigger>
                <TabsTrigger value="news">
                  <TrendingUp size={15} className="mr-1.5" />
                  News
                </TabsTrigger>
                <TabsTrigger value="events">
                  <Calendar size={15} className="mr-1.5" />
                  Events
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Publications */}
            <TabsContent value="publications">
              <FadeUp className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight">Publications & Research</h2>
              </FadeUp>
              <StaggerGrid className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {publications.map((pub, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors duration-200 group h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={categoryVariant[pub.category] ?? "secondary"}>{pub.category}</Badge>
                        <Badge variant="secondary">{pub.type}</Badge>
                        {pub.verified && (
                          <div className="flex items-center gap-1 text-green-400 text-xs ml-auto">
                            <CheckCircle size={13} />
                            Verified
                          </div>
                        )}
                      </div>
                      <h3 className="font-semibold mb-2 leading-snug group-hover:text-white transition-colors flex-1">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{pub.summary}</p>
                      <div className="flex items-center justify-between text-xs text-gray-600 pt-3 border-t border-gray-800">
                        <span>{pub.author}</span>
                        <span>{pub.date}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                          <Download size={13} />
                          {pub.downloads.toLocaleString()} downloads
                        </div>
                        <button className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-xs font-medium transition-colors">
                          Read More <ExternalLink size={13} />
                        </button>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
              <FadeUp delay={0.2} className="mt-10 text-center">
                <Button variant="outline">Load More Publications</Button>
              </FadeUp>
            </TabsContent>

            {/* News */}
            <TabsContent value="news">
              <FadeUp className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight mb-1">Industry News & Updates</h2>
                <p className="text-sm text-gray-500">Real-time feed of verified industry news and insights.</p>
              </FadeUp>
              <StaggerGrid className="space-y-4">
                {news.map((article, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors duration-200 group">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={categoryVariant[article.category] ?? "secondary"}>{article.category}</Badge>
                        <span className="text-xs text-gray-600">{article.date}</span>
                        <div className="flex items-center gap-1 text-gray-600 text-xs">
                          <Clock size={12} />{article.readTime}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-white transition-colors">{article.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-3">{article.excerpt}</p>
                      <button className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors">
                        Read Full Article <ExternalLink size={13} />
                      </button>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
              <FadeUp delay={0.2} className="mt-10 text-center">
                <Button variant="outline">View All News</Button>
              </FadeUp>
            </TabsContent>

            {/* Events */}
            <TabsContent value="events">
              <FadeUp className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight mb-1">Upcoming Events</h2>
                <p className="text-sm text-gray-500">Join us at industry events, workshops, and meetups.</p>
              </FadeUp>
              <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {events.map((event, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/30 transition-colors duration-200 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center border border-green-500/20 bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                          {event.status}
                        </span>
                        <Badge variant="secondary">{event.type}</Badge>
                      </div>
                      <h3 className="font-semibold mb-4 leading-snug flex-1">{event.title}</h3>
                      <div className="space-y-2 text-sm text-gray-500 mb-5">
                        <div className="flex items-center gap-2"><Calendar size={14} className="flex-shrink-0" />{event.date}</div>
                        <div className="flex items-center gap-2"><MapPin size={14} className="flex-shrink-0" />{event.location}</div>
                        <div className="flex items-center gap-2"><Users size={14} className="flex-shrink-0" />{event.attendees} expected attendees</div>
                      </div>
                      <Button className="w-full" size="sm">Register Now</Button>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
              <FadeUp delay={0.2} className="mt-10 text-center">
                <Button variant="outline">View Event Calendar</Button>
              </FadeUp>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Submission Portal CTA */}
      <FadeUp>
        <section className="bg-gray-900/30 border-y border-gray-800 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-5">
              <FileText className="text-orange-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-3 tracking-tight">Contribute to the Knowledge Hub</h2>
            <p className="text-gray-400 mb-7">
              Share your research, publications, or host events through our verified submission portal.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-500">Submit Your Content</Button>
          </div>
        </section>
      </FadeUp>

      {/* Newsletter */}
      <FadeUp>
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-7">
              <h2 className="text-2xl font-bold mb-2 tracking-tight">Subscribe to The Daily Pulse</h2>
              <p className="text-gray-500 text-sm">
                Curated daily insights in Tech, Commerce, and Agriculture delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email address" className="flex-1 h-11" />
              <Button className="h-11 px-6">Subscribe</Button>
            </div>
          </div>
        </section>
      </FadeUp>
    </div>
  );
}
