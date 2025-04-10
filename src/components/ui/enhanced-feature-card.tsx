import React from "react";
import { motion } from "framer-motion";

interface EnhancedFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  inView?: boolean;
}

const EnhancedFeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
  inView = true
}: EnhancedFeatureCardProps) => {
  return (
    <motion.div
      className="p-6 rounded-xl bg-black/40 backdrop-blur-md border border-[#c6ff00]/10 hover:border-[#c6ff00]/30 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 30px -10px rgba(198, 255, 0, 0.2)",
        borderColor: "rgba(198, 255, 0, 0.3)"
      }}
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className="p-4 rounded-full bg-[#c6ff00]/10"
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -10, 10, -5, 5, 0],
            backgroundColor: "rgba(198, 255, 0, 0.15)"
          }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-[#c6ff00]">{title}</h3>
      </div>
      <p className="text-neutral-300">{description}</p>
      
      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-16 h-1 bg-[#c6ff00]/20"
          initial={{ width: 0 }}
          animate={inView ? { width: 16 } : { width: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-1 h-16 bg-[#c6ff00]/20"
          initial={{ height: 0 }}
          animate={inView ? { height: 16 } : { height: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default EnhancedFeatureCard;
