import React from "react";
import { motion } from "framer-motion";
import { Zap, Send, ArrowRight } from "lucide-react";
import CtaButton from "@/components/ui/cta-button";

interface ProcessProps {
  onSubmit: (e: React.FormEvent) => void;
}

const Process = ({ onSubmit }: ProcessProps) => {
  const steps = [
    {
      title: "Schedule a Strategy Call",
      description: "Book a 30-minute strategy call where we'll assess your current situation and determine if we're a good fit.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Custom Onboarding",
      description: "Our team will set up your custom AI sales system tailored to your specific business needs.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Watch Results Grow",
      description: "Monitor your dashboard as high-quality leads start flowing in and your sales increase.",
      icon: <Zap className="h-6 w-6 text-primary" />
    }
  ];

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

  return (
    <section className="py-24 bg-gradient-to-br from-background via-card/80 to-background relative overflow-hidden">
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

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-20">
        <motion.svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            rotate: [-5, 5, -5],
            scale: [0.98, 1.02, 0.98]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <path 
            fill="#E6FF00" 
            d="M45.7,-76.9C58.9,-69.2,69.2,-56.1,76.7,-41.8C84.3,-27.6,89.1,-13.8,88.6,-0.3C88.1,13.2,82.2,26.4,74.5,38.7C66.8,51,57.3,62.4,45.1,70C33,77.7,18.3,81.7,2.4,78.3C-13.5,74.9,-30.7,64.2,-43.1,52.7C-55.6,41.2,-63.3,29,-72.6,13.6C-81.9,-1.8,-92.9,-20.4,-90.7,-37.8C-88.5,-55.2,-73.2,-71.5,-55.7,-77.7C-38.2,-83.9,-19.1,-80,-1.4,-77.8C16.4,-75.5,32.5,-84.6,45.7,-76.9Z" 
            transform="translate(100 100)" 
          />
        </motion.svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
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
              <Zap className="h-4 w-4 text-primary" />
            </motion.div>
            <span>Quick & Easy Process</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 mb-4"
          >
            Getting Started is Simple
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our streamlined process gets you up and running with our AI sales system in just days, not weeks
          </motion.p>
          
          <motion.div 
            className="h-1 w-0 bg-gradient-to-r from-primary/50 to-green-400/50 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Connecting Line */}
          <motion.div 
            className="absolute h-full w-1 bg-primary/20 left-1/2 -translate-x-1/2 top-0 hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative z-10"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <motion.div 
                    className={`w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center z-20 backdrop-blur-sm ${index % 2 === 0 ? 'md:order-1' : 'md:order-1'}`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(230, 255, 0, 0.3)"
                    }}
                    animate={{
                      boxShadow: ["0 0 0 rgba(230, 255, 0, 0)", "0 0 15px rgba(230, 255, 0, 0.3)", "0 0 0 rgba(230, 255, 0, 0)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.3
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        repeatType: "loop",
                        ease: "linear",
                        delay: index * 1
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  </motion.div>
                  
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:order-0' : 'md:order-2'}`}>
                    <motion.div 
                      className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/30">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                      
                      <motion.div 
                        className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      />
                    </motion.div>
                  </div>
                  
                  <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-0 md:text-right'}`}>
                    {index === 0 && (
                      <motion.div
                        variants={itemVariants}
                        className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg"
                      >
                        <h4 className="text-lg font-medium text-primary mb-2">Ready to transform your business?</h4>
                        <p className="text-sm text-muted-foreground mb-0">Schedule your free strategy call now and see how our AI sales system can help you grow.</p>
                      </motion.div>
                    )}
                    
                    {index === 1 && (
                      <motion.div
                        variants={itemVariants}
                        className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg"
                      >
                        <h4 className="text-lg font-medium text-primary mb-2">Personalized onboarding experience</h4>
                        <p className="text-sm text-muted-foreground mb-0">Our team of experts will configure your AI sales system to target your ideal clients.</p>
                      </motion.div>
                    )}
                    
                    {index === 2 && (
                      <motion.div
                        variants={itemVariants}
                        className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg"
                      >
                        <h4 className="text-lg font-medium text-primary mb-2">Ongoing support and optimization</h4>
                        <p className="text-sm text-muted-foreground mb-0">We continuously optimize your AI sales system to improve results over time.</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/10 via-background to-primary/5 backdrop-blur-sm border border-primary/10 rounded-xl p-10 text-center shadow-lg"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 mb-6"
            >
              Schedule Your Free Strategy Call
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8"
            >
              Discover how our AI sales system can transform your business in a free 30-minute strategy call
            </motion.p>
            
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="process-email" className="block text-sm font-medium text-muted-foreground">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(230, 255, 0, 0.25)" }}
                    id="process-email"
                    type="email"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/10 focus:border-primary/40 outline-none rounded-lg text-foreground placeholder:text-muted-foreground"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              
              <div className="pt-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CtaButton 
                    type="submit" 
                    className="w-full md:w-auto px-8 py-4 text-lg font-semibold flex items-center justify-center gap-2 group"
                  >
                    <span>Book Strategy Call</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 0.5
                      }}
                      className="group-hover:text-white"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </CtaButton>
                </motion.div>
              </div>
            </form>
            
            <motion.p
              variants={itemVariants}
              className="text-sm text-muted-foreground mt-6"
            >
              No obligation • Free 30-minute strategy session • Custom growth plan
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
