import { cn } from "@/lib/utils";

type SiteSectionProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted";
  id?: string;
};

export function SiteSection({
  children,
  className,
  tone = "default",
  id,
}: SiteSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "page-section",
        tone === "muted" && "bg-secondary",
        className
      )}
    >
      <div className="site-shell">{children}</div>
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
