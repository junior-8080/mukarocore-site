import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientGrid } from "@/components/site/ClientGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionBlock, SiteSection } from "@/components/site/PageFrame";
import { ServiceCard } from "@/components/site/ServiceCard";
import { getService, serviceCategories, servicesByCategory, servicePath } from "@/lib/services";

export const metadata: Metadata = {
  title: { absolute: "MukaroCore Enterprise | Software Development & IT Services in Accra, Ghana" },
  description:
    "Custom software, DevOps, QA testing, cloud, and systems integration for growing businesses. MukaroCore builds, runs, and scales technology from Accra, Ghana.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MukaroCore Enterprise | Software Development & IT Services in Accra, Ghana",
    description:
      "Custom software, DevOps, QA testing, cloud, and systems integration for growing businesses across Africa.",
    url: "https://www.mukarocore.com",
  },
};

const featuredSlugs = [
  "custom-software-web-development",
  "devops-ci-cd",
  "qa-software-testing",
  "systems-integration-automation",
];

const featured = featuredSlugs.map((slug) => getService(slug)!);

const outcomes = [
  "Manual workflows mapped and replaced with digital systems",
  "Repetitive tasks automated so the team stops doing them by hand",
  "Disconnected tools integrated into one operating layer",
  "WhatsApp chains replaced with structured, trackable workflows",
  "Live dashboards your operators can read without a data team",
  "Access rules and handoffs built into every process",
];

export default function HomePage() {
  return (
    <>
      <section className="hero-banner">
        <Image
          src="/images/hero-team-coding.webp"
          alt="Two developers reviewing code together on a laptop in a shared workspace"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="site-shell">
          <header className="glass-panel max-w-3xl space-y-6 p-7 sm:p-10 lg:p-12">
            <p className="eyebrow !text-ink-foreground/80">MukaroCore Enterprise</p>
            <div className="space-y-5">
              <h1 className="display-title text-ink-foreground">
                Build the core that keeps business moving.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-ink-foreground/85 sm:text-lg">
                We design, build, and run the software and systems behind growing
                businesses, from first prototype to reliable daily operations.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Project <ArrowUpRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ink-foreground/40 bg-transparent text-ink-foreground hover:bg-ink-foreground/15 hover:text-ink-foreground"
              >
                <Link href="/services">
                  Explore Services <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/80">
              <MapPin size={14} aria-hidden />
              Innovation Hub, Accra
            </span>
          </header>
        </div>
      </section>

      <SiteSection tone="muted">
        <div className="max-w-4xl space-y-4">
          <p className="eyebrow">What we do</p>
          <h2 className="section-title">Four practice areas. One technology partner.</h2>
          <p className="section-copy">
            Every service solves part of the same problem: helping businesses move
            from improvised processes to dependable systems.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {serviceCategories.map((category) => (
            <article key={category.id} className="surface-card flex flex-col">
              <div className="relative aspect-[4/3]">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 20rem, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow text-primary">{category.label}</p>
                <h3 className="mt-3 text-2xl leading-tight">{category.title}</h3>
                <ul className="mt-5 grid gap-2 text-sm">
                  {servicesByCategory(category.id).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={servicePath(service.slug)}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={`/services#${category.id}`} className="link-line mt-auto pt-6 text-primary">
                  View {category.label.toLowerCase()} <ArrowRight size={15} aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SiteSection>

      <SiteSection>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-4xl space-y-4">
            <p className="eyebrow">Popular services</p>
            <h2 className="section-title">Where most projects start.</h2>
          </div>
          <Link href="/services" className="link-line text-primary">
            All services <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </SiteSection>

      <SiteSection tone="muted">
        <SectionBlock
          eyebrow="Process transformation"
          title={<>Stop running the business on workarounds.</>}
          description={
            <>
              We map how work actually moves through your team, find where manual
              steps slow it down, and rebuild those processes as digital systems
              your people use every day.
            </>
          }
        >
          <article className="surface-card p-6 sm:p-8">
            <h3 className="eyebrow">What gets done</h3>
            <ul className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-sm leading-7 text-foreground">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-primary" aria-hidden />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <Link
              href={servicePath("technology-consulting-digital-transformation")}
              className="link-line mt-8 text-primary"
            >
              About digital transformation <ArrowRight size={15} aria-hidden />
            </Link>
          </article>
        </SectionBlock>
      </SiteSection>

      <SiteSection>
        <div className="max-w-4xl space-y-4">
          <p className="eyebrow">Clients</p>
          <h2 className="section-title">Businesses we&apos;ve worked with.</h2>
        </div>
        <ClientGrid className="mt-10" />
      </SiteSection>

      <SiteSection className="pt-0">
        <CtaBand
          title={<>If the business has traction, the systems need to catch up.</>}
          description={
            <>
              We&apos;ll review your current setup, map the breakpoints, and tell you
              what needs to change first.
            </>
          }
        />
      </SiteSection>
    </>
  );
}
