import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { clients } from "@/lib/clients";
import { cn } from "@/lib/utils";

export function ClientGrid({ className }: { className?: string }) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {clients.map((client) => (
        <li key={client.name}>
          <a
            href={client.link}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card group flex h-full flex-col"
          >
            <div
              className="relative aspect-[3/2] border-b border-border"
              style={{ backgroundColor: client.logoBackground }}
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start justify-between gap-3 p-5">
              <div>
                <p className="text-lg font-semibold text-foreground">{client.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{client.industry}</p>
              </div>
              <ArrowUpRight
                size={16}
                className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
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
