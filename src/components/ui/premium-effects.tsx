import React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { PremiumDesign } from "@/config/premium-design-system";
import { PremiumEnhancements } from "@/config/premium-enhancements";

interface PremiumEffectsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  effect?: "glass" | "glow" | "gradient" | "neumorphic" | "luxury" | "none";
  animation?: "fadeIn" | "slideUp" | "slideIn" | "scale" | "none";
  animationDelay?: number;
  hover?: "lift" | "glow" | "pulse" | "none";
  color?: "gold" | "platinum" | "emerald" | "sapphire" | "ruby" | "primary" | "none";
  as?: React.ElementType;
  motionProps?: MotionProps;
}

export const PremiumEffects = ({
  children,
  className = "",
  effect = "none",
  animation = "none",
  animationDelay = 0,
  hover = "none",
  color = "none",
  as: Component = motion.div,
  motionProps,
  ...props
}: PremiumEffectsProps) => {
  // Define effect-specific styles
  const effectStyles = {
    glass: "bg-black/40 backdrop-blur-md border border-white/10",
    glow: color === "gold" ? "shadow-[0_0_20px_rgba(255,215,0,0.4)]" :
          color === "emerald" ? "shadow-[0_0_20px_rgba(0,168,120,0.4)]" :
          color === "sapphire" ? "shadow-[0_0_20px_rgba(15,82,186,0.4)]" :
          color === "ruby" ? "shadow-[0_0_20px_rgba(220,20,60,0.4)]" :
          color === "platinum" ? "shadow-[0_0_20px_rgba(229,228,226,0.4)]" :
          "shadow-[0_0_20px_rgba(198,255,0,0.4)]",
    gradient: color === "gold" ? "bg-gradient-to-br from-[#f6e27a] to-[#cb9b51]" :
              color === "emerald" ? "bg-gradient-to-br from-[#50C878] to-[#009473]" :
              color === "sapphire" ? "bg-gradient-to-br from-[#0F52BA] to-[#000080]" :
              color === "ruby" ? "bg-gradient-to-br from-[#E0115F] to-[#900C3F]" :
              color === "platinum" ? "bg-gradient-to-br from-[#E5E4E2] to-[#B0B0B0]" :
              "bg-gradient-primary",
    neumorphic: "bg-neutral-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#262626]",
    luxury: color === "gold" ? "border border-[#cb9b51]/30" :
            color === "platinum" ? "border border-[#E5E4E2]/30" :
            "border border-primary/30",
    none: ""
  };

  // Define animation variants
  const animationVariants = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8, delay: animationDelay, ease: [0.16, 1, 0.3, 1] }
    },
    slideUp: {
      initial: { y: 30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, delay: animationDelay, ease: [0.16, 1, 0.3, 1] }
    },
    slideIn: {
      initial: { x: -30, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.8, delay: animationDelay, ease: [0.16, 1, 0.3, 1] }
    },
    scale: {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.8, delay: animationDelay, ease: [0.16, 1, 0.3, 1] }
    },
    none: {}
  };

  // Define hover animations
  const hoverAnimations = {
    lift: {
      whileHover: { scale: 1.03, y: -5, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
    },
    glow: {
      whileHover: { 
        boxShadow: color === "gold" ? "0 0 30px rgba(255,215,0,0.6)" :
                  color === "emerald" ? "0 0 30px rgba(0,168,120,0.6)" :
                  color === "sapphire" ? "0 0 30px rgba(15,82,186,0.6)" :
                  color === "ruby" ? "0 0 30px rgba(220,20,60,0.6)" :
                  color === "platinum" ? "0 0 30px rgba(229,228,226,0.6)" :
                  "0 0 30px rgba(198,255,0,0.6)",
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }
    },
    pulse: {
      animate: {
        scale: [1, 1.03, 1],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
    },
    none: {}
  };

  return (
    <Component
      className={cn(
        effectStyles[effect],
        className
      )}
      {...(animation !== "none" ? animationVariants[animation] : {})}
      {...(hover !== "none" ? hoverAnimations[hover] : {})}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};

// Luxury Text Component
interface LuxuryTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  gradient?: "gold" | "platinum" | "emerald" | "sapphire" | "ruby" | "primary" | "none";
  animation?: "fadeIn" | "slideUp" | "slideIn" | "none";
  animationDelay?: number;
  glow?: boolean;
  font?: "luxury-serif" | "luxury-display" | "luxury-sans" | "elegant" | "minimal" | "classic" | "sans" | "serif";
}

export const LuxuryText = ({
  children,
  className = "",
  as: Component = motion.div,
  gradient = "none",
  animation = "none",
  animationDelay = 0,
  glow = false,
  font = "sans",
  ...props
}: LuxuryTextProps) => {
  // Define gradient styles
  const gradientStyles = {
    gold: "text-transparent bg-clip-text bg-gradient-to-r from-[#f6e27a] to-[#cb9b51]",
    platinum: "text-transparent bg-clip-text bg-gradient-to-r from-[#E5E4E2] to-[#B0B0B0]",
    emerald: "text-transparent bg-clip-text bg-gradient-to-r from-[#50C878] to-[#009473]",
    sapphire: "text-transparent bg-clip-text bg-gradient-to-r from-[#0F52BA] to-[#000080]",
    ruby: "text-transparent bg-clip-text bg-gradient-to-r from-[#E0115F] to-[#900C3F]",
    primary: "text-transparent bg-clip-text bg-gradient-primary",
    none: ""
  };

  // Define font styles
  const fontStyles = {
    "luxury-serif": "font-luxury-serif",
    "luxury-display": "font-luxury-display",
    "luxury-sans": "font-luxury-sans",
    "elegant": "font-elegant",
    "minimal": "font-minimal",
    "classic": "font-classic",
    "sans": "font-sans",
    "serif": "font-serif"
  };

  // Define animation variants
  const animationVariants = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8, delay: animationDelay, ease: [0.16, 1, 0.3, 1] }
    },
    slideUp: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, delay: animationDelay, ease: [0.16, 1, 0.3, 1] }
    },
    slideIn: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.8, delay: animationDelay, ease: [0.16, 1, 0.3, 1] }
    },
    none: {}
  };

  return (
    <Component
      className={cn(
        gradientStyles[gradient],
        fontStyles[font],
        glow && (gradient === "gold" ? "text-shadow-gold" : "text-shadow-primary"),
        "tracking-luxury",
        className
      )}
      {...(animation !== "none" ? animationVariants[animation] : {})}
      {...props}
    >
      {children}
    </Component>
  );
};

