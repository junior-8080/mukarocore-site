import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
        secondary: "bg-gray-700 text-gray-300 border border-gray-600",
        outline: "border border-gray-700 text-gray-400",
        blue: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
        orange: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
        purple: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };