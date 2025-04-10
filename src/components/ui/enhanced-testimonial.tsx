import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface EnhancedTestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageSrc?: string;
  rating?: number;
  delay?: number;
  inView?: boolean;
}

const EnhancedTestimonial = ({
  quote,
  author,
  role,
  imageSrc,
  rating = 5,
  delay = 0,
  inView = true
}: EnhancedTestimonialProps) => {
  return (
    <motion.div
      className="p-8 rounded-xl bg-black/40 backdrop-blur-md border border-[#c6ff00]/10 relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 30px -10px rgba(198, 255, 0, 0.2)",
        borderColor: "rgba(198, 255, 0, 0.3)"
      }}
    >
      {/* Animated quote marks */}
      <motion.div 
        className="absolute top-6 left-6 text-6xl font-serif text-[#c6ff00]/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        "
      </motion.div>
      
      <motion.div 
        className="absolute bottom-6 right-6 text-6xl font-serif text-[#c6ff00]/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
      >
        "
      </motion.div>
      
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#c6ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0 } : { opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Testimonial content */}
      <div className="relative z-10">
        <motion.div
          className="flex mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.1 }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-[#c6ff00]' : 'text-neutral-600'}`}
              fill={i < rating ? '#c6ff00' : 'none'}
            />
          ))}
        </motion.div>
        
        <motion.p 
          className="text-lg text-neutral-300 mb-6 italic relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {quote}
        </motion.p>
        
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        >
          {imageSrc ? (
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img 
                src={imageSrc} 
                alt={`${author}`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23c6ff00' opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%23c6ff00'%3E" + author.charAt(0) + "%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#c6ff00]/20 flex items-center justify-center text-[#c6ff00] font-bold mr-3">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-sm text-neutral-400">{role}</p>
          </div>
        </motion.div>
      </div>
      
      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-16 h-1 bg-[#c6ff00]/20"
          initial={{ width: 0 }}
          animate={inView ? { width: 16 } : { width: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-1 h-16 bg-[#c6ff00]/20"
          initial={{ height: 0 }}
          animate={inView ? { height: 16 } : { height: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default EnhancedTestimonial;