// Luxury Divider Component
interface LuxuryDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "line" | "dots" | "gradient" | "glow";
  color?: "gold" | "platinum" | "emerald" | "sapphire" | "ruby" | "primary";
  width?: "full" | "wide" | "medium" | "narrow";
  animation?: boolean;
}

export const LuxuryDivider = ({
  className = "",
  variant = "line",
  color = "primary",
  width = "medium",
  animation = false,
  ...props
}: LuxuryDividerProps) => {
  // Define variant styles
  const variantStyles = {
    line: "h-px",
    dots: "h-px bg-dotted",
    gradient: "h-[2px]",
    glow: "h-px"
  };

  // Define color styles
  const colorStyles = {
    gold: variant === "gradient" ? "bg-gradient-to-r from-transparent via-[#cb9b51] to-transparent" : "bg-[#cb9b51]",
    platinum: variant === "gradient" ? "bg-gradient-to-r from-transparent via-[#E5E4E2] to-transparent" : "bg-[#E5E4E2]",
    emerald: variant === "gradient" ? "bg-gradient-to-r from-transparent via-[#50C878] to-transparent" : "bg-[#50C878]",
    sapphire: variant === "gradient" ? "bg-gradient-to-r from-transparent via-[#0F52BA] to-transparent" : "bg-[#0F52BA]",
    ruby: variant === "gradient" ? "bg-gradient-to-r from-transparent via-[#E0115F] to-transparent" : "bg-[#E0115F]",
    primary: variant === "gradient" ? "bg-gradient-to-r from-transparent via-primary to-transparent" : "bg-primary"
  };

  // Define width styles
  const widthStyles = {
    full: "w-full",
    wide: "w-3/4 mx-auto",
    medium: "w-1/2 mx-auto",
    narrow: "w-1/4 mx-auto"
  };

  // Define glow styles
  const glowStyles = variant === "glow" ? {
    gold: "shadow-[0_0_5px_#cb9b51]",
    platinum: "shadow-[0_0_5px_#E5E4E2]",
    emerald: "shadow-[0_0_5px_#50C878]",
    sapphire: "shadow-[0_0_5px_#0F52BA]",
    ruby: "shadow-[0_0_5px_#E0115F]",
    primary: "shadow-[0_0_5px_rgba(198,255,0,0.8)]"
  }[color] : "";

  return (
    <div
      className={cn(
        "my-8",
        variantStyles[variant],
        colorStyles[color],
        widthStyles[width],
        variant === "glow" && glowStyles,
        className
      )}
      {...(animation ? {
        style: {
          // Simple inline animation styling
          transition: "all 1s ease-out"
        }
      } : {})}
      {...props}
    />
  );
};

// Export all components
export default PremiumEffects;