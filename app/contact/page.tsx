"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Clock3, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, SectionBlock, SiteSection } from "@/components/site/PageFrame";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "info@mukarocore.com",
    href: "mailto:info@mukarocore.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+233) 545543359",
    href: "tel:+233545543359",
  },
];

const benefits = [
  "A free process audit to identify where manual work is costing you",
  "A scoped recommendation for which systems to digitise first",
  "Clear pricing and delivery sequencing",
  "No long-term commitment baked into the first call",
];


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      } else {
        setError("Something went wrong. Please try emailing us directly at info@mukarocore.com");
      }
    } catch {
      setError("Something went wrong. Please try emailing us directly at info@mukarocore.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Bring the problem in plain language. We'll map the system behind it.</>}
        description={
          <>
            If the team is still running on manual processes, losing revenue between
            delivery and payment, or needs agricultural insight that reaches the right
            audience — we can identify where to start and sequence the work from there.
          </>
        }
        actions={
          <Button asChild size="lg">
            <a href="mailto:info@mukarocore.com">
              Email the team <ArrowUpRight size={16} />
            </a>
          </Button>
        }
        aside={
          <>
            <div className="route-list">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;

                return channel.href ? (
                  <a key={channel.label} href={channel.href} className="group">
                    <div className="flex items-start gap-4">
                      <Icon size={18} className="mt-1 shrink-0 text-primary" />
                      <div>
                        <p className="eyebrow">{channel.label}</p>
                        <p className="mt-2 text-lg text-foreground group-hover:text-primary">
                          {channel.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div key={channel.label} className="flex items-start gap-4">
                    <Icon size={18} className="mt-1 shrink-0 text-primary" />
                    <div>
                      <p className="eyebrow">{channel.label}</p>
                      <p className="mt-2 text-lg text-foreground">{channel.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <article className="surface-card p-6">
              <p className="eyebrow">Response time</p>
              <p className="mt-4 text-base leading-8 text-foreground">
                Most initial replies go out within 24 hours. Existing clients can also
                reach the emergency support line outside business hours.
              </p>
            </article>
          </>
        }
      />

      <SiteSection tone="muted">
        <SectionBlock
          eyebrow="Inquiry form"
          title={<>Start with the context we need to be useful.</>}
          description={
            <>
              Tell us what the team is trying to achieve, which manual processes are
              slowing things down, and where the biggest friction sits right now.
            </>
          }
        >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_21rem]">
            <article className="surface-card p-6 lg:p-8">
              {submitted ? (
                <div
                  className="flex min-h-[24rem] flex-col items-center justify-center text-center"
                  aria-live="polite"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/25 dark:bg-emerald-500/15 dark:text-emerald-300">
                    <CheckCircle2 size={30} />
                  </span>
                  <h2 className="mt-6 text-4xl">Message received.</h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                    We've captured the inquiry and will reply with next steps shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, name: event.target.value }))
                        }
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, email: event.target.value }))
                        }
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, phone: event.target.value }))
                        }
                        placeholder="+233 54 000 0000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, company: event.target.value }))
                        }
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service lane</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData((current) => ({ ...current, service: value }))
                      }
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Choose the closest lane" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="process-digitisation">Process digitisation</SelectItem>
                        <SelectItem value="workflow-automation">Workflow automation</SelectItem>
                        <SelectItem value="commerce">Commerce & payment operations</SelectItem>
                        <SelectItem value="agri-research">Agri research & publishing</SelectItem>
                        <SelectItem value="agri-fundraising">Agri fundraising support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project context</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(event) =>
                        setFormData((current) => ({ ...current, message: event.target.value }))
                      }
                      placeholder="Describe the problem, current tools, and what a better outcome would look like."
                      required
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}

                  <Button type="submit" size="lg" disabled={sending}>
                    {sending ? "Sending…" : "Send inquiry"} <Send size={16} />
                  </Button>
                </form>
              )}
            </article>

            <aside className="grid gap-4">
              <article className="surface-card p-6">
                <p className="eyebrow">What you get</p>
                <ul className="ledger-list mt-6">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-7 text-foreground">
                      <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="surface-card p-6">
                <p className="eyebrow flex items-center gap-2">
                  <Clock3 size={14} className="text-primary" />
                  Availability
                </p>
                <p className="mt-4 text-base leading-8 text-foreground">
                  We're available 24/7. Reach out any time and we'll get back to you as soon as possible.
                </p>
              </article>
            </aside>
          </div>
        </SectionBlock>
      </SiteSection>

      <SiteSection className="pt-0">
        <article className="surface-card p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div>
              <p className="eyebrow">Daily pulse</p>
              <h2 className="mt-4 max-w-[12ch] text-5xl leading-none">
                Stay current on process, commerce, and agri insight.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                A short dispatch covering digitisation trends, agri research briefs,
                and practical lessons from the work we're doing on the ground.
              </p>
            </div>

            <div className="grid gap-3">
              <Input type="email" placeholder="Enter your email" />
              <Button size="lg">Join the list</Button>
            </div>
          </div>
        </article>
      </SiteSection>
    </>
  );
}
