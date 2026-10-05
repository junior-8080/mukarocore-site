import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Shield,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientGrid } from "@/components/site/ClientGrid";
import { ContactForm } from "@/components/site/ContactForm";
import { SectionBlock, SiteSection } from "@/components/site/PageFrame";
import { ServiceCard } from "@/components/site/ServiceCard";
import { deliveryPhases, getService, serviceCategories, servicesByCategory } from "@/lib/services";

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

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "info@mukarocore.com",
    href: "mailto:info@mukarocore.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+233) 545543359",
    href: "tel:+233545543359",
  },
  {
    icon: Phone,
    label: "Phone (alternative)",
    value: "(+233) 541878730",
    href: "tel:+233541878730",
  },
];

export default function HomePage() {
  return (
    <>
      <section id="top" className="hero-banner">
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
                <Link href="#contact">
                  Start a Project <ArrowUpRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ink-foreground/40 bg-transparent text-ink-foreground hover:bg-ink-foreground/15 hover:text-ink-foreground"
              >
                <Link href="#services">
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

      <SiteSection id="services" tone="muted" className="scroll-mt-16">
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
            <article
              key={category.id}
              id={category.id}
              className="surface-card flex scroll-mt-24 flex-col"
            >
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
                <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                  {servicesByCategory(category.id).map((service) => (
                    <li key={service.slug}>{service.title}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </SiteSection>

      <SiteSection>
        <div className="max-w-4xl space-y-4">
          <p className="eyebrow">Popular services</p>
          <h2 className="section-title">Where most projects start.</h2>
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
            <Link href="#contact" className="link-line mt-8 text-primary">
              Talk to us about your workflows <ArrowRight size={15} aria-hidden />
            </Link>
          </article>
        </SectionBlock>
      </SiteSection>

      <SiteSection id="about" className="scroll-mt-16">
        <SectionBlock
          eyebrow="About MukaroCore"
          title={<>We digitise the way businesses actually work.</>}
          description={
            <>
              MukaroCore is a technology services company based at Innovation Hub,
              Accra. We help businesses replace manual processes with clean digital
              systems that run faster and leaner.
            </>
          }
        >
          {/* TODO: replace with a real MukaroCore team or office photo when available. */}
          <div className="media-frame aspect-[16/9]">
            <Image
              src="/images/about-team.webp"
              alt="Team members in a working session around a conference table"
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover"
            />
          </div>
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

      <SiteSection tone="muted">
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

      <SiteSection>
        <div className="max-w-4xl space-y-4">
          <p className="eyebrow">Clients</p>
          <h2 className="section-title">Businesses we&apos;ve worked with.</h2>
        </div>
        <ClientGrid className="mt-10" />
      </SiteSection>

      <SiteSection id="contact" tone="muted" className="scroll-mt-16">
        <SectionBlock
          eyebrow="Contact"
          title={<>Bring the problem in plain language.</>}
          description={
            <>
              Tell us what the team is trying to achieve, which manual processes are
              slowing things down, and where the biggest friction sits right now.
              We&apos;ll map the system behind it and tell you where to start.
            </>
          }
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_21rem]">
            <ContactForm />

            <aside className="grid content-start gap-4">
              <div className="route-list">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;

                  return (
                    <a key={channel.label} href={channel.href} className="group">
                      <div className="flex items-start gap-4">
                        <Icon size={18} className="mt-1 shrink-0 text-primary" aria-hidden />
                        <div>
                          <p className="eyebrow">{channel.label}</p>
                          <p className="mt-2 text-base text-foreground [overflow-wrap:anywhere] group-hover:text-primary">
                            {channel.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <article className="surface-card p-6">
                <p className="eyebrow">Response time</p>
                <p className="mt-4 text-base leading-8 text-foreground">
                  Most initial replies go out within 24 hours.
                </p>
              </article>

              <article className="surface-card p-6">
                <h3 className="eyebrow">How we deliver</h3>
                <ol className="ledger-list mt-5 text-sm text-muted-foreground">
                  {deliveryPhases.map((phase, index) => (
                    <li key={phase.title} className="flex items-start justify-between gap-4">
                      <span>{phase.title}</span>
                      <span className="text-primary">0{index + 1}</span>
                    </li>
                  ))}
                </ol>
              </article>
            </aside>
          </div>
        </SectionBlock>
      </SiteSection>
    </>
  );
}
