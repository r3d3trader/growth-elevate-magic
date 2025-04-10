import React from "react";
import { motion } from "framer-motion";
import { PremiumEffects, LuxuryText, LuxuryDivider } from "@/components/ui/premium-effects";
import { PremiumEnhancements } from "@/config/premium-enhancements";
import PremiumButton from "@/components/ui/premium-button";
import { Sparkles, Zap, ArrowRight } from "lucide-react";

interface PremiumCTAProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimaryClick?: (e: React.MouseEvent) => void;
  onSecondaryClick?: (e: React.MouseEvent) => void;
  variant?: "standard" | "gradient" | "glass" | "minimal";
  accentColor?: "gold" | "primary" | "emerald" | "sapphire" | "ruby";
}

export default function PremiumCTA({
  title = "Ready to Transform Your Business?",
  subtitle = "Schedule a complimentary strategy call to discover how our premium solutions can accelerate your growth.",
  primaryCta = "Schedule Strategy Call",
  secondaryCta = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  variant = "standard",
  accentColor = "gold"
}: PremiumCTAProps) {
  // Color mapping
  const colorMap = {
    gold: {
      text: "text-[#cb9b51]",
      bg: "bg-[#cb9b51]",
      bgLight: "bg-[#cb9b51]/10",
      border: "border-[#cb9b51]/30",
      glow: "shadow-[0_0_20px_rgba(203,155,81,0.4)]"
    },
    primary: {
      text: "text-primary",
      bg: "bg-primary",
      bgLight: "bg-primary/10",
      border: "border-primary/30",
      glow: "shadow-[0_0_20px_rgba(198,255,0,0.4)]"
    },
    emerald: {
      text: "text-[#50C878]",
      bg: "bg-[#50C878]",
      bgLight: "bg-[#50C878]/10",
      border: "border-[#50C878]/30",
      glow: "shadow-[0_0_20px_rgba(80,200,120,0.4)]"
    },
    sapphire: {
      text: "text-[#0F52BA]",
      bg: "bg-[#0F52BA]",
      bgLight: "bg-[#0F52BA]/10",
      border: "border-[#0F52BA]/30",
      glow: "shadow-[0_0_20px_rgba(15,82,186,0.4)]"
    },
    ruby: {
      text: "text-[#E0115F]",
      bg: "bg-[#E0115F]",
      bgLight: "bg-[#E0115F]/10",
      border: "border-[#E0115F]/30",
      glow: "shadow-[0_0_20px_rgba(224,17,95,0.4)]"
    }
  };

  // Variant styles
  const variantStyles = {
    standard: "bg-card border border-neutral-800",
    gradient: accentColor === "gold" 
      ? "bg-gradient-to-br from-neutral-900 to-neutral-800 border border-[#cb9b51]/20" 
      : "bg-gradient-to-br from-neutral-900 to-neutral-800 border border-primary/20",
    glass: "backdrop-blur-md bg-black/40 border border-white/10",
    minimal: ""
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements for different variants */}
      {variant === "standard" && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e6ff0008_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
        </div>
      )}
      
      {variant === "gradient" && (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-900 to-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
          
          {/* Animated Gradient Orb */}
          <motion.div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full ${accentColor === "gold" ? "bg-[#cb9b51]/5" : "bg-primary/5"} blur-[100px]`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      )}
      
      {variant === "glass" && (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-900/50 to-background/50">
          {/* Blurred background image could be added here */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>
      )}

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          {variant !== "minimal" ? (
            <PremiumEffects
              effect={variant === "glass" ? "glass" : "none"}
              className={`${variantStyles[variant]} rounded-2xl p-10 md:p-16`}
            >
              <div className="text-center">
                <LuxuryText
                  as="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                  gradient={accentColor}
                  font="luxury-display"
                  animation="fadeIn"
                  glow
                >
                  {title}
                </LuxuryText>
                
                <LuxuryDivider 
                  variant="gradient" 
                  color={accentColor} 
                  width="narrow" 
                  animation 
                  className="my-8"
                />
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-xl text-neutral-300 font-luxury-serif mb-12 max-w-2xl mx-auto"
                >
                  {subtitle}
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <PremiumButton 
                    variant={accentColor === "gold" ? "premium" : "default"}
                    size="lg"
                    className="px-8 py-6 text-lg"
                    glow
                    icon={<Zap className="w-5 h-5" />}
                    onClick={onPrimaryClick}
                  >
                    {primaryCta}
                  </PremiumButton>
                  
                  <PremiumButton 
                    variant="outline"
                    size="lg"
                    className={`px-8 py-6 text-lg ${colorMap[accentColor].border} hover:${colorMap[accentColor].bgLight} ${colorMap[accentColor].text}`}
                    icon={<ArrowRight className="w-5 h-5" />}
                    onClick={onSecondaryClick}
                  >
                    {secondaryCta}
                  </PremiumButton>
                </motion.div>
              </div>
            </PremiumEffects>
          ) : (
            // Minimal variant without card background
            <div className="text-center py-8">
              <LuxuryText
                as="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                gradient={accentColor}
                font="luxury-display"
                animation="fadeIn"
                glow
              >
                {title}
              </LuxuryText>
              
              <LuxuryDivider 
                variant="gradient" 
                color={accentColor} 
                width="narrow" 
                animation 
                className="my-8"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl text-neutral-300 font-luxury-serif mb-12 max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <PremiumButton 
                  variant={accentColor === "gold" ? "premium" : "default"}
                  size="lg"
                  className="px-8 py-6 text-lg"
                  glow
                  icon={<Zap className="w-5 h-5" />}
                  onClick={onPrimaryClick}
                >
                  {primaryCta}
                </PremiumButton>
                
                <PremiumButton 
                  variant="outline"
                  size="lg"
                  className={`px-8 py-6 text-lg ${colorMap[accentColor].border} hover:${colorMap[accentColor].bgLight} ${colorMap[accentColor].text}`}
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={onSecondaryClick}
                >
                  {secondaryCta}
                </PremiumButton>
              </motion.div>
            </div>
          )}
          
          {/* Optional badge or trust indicators could be added here */}
          {variant !== "minimal" && (
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <PremiumEffects 
                effect="glass" 
                className="px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
                hover="glow"
                color={accentColor}
              >
                <Sparkles className={`w-4 h-4 ${colorMap[accentColor].text}`} />
                <span className={colorMap[accentColor].text}>60-Day Money-Back Guarantee</span>
              </PremiumEffects>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}