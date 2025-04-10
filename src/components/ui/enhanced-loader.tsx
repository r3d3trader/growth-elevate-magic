import React from "react";
import { motion } from "framer-motion";

const EnhancedLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative">
        {/* Logo animation */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-3xl font-bold text-white flex items-center">
            <motion.span 
              className="text-[#c6ff00]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Growth
            </motion.span>
            <motion.span 
              className="mx-1"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              Elevate
            </motion.span>
            <motion.span 
              className="text-[#c6ff00]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              Magic
            </motion.span>
          </div>
        </motion.div>
        
        {/* Loading indicator */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex space-x-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-[#c6ff00]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Loading text */}
        <motion.p
          className="mt-4 text-neutral-400 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Loading premium experience...
        </motion.p>
        
        {/* Animated ring */}
        <motion.div
          className="absolute -inset-8 border border-[#c6ff00]/20 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scale: [0.8, 1.2, 0.8],
            borderColor: ["rgba(198, 255, 0, 0.1)", "rgba(198, 255, 0, 0.3)", "rgba(198, 255, 0, 0.1)"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated outer ring */}
        <motion.div
          className="absolute -inset-16 border border-[#c6ff00]/10 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.4, 0.8],
            borderColor: ["rgba(198, 255, 0, 0.05)", "rgba(198, 255, 0, 0.2)", "rgba(198, 255, 0, 0.05)"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </motion.div>
  );
};

export default EnhancedLoader;
