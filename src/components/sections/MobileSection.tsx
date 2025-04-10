import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ResponsiveContainer from "@/components/ui/responsive-container";
import ResponsiveText from "@/components/ui/responsive-text";
import EnhancedParticles from "@/components/ui/enhanced-particles";

interface MobileSectionProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: {
    text: string;
    icon?: React.ReactNode;
  };
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  background?: 'default' | 'gradient' | 'dark' | 'light' | 'none';
  particles?: boolean;
  grid?: boolean;
  withDivider?: boolean;
  animate?: boolean;
  centered?: boolean;
  id?: string;
}

/**
 * MobileSection - A mobile-first section component with optimized spacing,
 * animations, and responsive layout for all screen sizes
 */
const MobileSection: React.FC<MobileSectionProps> = ({
  children,
  title,
  subtitle,
  badge,
  className = "",
  containerClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  background = 'default',
  particles = false,
  grid = false,
  withDivider = false,
  animate = true,
  centered = false,
  id,
}) => {
  // Determine background classes based on background type
  const bgClasses = {
    default: "bg-black",
    gradient: "bg-gradient-to-b from-black to-black/95",
    dark: "bg-black/90",
    light: "bg-black/80",
    none: "",
  };

  return (
    <section 
      id={id}
      className={cn(
        "relative py-12 sm:py-16 lg:py-20 overflow-hidden",
        bgClasses[background],
        className
      )}
    >
      {/* Background Effects */}
      {grid && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] opacity-20 pointer-events-none" />
      )}
      
      {particles && (
        <div className="absolute inset-0 pointer-events-none">
          <EnhancedParticles count={30} speed={0.3} />
        </div>
      )}
      
      {withDivider && (
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c6ff00]/20 to-transparent" />
      )}
      
      <ResponsiveContainer className={containerClassName}>
        {/* Section Header */}
        {(title || subtitle || badge) && (
          <div className={cn(
            "mb-10",
            centered ? "text-center mx-auto" : ""
          )}>
            {/* Badge */}
            {badge && (
              <motion.div
                initial={animate ? { opacity: 0, y: 10 } : undefined}
                whileInView={animate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4 inline-flex"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-[#c6ff00] text-sm font-medium">
                  {badge.icon} {badge.text}
                </span>
              </motion.div>
            )}
            
            {/* Title */}
            {title && (
              <motion.div
                initial={animate ? { opacity: 0, y: 15 } : undefined}
                whileInView={animate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4"
              >
                {typeof title === 'string' ? (
                  <ResponsiveText 
                    as="h2" 
                    size="4xl"
                    weight="bold"
                    gradient="primary"
                    glow
                    align={centered ? "center" : "left"}
                    className={cn(
                      "max-w-xl",
                      centered && "mx-auto",
                      titleClassName
                    )}
                  >
                    {title}
                  </ResponsiveText>
                ) : title}
              </motion.div>
            )}
            
            {/* Subtitle */}
            {subtitle && (
              <motion.div
                initial={animate ? { opacity: 0, y: 15 } : undefined}
                whileInView={animate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {typeof subtitle === 'string' ? (
                  <ResponsiveText 
                    as="p"
                    size="lg"
                    align={centered ? "center" : "left"}
                    className={cn(
                      "text-neutral-400 max-w-xl",
                      centered && "mx-auto",
                      subtitleClassName
                    )}
                  >
                    {subtitle}
                  </ResponsiveText>
                ) : subtitle}
              </motion.div>
            )}
          </div>
        )}
        
        {/* Section Content */}
        {children}
      </ResponsiveContainer>
    </section>
  );
};

export default MobileSection;
