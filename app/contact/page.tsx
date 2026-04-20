"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
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
    value: "(+233) 54554335",
    href: "tel:+233545543359",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Innovation Hub, Accra, Ghana",
  },
];

const benefits = [
  "A free business systems audit",
  "A scoped recommendation for the next move",
  "Clear pricing and sequencing",
  "No long-term commitment baked into the first call",
];

const hours = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM" },
  { day: "Sunday", time: "Closed" },
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Bring the problem in plain language. We'll map the system behind it.</>}
        description={
          <>
            If the issue sits in infrastructure, payments, reporting, or field
            operations, we can help identify the breakpoints and sequence the fix.
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
              Tell us what the team is trying to achieve, where the friction currently
              sits, and which lane the issue likely belongs to.
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
                        <SelectItem value="revenue-recovery">Revenue recovery package</SelectItem>
                        <SelectItem value="tech">Technology systems</SelectItem>
                        <SelectItem value="commerce">Commerce operations</SelectItem>
                        <SelectItem value="agritech">Agriculture intelligence</SelectItem>
                        <SelectItem value="knowledge">Knowledge hub partnership</SelectItem>
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

                  <Button type="submit" size="lg">
                    Send inquiry <Send size={16} />
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
                  Business hours
                </p>
                <dl className="ledger-list mt-5 text-sm">
                  {hours.map((entry) => (
                    <div key={entry.day} className="flex items-start justify-between gap-4">
                      <dt className="text-muted-foreground">{entry.day}</dt>
                      <dd className="text-right text-foreground">{entry.time}</dd>
                    </div>
                  ))}
                </dl>
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
                Subscribe for operating insight across tech, commerce, and agriculture.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                A short dispatch with field notes, research highlights, and system
                lessons from the work.
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
