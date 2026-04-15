import type { Metadata } from "next";
import Link from "next/link";
import {
  Server, Shield, Cloud, Database,
  ShoppingCart, CreditCard, Package, TrendingUp,
  Sprout, Wifi, MapPin, BarChart3,
  ArrowRight, CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive Tech, Commerce, and Agri-Tech solutions for modern businesses in Africa. Managed IT, e-commerce platforms, precision farming, and more.",
  keywords: [
    "managed IT services Kenya",
    "e-commerce solutions Africa",
    "agri-tech solutions",
    "cloud infrastructure Kenya",
    "business technology Nairobi",
    "digital commerce Africa",
    "precision agriculture technology",
    "MukaroCore services",
  ],
  openGraph: {
    title: "Services | MukaroCore Enterprise",
    description: "Comprehensive Tech, Commerce, and Agri-Tech solutions for modern businesses in Africa.",
    url: "https://www.mukarocore.com/services",
  },
};

const techServices = [
  {
    icon: Server,
    title: "Managed IT Services",
    description: "Complete IT infrastructure management without the overhead of a full-time department.",
    features: ["24/7 System Monitoring", "Network Management", "Hardware Support", "Software Updates"],
  },
  {
    icon: Shield,
    title: "Digital Security",
    description: "Comprehensive cybersecurity solutions to protect your business assets.",
    features: ["Threat Detection", "Data Encryption", "Security Audits", "Compliance Support"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions designed for growing businesses.",
    features: ["Cloud Migration", "Data Backup", "Disaster Recovery", "Resource Optimization"],
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Organize and leverage your business data for better decision-making.",
    features: ["Database Design", "Data Analytics", "Report Generation", "Data Integration"],
  },
];

const commerceServices = [
  {
    icon: CreditCard,
    title: "Digital Payment Integration",
    description: "Seamless integration of mobile money and card payment systems.",
    features: ["Mobile Money API", "Card Processing", "Payment Gateway", "Transaction Tracking"],
  },
  {
    icon: ShoppingCart,
    title: "Inventory Management",
    description: "Real-time inventory tracking and automated stock management.",
    features: ["Stock Tracking", "Automated Alerts", "Multi-location Support", "Supplier Management"],
  },
  {
    icon: Package,
    title: "Automated Invoicing",
    description: "Digital ledgers and automated invoicing for streamlined operations.",
    features: ["Invoice Generation", "Digital Receipts", "Payment Reminders", "Financial Reports"],
  },
  {
    icon: TrendingUp,
    title: "Business Insights",
    description: "Data-driven analytics to optimize your business performance.",
    features: ["Sales Analytics", "Customer Insights", "Performance Metrics", "Trend Analysis"],
  },
];

const agriServices = [
  {
    icon: Sprout,
    title: "Precision Agriculture",
    description: "Data-driven farming solutions for improved yields and efficiency.",
    features: ["Crop Monitoring", "Weather Integration", "Soil Analysis", "Yield Prediction"],
  },
  {
    icon: MapPin,
    title: "Digital Market Links",
    description: "Connect farmers directly with markets and buyers.",
    features: ["Market Pricing", "Buyer Network", "Order Management", "Logistics Support"],
  },
  {
    icon: BarChart3,
    title: "Farm Analytics",
    description: "Comprehensive analytics for better farm management decisions.",
    features: ["Production Tracking", "Cost Analysis", "ROI Calculation", "Season Planning"],
  },
  {
    icon: Wifi,
    title: "IoT Farm Solutions",
    description: "Smart farming with connected sensors and automation.",
    features: ["Sensor Networks", "Automated Irrigation", "Remote Monitoring", "Alert Systems"],
  },
];

type AccentColor = "blue" | "purple" | "green";

function ServiceCard({
  service,
  accentColor,
}: {
  service: (typeof techServices)[0];
  accentColor: AccentColor;
}) {
  const Icon = service.icon;
  const iconStyles: Record<AccentColor, string> = {
    blue: "bg-blue-500/10 text-blue-400",
    purple: "bg-cyan-500/10 text-cyan-400",
    green: "bg-emerald-500/10 text-emerald-400",
  };
  const checkStyles: Record<AccentColor, string> = {
    blue: "text-blue-400",
    purple: "text-cyan-400",
    green: "text-emerald-400",
  };
  const hoverBorder: Record<AccentColor, string> = {
    blue: "hover:border-blue-500/30",
    purple: "hover:border-cyan-500/30",
    green: "hover:border-emerald-500/30",
  };
  return (
    <div className={`bg-gray-900 border border-gray-800 ${hoverBorder[accentColor]} rounded-xl p-6 transition-colors duration-300 h-full`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-11 h-11 ${iconStyles[accentColor]} rounded-lg flex items-center justify-center`}>
          <Icon size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold mb-2">{service.title}</h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">{service.description}</p>
          <ul className="space-y-1.5">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className={`${checkStyles[accentColor]} flex-shrink-0`} size={14} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  badge,
  badgeColor,
  title,
  description,
}: {
  badge: string;
  badgeColor: AccentColor;
  title: string;
  description: string;
}) {
  const styles: Record<AccentColor, string> = {
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    purple: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    green: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  };
  return (
    <FadeUp className="mb-12">
      <div className={`inline-flex items-center border ${styles[badgeColor]} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4`}>
        {badge}
      </div>
      <h2 className="text-4xl font-bold mb-3 tracking-tight">{title}</h2>
      <p className="text-gray-400 max-w-2xl">{description}</p>
    </FadeUp>
  );
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#030712] border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#030712]/95 to-blue-950/10" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <FadeUp>
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
              What We Offer
            </p>
            <h1 className="text-5xl font-bold mb-5 tracking-tight">Our Services</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions across Tech, Commerce, and Agriculture designed
              to build the core of your business.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Tech Solutions */}
      <section id="tech" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Tech Solutions"
            badgeColor="blue"
            title="The Foundation"
            description="Your dedicated tech partner providing essential IT infrastructure and managed services for modern businesses."
          />
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techServices.map((s, i) => (
              <StaggerItem key={i}>
                <ServiceCard service={s} accentColor="blue" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Commerce Tools */}
      <section id="commerce" className="py-24 bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Commerce Tools"
            badgeColor="purple"
            title="The Engine"
            description="Convert manual services into streamlined digital payment flows with our comprehensive commerce solutions."
          />
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commerceServices.map((s, i) => (
              <StaggerItem key={i}>
                <ServiceCard service={s} accentColor="purple" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Agri-Tech */}
      <section id="agri" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Agri-Tech"
            badgeColor="green"
            title="The Growth"
            description="Data-driven agricultural solutions focusing on precision farming and digital market connections."
          />
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agriServices.map((s, i) => (
              <StaggerItem key={i}>
                <ServiceCard service={s} accentColor="green" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900/30 border-t border-gray-800">
        <FadeUp>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 mb-8">
              Get started with our flagship Revenue Recovery Package and watch your enterprise grow.
            </p>
            <Button asChild size="lg" className="shadow-lg shadow-emerald-500/20">
              <Link href="/contact">
                Schedule a Free Consultation
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}