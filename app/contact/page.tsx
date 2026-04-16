"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { FadeUp } from "@/components/ui/motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const contactInfo = [
  { icon: Mail, title: "Email", content: "info@mukarocore.com", link: "mailto:aabdulmukhsin@gmail.com" },
  { icon: Phone, title: "Phone", content: "(+233) 54554335", link: "tel:+233545543359" },
  { icon: MapPin, title: "Office", content: "Innovation Hub, Accra, Ghana", link: "#" },
];

const benefits = [
  "Free business tech audit",
  "Custom solution proposal",
  "Transparent pricing",
  "No long-term commitments",
  "Expert consultation",
  "Rapid implementation",
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM", open: true },
  { day: "Saturday", time: "9:00 AM – 2:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#030712] border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#030712]/95 to-emerald-950/10" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Let&apos;s Talk
            </p>
            <h1 className="text-5xl font-bold mb-5 tracking-tight">Get in Touch</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Ready to build the core of your business? Schedule a free consultation and
              discover how MukaroCore Enterprise can transform your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <h2 className="text-2xl font-bold mb-2 tracking-tight">Request a Consultation</h2>
              <p className="text-sm text-gray-500 mb-8">Our team will get back to you within 24 hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease }}
                  className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-10 text-center"
                >
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-emerald-400" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-500 text-sm">
                    We&apos;ve received your inquiry and will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Your Company" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interest *</Label>
                    <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="revenue-recovery">Revenue Recovery Package</SelectItem>
                        <SelectItem value="tech">Tech Solutions</SelectItem>
                        <SelectItem value="commerce">Commerce Tools</SelectItem>
                        <SelectItem value="agritech">Agri-Tech</SelectItem>
                        <SelectItem value="knowledge">Knowledge Hub Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your business needs…" className="min-h-[130px]" />
                  </div>
                  <Button type="submit" size="lg" className="w-full shadow-lg shadow-emerald-500/20">
                    Send Message <Send size={18} />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Sidebar — unified panel */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 divide-y divide-gray-800">

                {/* Contact Info */}
                <div className="pb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    {contactInfo.map((info, i) => {
                      const Icon = info.icon;
                      return (
                        <a key={i} href={info.link} className="flex items-center gap-3 group">
                          <div className="w-9 h-9 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                            <Icon className="text-emerald-400" size={16} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-0.5">{info.title}</p>
                            <p className="text-sm text-gray-300 group-hover:text-emerald-400 transition-colors">
                              {info.content}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* What You Get */}
                <div className="py-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    What You Get
                  </h3>
                  <ul className="space-y-2.5">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-400">
                        <CheckCircle className="text-emerald-400 flex-shrink-0" size={14} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Hours */}
                <div className="pt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} className="text-emerald-400" />
                      Business Hours
                    </span>
                  </h3>
                  <div className="space-y-2">
                    {hours.map((h, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-400">{h.day}</span>
                        <span className={h.open ? "text-emerald-400" : "text-gray-600"}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-4 pt-4 border-t border-gray-800">
                    24/7 emergency support for existing clients
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Newsletter */}
      <FadeUp>
        <section className="py-16 bg-gray-900/30 border-t border-gray-800">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-7">
              <h2 className="text-2xl font-bold mb-2 tracking-tight">Stay Updated</h2>
              <p className="text-gray-500 text-sm">
                Subscribe to The Daily Pulse for curated insights in Tech, Commerce, and Agriculture.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email address" className="flex-1 h-11" />
              <Button className="h-11 px-6">Subscribe</Button>
            </div>
          </div>
        </section>
      </FadeUp>
    </div>
  );
}
