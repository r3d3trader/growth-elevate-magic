
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  children,
  icon = true,
  ...props
}) => {
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-agency-blue to-agency-indigo text-white hover:shadow-lg hover:shadow-agency-blue/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1",
    secondary:
      "bg-white text-agency-blue shadow-md border border-agency-blue/20 hover:border-agency-blue hover:shadow-lg hover:shadow-agency-blue/10 transition-all duration-300 ease-in-out transform hover:-translate-y-1",
    outline:
      "bg-transparent border border-agency-blue text-agency-blue hover:bg-agency-blue/5 transition-all duration-300 ease-in-out",
  };

  const sizeClasses = {
    sm: "py-2 px-4 text-sm font-medium rounded-md",
    md: "py-3 px-6 text-base font-medium rounded-lg",
    lg: "py-4 px-8 text-lg font-medium rounded-lg",
  };

  return (
    <button
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        "flex items-center justify-center gap-2 font-semibold animate-fade-in",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="h-4 w-4" />}
    </button>
  );
};

export default CtaButton;
