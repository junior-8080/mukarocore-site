import type { Metadata } from "next";
import { Target, Eye, Award, TrendingUp, Shield, Lightbulb } from "lucide-react";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MukaroCore Enterprise — bridging technology, commerce, and agriculture for businesses across Africa. Our mission, values, and team.",
  keywords: [
    "about MukaroCore",
    "MukaroCore team",
    "enterprise solutions company Kenya",
    "technology company Nairobi",
    "Africa business consulting",
    "MukaroCore mission",
  ],
  openGraph: {
    title: "About Us | MukaroCore Enterprise",
    description: "Learn about MukaroCore Enterprise — bridging technology, commerce, and agriculture for businesses across Africa.",
    url: "https://www.mukarocore.com/about",
  },
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Unwavering commitment to delivering top-tier solutions that exceed expectations.",
  },
  {
    icon: Shield,
    title: "Stability",
    description: "Building robust infrastructure and systems your business can depend on.",
  },
  {
    icon: Lightbulb,
    title: "Truth",
    description: "Providing verified information and authoritative insights you can trust.",
  },
];

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Publications Released" },
  { value: "24/7", label: "Support Available" },
];

const team = [
  { name: "Dr. Michael Mukaro", role: "Founder & CEO", bio: "15+ years of experience bridging technology and essential industries.", initials: "MM" },
  { name: "Sarah Chen", role: "Chief Technology Officer", bio: "Expert in enterprise IT infrastructure and digital transformation.", initials: "SC" },
  { name: "James Okoye", role: "Head of AgriTech", bio: "Agricultural technologist specialising in precision farming solutions.", initials: "JO" },
  { name: "Emily Wanjiru", role: "Commerce Solutions Lead", bio: "Digital payment integration specialist with proven track record.", initials: "EW" },
];

const pillars = [
  {
    badge: "TECH: THE FOUNDATION",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "Your Dedicated Tech Partner",
    body: "Acting as a dedicated tech partner for small companies, we provide the essential IT infrastructure, managed services, and digital security that modern businesses require — without the overhead of a full-time IT department.",
    items: ["Managed IT infrastructure and support", "Cloud solutions and data management", "Cybersecurity and compliance"],
    iconColor: "text-blue-400",
  },
  {
    badge: "COMMERCE: THE ENGINE",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "Streamlined Digital Flows",
    body: "Specialising in digital payment migration, inventory management systems, and business insights. Our goal is to convert manual services into streamlined digital payment flows.",
    items: ["Digital payment integration (Mobile Money / Card)", "Automated invoicing and digital ledgers", "Inventory-to-WhatsApp tooling"],
    iconColor: "text-cyan-400",
  },
  {
    badge: "AGRICULTURE: THE GROWTH",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Data-Driven Agriculture",
    body: "Developing data-driven solutions for the agricultural sector. We focus on high-impact products such as precision agriculture information services and digital market links for farmers.",
    items: ["Precision agriculture information services", "Digital market links for farmers", "Farm analytics and IoT solutions"],
    iconColor: "text-emerald-400",
  },
  {
    badge: "KNOWLEDGE HUB: THE AUTHORITY",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    title: "Verified Information Source",
    body: "A central platform for publications, research, news, and events. This division establishes MukaroCore as a reliable destination for information and a verified source of industry truth.",
    items: ["Publications and research library", "Real-time industry news and insights", "Event calendar and submission portal"],
    iconColor: "text-amber-400",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#030712] border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#030712]/95 to-emerald-950/10" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <FadeUp>
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Who We Are
            </p>
            <h1 className="text-5xl font-bold mb-5 tracking-tight">About MukaroCore</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A multi-disciplinary enterprise designed to bridge the gap between
              advanced technology and essential industry.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StaggerItem>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full">
                <div className="w-11 h-11 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-blue-400" size={22} />
                </div>
                <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">
                  To provide small and medium-sized businesses with the essential infrastructure
                  necessary to thrive in the digital age. We bridge the gap between advanced
                  technology and essential industries, making enterprise-grade solutions
                  accessible to all.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full">
                <div className="w-11 h-11 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-emerald-400" size={22} />
                </div>
                <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed">
                  To become the trusted foundation for business growth across Tech, Commerce,
                  and Agriculture sectors. We envision a future where every business has access
                  to world-class technology and verified industry knowledge.
                </p>
              </div>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StaggerItem key={i} className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-1.5">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 tracking-tight">Our Core Values</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              The principles that guide everything we do at MukaroCore Enterprise.
            </p>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={i}>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-emerald-500/30 transition-colors h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl mx-auto mb-5 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 tracking-tight">What We Do</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Operating at the intersection of Tech, Commerce, and Agriculture.
            </p>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <StaggerItem key={i}>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full">
                  <div className={`inline-flex items-center border ${p.badgeColor} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4`}>
                    {p.badge}
                  </div>
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">{p.body}</p>
                  <ul className="space-y-2">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <TrendingUp className={`${p.iconColor} flex-shrink-0 mt-0.5`} size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 tracking-tight">Our Team</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Experienced professionals dedicated to your business success.
            </p>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <StaggerItem key={i}>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-emerald-500/30 transition-colors h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <span className="text-white font-bold text-lg">{m.initials}</span>
                  </div>
                  <h3 className="font-semibold mb-0.5">{m.name}</h3>
                  <p className="text-emerald-400 text-sm mb-3">{m.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gray-900/30 border-t border-gray-800">
        <FadeUp>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-5 tracking-tight">Our Philosophy</h2>
            <blockquote className="text-2xl text-white font-medium mb-4 leading-relaxed">
              &ldquo;Build the Core, Verify the Truth, Scale the Growth.&rdquo;
            </blockquote>
            <p className="text-gray-400 leading-relaxed">
              We believe in creating sustainable business foundations through technology,
              maintaining the highest standards of information integrity, and enabling
              scalable growth for enterprises of all sizes.
            </p>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}