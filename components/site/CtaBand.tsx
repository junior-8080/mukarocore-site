import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CtaBandProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  actionLabel?: string;
  actionHref?: string;
};

/** The one dark emphasis band used at the end of a page. */
export function CtaBand({
  eyebrow = "Next move",
  title,
  description,
  actionLabel = "Book a consultation",
  actionHref = "/contact",
}: CtaBandProps) {
  return (
    <article className="surface-card surface-card-strong">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_26rem]">
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="eyebrow !text-ink-muted">{eyebrow}</p>
          <h2 className="mt-4 max-w-[16ch] text-4xl leading-none sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink-muted">{description}</p>
          <Button asChild size="lg" className="mt-8">
            <Link href={actionHref}>
              {actionLabel} <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
        <div className="relative min-h-56 lg:min-h-full">
          <Image
            src="/images/cta-collaboration.webp"
            alt="Colleagues discussing a project around a laptop"
            fill
            sizes="(min-width: 1024px) 26rem, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}
