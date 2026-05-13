import type { Metadata } from "next";
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
import { PageHero, SectionBlock, SiteSection, StatRack } from "@/components/site/PageFrame";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how MukaroCore Enterprise approaches technology, commerce, and agriculture work through a disciplined operating model.",
  keywords: [
    "about MukaroCore",
    "MukaroCore team",
    "business systems company Ghana",
    "enterprise operating partner Africa",
    "MukaroCore mission",
  ],
  openGraph: {
    title: "About Us | MukaroCore Enterprise",
    description:
      "MukaroCore Enterprise bridges technology, commerce, and agriculture through disciplined operating work.",
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

const team = [
  {
    name: "Dr. Michael Mukaro",
    role: "Founder & CEO",
    bio: "Leads MukaroCore's multidisciplinary direction across technology systems, commerce operations, and business strategy.",
    initials: "MM",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Leads process digitisation engagements — mapping manual workflows, designing digital replacements, and integrating systems so client operations run without the usual bottlenecks.",
    initials: "SC",
  },
  {
    name: "James Okoye",
    role: "Head of Agri Intelligence",
    bio: "Bridges agronomic insight, field operations, and data products for agricultural clients.",
    initials: "JO",
  },
  {
    name: "Emily Wanjiru",
    role: "Commerce Operations Lead",
    bio: "Designs payment, invoicing, and reconciliation systems that reduce leakage in revenue operations.",
    initials: "EW",
  },
];

const pillars = [
  {
    code: "TECH",
    title: "Process digitisation and workflow optimisation",
    body: "We take manual, paper-based, and improvised workflows and rebuild them as clean digital systems — automating repetitive tasks and connecting tools so teams stop losing time to processes that don't scale.",
    points: ["Process digitisation", "Workflow automation", "Systems integration"],
  },
  {
    code: "COMM",
    title: "Payment and operating flow design",
    body: "We rebuild messy commercial handoffs so orders, payments, stock movement, and invoicing are connected instead of patched together.",
    points: ["Payment integration", "Inventory flow", "Revenue reporting"],
  },
  {
    code: "AGRI",
    title: "Agricultural intelligence and market links",
    body: "We develop tools and reporting structures that help agricultural operators connect field activity to planning and market access.",
    points: ["Precision data", "Market visibility", "Field analytics"],
  },
  {
    code: "HUB",
    title: "Public authority through verified insight",
    body: "GrowNovis turns internal insight into structured public material: research, briefings, news, and events.",
    points: ["Publishing", "Research", "Event programming"],
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
            MukaroCore is a multidisciplinary enterprise that helps teams across
            technology, commerce, and agriculture replace manual processes with
            clean digital systems — so operations run faster, leaner, and without
            the usual workarounds.
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
          <StatRack
            items={[
              { value: "4", label: "Operating domains" },
              { value: "3", label: "Service lanes" },
              { value: "24/7", label: "Support window" },
              { value: "Ghana", label: "Headquartered" },
            ]}
            columns={2}
          />
        }
      />

      <SiteSection tone="muted">
        <SectionBlock
          eyebrow="Mandate"
          title={<>Why the company exists.</>}
          description={
            <>
              We focus on the gap most firms neglect: taking how work actually happens
              and turning it into a digital system that runs reliably without constant
              manual effort.
            </>
          }
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="surface-card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-500/25 dark:bg-sky-500/15 dark:text-sky-300">
                <Target size={20} />
              </span>
              <h3 className="mt-6 text-4xl">Mission</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Give growing businesses the digital systems, process discipline,
                and operational clarity they need to scale — without the overhead
                of building everything in-house too early.
              </p>
            </article>

            <article className="surface-card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/25 dark:bg-emerald-500/15 dark:text-emerald-300">
                <Eye size={20} />
              </span>
              <h3 className="mt-6 text-4xl">Vision</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Become the partner businesses turn to when manual processes stop being
                enough — building digital systems that outlast the project and keep
                working as the business grows.
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
              MukaroCore's values are practical standards. They are less about slogans
              and more about whether the output can be trusted in the real world.
            </>
          }
        >
          <dl className="grid gap-4 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div key={value.title} className="surface-card p-6">
                  <Icon size={18} className="text-primary" />
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
          title={<>How the business is structured.</>}
          description={
            <>
              The company is organised into four connected parts so each domain supports
              the others instead of competing for attention.
            </>
          }
        >
          <div className="route-list">
            {pillars.map((pillar) => (
              <article key={pillar.code} className="grid gap-5 lg:grid-cols-[8rem_minmax(0,1fr)_20rem] lg:items-start">
                <div>
                  <p className="eyebrow text-primary">{pillar.code}</p>
                </div>
                <div>
                  <h3 className="text-3xl">{pillar.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
                <ul className="grid gap-2 text-sm text-foreground">
                  {pillar.points.map((point) => (
                    <li key={point} className="tag-pill justify-center lg:justify-start">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionBlock>
      </SiteSection>

      <SiteSection>
        <SectionBlock
          eyebrow="People"
          title={<>A small team with cross-functional range.</>}
          description={
            <>
              The team is designed for overlap. Technical, commercial, and field
              contexts need to speak to each other quickly for the work to stay coherent.
            </>
          }
        >
          <ol className="grid gap-4 lg:grid-cols-2">
            {team.map((member, index) => (
              <li key={member.name} className="surface-card p-6">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border bg-background/70 text-lg font-semibold text-primary">
                    {member.initials}
                  </div>
                  <div>
                    {/*<p className="eyebrow">0{index + 1}</p>*/}
                    <h3 className="mt-2 text-3xl">{member.name}</h3>
                    <p className="mt-1 text-sm text-primary">{member.role}</p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </SectionBlock>
      </SiteSection>

      <SiteSection className="pt-0">
        <article className="surface-card surface-card-strong p-8 lg:p-10">
          <p className="eyebrow !text-background/70">Philosophy</p>
          <blockquote className="mt-5 max-w-4xl text-5xl leading-none">
            Build the core, verify the truth, scale the growth.
          </blockquote>
          <p className="mt-6 max-w-3xl text-base leading-8 text-background/78">
            That line is useful because it is operational. Build what the business runs
            on, keep the information honest, and make growth repeatable instead of lucky.
          </p>
        </article>
      </SiteSection>
    </>
  );
}
