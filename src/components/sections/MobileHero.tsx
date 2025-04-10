import React from "react";
import { motion } from "framer-motion";
import ResponsiveContainer from "@/components/ui/responsive-container";
import EnhancedButton from "@/components/ui/enhanced-button";
import ResponsiveText from "@/components/ui/responsive-text";
import { ArrowRight, Play, Star } from "lucide-react";
import EnhancedParticles from "@/components/ui/enhanced-particles";

interface MobileHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: {
    text: string;
    icon?: React.ReactNode;
  };
  cta?: {
    primary?: {
      text: string;
      onClick?: () => void;
      href?: string;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
      href?: string;
    };
  };
  trustBadges?: string[];
  videoButton?: {
    text: string;
    onClick?: () => void;
  };
  parallax?: boolean;
  className?: string;
  backgroundEffect?: 'particles' | 'grid' | 'both' | 'none';
  animate?: boolean;
}

/**
 * MobileHero - A mobile-first hero section with optimized spacing,
 * animations, and responsive layout for all screen sizes
 */
const MobileHero: React.FC<MobileHeroProps> = ({
  title,
  subtitle,
  badge,
  cta,
  trustBadges,
  videoButton,
  parallax = true,
  className = "",
  backgroundEffect = 'both',
  animate = true,
}) => {
  return (
    <section className={`relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-20 pb-12 ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid (only if requested) */}
        {(backgroundEffect === 'grid' || backgroundEffect === 'both') && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] opacity-20" />
        )}
        
        {/* Animated Particles (only if requested) */}
        {(backgroundEffect === 'particles' || backgroundEffect === 'both') && (
          <EnhancedParticles count={40} speed={0.5} />
        )}
        
        {/* Ambient Background Glow */}
        <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#c6ff00]/5 blur-[100px] sm:blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#c6ff00]/3 blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] rounded-full bg-[#1a1a1a] blur-[60px] sm:blur-[100px]" />
      </div>
      
      {/* Content Container - Mobile First Approach */}
      <ResponsiveContainer className="relative z-10">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-[90%] lg:max-w-none mx-auto">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={animate ? { opacity: 0, y: 20 } : undefined}
              animate={animate ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-[#c6ff00] text-sm font-medium">
                {badge.icon || <Star className="w-3.5 h-3.5 mr-1.5" />} {badge.text}
              </span>
            </motion.div>
          )}
          
          {/* Title */}
          <motion.div
            initial={animate ? { opacity: 0, y: 20 } : undefined}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            {typeof title === 'string' ? (
              <ResponsiveText 
                as="h1" 
                size="6xl"
                weight="bold"
                gradient="primary"
                glow
              >
                {title}
              </ResponsiveText>
            ) : title}
          </motion.div>
          
          {/* Subtitle */}
          {subtitle && (
            <motion.div
              initial={animate ? { opacity: 0, y: 20 } : undefined}
              animate={animate ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              {typeof subtitle === 'string' ? (
                <ResponsiveText 
                  as="p"
                  size="xl"
                  className="text-neutral-300 max-w-md lg:max-w-lg mx-auto lg:mx-0"
                >
                  {subtitle}
                </ResponsiveText>
              ) : subtitle}
            </motion.div>
          )}
          
          {/* CTA Buttons */}
          {cta && (
            <motion.div
              initial={animate ? { opacity: 0, y: 20 } : undefined}
              animate={animate ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
            >
              {cta.primary && (
                <EnhancedButton 
                  variant="premium" 
                  size="lg" 
                  className="relative overflow-hidden group w-full sm:w-auto"
                  glow
                  onClick={cta.primary.onClick}
                  href={cta.primary.href}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {cta.primary.text}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-[#c6ff00] to-[#a0cc00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: [0, 0.8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  />
                </EnhancedButton>
              )}
              
              {cta.secondary && (
                <EnhancedButton 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={cta.secondary.onClick}
                  href={cta.secondary.href}
                >
                  {cta.secondary.text}
                </EnhancedButton>
              )}
            </motion.div>
          )}
          
          {/* Video Button */}
          {videoButton && (
            <motion.div
              initial={animate ? { opacity: 0, y: 20 } : undefined}
              animate={animate ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <button 
                className="flex items-center justify-center py-3 px-6 text-[#c6ff00] hover:text-white transition-colors duration-300 group"
                onClick={videoButton.onClick}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#c6ff00]/10 border border-[#c6ff00]/20 mr-3 group-hover:bg-[#c6ff00]/20 transition-colors duration-300">
                  <Play className="w-5 h-5 text-[#c6ff00] fill-[#c6ff00]" />
                </div>
                <span>{videoButton.text}</span>
              </button>
            </motion.div>
          )}
          
          {/* Trust Badges */}
          {trustBadges && trustBadges.length > 0 && (
            <motion.div
              initial={animate ? { opacity: 0 } : undefined}
              animate={animate ? { opacity: 1 } : undefined}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 w-full"
            >
              <p className="text-sm text-neutral-500 mb-3 text-center lg:text-left">Trusted by businesses like:</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                {trustBadges.map((name, i) => (
                  <div key={i} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-neutral-400 text-sm sm:text-base font-semibold">{name}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default MobileHero;
