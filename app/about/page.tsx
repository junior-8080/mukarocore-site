import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  Lightbulb,
  Shield,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, SectionBlock, SiteSection, StatRack } from "@/components/site/PageFrame";
import { serviceCategories, servicesByCategory, servicePath } from "@/lib/services";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MukaroCore Enterprise is a technology services company at Innovation Hub, Accra, building software and systems for growing businesses across Africa.",
  keywords: [
    "about MukaroCore",
    "MukaroCore team",
    "software company Accra",
    "technology services company Ghana",
    "MukaroCore mission",
  ],
  alternates: { canonical: "/about" },
  twitter: {
    title: "About Us | MukaroCore Enterprise",
    description: "A technology services company in Accra, Ghana.",
  },
  openGraph: {
    title: "About Us | MukaroCore Enterprise",
    description:
      "A technology services company in Accra, Ghana, building and running the systems growing businesses depend on.",
    url: "https://www.mukarocore.com/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Work should be clean enough to hand over, audit, and extend without heroics.",
  },
  {
    icon: Shield,
    title: "Stability",
    description:
      "A system is only good if teams can trust it under pressure and keep it running afterward.",
  },
  {
    icon: Lightbulb,
    title: "Truth",
    description:
      "Operational decisions get better when the reporting is honest and the information is verifiable.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MukaroCore"
        title={<>We digitise the way businesses actually work.</>}
        description={
          <>
            MukaroCore is a technology services company based at Innovation Hub,
            Accra. We help businesses replace manual processes with clean digital
            systems that run faster and leaner.
          </>
        }
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/contact">
                Talk with the team <ArrowUpRight size={16} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                Review our services <ArrowRight size={16} />
              </Link>
            </Button>
          </>
        }
        aside={
          <>
            {/* TODO: replace with a real MukaroCore team or office photo when available. */}
            <div className="media-frame aspect-[4/3]">
              <Image
                src="/images/about-team.webp"
                alt="Team members in a working session around a conference table"
                fill
                priority
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="object-cover"
              />
            </div>
            <StatRack
            items={[
              { value: String(serviceCategories.length), label: "Practice areas" },
              { value: "24h", label: "First reply" },
            ]}
              columns={2}
            />
          </>
        }
      />

      <SiteSection tone="muted">
        <SectionBlock
          eyebrow="Mandate"
          title={<>Why the company exists.</>}
          description={
            <>
              Most firms skip the hard part: turning how work really happens into
              a system that runs without constant manual effort. That is our focus.
            </>
          }
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="surface-card p-6">
              <span className="icon-chip">
                <Target size={20} aria-hidden />
              </span>
              <h3 className="mt-5 text-3xl">Mission</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Give growing businesses the systems, process discipline, and
                clarity they need to scale, without building everything in-house
                too early.
              </p>
            </article>
            <article className="surface-card p-6">
              <span className="icon-chip" data-tone="accent">
                <Eye size={20} aria-hidden />
              </span>
              <h3 className="mt-5 text-3xl">Vision</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Be the partner businesses call when manual processes stop being
                enough, and build systems that outlast the project.
              </p>
            </article>
          </div>
        </SectionBlock>
      </SiteSection>

      <SiteSection>
        <SectionBlock
          eyebrow="Values"
          title={<>The rules we use to judge the work.</>}
          description={
            <>
              Practical standards, not slogans. The test is whether the output
              can be trusted in the real world.
            </>
          }
        >
          <dl className="grid gap-4 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div key={value.title} className="surface-card p-6">
                  <span className="icon-chip">
                    <Icon size={20} aria-hidden />
                  </span>
                  <dt className="mt-5 text-3xl">{value.title}</dt>
                  <dd className="mt-3 text-sm leading-7 text-muted-foreground">
                    {value.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </SectionBlock>
      </SiteSection>

      <SiteSection tone="muted">
        <SectionBlock
          eyebrow="Operating map"
          title={<>How the work is organised.</>}
          description={
            <>
              Four connected practice areas, so building, running, and scaling
              your systems happen with one team.
            </>
          }
        >
          <div className="route-list">
            {serviceCategories.map((category) => (
              <article
                key={category.id}
                className="grid gap-4 !p-6 lg:grid-cols-[8rem_minmax(0,1fr)] lg:items-start"
              >
                <p className="eyebrow text-primary">{category.label}</p>
                <div>
                  <h3 className="text-2xl leading-tight">{category.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {servicesByCategory(category.id).map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={servicePath(service.slug)}
                          className="tag-pill !text-xs !normal-case !tracking-normal hover:text-primary"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </SectionBlock>
      </SiteSection>

      <SiteSection>
        <figure className="mx-auto max-w-4xl border-l-4 border-primary pl-6 sm:pl-10">
          <p className="eyebrow">Philosophy</p>
          <blockquote className="font-display mt-5 text-4xl leading-tight sm:text-5xl">
            Build the core, verify the truth, scale the growth.
          </blockquote>
          <figcaption className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            Build what the business runs on, keep the information honest, and make
            growth repeatable instead of lucky.
          </figcaption>
        </figure>
      </SiteSection>

      <SiteSection className="pt-0">
        <CtaBand
          title={<>Have a process that needs fixing?</>}
          description={
            <>
              Walk us through it. We&apos;ll show you what a better system looks like
              and how to get there.
            </>
          }
          actionLabel="Talk with the team"
        />
      </SiteSection>
    </>
  );
}
