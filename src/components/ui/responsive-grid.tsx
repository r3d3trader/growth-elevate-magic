import React from 'react';
import { cn } from "@/lib/utils";

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    mobile?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: {
    mobile?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  } | number;
}

/**
 * ResponsiveGrid - A mobile-first grid component that provides consistent 
 * column layouts across different screen sizes
 */
const ResponsiveGrid = ({
  children,
  className,
  cols = { mobile: 1, md: 2, lg: 3 },
  gap = { mobile: 4, md: 6, lg: 8 },
}: ResponsiveGridProps) => {
  // Convert gap to class strings if object
  const gapClasses = typeof gap === 'number' 
    ? `gap-${gap}` 
    : cn(
        gap.mobile && `gap-${gap.mobile}`,
        gap.sm && `sm:gap-${gap.sm}`,
        gap.md && `md:gap-${gap.md}`,
        gap.lg && `lg:gap-${gap.lg}`,
        gap.xl && `xl:gap-${gap.xl}`,
      );
  
  // Convert columns to grid template column classes
  const colClasses = cn(
    cols.mobile && `grid-cols-${cols.mobile}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
  );
  
  return (
    <div className={cn("grid", colClasses, gapClasses, className)}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;
