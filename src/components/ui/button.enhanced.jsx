import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Enhanced variants
        primary: "bg-bordeaux-600 text-white shadow-md hover:bg-bordeaux-700 hover:shadow-lg active:bg-bordeaux-800 transition-all duration-200",
        success: "bg-green-600 text-white shadow-md hover:bg-green-700 hover:shadow-lg",
        warning: "bg-yellow-600 text-white shadow-md hover:bg-yellow-700 hover:shadow-lg",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        "2xl": "h-14 rounded-lg px-12 text-lg",
        icon: "h-9 w-9",
      },
      loading: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      loading: false,
    },
  }
);

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  asChild = false, 
  loading = false,
  loadingText = "Laden...",
  children,
  disabled,
  onClick,
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button";
  
  const handleClick = (event) => {
    if (loading || disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, loading, className }))}
      ref={ref}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="sr-only">Laden</span>
        </>
      )}
      {loading ? loadingText : children}
    </Comp>
  );
});

Button.displayName = "Button";

// Enhanced button with analytics tracking
const AnalyticsButton = React.forwardRef(({ 
  trackingEvent,
  trackingData = {},
  ...props 
}, ref) => {
  const handleClick = (event) => {
    // Track button click
    if (trackingEvent && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', trackingEvent, {
        event_category: 'Button',
        event_label: trackingData.label || 'Unknown',
        ...trackingData,
      });
    }
    
    props.onClick?.(event);
  };

  return (
    <Button
      ref={ref}
      {...props}
      onClick={handleClick}
    />
  );
});

AnalyticsButton.displayName = "AnalyticsButton";

// Button with tooltip
const TooltipButton = React.forwardRef(({ 
  tooltip,
  tooltipSide = "top",
  children,
  ...props 
}, ref) => {
  return (
    <div className="relative group">
      <Button ref={ref} {...props}>
        {children}
      </Button>
      {tooltip && (
        <div 
          className={cn(
            "absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
            {
              "bottom-full mb-2 left-1/2 transform -translate-x-1/2": tooltipSide === "top",
              "top-full mt-2 left-1/2 transform -translate-x-1/2": tooltipSide === "bottom",
              "right-full mr-2 top-1/2 transform -translate-y-1/2": tooltipSide === "left",
              "left-full ml-2 top-1/2 transform -translate-y-1/2": tooltipSide === "right",
            }
          )}
          role="tooltip"
        >
          {tooltip}
        </div>
      )}
    </div>
  );
});

TooltipButton.displayName = "TooltipButton";

export { Button, AnalyticsButton, TooltipButton, buttonVariants };
