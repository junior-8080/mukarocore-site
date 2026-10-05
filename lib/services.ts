import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Cloud,
  Code2,
  Compass,
  CreditCard,
  FlaskConical,
  GitBranch,
  LifeBuoy,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export type ServiceCategoryId = "build" | "operate" | "scale" | "commerce";

export type ServiceCategory = {
  id: ServiceCategoryId;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategoryId;
  icon: LucideIcon;
  summary: string;
  fit: string;
  deliverables: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "build",
    label: "Build",
    title: "Software built around how your business works.",
    description:
      "Web platforms, mobile apps, back-end systems, and AI features, designed for your workflows rather than bent around a template.",
    image: "/images/build-developer.webp",
    imageAlt: "Developer reviewing work on a laptop at a desk",
  },
  {
    id: "operate",
    label: "Operate",
    title: "Keep systems running, tested, and shipping safely.",
    description:
      "Release pipelines, cloud hosting, testing, and ongoing support, so the software you depend on stays reliable after launch.",
    image: "/images/operate-team.webp",
    imageAlt: "Three colleagues working together at a table with laptops",
  },
  {
    id: "scale",
    label: "Scale",
    title: "Connect, secure, and measure the whole operation.",
    description:
      "Integrations, automation, data, security, and strategy for teams that have outgrown manual processes and disconnected tools.",
    image: "/images/scale-team-meeting.webp",
    imageAlt: "Team meeting around a long table with laptops in a bright office",
  },
  {
    id: "commerce",
    label: "Commerce",
    title: "Get paid, track stock, and bill without the paperwork.",
    description:
      "Payment, inventory, and invoicing systems that close the gap between delivering the work and collecting the revenue.",
    image: "/images/commerce-shop-owner.webp",
    imageAlt: "Shop owner smiling behind the counter of her store",
  },
];

