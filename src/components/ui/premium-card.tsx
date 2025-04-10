import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PremiumDesign } from "@/config/premium-design-system";

interface PremiumCardProps {
  className?: string;
  variant?: "default" | "glass" | "bordered" | "gradient" | "premium";
  hover?: "lift" | "glow" | "border" | "scale" | "none";
  animation?: "fadeIn" | "slideUp" | "slideIn" | "none";
  animationDelay?: number;
  children: React.ReactNode;
}

const PremiumCard = ({
  className = "",
  variant = "default",
  hover = "lift",
  animation = "none",
  animationDelay = 0,
  children,
  ...props
}: PremiumCardProps) => {
  // Define variant-specific styles
  const variantStyles = {
    default: "bg-card border border-neutral-800",
    glass: "bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50",
    bordered: "bg-card border-2 border-primary/30",
    gradient: "bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700/50",
    premium: "bg-gradient-to-br from-neutral-900 to-neutral-800 border border-accent-gold/30"
  };

  // Define hover effect styles
  const hoverStyles = {
    lift: "transition-all duration-300 hover:-translate-y-2",
    glow: "transition-all duration-300 hover:shadow-glow-primary",
    border: "transition-all duration-300 hover:border-primary/70",
    scale: "transition-all duration-300 hover:scale-[1.02]",
    none: ""
  };

  // Define animation variants for framer-motion
  const animationVariants = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay: animationDelay }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: animationDelay }
    },
    slideIn: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, delay: animationDelay }
    },
    none: {}
  };

  const MotionCard = motion(Card);

  return (
    <MotionCard
      className={cn(
        "rounded-xl overflow-hidden",
        "shadow-lg",
        variantStyles[variant],
        hoverStyles[hover],
        className
      )}
      {...(animation !== "none" ? animationVariants[animation] : {})}
      {...props}
    >
      {children}
    </MotionCard>
  );
};

// Export subcomponents with the main component
export {
  PremiumCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
};