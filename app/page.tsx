import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  CheckCircle2,
  Coins,
  Cpu,
  Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionBlock, SiteSection, StatRack } from "@/components/site/PageFrame";

export const metadata: Metadata = {
  title: "MukaroCore Enterprise | Tech, Commerce & Agriculture Solutions",
  description:
    "MukaroCore Enterprise designs the operating layer behind technology, commerce, and agriculture for businesses building across Africa.",
  openGraph: {
    title: "MukaroCore Enterprise | Tech, Commerce & Agriculture Solutions",
    description:
      "Technology, commerce, and agriculture systems for businesses that need clear operations, verified insight, and durable growth.",
    url: "https://www.mukarocore.com",
  },
};

const routes = [
  {
    id: "01",
    title: "Tech systems",
    summary: "Managed infrastructure, cloud, security, and day-to-day support.",
    href: "/services#tech",
  },
  {
    id: "02",
    title: "Commerce flows",
    summary: "Payments, inventory, invoicing, and operational reporting.",
    href: "/services#commerce",
  },
  // {
  //   id: "03",
  //   title: "Agri intelligence",
  //   summary: "Precision farming data, market links, and field analytics.",
  //   href: "/services#agri",
  // },
  {
    id: "03",
    title: "Agro hub",
    summary: "Research, verified briefs, events, and public authority-building.",
    href: "/knowledge-hub",
  },
];

const operatingModel = [
  {
    step: "01",
    title: "Audit the friction",
    body: "We map the points where money, data, or execution get stuck and quantify what the delays cost.",
  },
  {
    step: "02",
    title: "Rebuild the path",
    body: "Then we connect the tools, people, and reporting lines into one working sequence your team can keep.",
  },
  {
    step: "03",
    title: "Prove the gain",
    body: "Every rollout ends with measurable movement: fewer errors, faster cash collection, and cleaner visibility.",
  },
];

const pillars = [
  {
    icon: Cpu,
    title: "Technology",
    // Replace with a real photo — server room, cloud infrastructure, or IT operations
    image: "/tech.jpg",
    imageAlt: "Technology infrastructure and systems",
    summary: "Infrastructure, uptime, security, and systems support for businesses that cannot afford duct tape operations.",
    points: ["Managed IT", "Cloud migrations", "Security hardening"],
    href: "/services#tech",
    span: "lg:col-span-3",
  },
  {
    icon: Coins,
    title: "Commerce",
    // Replace with a real photo — payments, digital commerce, or business operations
    image: "/commerce.jpg",
    imageAlt: "Commerce and payment operations",
    summary: "Payment and inventory operations designed to close the gap between service delivery and collected revenue.",
    points: ["Digital payments", "Inventory control", "Automated invoicing"],
    href: "/services#commerce",
    span: "lg:col-span-3",
  },
  {
    icon: BookOpenText,
    title: "Agro Hub",
    // Replace with a real photo — research, library, or professional reading
    image: "/agro.jpg",
    imageAlt: "Research and knowledge publishing",
    summary: "A publishing arm that turns internal insight into verified public material your market can reference.",
    points: ["Research briefs", "Industry news", "Events and submissions","Fund Raising For Agric Project"],
    href: "/knowledge-hub",
    span: "lg:col-span-4",
  },
];

const revenueStats = [
  { value: "+85%", label: "Revenue efficiency" },
  { value: "-62%", label: "Manual errors" },
  { value: "3x", label: "Faster reconciliation" },
  { value: "<2 wks", label: "Implementation window" },
];

