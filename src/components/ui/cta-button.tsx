import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  children: React.ReactNode;
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ size = "default", variant = "default", className, children, ...props }, ref) => {
    const buttonStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-custom",
      outline: "border border-primary bg-transparent text-primary hover:bg-primary/10",
      secondary: "bg-card border border-primary/30 hover:border-primary text-foreground",
    };

    const sizeStyles = {
      default: "py-2.5 px-6 text-sm",
      sm: "py-2 px-4 text-xs",
      lg: "py-3 px-8 text-base",
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "rounded-full font-medium transition-all duration-300 shadow-custom-hover font-bold",
          buttonStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

export default CtaButton;