import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  CreditCard,
  Database,
  Package,
  Server,
  Shield,
  ShoppingCart,
  Sprout,
  TrendingUp,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionBlock, SiteSection } from "@/components/site/PageFrame";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MukaroCore Enterprise digitises manual processes, optimises commerce flows, and builds agricultural insight for businesses operating across Africa.",
  keywords: [
    "process digitisation Africa",
    "workflow automation Ghana",
    "digital commerce systems Africa",
    "agri research publishing Africa",
    "business systems consulting Ghana",
    "MukaroCore services",
  ],
  openGraph: {
    title: "Services | MukaroCore Enterprise",
    description:
      "Three service lanes — technology, commerce, and agri — built to replace manual operations with clean digital systems that scale.",
    url: "https://www.mukarocore.com/services",
  },
};

const techServices = [
  {
    icon: Server,
    title: "Process Digitisation",
    description:
      "We replace paper-based, WhatsApp-chain, and spreadsheet workflows with structured digital systems your team can actually rely on.",
    features: ["Manual-to-digital mapping", "Form and record digitisation", "Workflow structuring", "Document management"],
  },
  {
    icon: Shield,
    title: "Workflow Automation",
    description:
      "Repetitive back-office tasks get automated so your team spends less time on admin and more time on work that moves the business.",
    features: ["Task automation", "Approval workflows", "Notification systems", "Scheduled reporting"],
  },
  {
    icon: Cloud,
    title: "Systems Integration",
    description:
      "Disconnected tools and siloed data get connected into a single operating layer your team works from rather than around.",
    features: ["API integrations", "Data sync across tools", "Cloud migration", "Legacy system upgrades"],
  },
  {
    icon: Database,
    title: "Operational Dashboards",
    description:
      "Real-time visibility into what your team is doing, how the work is moving, and where it's stalling — without manual reports.",
    features: ["Live operations view", "Custom KPI tracking", "Automated report generation", "Team performance data"],
  },
];

const commerceServices = [
  {
    icon: CreditCard,
    title: "Digital Payment Integration",
    description:
      "Payment rails that reduce reconciliation headaches and improve collection speed.",
    features: ["Mobile money APIs", "Card processing", "Payment gateways", "Transaction tracking"],
  },
  {
    icon: ShoppingCart,
    title: "Inventory Management",
    description:
      "Stock operations tied more closely to actual sales activity and fulfilment movement.",
    features: ["Live stock tracking", "Automated alerts", "Multi-location visibility", "Supplier management"],
  },
  {
    icon: Package,
    title: "Automated Invoicing",
    description:
      "Cleaner invoice creation, follow-up, and ledger updates without spreadsheet drift.",
    features: ["Invoice generation", "Digital receipts", "Reminder flows", "Financial records"],
  },
  {
    icon: TrendingUp,
    title: "Business Insights",
    description:
      "Performance reporting that operators can use, not just admire in a dashboard screenshot.",
    features: ["Sales analytics", "Customer patterns", "Performance KPIs", "Trend review"],
  },
];

const agriServices = [
  {
    icon: BarChart3,
    title: "Agri Article Analysis",
    description:
      "GrowNovis uses AI to analyse agricultural articles and surface the patterns, signals, and sector trends that matter for operators and decision-makers.",
    features: ["AI-powered article analysis", "Sector trend signals", "Research summaries", "Data-backed insights"],
  },
  {
    icon: Sprout,
    title: "AI Crop Advisory",
    description:
      "Personalised AI-generated crop guidance built on agronomic data — helping operators make better decisions about what to grow, when, and how.",
    features: ["Crop-specific guidance", "AI recommendations", "Agronomic data", "Actionable advisory"],
  },
  {
    icon: Wifi,
    title: "Daily Agronomic Tips",
    description:
      "A daily feed of AI-powered agronomic tips keeping operators and growers current on best practices, seasonal patterns, and field-level guidance.",
    features: ["Daily AI tips", "Agronomic best practices", "Seasonal guidance", "Field-ready advice"],
  },
];

const deliveryPhases = [
  "Diagnostic and process mapping",
  "System design and rollout",
  "Team enablement and support",
];

