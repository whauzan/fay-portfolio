import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-neutral-grey text-text-white",
        outline:
          "border border-text-white bg-transparent hover:border-transparent hover:bg-brand-red",
        secondary: "bg-neutral-grey text-text-white",
      },
      size: {
        default: "rounded-full px-[6.25rem] py-5 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const dotVariants = cva("", {
  variants: {
    dotColor: {
      default: "bg-brand-blue",
      secondary: "bg-brand-red",
    },
  },
  defaultVariants: {
    dotColor: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof dotVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, dotColor, asChild = false, children, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant !== "outline" && (
          <div
            className={cn(
              dotVariants({ dotColor }),
              "absolute left-8 h-6 w-6 rounded-[50%] transition-all duration-300 group-hover:scale-[25]",
            )}
          />
        )}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
