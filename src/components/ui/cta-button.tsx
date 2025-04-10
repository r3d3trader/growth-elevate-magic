import React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { UI } from "@/config/ui";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends ButtonProps {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  rounded?: "default" | "full";
  children: React.ReactNode;
}

const CtaButton = ({
  size = "default",
  variant = "default",
  rounded = "full",
  className = "",
  children,
  ...props
}: CtaButtonProps) => (
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
        variant === 'default' ? UI.gradients.primary : '',
        variant === 'default' ? 'text-dark hover:text-dark/90' : '',
        variant === 'default' ? UI.shadows.button : '',
        "hover:shadow-lg",
        "font-medium tracking-wide",
        className
      )}
      variant={variant}
      size={size}
      rounded={rounded}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'default' && (
        <motion.span
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Button>
  </motion.div>
);

export default CtaButton;
