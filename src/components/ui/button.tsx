import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center border border-solid font-normal whitespace-nowrap transition-opacity outline-none select-none focus-visible:ring-2 focus-visible:ring-cream/60 disabled:pointer-events-none disabled:opacity-50 rounded-pill min-w-[87px] lg:min-w-[159px]",
  {
    variants: {
      variant: {
        primary:
          "bg-cream border-cream text-plum hover:opacity-90 [&]:text-plum",
        ghost:
          "bg-transparent border-cream text-cream hover:bg-cream/10",
        default:
          "bg-cream border-cream text-plum hover:opacity-90 [&]:text-plum",
        outline:
          "bg-transparent border-cream text-cream hover:bg-cream/10",
        secondary:
          "bg-transparent border-cream text-cream hover:bg-cream/10",
        link: "rounded-none border-transparent bg-transparent text-cream underline-offset-4 hover:underline min-w-0",
        destructive:
          "bg-destructive text-cream border-transparent hover:opacity-90",
      },
      size: {
        default:
          "h-button-h gap-2 px-5 text-button lg:h-button-h-lg lg:px-6 lg:text-button-lg",
        sm: "h-button-h px-4 text-button",
        lg: "h-button-h-lg px-6 text-button-lg",
        icon: "size-8 min-w-0",
        "icon-sm": "size-7 min-w-0",
        "icon-lg": "size-9 min-w-0",
        xs: "h-8 px-3 text-sm min-w-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
