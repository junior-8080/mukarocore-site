import { cn } from "@/lib/utils";

type SiteSectionProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted";
};

export function SiteSection({
  children,
  className,
  tone = "default",
}: SiteSectionProps) {
  return (
    <section
      className={cn(
        "page-section",
        tone === "muted" && "bg-secondary/60",
        className
      )}
    >
      <div className="site-shell">{children}</div>
    </section>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("page-section pt-10 lg:pt-16", className)}>
      <div className="site-shell hero-grid">
        <header className="space-y-6">
          <p className="eyebrow">{eyebrow}</p>
          <div className="space-y-5">
            <h1 className="display-title">{title}</h1>
            <div className="section-copy max-w-2xl">{description}</div>
          </div>
          {actions ? (
            <div className="flex flex-col gap-3 sm:flex-row">{actions}</div>
          ) : null}
        </header>
        {aside ? <aside className="note-stack">{aside}</aside> : null}
      </div>
    </section>
  );
}

type SectionBlockProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  railClassName?: string;
};

export function SectionBlock({
  eyebrow,
  title,
  description,
  children,
  className,
  railClassName,
}: SectionBlockProps) {
  return (
    <div className={cn("editorial-grid", className)}>
      <header className={cn("section-rail", railClassName)}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <div className="section-copy">{description}</div>
      </header>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

type StatRackProps = {
  items: Array<{ label: string; value: string }>;
  columns?: 2 | 3 | 4;
  className?: string;
  inverted?: boolean;
};

export function StatRack({
  items,
  columns = 4,
  className,
  inverted = false,
}: StatRackProps) {
  return (
    <dl
      className={cn("metric-rack", className)}
      data-columns={String(columns)}
      data-inverted={inverted ? "true" : undefined}
    >
      {items.map((item) => (
        <div key={item.label} className="flex min-h-32 flex-col justify-between gap-6">
          <dt
            className={cn(
              "text-[0.72rem] font-semibold uppercase tracking-[0.24em]",
              inverted ? "text-background/70" : "text-muted-foreground"
            )}
          >
            {item.label}
          </dt>
          <dd
            className={cn(
              "display-number",
              inverted ? "text-background" : "text-foreground"
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
