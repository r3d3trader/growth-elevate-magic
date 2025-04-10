import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ResponsiveContainer from "@/components/ui/responsive-container";
import ResponsiveText from "@/components/ui/responsive-text";
import EnhancedButton from "@/components/ui/enhanced-button";
import EnhancedParticles from "@/components/ui/enhanced-particles";
import { ArrowRight } from "lucide-react";

interface CTAButton {
  text: string;
  href?: string;
  onClick?: () => void;
}

interface MobileCTAProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  // Legacy props for backward compatibility
  buttonText?: string;
  buttonLink?: string;
  buttonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  secondaryButtonOnClick?: () => void;
  // New props structure
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  className?: string;
  style?: 'default' | 'premium' | 'minimal';
  withBackground?: boolean;
  withGlow?: boolean;
  withParticles?: boolean;
  centered?: boolean;
  // Alternate naming for props
  background?: 'default' | 'premium' | 'minimal' | 'gradient';
  showParticles?: boolean;
}

/**
 * MobileCTA - A mobile-first call-to-action component optimized for 
 * touchscreen interactions and responsive design
 */
const MobileCTA: React.FC<MobileCTAProps> = ({
  title,
  subtitle,
  // Handle both legacy and new prop structures
  buttonText,
  buttonLink,
  buttonOnClick,
  secondaryButtonText,
  secondaryButtonLink,
  secondaryButtonOnClick,
  primaryCTA,
  secondaryCTA,
  className = "",
  style: propStyle = 'default',
  withBackground = true,
  withGlow = true,
  withParticles,
  centered = true,
  background,
  showParticles,
}) => {
  // Determine final style based on either style or background prop
  const style = background ? 
    (background === 'gradient' ? 'premium' : background) : 
    propStyle;

  // Determine if particles should be shown
  const shouldShowParticles = showParticles !== undefined ? 
    showParticles : 
    (withParticles !== undefined ? withParticles : true);

  // Combine props for primary button
  const primaryButton = primaryCTA || (buttonText ? {
    text: buttonText,
    href: buttonLink,
    onClick: buttonOnClick
  } : undefined);

  // Combine props for secondary button
  const secondaryButton = secondaryCTA || (secondaryButtonText ? {
    text: secondaryButtonText,
    href: secondaryButtonLink,
    onClick: secondaryButtonOnClick
  } : undefined);

  return (
    <section className={cn(
      "relative py-12 sm:py-16 md:py-20",
      withBackground && (
        style === 'premium' 
          ? "bg-gradient-to-b from-black to-black/95" 
          : style === 'minimal'
            ? "bg-black/90"
            : "bg-black"
      ),
      className
    )}>
      {/* Background Effects */}
      {withBackground && (
        <div className="absolute inset-0 overflow-hidden">
          {shouldShowParticles && (
            <EnhancedParticles count={30} speed={0.3} />
          )}
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] opacity-20" />
          
          {/* Glow Effect */}
          {withGlow && (
            <>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#c6ff00]/5 blur-[100px]" />
              <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-[#c6ff00]/10 blur-[80px]" />
            </>
          )}
        </div>
      )}
      
      <ResponsiveContainer>
        <div className={cn(
          "relative z-10",
          style === 'premium' ? "bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-8 sm:p-12" : "",
          centered ? "text-center" : "",
        )}>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            {typeof title === 'string' ? (
              <ResponsiveText
                as="h2"
                size="4xl"
                weight="bold"
                gradient={style === 'minimal' ? false : 'primary'}
                glow={style === 'premium'}
                align={centered ? "center" : "left"}
                className={cn(
                  "max-w-3xl",
                  centered && "mx-auto"
                )}
              >
                {title}
              </ResponsiveText>
            ) : title}
          </motion.div>
          
          {/* Subtitle */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              {typeof subtitle === 'string' ? (
                <ResponsiveText
                  as="p"
                  size="xl"
                  align={centered ? "center" : "left"}
                  className={cn(
                    "text-neutral-300 max-w-2xl",
                    centered && "mx-auto"
                  )}
                >
                  {subtitle}
                </ResponsiveText>
              ) : subtitle}
            </motion.div>
          )}
          
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "flex flex-col sm:flex-row gap-4",
              centered ? "justify-center" : ""
            )}
          >
            {primaryButton && (
              <EnhancedButton
                variant="premium"
                size="lg"
                href={primaryButton.href}
                onClick={primaryButton.onClick}
                className="w-full sm:w-auto relative overflow-hidden group"
                glow={style === 'premium'}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {primaryButton.text}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                {style === 'premium' && (
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-[#c6ff00] to-[#a0cc00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: [0, 0.8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  />
                )}
              </EnhancedButton>
            )}
            
            {secondaryButton && (
              <EnhancedButton
                variant="outline"
                size="lg"
                href={secondaryButton.href}
                onClick={secondaryButton.onClick}
                className="w-full sm:w-auto"
              >
                {secondaryButton.text}
              </EnhancedButton>
            )}
          </motion.div>
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default MobileCTA;
