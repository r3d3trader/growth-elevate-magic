import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ResponsiveText from "./responsive-text";
import { Star } from "lucide-react";

interface MobileTestimonialProps {
  quote: string;
  name: string;
  title?: string;
  company?: string;
  avatar?: string;
  rating?: number;
  className?: string;
  type?: "card" | "simple" | "featured";
  index?: number;
}

/**
 * MobileTestimonial - A mobile-first testimonial component optimized for 
 * different screen sizes and responsive layouts
 */
const MobileTestimonial = ({
  quote,
  name,
  title,
  company,
  avatar,
  rating = 5,
  className,
  type = "card",
  index = 0,
}: MobileTestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
      className={cn(
        "h-full",
        type === "card" && "p-5 sm:p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 hover:border-[#c6ff00]/20 transition-all duration-300",
        type === "featured" && "p-6 sm:p-8 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm rounded-xl border border-[#c6ff00]/10 hover:border-[#c6ff00]/30 shadow-lg transition-all duration-300",
        className
      )}
    >
      {/* Rating Stars */}
      {rating > 0 && (
        <div className="flex items-center mb-3 sm:mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4 mr-1",
                i < rating ? "text-[#c6ff00] fill-[#c6ff00]" : "text-neutral-600"
              )}
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <div className="mb-4 sm:mb-6">
        <ResponsiveText
          as="p"
          size={type === "featured" ? "xl" : "lg"}
          className="text-white/90 italic leading-relaxed"
        >
          "{quote}"
        </ResponsiveText>
      </div>

      {/* Author Info */}
      <div className="flex items-center">
        {avatar && (
          <div className="mr-3 flex-shrink-0">
            <img
              src={avatar}
              alt={name}
              className={cn(
                "rounded-full border-2 object-cover",
                type === "featured" ? "w-12 h-12 border-[#c6ff00]/30" : "w-10 h-10 border-white/10"
              )}
            />
          </div>
        )}

        <div>
          <ResponsiveText as="p" size="base" weight="semibold" className="text-white">
            {name}
          </ResponsiveText>
          
          {(title || company) && (
            <ResponsiveText as="p" size="sm" className="text-neutral-400">
              {title}{title && company ? ", " : ""}{company}
            </ResponsiveText>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileTestimonial;
