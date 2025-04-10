import React from 'react';
import { cn } from "@/lib/utils";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fluid?: boolean;
}

/**
 * ResponsiveContainer - A mobile-first container component that provides consistent
 * spacing and padding across all screen sizes
 */
const ResponsiveContainer = ({
  children,
  className,
  as: Component = 'div',
  fluid = false,
}: ResponsiveContainerProps) => {
  return (
    <Component
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        !fluid && "container",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default ResponsiveContainer;
