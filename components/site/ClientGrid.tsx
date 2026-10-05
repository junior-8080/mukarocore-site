import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { clients } from "@/lib/clients";
import { cn } from "@/lib/utils";

export function ClientGrid({ className }: { className?: string }) {
  return (
    <ul className={cn("grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4", className)}>
      {clients.map((client) => (
        <li key={client.name}>
          <a
            href={client.link}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card group flex h-full flex-col"
          >
            <div
              className="relative aspect-[2/1] border-b border-border"
              style={{ backgroundColor: client.logoBackground }}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                sizes="(min-width: 1024px) 13rem, 50vw"
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start justify-between gap-2 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-foreground">{client.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{client.industry}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="mt-0.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden
              />
              <span className="sr-only">(opens in a new tab)</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