const revenuePlays = [
  "Digital payment migration for service businesses",
  "Automated ledgers and invoice follow-up",
  "Inventory control tied to order movement",
  "WhatsApp-ready workflows for the frontline team",
  "Revenue reporting your operators can actually read",
  "Security and access rules for every handoff",
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="MukaroCore Enterprise"
        title={<>Build the core that keeps business moving.</>}
        description={
          <>
            MukaroCore works on the unglamorous layer that matters most: the systems,
            payment rails, and operating logic underneath growing businesses. We build
            for teams that need clarity, not decorative dashboards.
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
          <>
            <div className="route-list">
              {routes.map((route) => (
                <Link key={route.id} href={route.href} className="group">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-semibold text-primary">{route.id}</span>
                    <ArrowRight
                      size={16}
                      className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground"
                    />
                  </div>
                  <h2 className="mt-3 text-2xl">{route.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{route.summary}</p>
                </Link>
              ))}
            </div>

            {/* Replace src with a real hero photo — team, office, or operations */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src="/banner.jpg"
                alt="MukaroCore Enterprise — business operations"
                fill
                className="object-cover"
                priority
              />
            </div>
          </>
        }
      />

      <SiteSection className="pt-0">
        <StatRack
          items={[
            { value: "3", label: "Service lanes" },
            { value: "<2 wks", label: "Onboarding window" },
            { value: "24/7", label: "Support cadence" },
            { value: "100%", label: "Delivery commitment" },
          ]}
        />
      </SiteSection>

      {/*<SiteSection tone="muted">*/}
      {/*  <SectionBlock*/}
      {/*    eyebrow="Operating model"*/}
      {/*    title={<>A practical method, not a moodboard.</>}*/}
      {/*    description={*/}
      {/*      <>*/}
      {/*        The work starts with friction mapping and ends with measurable operating*/}
      {/*        gains. We keep the process visible so teams know what changed, why it*/}
      {/*        changed, and how to maintain it after launch.*/}
      {/*      </>*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <ol className="grid gap-4 md:grid-cols-2">*/}
      {/*      {operatingModel.map((item) => (*/}
      {/*        <li key={item.step} className="surface-card p-6">*/}
      {/*          <p className="eyebrow text-primary">{item.step}</p>*/}
      {/*          <h3 className="mt-4 text-3xl">{item.title}</h3>*/}
      {/*          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ol>*/}
      {/*  </SectionBlock>*/}
      {/*</SiteSection>*/}

      <SiteSection tone="muted">
        <SectionBlock
          eyebrow="Capabilities map"
          title={<>Four lanes. One operating layer.</>}
          description={
            <>
              Each MukaroCore lane solves a different part of the same problem:
              helping businesses move from improvised processes to dependable systems.
            </>
          }
        >
          <div className="grid gap-4 lg:grid-cols-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article key={pillar.title} className={`surface-card overflow-hidden ${pillar.span}`}>
                  <div className="relative h-44 w-full">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/70 text-primary">
                        <Icon size={20} />
                      </span>
                      <Link href={pillar.href} className="link-line text-sm">
                        View lane <ArrowRight size={15} />
                      </Link>
                    </div>
                    <h3 className="mt-6 text-4xl">{pillar.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {pillar.summary}
                    </p>
                    <ul className="mt-6 grid gap-3">
                      {pillar.points.map((point) => (
                        <li key={point} className="tag-pill justify-center sm:justify-start">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </SectionBlock>
      </SiteSection>

      <SiteSection tone="muted">
        <SectionBlock
          eyebrow="Revenue recovery"
          title={<>Recover money from the gaps between delivery and payment.</>}
          description={
            <>
              Our flagship package focuses on the most common leak in small and
              mid-sized teams: work gets done, but the revenue trail is messy,
              delayed, or invisible.
            </>
          }
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
            <article className="surface-card surface-card-strong p-8 lg:p-10">
              <p className="eyebrow !text-background/70">Flagship package</p>
              <h3 className="mt-5 max-w-[11ch] text-5xl leading-none">
                Revenue recovery with operational proof.
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-background/78">
                We redesign how payments, inventory, invoicing, and frontline follow-up
                work together so cash stops stalling between departments.
              </p>
              {/*<StatRack items={revenueStats} columns={4} inverted className="mt-8" />*/}
            </article>

            <aside className="surface-card p-6">
              <p className="eyebrow">What ships inside</p>
              <ul className="ledger-list mt-6">
                {revenuePlays.map((play) => (
                  <li key={play} className="flex items-start gap-3 text-sm leading-7 text-foreground">
                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" />
                    <span>{play}</span>
                  </li>
                ))}
              </ul>
              {/*<Button asChild size="lg" className="mt-8 w-full">*/}
              {/*  <Link href="/contact">*/}
              {/*    Request the audit <ArrowUpRight size={16} />*/}
              {/*  </Link>*/}
              {/*</Button>*/}
            </aside>
          </div>
        </SectionBlock>
      </SiteSection>

      <SiteSection className="pt-0">
        <article className="surface-card overflow-hidden">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_26rem]">
            <div className="p-8 lg:p-10">
              <p className="eyebrow">Next move</p>
              <h2 className="mt-4 max-w-[12ch] text-5xl leading-none">
                If the business has traction, the systems need to catch up.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                We can review the current stack, map the breakpoints, and tell you what
                needs to change first.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a consultation <ArrowUpRight size={16} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/knowledge-hub">
                    Read the research <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
            {/* Replace src with a real photo — team meeting, workspace, or consultation */}
            <div className="relative hidden min-h-64 lg:block">
              <Image
                src="/business.jpg"
                alt="MukaroCore consultation and working session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </article>
      </SiteSection>
    </>
  );
}
