import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-xs text-brand-lightText shadow-light transition focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm",
          "dark:border-white/10 dark:bg-brand-darkBgSecondary/60 dark:text-brand-darkText dark:placeholder:text-brand-darkTextMuted dark:focus:border-brand-primary",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

