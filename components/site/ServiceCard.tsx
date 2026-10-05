import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="surface-card flex h-full flex-col p-6">
      <span className="icon-chip">
        <Icon size={22} aria-hidden />
      </span>
      <h3 className="mt-5 text-2xl leading-tight">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.summary}</p>
      <ul className="mt-5 grid gap-2">
        {service.deliverables.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
