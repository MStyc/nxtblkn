"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const enhancedButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group shadow-lg",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-transparent via-white/5 to-transparent border-2 border-white/60 text-white hover:bg-white hover:text-black hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        outline:
          "border-2 border-gray-300/80 text-gray-300 hover:border-white hover:text-white bg-gradient-to-r from-transparent via-gray-300/5 to-transparent shadow-[0_0_10px_rgba(211,211,211,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-gray-300/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        solid:
          "bg-gradient-to-r from-white/90 to-gray-200/90 text-black hover:from-white hover:to-gray-100 border-2 border-white/80 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        ghost:
          "border-2 border-white/40 text-white hover:border-white hover:bg-white/10 bg-gradient-to-r from-transparent via-white/3 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.2)] hover:shadow-[0_0_18px_rgba(255,255,255,0.4)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2",
        lg: "h-14 px-10 py-4 text-base",
        xl: "h-16 px-12 py-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof enhancedButtonVariants> {
  asChild?: boolean
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <div className="relative group">
        {/* Always visible decorative corner lines */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white/60 group-hover:border-white transition-colors duration-300"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white/60 group-hover:border-white transition-colors duration-300"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white/60 group-hover:border-white transition-colors duration-300"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white/60 group-hover:border-white transition-colors duration-300"></div>

        {/* Side accent lines */}
        <div className="absolute top-1/2 -left-4 w-2 h-0.5 bg-white/50 group-hover:bg-white group-hover:w-3 transition-all duration-300 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 -right-4 w-2 h-0.5 bg-white/50 group-hover:bg-white group-hover:w-3 transition-all duration-300 transform -translate-y-1/2"></div>

        {/* Top and bottom accent lines */}
        <div className="absolute -top-4 left-1/2 w-0.5 h-2 bg-white/50 group-hover:bg-white group-hover:h-3 transition-all duration-300 transform -translate-x-1/2"></div>
        <div className="absolute -bottom-4 left-1/2 w-0.5 h-2 bg-white/50 group-hover:bg-white group-hover:h-3 transition-all duration-300 transform -translate-x-1/2"></div>

        <Comp
          className={cn(
            enhancedButtonVariants({ variant, size, className }),
            "relative z-10", // keep stacking context
          )}
          ref={ref}
          {...props}
        >
          <span className="font-semibold tracking-wide">{children}</span>
        </Comp>

        {/* Inner glow effect – sibling of Slot, never its child */}
        <div className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
      </div>
    )
  },
)
EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton, enhancedButtonVariants }
