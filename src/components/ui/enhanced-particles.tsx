import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface EnhancedParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  maxSize?: number;
  speed?: number;
  className?: string;
}

const EnhancedParticles = ({
  count = 100,
  color = "#c6ff00",
  size = 2,
  maxSize,
  speed = 1,
  className = ""
}: EnhancedParticlesProps) => {
  const particles = Array.from({ length: count }).map((_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 10 + Math.random() * 20 * speed;
    const delay = Math.random() * 5;
    // Use maxSize if provided, otherwise just use size
    const particleSize = maxSize 
      ? Math.max(0.5, Math.random() * (maxSize - size) + size)
      : Math.max(0.5, Math.random() * size);
    const opacity = Math.max(0.1, Math.random() * 0.4);
    
    return { id: i, x, y, duration, delay, size: particleSize, opacity };
  });
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() > 0.5 ? 10 : -10, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default EnhancedParticles;
