import Link from "next/link";
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-green-500 to-green-400 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
                <Cpu className="text-white" size={18} />
              </div>
              <span className="text-lg font-bold">
                <span className="text-white">Mukora</span>
                <span className="text-green-400">Core</span>
                <span className="text-gray-500 font-normal ml-1.5">Enterprise</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-5">
              Building the core of your business through integrated Tech, Commerce,
              and Agriculture solutions for enterprises of every size.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-md flex items-center justify-center text-gray-500 hover:text-green-400 hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-md flex items-center justify-center text-gray-500 hover:text-green-400 hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/services", label: "Services" },
                { href: "/knowledge-hub", label: "Knowledge Hub" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@mukoracore.com"
                  className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-green-400 transition-colors"
                >
                  <Mail size={15} className="flex-shrink-0" />
                  info@mukoracore.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-green-400 transition-colors"
                >
                  <Phone size={15} className="flex-shrink-0" />
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-500">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" />
                Innovation Hub, Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} MukoraCore Enterprise. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Build the Core. Verify the Truth. Scale the Growth.
          </p>
        </div>
      </div>
    </footer>
  );
}