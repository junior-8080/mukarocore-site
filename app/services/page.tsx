import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { MediaSplit, PageHero, SiteSection } from "@/components/site/PageFrame";
import { ServiceCard } from "@/components/site/ServiceCard";
import { deliveryPhases, serviceCategories, servicesByCategory } from "@/lib/services";
import { clients } from "@/lib/clients";

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

const bookaata = {
  title: "Bookaata",
  tagline: "Our service booking application",
  description:
    "Our first in-house commerce product, built to take service businesses off pen-and-paper booking books.",
  features: ["Online booking & scheduling", "Mobile money & card payments", "Automated booking reminders", "Booking & revenue analytics"],
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

              {category.id === "commerce" ? (
                <article className="surface-card p-6 sm:col-span-1 xl:col-span-2">
                  <div className="flex items-start justify-between gap-4">
                    <span className="icon-chip" data-tone="accent">
                      <CalendarCheck size={22} aria-hidden />
                    </span>
                    <span className="tag-pill">Live product</span>
                  </div>
                  <h3 className="mt-5 text-2xl">{bookaata.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">{bookaata.tagline}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{bookaata.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {bookaata.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </div>
          </div>
        </SiteSection>
      ))}

      <SiteSection>
        <p className="eyebrow">Clients we&apos;ve worked with</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card p-5"
            >
              <p className="text-lg font-semibold text-foreground">{client.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{client.industry}</p>
            </a>
          ))}
        </div>
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
