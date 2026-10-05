"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
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
import { services } from "@/lib/services";

export function ContactForm() {
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
        setError("failed");
      }
    } catch {
      setError("failed");
    } finally {
      setSending(false);
    }
  };

  return (
    <article className="surface-card p-6 lg:p-8">
      {submitted ? (
        <div
          className="flex min-h-[24rem] flex-col items-center justify-center text-center"
          aria-live="polite"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-success">
            <CheckCircle2 size={30} />
          </span>
          <h3 className="mt-6 text-4xl">Message received.</h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
            We&apos;ve captured the inquiry and will reply with next steps shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Full name <span className="text-destructive" aria-hidden>*</span></Label>
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
              <Label htmlFor="email">Email <span className="text-destructive" aria-hidden>*</span></Label>
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
              <Label htmlFor="phone">Phone <span className="text-muted-foreground">(optional)</span></Label>
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
              <Label htmlFor="company">Company <span className="text-muted-foreground">(optional)</span></Label>
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
            <Label htmlFor="service">Service <span className="text-muted-foreground">(optional)</span></Label>
            <Select
              value={formData.service}
              onValueChange={(value) =>
                setFormData((current) => ({ ...current, service: value }))
              }
            >
              <SelectTrigger id="service">
                <SelectValue placeholder="Choose the closest service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.slug} value={service.slug}>
                    {service.title}
                  </SelectItem>
                ))}
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Project context <span className="text-destructive" aria-hidden>*</span></Label>
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
            <p className="text-sm text-destructive" role="alert">
              Something went wrong. Please email us directly at{" "}
              <a href="mailto:info@mukarocore.com" className="underline">
                info@mukarocore.com
              </a>
              .
            </p>
          )}

          <Button type="submit" size="lg" disabled={sending}>
            {sending ? "Sending…" : "Send inquiry"} <Send size={16} />
          </Button>
        </form>
      )}
    </article>
  );
}
