import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star, Zap } from "lucide-react";
import { UI } from "@/config/ui";
import { PremiumEnhancements } from "@/config/premium-enhancements";
import PremiumButton from "@/components/ui/premium-button";
import { PremiumEffects, LuxuryText, LuxuryDivider } from "@/components/ui/premium-effects";

interface PremiumHeroProps {
  onSubmit: (e: React.FormEvent) => void;
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export default function PremiumHero({ 
  onSubmit, 
  title = "Transform Your Business", 
  subtitle = "Premium digital solutions that deliver measurable results and accelerate your growth trajectory.",
  primaryCta = "Schedule Strategy Call",
  secondaryCta = "View Case Studies"
}: PremiumHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-background to-neutral-900/90">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-[#cb9b51]/5 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Subtle animated lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div 
            className="absolute top-[10%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute top-[60%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#cb9b51] to-transparent"
            animate={{
              x: ["100%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 py-24 px-4 sm:px-6">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={PremiumEnhancements.animations.luxury.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Luxury Badge */}
          <motion.div 
            className="inline-block mb-8"
            variants={PremiumEnhancements.animations.luxury.fadeIn}
          >
            <PremiumEffects 
              effect="glass" 
              className="px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
              hover="glow"
              color="gold"
            >
              <Star className="w-4 h-4 text-[#cb9b51]" />
              <span className="text-[#cb9b51]">Premium Experience</span>
            </PremiumEffects>
          </motion.div>
          
          {/* Headline */}
          <motion.div 
            className="mb-8"
            variants={PremiumEnhancements.animations.luxury.slideUp}
          >
            <LuxuryText 
              as="h1"
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-balance mb-4"
              gradient="gold"
              font="luxury-display"
              glow
            >
              {title}
            </LuxuryText>
            <LuxuryText 
              as="h2"
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-balance"
              font="luxury-display"
            >
              with Growth Elevate Magic
            </LuxuryText>
          </motion.div>

          {/* Luxury Divider */}
          <LuxuryDivider 
            variant="gradient" 
            color="gold" 
            width="narrow" 
            animation 
            className="my-10"
          />

          {/* Subhead */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-luxury-serif"
            variants={{
              ...PremiumEnhancements.animations.luxury.slideUp,
              transition: { ...PremiumEnhancements.animations.luxury.slideUp.transition, delay: 0.2 }
            }}
          >
            {subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            variants={{
              ...PremiumEnhancements.animations.luxury.slideUp,
              transition: { ...PremiumEnhancements.animations.luxury.slideUp.transition, delay: 0.4 }
            }}
          >
            <PremiumButton 
              variant="premium"
              size="lg"
              className="px-8 py-6 text-lg"
              glow
              icon={<Zap className="w-5 h-5" />}
              onClick={onSubmit}
            >
              {primaryCta}
            </PremiumButton>
            <PremiumButton 
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-[#cb9b51]/30 hover:bg-[#cb9b51]/5 text-[#cb9b51]"
            >
              <Star className="w-5 h-5 mr-2" />
              {secondaryCta}
            </PremiumButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div 
              className="flex flex-col items-center text-muted-foreground"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-medium mb-2">Scroll to Explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}