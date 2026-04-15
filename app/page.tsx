import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MukaroCore Enterprise | Tech, Commerce & Agriculture Solutions",
  description:
    "MukaroCore Enterprise delivers integrated Technology, Commerce, and Agriculture solutions for modern businesses across Africa. Build the Core. Verify the Truth. Scale the Growth.",
  keywords: [
    "MukaroCore",
    "Mukaro Core",
    "enterprise solutions Africa",
    "tech solutions Kenya",
    "commerce solutions Nairobi",
    "agri-tech Africa",
    "business growth solutions",
    "digital transformation Kenya",
  ],
  openGraph: {
    title: "MukaroCore Enterprise | Tech, Commerce & Agriculture Solutions",
    description:
      "Integrated Technology, Commerce, and Agriculture solutions for modern businesses across Africa.",
    url: "https://www.mukarocore.com",
  },
};
import {
  ArrowRight,
  Server,
  ShoppingCart,
  Sprout,
  BookOpen,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HeroText,
  FadeUp,
  FadeIn,
  StaggerGrid,
  StaggerItem,
} from "@/components/ui/motion";

const pillars = [
  {
    icon: Server,
    title: "Tech Solutions",
    description: "Essential IT infrastructure and managed services for modern businesses.",
    color: "from-blue-500 to-blue-600",
    href: "/services#tech",
  },
  {
    icon: ShoppingCart,
    title: "Commerce Tools",
    description: "Digital payment integration, inventory management, and automated invoicing.",
    color: "from-cyan-500 to-cyan-600",
    href: "/services#commerce",
  },
  {
    icon: Sprout,
    title: "Agri-Tech",
    description: "Data-driven solutions for precision agriculture and market connectivity.",
    color: "from-emerald-500 to-emerald-600",
    href: "/services#agri",
  },
  {
    icon: BookOpen,
    title: "Knowledge Hub",
    description: "Authoritative publications, research, news, and industry insights.",
    color: "from-amber-500 to-amber-600",
    href: "/knowledge-hub",
  },
];

const features = [
  "Digital Payment Migration",
  "Automated Invoicing & Ledgers",
  "Inventory Management Systems",
  "WhatsApp Business Integration",
  "Data Security & Infrastructure",
  "Real-time Business Insights",
];

const kpis = [
  { value: "+85%", label: "Revenue Efficiency", color: "text-emerald-400" },
  { value: "−62%", label: "Manual Errors", color: "text-blue-400" },
  { value: "3×", label: "Faster Reconciliation", color: "text-emerald-400" },
  { value: "<2wk", label: "Implementation", color: "text-blue-400" },
];

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Publications" },
  { value: "24/7", label: "Support" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#030712]">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#030712]/90 to-emerald-950/20" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <HeroText delay={0}>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                <Zap size={12} />
                Enterprise Technology Solutions
              </div>
            </HeroText>

            <HeroText delay={0.1}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                Building the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                  Core
                </span>{" "}
                of Your Business
              </h1>
            </HeroText>

            <HeroText delay={0.2}>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl">
                Providing the technical foundation, commerce tools, and agricultural
                insights your business needs to thrive in the digital age.
              </p>
            </HeroText>

            <HeroText delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="shadow-lg shadow-emerald-500/20">
                  <Link href="/contact">
                    Get a Free Business Audit
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/knowledge-hub">Explore Knowledge Hub</Link>
                </Button>
              </div>
            </HeroText>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <FadeIn>
        <section className="border-y border-gray-800 bg-gray-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <StaggerItem key={i} className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>
      </FadeIn>

      {/* Value Props */}
      <section className="py-24 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle,
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
                title: "Excellence",
                desc: "Delivering top-tier solutions with unwavering commitment to quality in everything we do.",
              },
              {
                icon: Shield,
                color: "text-blue-400",
                bg: "bg-blue-500/10",
                title: "Stability",
                desc: "Building robust infrastructure that your business can depend on every single day.",
              },
              {
                icon: Globe,
                color: "text-amber-400",
                bg: "bg-amber-500/10",
                title: "Truth",
                desc: "Verified information and authoritative industry insights you can trust and act on.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-6 h-full hover:border-gray-700 transition-colors">
                    <div className={`flex-shrink-0 w-11 h-11 ${item.bg} rounded-lg flex items-center justify-center`}>
                      <Icon className={item.color} size={22} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1.5">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Core Pillars</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Multi-disciplinary expertise bridging technology, commerce, and agriculture
              for comprehensive business growth.
            </p>
          </FadeUp>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={i}>
                  <Link
                    href={pillar.href}
                    className="group block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-lg mb-5 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGrid>

          <FadeUp delay={0.2} className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/services">
                View All Services
                <ArrowRight size={16} />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* Revenue Recovery Package */}
      <section className="py-24 bg-gray-900/40 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Zap size={12} />
                Flagship Service
              </div>
              <h2 className="text-4xl font-bold mb-5 tracking-tight">
                The Revenue Recovery Package
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Transform your manual service delivery into streamlined digital payment flows.
                Our comprehensive solution converts operational inefficiencies into measurable
                revenue opportunities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={15} />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="shadow-lg shadow-emerald-500/20">
                <Link href="/contact">
                  Start Your Recovery
                  <TrendingUp size={18} />
                </Link>
              </Button>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-8">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 font-medium">
                    Average client outcomes
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {kpis.map((kpi, i) => (
                      <div key={i} className="bg-gray-800/60 rounded-lg p-5 border border-gray-700/50">
                        <div className={`text-3xl font-bold mb-1 ${kpi.color}`}>{kpi.value}</div>
                        <div className="text-xs text-gray-500 leading-snug">{kpi.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <FadeUp>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-5 tracking-tight">
              Ready to Build Your Core?
            </h2>
            <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
              Join forward-thinking businesses that have transformed their operations
              with MukaroCore Enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="shadow-lg shadow-emerald-500/20">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/knowledge-hub">Read Our Research</Link>
              </Button>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}