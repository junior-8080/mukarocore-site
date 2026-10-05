import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientGrid } from "@/components/site/ClientGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { MediaSplit, PageHero, SiteSection } from "@/components/site/PageFrame";
import { ServiceCard } from "@/components/site/ServiceCard";
import { deliveryPhases, serviceCategories, servicesByCategory } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, mobile apps, DevOps, cloud, QA testing, systems integration, data, security, and commerce systems from MukaroCore in Accra, Ghana.",
  keywords: [
    "software development Ghana",
    "custom software Accra",
    "DevOps Ghana",
    "QA testing Accra",
    "systems integration Ghana",
    "MukaroCore services",
  ],
  alternates: { canonical: "/services" },
  twitter: {
    title: "Services | MukaroCore Enterprise",
    description: "Software, DevOps, QA testing, cloud, and systems integration services from Accra, Ghana.",
  },
  openGraph: {
    title: "Services | MukaroCore Enterprise",
    description:
      "Build, operate, scale, and commerce services for businesses replacing manual operations with dependable digital systems.",
    url: "https://www.mukarocore.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Technology services, end to end.</>}
        description={
          <>
            We build the software, run the infrastructure, and connect the
            systems your business depends on. Pick one service or bring us the
            whole problem.
          </>
        }
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact">
                Book a consultation <ArrowUpRight size={16} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">
                See how we work <ArrowRight size={16} />
              </Link>
            </Button>
          </>
        }
        aside={
          <>
            <nav aria-label="Service categories" className="route-list">
              {serviceCategories.map((category, index) => (
                <Link
                  key={category.id}
                  href={`#${category.id}`}
                  className="group flex items-center justify-between gap-4"
                >
                  <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                  <span className="ml-auto text-xl">{category.label}</span>
                  <span className="text-sm text-muted-foreground">
                    {servicesByCategory(category.id).length}
                  </span>
                </Link>
              ))}
            </nav>
            <article className="surface-card p-6">
              <p className="eyebrow">Delivery rhythm</p>
              <ol className="ledger-list mt-5 text-sm text-muted-foreground">
                {deliveryPhases.map((phase, index) => (
                  <li key={phase.title} className="flex items-start justify-between gap-4">
                    <span>{phase.title}</span>
                    <span className="text-primary">0{index + 1}</span>
                  </li>
                ))}
              </ol>
            </article>
          </>
        }
      />

      {serviceCategories.map((category, index) => (
        <SiteSection
          key={category.id}
          tone={index % 2 === 0 ? "muted" : "default"}
          className="scroll-mt-20"
        >
          <div id={category.id} className="scroll-mt-24">
            <MediaSplit image={category.image} imageAlt={category.imageAlt} reverse={index % 2 === 1}>
              <p className="eyebrow">
                0{index + 1} · {category.label}
              </p>
              <h2 className="section-title">{category.title}</h2>
              <p className="section-copy">{category.description}</p>
            </MediaSplit>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {servicesByCategory(category.id).map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}

            </div>
          </div>
        </SiteSection>
      ))}

      <SiteSection>
        <h2 className="eyebrow">Clients we&apos;ve worked with</h2>
        <ClientGrid className="mt-5" />
      </SiteSection>

      <SiteSection className="pt-0">
        <CtaBand
          eyebrow="Fit check"
          title={<>Not sure which service you need?</>}
          description={
            <>
              Tell us where the friction is. We&apos;ll map it, tell you what to fix
              first, and sequence the work so each step builds on the last.
            </>
          }
          actionLabel="Request a service review"
        />
      </SiteSection>
    </>
  );
}
