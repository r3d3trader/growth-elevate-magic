/**
 * Premium Design System
 * 
 * This file defines the premium design system for Growth Elevate Magic
 * A sophisticated, high-end design system worthy of a $15,000 website
 */

export const PremiumDesign = {
  // Typography System
  typography: {
    // Premium font stack with fallbacks
    fontFamily: {
      primary: '"Montserrat", system-ui, sans-serif',
      secondary: '"Playfair Display", Georgia, serif',
      mono: '"JetBrains Mono", monospace'
    },
    // Refined font weights
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900
    },
    // Sophisticated size scale with perfect vertical rhythm
    fontSize: {
      xs: 'clamp(0.75rem, 0.7vw, 0.875rem)',
      sm: 'clamp(0.875rem, 0.8vw, 1rem)',
      base: 'clamp(1rem, 1vw, 1.125rem)',
      lg: 'clamp(1.125rem, 1.2vw, 1.25rem)',
      xl: 'clamp(1.25rem, 1.5vw, 1.5rem)',
      '2xl': 'clamp(1.5rem, 2vw, 1.875rem)',
      '3xl': 'clamp(1.875rem, 2.5vw, 2.25rem)',
      '4xl': 'clamp(2.25rem, 3vw, 3rem)',
      '5xl': 'clamp(3rem, 4vw, 3.75rem)',
      '6xl': 'clamp(3.75rem, 5vw, 4.5rem)',
      '7xl': 'clamp(4.5rem, 6vw, 6rem)'
    },
    // Line heights for perfect readability
    lineHeight: {
      none: '1',
      tight: '1.1',
      snug: '1.25',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    // Letter spacing for refined typography
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },

  // Enhanced Color System
  colors: {
    // Primary brand colors
    primary: {
      50: 'hsla(68, 100%, 95%, 1)',
      100: 'hsla(68, 100%, 90%, 1)',
      200: 'hsla(68, 100%, 80%, 1)',
      300: 'hsla(68, 100%, 70%, 1)',
      400: 'hsla(68, 100%, 65%, 1)',
      500: 'hsla(68, 100%, 60%, 1)', // Base primary color
      600: 'hsla(68, 100%, 55%, 1)',
      700: 'hsla(68, 100%, 45%, 1)',
      800: 'hsla(68, 100%, 35%, 1)',
      900: 'hsla(68, 100%, 25%, 1)',
      950: 'hsla(68, 100%, 15%, 1)'
    },
    // Secondary accent colors
    accent: {
      teal: {
        light: 'hsla(174, 100%, 73%, 1)',
        DEFAULT: 'hsla(174, 100%, 63%, 1)',
        dark: 'hsla(174, 100%, 33%, 1)'
      },
      purple: {
        light: 'hsla(267, 100%, 73%, 1)',
        DEFAULT: 'hsla(267, 100%, 63%, 1)',
        dark: 'hsla(267, 100%, 33%, 1)'
      },
      gold: {
        light: 'hsla(45, 100%, 73%, 1)',
        DEFAULT: 'hsla(45, 100%, 63%, 1)',
        dark: 'hsla(45, 100%, 33%, 1)'
      }
    },
    // Sophisticated neutral palette
    neutral: {
      50: 'hsla(220, 20%, 98%, 1)',
      100: 'hsla(220, 15%, 95%, 1)',
      200: 'hsla(220, 15%, 90%, 1)',
      300: 'hsla(220, 10%, 80%, 1)',
      400: 'hsla(220, 10%, 60%, 1)',
      500: 'hsla(220, 10%, 50%, 1)',
      600: 'hsla(220, 15%, 40%, 1)',
      700: 'hsla(220, 15%, 30%, 1)',
      800: 'hsla(220, 20%, 20%, 1)',
      900: 'hsla(220, 25%, 10%, 1)',
      950: 'hsla(220, 30%, 5%, 1)'
    },
    // Dark mode colors
    dark: {
      background: 'hsla(220, 25%, 8%, 1)',
      card: 'hsla(220, 25%, 12%, 1)',
      border: 'hsla(220, 25%, 16%, 1)',
      muted: 'hsla(220, 15%, 25%, 1)',
      text: {
        primary: 'hsla(220, 15%, 95%, 1)',
        secondary: 'hsla(220, 10%, 80%, 1)',
        muted: 'hsla(220, 10%, 60%, 1)'
      }
    },
    // Semantic colors
    semantic: {
      success: 'hsla(142, 76%, 45%, 1)',
      warning: 'hsla(38, 100%, 50%, 1)',
      error: 'hsla(0, 84%, 60%, 1)',
      info: 'hsla(200, 100%, 60%, 1)'
    }
  },

  // Premium Gradients
  gradients: {
    primary: 'linear-gradient(135deg, hsla(68, 100%, 60%, 1) 0%, hsla(80, 100%, 45%, 1) 100%)',
    accent: 'linear-gradient(135deg, hsla(174, 100%, 63%, 1) 0%, hsla(200, 100%, 60%, 1) 100%)',
    premium: 'linear-gradient(135deg, hsla(45, 100%, 63%, 1) 0%, hsla(38, 100%, 50%, 1) 100%)',
    dark: 'linear-gradient(135deg, hsla(220, 25%, 8%, 1) 0%, hsla(220, 25%, 12%, 1) 100%)',
    glass: 'linear-gradient(135deg, hsla(0, 0%, 100%, 0.05) 0%, hsla(0, 0%, 100%, 0.1) 100%)',
    text: 'linear-gradient(135deg, hsla(68, 100%, 60%, 1) 0%, hsla(80, 100%, 45%, 1) 100%)'
  },

  // Enhanced Shadows
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
    DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    'glow-primary': '0 0 20px rgba(198, 255, 0, 0.4)',
    'glow-accent': '0 0 20px rgba(0, 206, 209, 0.4)',
    'glow-premium': '0 0 20px rgba(255, 215, 0, 0.4)',
    none: 'none'
  },

  // Refined Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    DEFAULT: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    full: '9999px'
  },

  // Premium Animations
  animations: {
    // Timing functions
    easing: {
      DEFAULT: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth, professional easing
      bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    // Duration presets
    duration: {
      fastest: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
      slowest: '800ms'
    },
    // Animation presets
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      fadeInUp: {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' }
      },
      fadeInDown: {
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' }
      },
      scaleIn: {
        from: { opacity: 0, transform: 'scale(0.95)' },
        to: { opacity: 1, transform: 'scale(1)' }
      },
      slideInRight: {
        from: { transform: 'translateX(-20px)', opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 }
      },
      slideInLeft: {
        from: { transform: 'translateX(20px)', opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 }
      },
      pulse: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 }
      },
      shimmer: {
        '0%': { backgroundPosition: '-200% 0' },
        '100%': { backgroundPosition: '200% 0' }
      }
    }
  },

  // Spacing System
  spacing: {
    // Base spacing unit
    unit: '0.25rem',
    // Spacing scale
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    // Section spacing
    section: {
      sm: '3rem',
      md: '5rem',
      lg: '8rem',
      xl: '12rem'
    }
  },

  // Z-index System
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: 'auto',
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500
  },

  // Premium UI Effects
  effects: {
    glassmorphism: 'backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);',
    textGlow: 'text-shadow: 0 0 10px rgba(198, 255, 0, 0.7);',
    boxGlow: 'box-shadow: 0 0 20px rgba(198, 255, 0, 0.4);',
    shimmer: 'background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent); background-size: 200% 100%; animation: shimmer 2s infinite;'
  },

  // Responsive Breakpoints
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};