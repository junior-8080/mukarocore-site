import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionBlock, SiteSection } from "@/components/site/PageFrame";
import { ServiceCard } from "@/components/site/ServiceCard";
import {
  deliveryPhases,
  getCategory,
  getService,
  services,
  servicesByCategory,
} from "@/lib/services";
import { siteUrl } from "@/lib/brand";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | MukaroCore Enterprise`,
      description: service.summary,
      url: `${siteUrl}/services/${service.slug}`,
    },
    twitter: {
      title: `${service.title} | MukaroCore Enterprise`,
      description: service.summary,
      images: [`/services/${service.slug}/opengraph-image`],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const category = getCategory(service.category);
  const related = servicesByCategory(service.category).filter((item) => item.slug !== service.slug);
  const Icon = service.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    url: `${siteUrl}/services/${service.slug}`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: ["Ghana", "Africa"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} deliverables`,
      itemListElement: service.deliverables.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={`Services · ${category.label}`}
        title={<span className="block max-w-[14ch] text-[0.72em]">{service.title}</span>}
        description={
          <>
            <p>{service.summary}</p>
            <p className="mt-4 text-foreground">{service.fit}</p>
          </>
        }
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact">
                Discuss your project <ArrowUpRight size={16} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`/services#${category.id}`}>
                <ArrowLeft size={16} /> All {category.label.toLowerCase()} services
              </Link>
            </Button>
          </>
        }
        aside={
          <div className="media-frame aspect-[4/3]">
            <Image
              src={category.image}
              alt={category.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
            <span className="icon-chip absolute bottom-4 left-4 shadow-soft">
              <Icon size={22} aria-hidden />
            </span>
          </div>
        }
      />

      <SiteSection tone="muted">
        <SectionBlock
          eyebrow="What you get"
          title={<>Key deliverables.</>}
          description={<>Every engagement is scoped to your business. These are the core pieces.</>}
        >
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <li key={item} className="surface-card flex items-start gap-3 p-5">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                <span className="text-base text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </SectionBlock>
      </SiteSection>

      <SiteSection>
        <SectionBlock
          eyebrow="How we deliver"
          title={<>Three steps, no surprises.</>}
          description={<>The same rhythm runs through every MukaroCore project.</>}
        >
          <ol className="grid gap-4 md:grid-cols-3">
            {deliveryPhases.map((phase, index) => (
              <li key={phase.title} className="surface-card p-6">
                <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                <h3 className="mt-3 text-2xl leading-tight">{phase.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{phase.description}</p>
              </li>
            ))}
          </ol>
        </SectionBlock>
      </SiteSection>

      {related.length > 0 ? (
        <SiteSection tone="muted">
          <h2 className="eyebrow">More {category.label.toLowerCase()} services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </SiteSection>
      ) : null}

      <SiteSection>
        <CtaBand
          eyebrow={service.title}
          title={<>Let&apos;s scope your project.</>}
          description={
            <>
              Share what you&apos;re working with today. We&apos;ll come back with a clear
              recommendation and next steps.
            </>
          }
        />
      </SiteSection>
    </>
  );
}
