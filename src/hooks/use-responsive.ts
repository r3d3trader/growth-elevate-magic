import { useState, useEffect } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface BreakpointConfig {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

// Default breakpoints matching Tailwind CSS
const defaultBreakpoints: BreakpointConfig = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

/**
 * Hook for responsive design decisions in React components
 * Provides current breakpoint and utility methods for responsive logic
 */
export function useResponsive(customBreakpoints?: Partial<BreakpointConfig>) {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  
  // Initialize with a reasonable default for SSR
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Skip for SSR
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setDimensions({ width, height });
      
      // Set current breakpoint
      if (width < breakpoints.sm) {
        setBreakpoint('xs');
        setIsMobile(true);
      } else if (width < breakpoints.md) {
        setBreakpoint('sm');
        setIsMobile(true);
      } else if (width < breakpoints.lg) {
        setBreakpoint('md');
        setIsMobile(false);
      } else if (width < breakpoints.xl) {
        setBreakpoint('lg');
        setIsMobile(false);
      } else if (width < breakpoints['2xl']) {
        setBreakpoint('xl');
        setIsMobile(false);
      } else {
        setBreakpoint('2xl');
        setIsMobile(false);
      }
    };
    
    // Initial check
    handleResize();
    
    // Listen for window resize
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoints]);
  
  // Helper function to check if current breakpoint is at least the provided one
  const isBreakpoint = (bp: Breakpoint) => {
    const breakpointValues = Object.keys(breakpoints) as Breakpoint[];
    const current = breakpointValues.indexOf(breakpoint);
    const target = breakpointValues.indexOf(bp);
    return current >= target;
  };
  
  return {
    breakpoint,
    dimensions,
    isMobile,
    isBreakpoint,
    isXs: breakpoint === 'xs',
    isSm: isBreakpoint('sm'),
    isMd: isBreakpoint('md'),
    isLg: isBreakpoint('lg'),
    isXl: isBreakpoint('xl'),
    is2Xl: isBreakpoint('2xl'),
    below: {
      sm: breakpoint === 'xs',
      md: ['xs', 'sm'].includes(breakpoint),
      lg: ['xs', 'sm', 'md'].includes(breakpoint),
      xl: ['xs', 'sm', 'md', 'lg'].includes(breakpoint),
      '2xl': ['xs', 'sm', 'md', 'lg', 'xl'].includes(breakpoint),
    }
  };
}

export default useResponsive;