const laneLinks = [
  { label: "Tech", href: "#tech" },
  { label: "Commerce", href: "#commerce" },
  { label: "Agri", href: "#agri" },
];

function ServiceEntry({
  service,
  tone,
}: {
  service: (typeof techServices)[number];
  tone: "tech" | "commerce" | "agri";
}) {
  const Icon = service.icon;

  const theme = {
    tech: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/15 dark:text-sky-300 dark:border-sky-500/25",
    commerce:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/25",
    agri: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/25",
  }[tone];

  return (
    <article className="surface-card p-6">
      <div className="flex items-start justify-between gap-4">
        <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl border", theme)}>
          <Icon size={20} />
        </span>
        <span className="tag-pill">{tone}</span>
      </div>
      <h3 className="mt-6 text-3xl">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
      <ul className="ledger-list mt-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-foreground">
            <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Three lanes. One operating layer.</>}
        description={
          <>
            Whether the problem is manual processes slowing the team down, revenue
            leaking between delivery and payment, or agricultural insight that never
            reaches the right audience — each lane is built to fix a specific part
            of how the business operates.
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
            <div className="route-list">
              {laneLinks.map((lane, index) => (
                <Link key={lane.href} href={lane.href} className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                  <span className="ml-auto text-xl">{lane.label}</span>
                </Link>
              ))}
            </div>
            <article className="surface-card p-6">
              <p className="eyebrow">Delivery rhythm</p>
              <ol className="ledger-list mt-5 text-sm text-muted-foreground">
                {deliveryPhases.map((phase, index) => (
                  <li key={phase} className="flex items-start justify-between gap-4">
                    <span>{phase}</span>
                    <span className="text-primary">0{index + 1}</span>
                  </li>
                ))}
              </ol>
            </article>
          </>
        }
      />

      <SiteSection tone="muted">
        <div id="tech">
          <SectionBlock
            eyebrow="Tech lane"
            title={<>Turn manual processes into systems that scale.</>}
            description={
              <>
                This lane is for teams still running operations on spreadsheets,
                WhatsApp threads, and paper trails — we digitise the process,
                automate the repetition, and connect the tools so work flows cleanly.
              </>
            }
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {techServices.map((service) => (
                <ServiceEntry key={service.title} service={service} tone="tech" />
              ))}
            </div>
          </SectionBlock>
        </div>
      </SiteSection>

      <SiteSection>
        <div id="commerce">
          <SectionBlock
            eyebrow="Commerce lane"
            title={<>Close the gap between delivery and collected revenue.</>}
            description={
              <>
                For businesses where orders go out, work gets done, but the money
                trail is slow, messy, or invisible — we digitise the payment,
                invoicing, and inventory flows so cash stops stalling.
              </>
            }
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {commerceServices.map((service) => (
                <ServiceEntry key={service.title} service={service} tone="commerce" />
              ))}
            </div>
          </SectionBlock>
        </div>
      </SiteSection>

      <SiteSection tone="muted">
        <div id="agri">
          <SectionBlock
            eyebrow="GrowNovis"
            title={<>Agriculture is data. We're making it visible.</>}
            description={
              <>
                GrowNovis is a MukaroCore product that uses AI to bring intelligence
                into everyday agricultural decisions — surfacing patterns from sector
                articles, advising on crop decisions, and delivering daily agronomic
                guidance to operators in the field.
              </>
            }
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {agriServices.map((service) => (
                <ServiceEntry key={service.title} service={service} tone="agri" />
              ))}
            </div>
          </SectionBlock>
        </div>
      </SiteSection>

      <SiteSection className="pt-0">
        <article className="surface-card p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="eyebrow">Fit check</p>
              <h2 className="mt-4 max-w-[12ch] text-5xl leading-none">
                If the business has traction, the manual processes are already a bottleneck.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                We map where the friction is, identify which processes to digitise first,
                and sequence the work so each fix builds on the last.
              </p>
            </div>

            <Button asChild size="lg">
              <Link href="/contact">
                Request a service review <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
        </article>
      </SiteSection>
    </>
  );
}
