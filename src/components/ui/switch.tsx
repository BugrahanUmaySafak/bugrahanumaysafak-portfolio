"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    className={cn(
      "peer relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full",
      "border border-zinc-200 bg-white shadow-sm",
      "transition-colors duration-300",
      "data-[state=checked]:bg-zinc-900 data-[state=checked]:border-zinc-900",
      className
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-7 w-7 rounded-full shadow-sm ring-0",
        "transition-transform duration-300 ease-out",
        "translate-x-8 bg-zinc-900",
        "data-[state=checked]:translate-x-1 data-[state=checked]:bg-white"
      )}
    />
  </SwitchPrimitives.Root>
));

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
