import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import ResponsiveContainer from '../ui/responsive-container';
import ResponsiveText from '../ui/responsive-text';

interface FAQItem {
  question: string;
  answer: string;
}

interface MobileFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

const MobileFAQ: React.FC<MobileFAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our services",
  faqs,
  className,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={cn("py-16 relative", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-grid-dark opacity-10"></div>
        <div className="absolute left-0 top-10 w-32 h-32 rounded-full bg-[#c6ff00]/10 filter blur-3xl"></div>
        <div className="absolute right-0 bottom-10 w-32 h-32 rounded-full bg-[#c6ff00]/10 filter blur-3xl"></div>
      </div>

      <ResponsiveContainer className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <h2 className="bg-clip-text bg-gradient-primary font-sans text-shadow-primary tracking-luxury text-3xl sm:text-4xl font-bold text-center max-w-3xl mx-auto">
              {title}
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              viewport={{ once: true }}
              className={cn(
                "border border-white/10 rounded-xl overflow-hidden",
                "bg-black/40 backdrop-blur-sm",
                "hover:border-white/20 transition-all duration-300",
                expandedIndex === index ? 
                  "border-[#c6ff00]/50 shadow-[0_0_20px_rgba(198,255,0,0.2)] transform -translate-y-1" : 
                  "transform translate-y-0"
              )}
            >
              <button
                onClick={() => toggleExpand(index)}
                className={cn(
                  "w-full flex justify-between items-center p-6 text-left",
                  "transition-all duration-300 touch-manipulation",
                  "active:bg-white/5", // Touch feedback for mobile
                  expandedIndex === index ? "bg-gradient-to-r from-black/60 to-black/40" : ""
                )}
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center">
                  {expandedIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mr-2.5 text-[#c6ff00]"
                    >
                      <Zap size={18} />
                    </motion.div>
                  )}
                  <h3 className={cn(
                    "text-lg font-medium",
                    expandedIndex === index ? 
                      "bg-clip-text text-transparent bg-gradient-to-r from-[#c6ff00] to-[#9dff00] font-semibold" : 
                      "text-white"
                  )}>
                    {faq.question}
                  </h3>
                </div>
                <div className={cn(
                  "ml-4 flex-shrink-0 p-2 rounded-full transition-all duration-300",
                  expandedIndex === index ? 
                    "bg-[#c6ff00]/20 border border-[#c6ff00]/30" : 
                    "bg-white/5"
                )}>
                  {expandedIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#c6ff00]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-neutral-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: 'auto', 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.4, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-neutral-300 border-t border-white/10 leading-relaxed">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.3, delay: 0.1 }
                        }}
                      >
                        {faq.answer}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default MobileFAQ;
