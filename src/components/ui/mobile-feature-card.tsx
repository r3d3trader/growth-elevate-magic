import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import ResponsiveText from './responsive-text';
import { LucideIcon } from 'lucide-react';

interface MobileFeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode | LucideIcon;
  className?: string;
  iconClassName?: string;
  gradient?: boolean;
  glow?: boolean;
  delay?: number;
  onClick?: () => void;
  index?: number;
}

/**
 * MobileFeatureCard - A mobile-first feature card component
 * designed for optimal display across all device sizes
 */
const MobileFeatureCard = ({
  title,
  description,
  icon,
  className,
  iconClassName,
  gradient = false,
  glow = false,
  delay = 0,
  onClick,
  index = 0,
}: MobileFeatureCardProps) => {
  // Icon component (if provided)
  const IconComponent = icon as LucideIcon;
  
  return (
    <motion.div
      className={cn(
        "flex flex-col p-5 sm:p-6 rounded-xl backdrop-blur-sm",
        "bg-black/40 border border-white/5 hover:border-[#c6ff00]/20",
        "transition-all duration-300 ease-in-out",
        "hover:bg-black/60 hover:translate-y-[-4px]",
        "shadow-sm hover:shadow-lg",
        onClick && "cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: delay || index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
      onClick={onClick}
    >
      {/* Icon */}
      {icon && (
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          "bg-[#c6ff00]/10 text-[#c6ff00] mb-4",
          glow && "shadow-glow shadow-[#c6ff00]/20",
          iconClassName
        )}>
          {React.isValidElement(icon) ? (
            icon
          ) : (
            IconComponent && <IconComponent className="w-6 h-6" />
          )}
        </div>
      )}
      
      {/* Title */}
      <ResponsiveText
        as="h3"
        size="xl"
        weight="bold"
        className="mb-2"
        gradient={gradient ? 'primary' : false}
        glow={glow}
      >
        {title}
      </ResponsiveText>
      
      {/* Description */}
      <ResponsiveText
        as="p"
        size="base"
        className="text-neutral-400 mt-auto"
      >
        {description}
      </ResponsiveText>
    </motion.div>
  );
};

export default MobileFeatureCard;
