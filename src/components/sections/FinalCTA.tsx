import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, CheckCircle, ChevronRight, Star } from "lucide-react";
import CtaButton from "@/components/ui/cta-button";

const FinalCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const metrics = [
    { value: "97%", label: "Client Satisfaction" },
    { value: "+218%", label: "Average ROI" },
    { value: "15hrs+", label: "Time Saved Weekly" }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden" id="final-cta">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 10px rgba(230, 255, 0, 0.3)" 
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                >
                  <Star className="h-4 w-4 text-primary" />
                </motion.div>
                <span>Exclusive Offer</span>
              </motion.div>
              
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 mb-6"
              >
                Transform Your Business Today
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-8"
              >
                Join hundreds of business owners who have revolutionized their sales process and dramatically increased their revenue with our AI-powered system.
              </motion.p>
              
              <motion.div
                variants={containerVariants}
                className="space-y-4 mb-8"
              >
                {[
                  "Complete setup in under 30 minutes",
                  "Dedicated onboarding specialist included",
                  "60-day money-back guarantee"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="h-6 w-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.2,
                          backgroundColor: "rgba(230, 255, 0, 0.2)" 
                        }}
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </motion.div>
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-4 mb-10"
              >
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-4 flex-1 min-w-[150px]"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(230, 255, 0, 0.3)" 
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    >
                      <div className="font-bold text-2xl text-primary mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg"
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400"
              >
                Get Started Now
              </motion.h3>
              
              <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(230, 255, 0, 0.25)" }}
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/10 focus:border-primary/40 outline-none rounded-lg text-foreground placeholder:text-muted-foreground"
                    placeholder="John Smith"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(230, 255, 0, 0.25)" }}
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/10 focus:border-primary/40 outline-none rounded-lg text-foreground placeholder:text-muted-foreground"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-muted-foreground">
                    Company Name
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(230, 255, 0, 0.25)" }}
                    id="company"
                    type="text"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/10 focus:border-primary/40 outline-none rounded-lg text-foreground placeholder:text-muted-foreground"
                    placeholder="Your Company"
                  />
                </div>
                
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary/90 hover:bg-primary text-background font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <span>Schedule Your Demo</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1
                      }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </motion.button>
                </div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="text-xs text-muted-foreground text-center mt-4"
                >
                  By submitting, you agree to our{" "}
                  <span className="text-primary hover:underline cursor-pointer">Terms of Service</span> and{" "}
                  <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
                </motion.p>
              </motion.form>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="mt-6 p-4 bg-background/50 rounded-lg border border-primary/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 rating</span>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  "The AI Sales System has completely transformed how we acquire new clients. Our sales cycle went from 45 days to just 12."
                </p>
                <div className="mt-2 text-xs text-foreground font-medium">
                  — Michael Rodriguez, CEO of GrowthTech
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;