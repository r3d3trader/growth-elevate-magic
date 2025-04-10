import type { Config } from "tailwindcss"
import { PremiumDesign } from "./src/config/premium-design-system"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [PremiumDesign.typography.fontFamily.primary],
        serif: [PremiumDesign.typography.fontFamily.secondary],
        mono: [PremiumDesign.typography.fontFamily.mono],
      },
      fontSize: PremiumDesign.typography.fontSize,
      lineHeight: PremiumDesign.typography.lineHeight,
      letterSpacing: PremiumDesign.typography.letterSpacing,
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          ...PremiumDesign.colors.primary,
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          ...PremiumDesign.colors.accent,
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: {
            DEFAULT: "hsl(var(--sidebar-primary))",
            foreground: "hsl(var(--sidebar-primary-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--sidebar-accent))",
            foreground: "hsl(var(--sidebar-accent-foreground))",
          },
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        agency: {
          neon: "#c6ff00",
          "neon-dark": "#99cc00",
          dark: "#121212",
          "dark-lighter": "#1a1a1a",
          "dark-lightest": "#222222",
          black: "#0a0a0a",
        },
        neutral: PremiumDesign.colors.neutral,
        semantic: PremiumDesign.colors.semantic,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        ...PremiumDesign.borderRadius,
      },
      boxShadow: {
        ...PremiumDesign.shadows,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        ...PremiumDesign.animations.keyframes,
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "fade-in-down": "fadeInDown 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s infinite",
      },
      transitionTimingFunction: PremiumDesign.animations.easing,
      transitionDuration: PremiumDesign.animations.duration,
      backgroundImage: {
        'gradient-primary': PremiumDesign.gradients.primary,
        'gradient-accent': PremiumDesign.gradients.accent,
        'gradient-premium': PremiumDesign.gradients.premium,
        'gradient-dark': PremiumDesign.gradients.dark,
        'gradient-glass': PremiumDesign.gradients.glass,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
