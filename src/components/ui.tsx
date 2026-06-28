import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] disabled:opacity-50 [&_svg]:size-4";

const buttonVariants = {
  default: "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90 shadow",
  outline: "border border-[var(--color-border)] bg-[var(--color-background)] hover:bg-[var(--color-secondary)]",
  secondary: "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:opacity-90",
};

const buttonSizes = {
  default: "h-9 px-4 text-sm",
  sm: "h-8 px-3 text-xs",
  lg: "h-11 px-6 text-base",
};

export function buttonClass(opts: { variant?: keyof typeof buttonVariants; size?: keyof typeof buttonSizes; className?: string } = {}) {
  return cn(buttonBase, buttonVariants[opts.variant ?? "default"], buttonSizes[opts.size ?? "default"], opts.className);
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button ref={ref} className={buttonClass({ variant, size, className })} {...props} />
  ),
);
Button.displayName = "Button";

export function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variant === "secondary"
          ? "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]"
          : "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]",
        className,
      )}
      {...props}
    />
  );
}
