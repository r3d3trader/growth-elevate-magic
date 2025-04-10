import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UI } from "@/config/ui";
import { cn } from "@/lib/utils";
import { PremiumDesign } from "@/config/premium-design-system";

interface PremiumButtonProps {
  size?: "default" | "sm" | "lg" | "xl";
  variant?: "default" | "outline" | "secondary" | "ghost" | "premium" | "accent";
  rounded?: "default" | "full";
  glow?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const PremiumButton = ({
  size = "default",
  variant = "default",
  rounded = "full",
  className = "",
  glow = false,
  icon,
  iconPosition = "left",
  children,
  ...props
}: PremiumButtonProps) => {
  // Define variant-specific styles
  const variantStyles = {
    default: "bg-gradient-primary text-black font-medium",
    outline: "border-2 border-primary hover:bg-primary/10 text-primary",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
    ghost: "bg-transparent hover:bg-neutral-800 text-white",
    premium: "bg-gradient-premium text-black font-medium",
    accent: "bg-gradient-accent text-black font-medium"
  };

  // Define size-specific styles
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    default: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
    xl: "text-lg px-8 py-4"
  };

  // Define glow effect based on variant
  const glowStyles = glow ? {
    default: "shadow-glow-primary",
    premium: "shadow-glow-premium",
    accent: "shadow-glow-accent",
    outline: "shadow-[0_0_15px_rgba(198,255,0,0.3)]",
    secondary: "",
    ghost: ""
  }[variant] : "";

  // Map to valid button size
  const buttonSize = size === "xl" ? "lg" : size;

  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 500 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { type: "spring", stiffness: 500 }
      }}
      className="inline-block"
    >
      <Button
        className={cn(
          "relative overflow-hidden",
          "transition-all duration-300",
          variantStyles[variant],
          sizeStyles[size],
          glowStyles,
          rounded === "full" ? "rounded-full" : "rounded-lg",
          "font-medium tracking-wide",
          className
        )}
        size={buttonSize}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {icon && iconPosition === "left" && (
            <span className="flex-shrink-0">{icon}</span>
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </span>
        
        {/* Hover effect overlay */}
        <motion.span
          className="absolute inset-0 bg-white/10 opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Subtle gradient animation for premium and accent variants */}
        {(variant === "premium" || variant === "accent" || variant === "default") && (
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "linear",
              repeatDelay: 1
            }}
          />
        )}
      </Button>
    </motion.div>
  );
};

export default PremiumButton;