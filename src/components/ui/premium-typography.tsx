import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PremiumDesign } from "@/config/premium-design-system";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
type TextWeight = "light" | "regular" | "medium" | "semibold" | "bold" | "black";
type TextAlign = "left" | "center" | "right" | "justify";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: HeadingLevel | "p" | "span" | "div";
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  color?: string;
  gradient?: boolean;
  animate?: boolean;
  animationDelay?: number;
  muted?: boolean;
  tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
  leading?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
  font?: "sans" | "serif" | "mono";
  balance?: boolean;
}

export const PremiumTypography = ({
  children,
  className = "",
  as = "p",
  size = "base",
  weight = "regular",
  align = "left",
  color = "",
  gradient = false,
  animate = false,
  animationDelay = 0,
  muted = false,
  tracking = "normal",
  leading = "normal",
  font = "sans",
  balance = false,
  ...props
}: TypographyProps) => {
  // Define size-specific styles
  const sizeStyles: Record<TextSize, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
  };

  // Define weight-specific styles
  const weightStyles: Record<TextWeight, string> = {
    light: "font-light",
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black",
  };

  // Define alignment styles
  const alignStyles: Record<TextAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  // Define tracking (letter-spacing) styles
  const trackingStyles: Record<string, string> = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest",
  };

  // Define leading (line-height) styles
  const leadingStyles: Record<string, string> = {
    none: "leading-none",
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };

  // Define font family styles
  const fontStyles: Record<string, string> = {
    sans: "font-sans",
    serif: "font-serif",
    mono: "font-mono",
  };

  // Combine all styles
  const combinedStyles = cn(
    sizeStyles[size],
    weightStyles[weight],
    alignStyles[align],
    trackingStyles[tracking],
    leadingStyles[leading],
    fontStyles[font],
    balance && "[text-wrap:balance]",
    muted && "text-muted-foreground",
    gradient && "text-transparent bg-clip-text bg-gradient-primary",
    color && `text-${color}`,
    className
  );

  // Animation variants for framer-motion
  const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: animationDelay }
  };

  // Dynamically create the component based on the 'as' prop
  const Component = animate ? motion[as as keyof typeof motion] : as;

  return animate ? (
    <Component
      className={combinedStyles}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={animationVariants}
      {...props}
    >
      {children}
    </Component>
  ) : (
    <Component className={combinedStyles} {...props}>
      {children}
    </Component>
  );
};

// Convenience components for common typography elements
export const Heading = (props: TypographyProps) => (
  <PremiumTypography
    as="h2"
    size="4xl"
    weight="bold"
    tracking="tight"
    leading="tight"
    {...props}
  />
);

export const Subheading = (props: TypographyProps) => (
  <PremiumTypography
    as="h3"
    size="2xl"
    weight="semibold"
    tracking="normal"
    leading="snug"
    {...props}
  />
);

export const Paragraph = (props: TypographyProps) => (
  <PremiumTypography
    as="p"
    size="base"
    weight="regular"
    leading="relaxed"
    {...props}
  />
);

export const Display = (props: TypographyProps) => (
  <PremiumTypography
    as="h1"
    size="6xl"
    weight="bold"
    tracking="tight"
    leading="tight"
    {...props}
  />
);

export const Caption = (props: TypographyProps) => (
  <PremiumTypography
    as="p"
    size="sm"
    weight="medium"
    muted={true}
    {...props}
  />
);

export const GradientText = (props: TypographyProps) => (
  <PremiumTypography
    gradient={true}
    {...props}
  />
);