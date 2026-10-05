import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  size?: "nav" | "footer";
  /** "auto" follows the theme; "light" forces the light artwork (e.g. over the hero photo). */
  tone?: "auto" | "light";
};

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
  size = "nav",
  tone = "auto",
}: BrandLogoProps) {
  const imageClasses = cn("w-auto", size === "nav" ? "h-12 sm:h-14" : "h-20", imageClassName);

  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* Navy artwork for light backgrounds. */}
      <Image
        src="/brand-logo-trimmed.png"
        alt="MukaroCore"
        width={365}
        height={210}
        priority={priority}
        className={cn(imageClasses, tone === "light" ? "hidden" : "dark:hidden")}
      />
      {/* Recoloured artwork for dark backgrounds. */}
      <Image
        src="/brand-logo-light.png"
        alt="MukaroCore"
        width={365}
        height={210}
        priority={priority}
        className={cn(imageClasses, tone === "light" ? "block" : "hidden dark:block")}
      />
    </span>
  );
}
