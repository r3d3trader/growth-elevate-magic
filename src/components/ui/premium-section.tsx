1import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PremiumDesign } from "@/config/premium-design-system";

interface PremiumSectionProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "gradient" | "dark" | "light" | "accent";
  spacing?: "sm" | "md" | "lg" | "xl";
  container?: boolean;
  divider?: boolean;
  pattern?: "grid" | "dots" | "radial" | "none";
  overlay?: boolean;
  id?: string;
}

const PremiumSection = ({
  className = "",
  children,
  variant = "default",
  spacing = "lg",
  container = true,
  divider = false,
  pattern = "none",
  overlay = false,
  id,
  ...props
}: PremiumSectionProps) => {
  // Define variant-specific styles
  const variantStyles = {
    default: "bg-background text-foreground",
    gradient: "bg-gradient-to-b from-background to-neutral-900 text-foreground",
    dark: "bg-neutral-900 text-neutral-100",
    light: "bg-neutral-100 text-neutral-900",
    accent: "bg-gradient-to-b from-primary/5 to-background text-foreground"
  };

  // Define spacing styles
  const spacingStyles = {
    sm: "py-12",
    md: "py-16",
    lg: "py-24",
    xl: "py-32"
  };

  // Define pattern styles
  const patternStyles = {
    grid: "bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px]",
    dots: "bg-[radial-gradient(circle_at_center,#e6ff0008_1px,transparent_1px)] bg-[size:20px_20px]",
    radial: "bg-[radial-gradient(ellipse_at_top,#e6ff0015,transparent_50%)]",
    none: ""
  };

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        variantStyles[variant],
        spacingStyles[spacing],
        className
      )}
      {...props}
    >
      {/* Background Pattern */}
      {pattern !== "none" && (
        <div className={cn("absolute inset-0 z-0 opacity-20", patternStyles[pattern])} />
      )}

      {/* Animated Gradient Orbs - for visual interest */}
      {overlay && (
        <>
          <motion.div 
            className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/5 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </>
      )}

      {/* Content Container */}
      <div className={cn("relative z-10", container && "container mx-auto px-4 sm:px-6")}>
        {children}
      </div>

      {/* Optional Divider */}
      {divider && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      )}
    </section>
  );
};

export default PremiumSection;