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
        "inline-flex items-center rounded-[1.35rem] border border-border bg-[rgba(244,237,222,0.92)] shadow-[0_12px_30px_rgba(28,42,51,0.08)] dark:bg-[rgba(244,237,222,0.96)]",
        size === "nav" ? "px-3 py-2" : "px-4 py-3 sm:px-5 sm:py-4 rounded-[1.6rem]",
        className
      )}
    >
      <Image
        src="/brand-logo.png"
        alt="MukaroCore"
        width={677}
        height={369}
        priority={priority}
        className={cn(
          "w-auto",
          size === "nav" ? "h-11 sm:h-12" : "h-20 sm:h-24",
          imageClassName
        )}
      />
    </span>
  );
}
