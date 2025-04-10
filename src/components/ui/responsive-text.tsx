import React from 'react';
import { cn } from "@/lib/utils";
import { LuxuryText } from "./premium-effects";

interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
  gradient?: boolean | 'primary' | 'gold';
  glow?: boolean;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: string;
}

/**
 * ResponsiveText - A mobile-first text component with built-in responsive typography
 * and consistent styling
 */
const ResponsiveText = ({
  children,
  className,
  as = 'p',
  size = 'base',
  gradient = false,
  glow = false,
  weight = 'normal',
  align = 'left',
  color,
}: ResponsiveTextProps) => {
  // Size mappings with mobile-first approach (smaller on mobile, larger on bigger screens)
  const sizeClasses = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'base': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-xl sm:text-2xl',
    '3xl': 'text-2xl sm:text-3xl',
    '4xl': 'text-3xl sm:text-4xl',
    '5xl': 'text-4xl sm:text-5xl',
    '6xl': 'text-4xl sm:text-5xl md:text-6xl',
    '7xl': 'text-5xl md:text-6xl lg:text-7xl',
    '8xl': 'text-5xl md:text-7xl lg:text-8xl',
  };

  // Weight classes
  const weightClasses = {
    'normal': 'font-normal',
    'medium': 'font-medium',
    'semibold': 'font-semibold',
    'bold': 'font-bold',
  };

  // Alignment classes
  const alignClasses = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right',
  };

  // If using gradient text, use LuxuryText component
  if (gradient) {
    return (
      <LuxuryText
        as={as}
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          alignClasses[align],
          className
        )}
        gradient={gradient === true ? 'primary' : gradient}
        glow={glow}
      >
        {children}
      </LuxuryText>
    );
  }

  // Otherwise use regular text with specified styling
  return React.createElement(
    as,
    {
      className: cn(
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        color && `text-${color}`,
        className
      )
    },
    children
  );
};

export default ResponsiveText;