export const services: Service[] = [
  {
    slug: "custom-software-web-development",
    title: "Custom Software & Web Development",
    category: "build",
    icon: Code2,
    summary:
      "Web applications, portals, and internal tools built around your processes. We replace spreadsheets and paper trails with software your team actually uses.",
    fit: "A good fit when off-the-shelf tools force your team into workarounds.",
    deliverables: [
      "Requirements and process mapping",
      "User experience and interface design",
      "Responsive web applications and portals",
      "Internal tools and admin dashboards",
      "Documentation and handover",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "build",
    icon: Smartphone,
    summary:
      "Mobile apps for customers, field teams, and staff. Built to work on everyday devices and patchy connections.",
    fit: "A good fit when your customers or staff do most of their work on a phone.",
    deliverables: [
      "Cross-platform and native app builds",
      "Offline-friendly data sync",
      "Push notifications and in-app messaging",
      "App store preparation and release",
    ],
  },
  {
    slug: "backend-api-development",
    title: "Backend & API Development",
    category: "build",
    icon: Server,
    summary:
      "Scalable server-side systems, APIs, and database design. The foundation your web, mobile, and partner integrations run on.",
    fit: "A good fit when your product needs a dependable core that other systems can build on.",
    deliverables: [
      "API design and documentation",
      "Database modelling and migrations",
      "Authentication and access control",
      "Background jobs and event processing",
      "Performance tuning for growth",
    ],
  },
  {
    slug: "ai-integration-automation",
    title: "AI Integration & Automation",
    category: "build",
    icon: Bot,
    summary:
      "Practical AI features for everyday business work: assistants, chatbots, and document processing that save your team real time.",
    fit: "A good fit when your team spends hours reading, sorting, or answering the same things.",
    deliverables: [
      "Customer and internal chat assistants",
      "Document extraction and classification",
      "AI-assisted search across company knowledge",
      "Workflow automation with human review steps",
    ],
  },
  {
    slug: "devops-ci-cd",
    title: "DevOps & CI/CD",
    category: "operate",
    icon: GitBranch,
    summary:
      "Automated pipelines that build, test, and release your software safely. Ship more often with fewer surprises.",
    fit: "A good fit when releases are manual, slow, or nerve-wracking.",
    deliverables: [
      "Continuous integration and delivery pipelines",
      "Containerisation of applications",
      "Infrastructure as code",
      "Release automation and rollback plans",
      "Environment setup for development, staging, and production",
    ],
  },
  {
    slug: "cloud-infrastructure-hosting",
    title: "Cloud Infrastructure & Hosting",
    category: "operate",
    icon: Cloud,
    summary:
      "Cloud setup, migration, and day-to-day hosting. Your systems stay fast, available, and within budget.",
    fit: "A good fit when hosting costs are unclear or downtime keeps catching you off guard.",
    deliverables: [
      "Cloud architecture and setup",
      "Migration from legacy or on-premise servers",
      "Cost review and optimisation",
      "Monitoring, alerting, and backups",
    ],
  },
  {
    slug: "qa-software-testing",
    title: "QA & Software Testing",
    category: "operate",
    icon: FlaskConical,
    summary:
      "Manual and automated testing that catches problems before your users do, covering features, APIs, performance, and regressions.",
    fit: "A good fit when bugs reach customers or every release needs a round of manual checks.",
    deliverables: [
      "Test strategy and test case design",
      "Manual and exploratory testing",
      "Automated regression suites",
      "API and integration testing",
      "Performance and load testing",
    ],
  },
  {
    slug: "maintenance-support-managed-services",
    title: "Maintenance, Support & Managed Services",
    category: "operate",
    icon: LifeBuoy,
    summary:
      "Ongoing care for the systems you rely on: updates, fixes, monitoring, and a team to call when something breaks.",
    fit: "A good fit when you have critical software but no in-house team to look after it.",
    deliverables: [
      "Bug fixes and minor enhancements",
      "Security patches and dependency updates",
      "Uptime monitoring and incident response",
      "Helpdesk support for your staff",
    ],
  },
  {
    slug: "systems-integration-automation",
    title: "Systems Integration & Automation",
    category: "scale",
    icon: Workflow,
    summary:
      "Connect the tools your business already uses and automate the repetitive work between them, so data moves without copy and paste.",
    fit: "A good fit when your team re-types the same information into several systems.",
    deliverables: [
      "Integrations between business applications",
      "Workflow and approval automation",
      "Data sync across tools",
      "Notifications and scheduled reporting",
      "Legacy system upgrades",
    ],
  },
  {
    slug: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
    category: "scale",
    icon: BarChart3,
    summary:
      "Data pipelines, dashboards, and reports that show what is happening in the business without anyone compiling spreadsheets by hand.",
    fit: "A good fit when decisions wait on reports someone has to build manually.",
    deliverables: [
      "Data pipelines from your existing systems",
      "Central reporting data store",
      "Live operational dashboards",
      "Automated reports and KPI tracking",
    ],
  },
  {
    slug: "cybersecurity-security-audits",
    title: "Cybersecurity & Security Audits",
    category: "scale",
    icon: ShieldCheck,
    summary:
      "Find and fix weaknesses in your applications, infrastructure, and access controls before someone else finds them.",
    fit: "A good fit when you handle customer data or payments and have never had a security review.",
    deliverables: [
      "Application and infrastructure security reviews",
      "Vulnerability assessment and remediation plan",
      "Access control and account hygiene review",
      "Backup and recovery checks",
      "Security awareness guidance for staff",
    ],
  },
  {
    slug: "technology-consulting-digital-transformation",
    title: "Technology Consulting & Digital Transformation",
    category: "scale",
    icon: Compass,
    summary:
      "We map how work moves through your business, find where manual steps slow it down, and plan the right sequence of systems to fix it.",
    fit: "A good fit when you know things need to change but not where to start.",
    deliverables: [
      "Process mapping and digitisation plan",
      "Technology and vendor assessment",
      "Prioritised transformation roadmap",
      "Team enablement and change support",
    ],
  },
  {
    slug: "payments-inventory-invoicing",
    title: "Payments, Inventory & Invoicing Systems",
    category: "commerce",
    icon: CreditCard,
    summary:
      "Mobile money and card payments, stock tracking, and invoicing in one connected flow, so revenue stops leaking between delivery and payment.",
    fit: "A good fit when sales, stock, and billing live in separate notebooks or tools.",
    deliverables: [
      "Mobile money and card payment integration",
      "Inventory and stock management",
      "Invoicing, receipts, and payment reminders",
      "Sales and revenue reporting",
      "Online booking and scheduling",
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

export const servicesByCategory = (id: ServiceCategoryId) =>
  services.filter((service) => service.category === id);

export const deliveryPhases = [
  {
    title: "Diagnostic and process mapping",
    description: "We learn how the work moves today and where it breaks.",
  },
  {
    title: "System design and rollout",
    description: "We build in short, visible steps and release as we go.",
  },
  {
    title: "Team enablement and support",
    description: "We train your people and stay on hand after launch.",
  },
];
