/**
 * Premium Design Enhancements
 * 
 * This file extends the premium design system with additional high-end features
 * to create a truly luxurious $15,000 website experience.
 */

import { PremiumDesign } from "./premium-design-system";

export const PremiumEnhancements = {
  // Enhanced Typography System
  typography: {
    // Additional premium font pairings
    fontPairings: {
      primary: {
        heading: PremiumDesign.typography.fontFamily.secondary,
        body: PremiumDesign.typography.fontFamily.primary
      },
      modern: {
        heading: '"Playfair Display", Georgia, serif',
        body: '"Montserrat", system-ui, sans-serif'
      },
      elegant: {
        heading: '"Playfair Display", Georgia, serif',
        body: '"JetBrains Mono", monospace'
      },
      minimal: {
        heading: '"Montserrat", system-ui, sans-serif',
        body: '"Montserrat", system-ui, sans-serif'
      }
    },
    // Advanced typographic treatments
    treatments: {
      headline: {
        letterSpacing: '-0.02em',
        fontWeight: 700,
        lineHeight: 1.1
      },
      subheadline: {
        letterSpacing: '-0.01em',
        fontWeight: 600,
        lineHeight: 1.3
      },
      bodyLarge: {
        letterSpacing: '0.01em',
        fontWeight: 400,
        lineHeight: 1.6
      },
      caption: {
        letterSpacing: '0.03em',
        fontWeight: 500,
        lineHeight: 1.4,
        textTransform: 'uppercase'
      },
      quote: {
        fontStyle: 'italic',
        fontWeight: 500,
        lineHeight: 1.5
      }
    }
  },

  // Luxury Color Palettes
  colorPalettes: {
    luxury: {
      gold: {
        light: 'hsla(45, 100%, 90%, 1)',
        DEFAULT: 'hsla(45, 100%, 60%, 1)',
        dark: 'hsla(45, 100%, 40%, 1)'
      },
      platinum: {
        light: 'hsla(0, 0%, 95%, 1)',
        DEFAULT: 'hsla(0, 0%, 85%, 1)',
        dark: 'hsla(0, 0%, 75%, 1)'
      },
      emerald: {
        light: 'hsla(160, 100%, 85%, 1)',
        DEFAULT: 'hsla(160, 84%, 39%, 1)',
        dark: 'hsla(160, 84%, 25%, 1)'
      },
      sapphire: {
        light: 'hsla(210, 100%, 85%, 1)',
        DEFAULT: 'hsla(210, 84%, 39%, 1)',
        dark: 'hsla(210, 84%, 25%, 1)'
      },
      ruby: {
        light: 'hsla(350, 100%, 85%, 1)',
        DEFAULT: 'hsla(350, 84%, 39%, 1)',
        dark: 'hsla(350, 84%, 25%, 1)'
      }
    },
    monochrome: {
      white: 'hsla(0, 0%, 100%, 1)',
      offWhite: 'hsla(0, 0%, 98%, 1)',
      lightGray: 'hsla(0, 0%, 90%, 1)',
      mediumGray: 'hsla(0, 0%, 70%, 1)',
      darkGray: 'hsla(0, 0%, 30%, 1)',
      charcoal: 'hsla(0, 0%, 20%, 1)',
      black: 'hsla(0, 0%, 10%, 1)',
      trueBlack: 'hsla(0, 0%, 0%, 1)'
    }
  },

  // Premium Gradients
  gradients: {
    // Luxury gradients
    luxuryGold: 'linear-gradient(135deg, hsla(45, 100%, 60%, 1) 0%, hsla(36, 100%, 50%, 1) 100%)',
    luxuryPlatinum: 'linear-gradient(135deg, hsla(0, 0%, 95%, 1) 0%, hsla(0, 0%, 75%, 1) 100%)',
    luxuryEmerald: 'linear-gradient(135deg, hsla(160, 84%, 39%, 1) 0%, hsla(175, 84%, 39%, 1) 100%)',
    luxurySapphire: 'linear-gradient(135deg, hsla(210, 84%, 39%, 1) 0%, hsla(240, 84%, 39%, 1) 100%)',
    luxuryRuby: 'linear-gradient(135deg, hsla(350, 84%, 39%, 1) 0%, hsla(320, 84%, 39%, 1) 100%)',
    
    // Subtle gradients
    subtleLight: 'linear-gradient(135deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 95%, 1) 100%)',
    subtleDark: 'linear-gradient(135deg, hsla(0, 0%, 15%, 1) 0%, hsla(0, 0%, 10%, 1) 100%)',
    
    // Glass morphism gradients
    glassLight: 'linear-gradient(135deg, hsla(0, 0%, 100%, 0.8) 0%, hsla(0, 0%, 100%, 0.4) 100%)',
    glassDark: 'linear-gradient(135deg, hsla(0, 0%, 10%, 0.8) 0%, hsla(0, 0%, 5%, 0.4) 100%)'
  },

  // Premium Shadows
  shadows: {
    // Luxury shadows
    luxuryCard: '0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)',
    luxuryButton: '0 4px 12px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1)',
    luxuryGlow: '0 0 20px rgba(255, 215, 0, 0.4)',
    luxuryEmeraldGlow: '0 0 20px rgba(0, 168, 120, 0.4)',
    luxurySapphireGlow: '0 0 20px rgba(15, 82, 186, 0.4)',
    luxuryRubyGlow: '0 0 20px rgba(220, 20, 60, 0.4)',
    
    // Subtle shadows
    subtleRaised: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
    subtlePressed: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    
    // Glass morphism shadows
    glassShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(255, 255, 255, 0.05)'
  },

  // Premium Animations
  animations: {
    // Luxury animations
    luxury: {
      fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      },
      slideUp: {
        initial: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      },
      slideIn: {
        initial: { x: -30, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      },
      scale: {
        initial: { scale: 0.95, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      },
      stagger: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }
    },
    
    // Hover animations
    hover: {
      lift: {
        scale: 1.03,
        y: -5,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      },
      glow: {
        boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)',
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      },
      pulse: {
        scale: [1, 1.03, 1],
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      }
    },
    
    // Scroll animations
    scroll: {
      parallax: {
        y: [0, -30],
        transition: { ease: 'linear' }
      },
      reveal: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }
    }
  },

  // Premium UI Effects
  effects: {
    // Glass morphism
    glass: {
      light: 'bg-white/70 backdrop-blur-md border border-white/20',
      dark: 'bg-black/70 backdrop-blur-md border border-white/10'
    },
    
    // Neumorphism
    neumorphic: {
      light: 'bg-neutral-100 shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]',
      dark: 'bg-neutral-800 shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#262626]'
    },
    
    // Text effects
    text: {
      gradient: 'text-transparent bg-clip-text bg-gradient-to-r',
      glow: 'text-white text-shadow-[0_0_10px_rgba(255,255,255,0.5)]',
      goldGlow: 'text-[#FFD700] text-shadow-[0_0_10px_rgba(255,215,0,0.5)]'
    }
  },

  // Premium Spacing System
  spacing: {
    section: {
      sm: 'py-12 md:py-16',
      md: 'py-16 md:py-24',
      lg: 'py-24 md:py-32',
      xl: 'py-32 md:py-40'
    },
    container: {
      sm: 'max-w-5xl mx-auto px-4 sm:px-6',
      md: 'max-w-6xl mx-auto px-4 sm:px-6',
      lg: 'max-w-7xl mx-auto px-4 sm:px-6'
    },
    grid: {
      sm: 'gap-4 md:gap-6',
      md: 'gap-6 md:gap-8',
      lg: 'gap-8 md:gap-12'
    }
  },

  // Premium Border Treatments
  borders: {
    luxury: {
      gold: 'border border-[#FFD700]/30 hover:border-[#FFD700]/70',
      platinum: 'border border-neutral-300/30 hover:border-neutral-300/70',
      subtle: 'border border-neutral-800/10 hover:border-neutral-800/30'
    },
    rounded: {
      sm: 'rounded-md',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      xl: 'rounded-2xl',
      full: 'rounded-full'
    }
  },

  // Premium Layout Components
  layouts: {
    hero: {
      centered: 'flex flex-col items-center justify-center text-center',
      split: 'grid md:grid-cols-2 items-center gap-12',
      fullscreen: 'min-h-screen flex items-center'
    },
    section: {
      standard: 'py-24',
      narrow: 'py-24 max-w-4xl mx-auto',
      wide: 'py-24 max-w-7xl mx-auto'
    },
    grid: {
      features: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
      gallery: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
      testimonials: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
    }
  },

  // Premium Content Patterns
  patterns: {
    // Background patterns
    backgrounds: {
      grid: 'bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px]',
      dots: 'bg-[radial-gradient(circle_at_center,#e6ff0008_1px,transparent_1px)] bg-[size:20px_20px]',
      radial: 'bg-[radial-gradient(ellipse_at_top,#e6ff0015,transparent_50%)]'
    },
    
    // Content patterns
    content: {
      zigzag: 'even:md:flex-row-reverse',
      alternating: 'even:bg-card odd:bg-background'
    }
  }
};