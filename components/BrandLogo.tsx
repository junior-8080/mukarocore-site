import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  size?: "nav" | "footer";
};

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
  size = "nav",
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[1.35rem] border border-border bg-logo-surface shadow-soft",
        size === "nav" ? "p-2" : "p-2 rounded-[1.6rem]",
        className
      )}
    >
      <Image
        src="/brand-logo.png"
        alt="MukaroCore"
        width={600}
        height={300}
        priority={priority}
        className={cn(
          "w-auto",
          size === "nav" ? "h-6 sm:h-12" : "h-16 sm:h-16",
          imageClassName
        )}
      />
    </span>
  );
}
