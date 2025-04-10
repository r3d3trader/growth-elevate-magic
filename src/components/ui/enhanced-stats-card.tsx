import React from "react";
import { motion } from "framer-motion";
import { LuxuryText } from "@/components/ui/premium-effects";

interface EnhancedStatsCardProps {
  number: string;
  label: string;
  color?: "gold" | "platinum" | "emerald" | "sapphire" | "ruby" | "primary";
  delay?: number;
  inView?: boolean;
}

const EnhancedStatsCard = ({
  number,
  label,
  color = "primary",
  delay = 0,
  inView = true
}: EnhancedStatsCardProps) => {
  return (
    <motion.div
      className="text-center p-8 rounded-xl bg-black/40 backdrop-blur-md border border-[#c6ff00]/10 relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 30px -10px rgba(198, 255, 0, 0.2)",
        borderColor: "rgba(198, 255, 0, 0.3)"
      }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#c6ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0 } : { opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Animated corner accent */}
      <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-16 h-1 bg-[#c6ff00]/20"
          initial={{ width: 0 }}
          animate={inView ? { width: 16 } : { width: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-1 h-16 bg-[#c6ff00]/20"
          initial={{ height: 0 }}
          animate={inView ? { height: 16 } : { height: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
        <motion.div 
          className="absolute bottom-0 right-0 w-16 h-1 bg-[#c6ff00]/20"
          initial={{ width: 0 }}
          animate={inView ? { width: 16 } : { width: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-1 h-16 bg-[#c6ff00]/20"
          initial={{ height: 0 }}
          animate={inView ? { height: 16 } : { height: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        />
      </div>
      
      {/* Stat content with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <LuxuryText
          as="p"
          className="text-5xl md:text-6xl font-bold mb-4"
          gradient={color}
          font="luxury-display"
          glow
        >
          {number}
        </LuxuryText>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          <p className="text-lg text-neutral-300">{label}</p>
        </motion.div>
      </motion.div>
      
      {/* Subtle animated pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-[#c6ff00]/0"
        animate={{ 
          borderColor: ["rgba(198, 255, 0, 0)", "rgba(198, 255, 0, 0.3)", "rgba(198, 255, 0, 0)"],
          boxShadow: [
            "0 0 0 0 rgba(198, 255, 0, 0)",
            "0 0 0 10px rgba(198, 255, 0, 0.1)",
            "0 0 0 20px rgba(198, 255, 0, 0)"
          ]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: delay + 1
        }}
      />
    </motion.div>
  );
};

export default EnhancedStatsCard;
