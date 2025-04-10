import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps, MotionProps, Variant, Transition, TargetAndTransition, VariantLabels } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "premium" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  href?: string;
  external?: boolean;
  // Explicitly define animation-related props with more precise types
  animate?: TargetAndTransition | VariantLabels;
  initial?: TargetAndTransition | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  transition?: Transition;
  whileHover?: TargetAndTransition | VariantLabels;
  whileTap?: TargetAndTransition | VariantLabels;
  // Omit incompatible event handlers
  onAnimationStart?: never;
  onAnimationComplete?: never;
  onDragStart?: never;
  onDragEnd?: never;
  onDrag?: never;
  // Add a catch-all for additional props
  [key: string]: any;
}

// Adjust the type to include animation props and additional props
type MotionButtonProps = Omit<HTMLMotionProps<"button">, keyof EnhancedButtonProps> & EnhancedButtonProps;

const EnhancedButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({
    className,
    variant = "default",
    size = "md",
    icon,
    iconPosition = "left",
    loading = false,
    glow = false,
    fullWidth = false,
    href,
    external = false,
    children,
    animate,
    initial,
    exit,
    transition,
    whileHover,
    whileTap,
    ...props
  }, ref) => {
    // Define variant styles
    const variantStyles = {
      default: "bg-neutral-800 hover:bg-neutral-700 text-white",
      premium: "bg-[#c6ff00] hover:bg-[#d4ff4d] text-black font-medium",
      outline: "bg-transparent border border-white/20 hover:bg-white/5 text-white",
      ghost: "bg-transparent hover:bg-white/5 text-white",
      link: "bg-transparent p-0 h-auto text-[#c6ff00] hover:underline"
    };
    
    // Define size styles
    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl"
    };
    
    // Define glow effect
    const glowEffect = glow 
      ? variant === "premium" 
        ? "shadow-[0_0_15px_rgba(198,255,0,0.5)] hover:shadow-[0_0_25px_rgba(198,255,0,0.7)]" 
        : "shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
      : "";
    
    // Define loading animation
    const loadingAnimation = loading ? (
      <svg 
        className={`animate-spin -ml-1 mr-2 h-4 w-4 ${variant === "premium" ? "text-black" : "text-white"}`} 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    ) : null;
    
    // Common content component to maintain consistency between button and link
    const ButtonContent = () => (
      <>
        {/* Button content with loading state and icon positioning */}
        <span className="relative z-10 flex items-center">
          {loading && loadingAnimation}
          {icon && iconPosition === "left" && !loading && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className="ml-2">{icon}</span>
          )}
        </span>
        
        {/* Animated background effect for premium variant */}
        {variant === "premium" && (
          <motion.span
            className="absolute inset-0 rounded-md opacity-0 bg-gradient-to-r from-[#c6ff00] via-[#d4ff4d] to-[#c6ff00] z-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </>
    );
    
    // Render as a link if href is provided
    if (href) {
      if (external) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "relative inline-flex items-center justify-center rounded-md transition-all duration-300 ease-out",
              variantStyles[variant],
              sizeStyles[size],
              glowEffect,
              fullWidth ? "w-full" : "",
              className
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...(initial && { initial })}
            {...(animate && { animate })}
            {...(exit && { exit })}
            {...(transition && { transition })}
            {...props}
          >
            <ButtonContent />
          </motion.a>
        );
      }
      
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            fullWidth ? "w-full" : "inline-block"
          )}
        >
          <Link
            to={href}
            className={cn(
              "relative inline-flex items-center justify-center rounded-md transition-all duration-300 ease-out",
              variantStyles[variant],
              sizeStyles[size],
              glowEffect,
              fullWidth ? "w-full" : "",
              className
            )}
            {...props}
          >
            <ButtonContent />
          </Link>
        </motion.div>
      );
    }
    
    // Default as button
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-md transition-all duration-300 ease-out",
          variantStyles[variant],
          sizeStyles[size],
          glowEffect,
          fullWidth ? "w-full" : "",
          loading ? "opacity-90 cursor-wait" : "",
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading || props.disabled}
        {...(initial && { initial })}
        {...(animate && { animate })}
        {...(exit && { exit })}
        {...(transition && { transition })}
        {...props}
      >
        <ButtonContent />
      </motion.button>
    );
  }
);

export default EnhancedButton;
