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
  MapPin,
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
    "MukaroCore Enterprise provides structured services across technology, commerce, and agri-intelligence for businesses building across Africa.",
  keywords: [
    "managed IT services Ghana",
    "digital commerce systems Africa",
    "agri-tech services Africa",
    "cloud infrastructure Ghana",
    "payment operations consulting",
    "MukaroCore services",
  ],
  openGraph: {
    title: "Services | MukaroCore Enterprise",
    description:
      "Technology, commerce, and agriculture services built as clear operating lanes rather than disconnected one-off projects.",
    url: "https://www.mukarocore.com/services",
  },
};

const techServices = [
  {
    icon: Server,
    title: "Managed IT Services",
    description:
      "Infrastructure management without the cost and coordination burden of a full internal IT department.",
    features: ["24/7 system monitoring", "Network administration", "Device and hardware support", "Patch management"],
  },
  {
    icon: Shield,
    title: "Digital Security",
    description:
      "Operational security controls designed to reduce risk without making routine work harder.",
    features: ["Threat detection", "Access control", "Security audits", "Compliance support"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud architecture for teams moving away from fragile local setups.",
    features: ["Cloud migration", "Backup strategy", "Disaster recovery", "Cost optimisation"],
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Data flows and reporting structures that make operational decisions easier to defend.",
    features: ["Database design", "Analytics pipelines", "Report generation", "System integration"],
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
    icon: Sprout,
    title: "Precision Agriculture",
    description:
      "Field data and agronomic signals that help operators plan with more confidence.",
    features: ["Crop monitoring", "Weather integrations", "Soil intelligence", "Yield forecasting"],
  },
  {
    icon: MapPin,
    title: "Digital Market Links",
    description:
      "Stronger connections between producers, buyers, and pricing signals in the market.",
    features: ["Market pricing", "Buyer networks", "Order management", "Logistics coordination"],
  },
  {
    icon: BarChart3,
    title: "Farm Analytics",
    description:
      "Production, cost, and season planning data packaged for real operational use.",
    features: ["Production tracking", "Cost analysis", "ROI review", "Season planning"],
  },
  {
    icon: Wifi,
    title: "IoT Farm Solutions",
    description:
      "Connected monitoring and automation for farms that need better visibility between visits.",
    features: ["Sensor networks", "Automated irrigation", "Remote alerts", "Monitoring dashboards"],
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
        title={<>Clear lanes for complex operational work.</>}
        description={
          <>
            We organise the work into three service lanes so you can see exactly where
            the operational problem sits and which systems need to change first.
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
            title={<>The systems that hold the business together.</>}
            description={
              <>
                This lane covers the infrastructure, security, and data foundations
                teams usually postpone until the cracks start affecting revenue.
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
            title={<>Payment operations built to collect what the team delivers.</>}
            description={
              <>
                For businesses losing time or money between orders, service delivery,
                invoicing, and actual cash collection.
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
            eyebrow="Agri lane"
            title={<>Field intelligence that travels back into business decisions.</>}
            description={
              <>
                This lane supports agricultural operators who need stronger links
                between field data, market access, and planning decisions.
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
                If the business is growing, one of these lanes is already under strain.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                We can tell you where to start, what to postpone, and how to sequence
                the fixes so the work compounds instead of colliding.
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
