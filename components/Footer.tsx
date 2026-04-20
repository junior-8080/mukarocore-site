import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/knowledge-hub", label: "Knowledge Hub" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/55">
      <div className="site-shell page-section !py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <div className="space-y-6">
            <Link href="/" className="inline-flex" aria-label="MukaroCore home">
              <BrandLogo size="footer" />
            </Link>

            <div>
              <p className="eyebrow">MukaroCore Enterprise</p>
              <p className="mt-3 text-4xl leading-none" style={{ fontFamily: "var(--font-display)" }}>
                Build the core.
              </p>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-secondary-foreground">
              MukaroCore works on the quiet layer most teams skip: operating systems,
              payment flows, agricultural intelligence, and the information structure
              that keeps them useful over time.
            </p>

            <Link href="/contact" className="link-line">
              Start a working session <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Directory</p>
              <ul className="space-y-3 text-sm text-secondary-foreground">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex items-center gap-2 hover:text-foreground">
                      <span className="text-muted-foreground">/</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">Contact</p>
              <dl className="space-y-4 text-sm text-secondary-foreground">
                <div className="flex items-start gap-3">
                  <Mail size={15} className="mt-0.5 text-primary" />
                  <div>
                    <dt className="text-muted-foreground">Email</dt>
                    <dd>
                      <a href="mailto:info@mukarocore.com" className="hover:text-foreground">
                        info@mukarocore.com
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={15} className="mt-0.5 text-primary" />
                  <div>
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd>
                      <a href="tel:+233545543359" className="hover:text-foreground">
                        (+233) 54554335
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5 text-primary" />
                  <div>
                    <dt className="text-muted-foreground">Office</dt>
                    <dd>Innovation Hub, Accra, Ghana</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} MukaroCore Enterprise. All rights reserved.</p>
          <p>Systems first. Hype last.</p>
        </div>
      </div>
    </footer>
  );
}
