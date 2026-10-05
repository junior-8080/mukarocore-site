import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionBlock, SiteSection, StatRack } from "@/components/site/PageFrame";
import { ServiceCard } from "@/components/site/ServiceCard";
import { clients } from "@/lib/clients";
import { getService, serviceCategories, services, servicesByCategory, servicePath } from "@/lib/services";

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
      <PageHero
        eyebrow="MukaroCore Enterprise"
        title={<>Build the core that keeps business moving.</>}
        description={
          <>
            We design, build, and run the software and systems behind growing
            businesses, from first prototype to reliable daily operations.
          </>
        }
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Project <ArrowUpRight size={16} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                Explore Services <ArrowRight size={16} />
              </Link>
            </Button>
          </>
        }
        aside={
          <div className="media-frame aspect-[4/3] lg:aspect-[16/11]">
            <Image
              src="/images/hero-team-coding.webp"
              alt="Two developers reviewing code together on a laptop in a shared workspace"
              fill
              priority
              sizes="(min-width: 1024px) 38rem, 100vw"
              className="object-cover"
            />
            <span className="tag-pill absolute bottom-4 left-4 bg-card text-foreground shadow-soft">
              <MapPin size={14} className="text-primary" aria-hidden />
              Innovation Hub, Accra
            </span>
          </div>
        }
      />

      <SiteSection className="pt-0">
        <StatRack
          items={[
            { value: String(services.length), label: "Services" },
            { value: String(serviceCategories.length), label: "Practice areas" },
            { value: "24/7", label: "Support cadence" },
          ]}
          columns={3}
        />

        <p className="eyebrow mt-14">Clients we&apos;ve worked with</p>
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

      <SiteSection tone="muted">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">What we do</p>
          <h2 className="section-title max-w-[16ch]">Four practice areas. One technology partner.</h2>
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
          <div className="max-w-2xl space-y-4">
            <p className="eyebrow">Popular services</p>
            <h2 className="section-title max-w-[14ch]">Where most projects start.</h2>
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
            <p className="eyebrow">What gets done</p>
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
