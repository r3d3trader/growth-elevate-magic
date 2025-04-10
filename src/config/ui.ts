export const UI = {
  colors: {
    primary: "hsl(68, 100%, 60%)", // Vibrant neon green
    dark: "hsl(210, 12%, 16%)", // Rich dark background
    light: "hsl(0, 0%, 98%)", // Clean white
    muted: "hsl(213, 13%, 56%)" // Softened text
  },
  gradients: {
    primary: "bg-gradient-to-br from-primary to-green-500",
    dark: "bg-gradient-to-b from-dark to-black",
    premium: "bg-gradient-to-br from-primary via-purple-500 to-blue-500"
  },
  animations: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    slideUp: {
      initial: { y: 24, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    stagger: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2
        }
      }
    }
  },
  shadows: {
    card: "shadow-[0_12px_40px_rgba(0,0,0,0.3)]",
    glow: "shadow-[0_0_30px_rgba(74,222,128,0.4)]",
    button: "shadow-[0_4px_14px_rgba(74,222,128,0.4)]"
  },
  text: {
    balance: "[text-wrap:balance]",
    pretty: "[text-wrap:pretty]",
    sizes: {
      display: "text-5xl md:text-7xl",
      heading: "text-3xl md:text-5xl",
      subhead: "text-xl md:text-2xl",
      body: "text-base md:text-lg"
    }
  },
  spacing: {
    section: "py-20 md:py-32",
    inner: "px-4 md:px-6"
  }
} as const;
