import 'country-flag-icons/3x2/flags.css';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Zap, ChevronRight, ArrowRight } from "lucide-react";
import CtaButton from "../ui/cta-button";

const SuccessStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      business: "Local Gym",
      name: "John Smith",
      title: "Owner",
      result: "Increased memberships by 300% in 60 days.",
      quote: "Leads Obtainer transformed our business. We went from struggling to get new sign-ups to having a waiting list—all in just two months!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      country: "us",
      delay: 0
    },
    {
      business: "Dental Clinic",
      name: "Sarah Johnson",
      title: "Practice Manager",
      result: "Doubled patient bookings within 3 months.",
      quote: "Their automated follow-up system has been a game-changer. New patients book appointments without us lifting a finger.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      country: "gb",
      delay: 0.1
    },
    {
      business: "Real Estate",
      name: "Michael Chen",
      title: "Broker",
      result: "Quadrupled leads and revenue in 90 days.",
      quote: "Working with Leads Obtainer has been the best business decision I've made. The ROI has been incredible—4X our previous numbers!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      country: "ca",
      delay: 0.2
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

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

  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 10px rgba(230, 255, 0, 0.5)"
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={badgeVariants}
            whileHover="hover"
            initial="initial"
            animate="animate"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 backdrop-blur-sm"
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
            <span>Client Success Stories</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400"
            variants={itemVariants}
          >
            Businesses Like Yours Are Achieving <span className="text-primary">4X Growth</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground"
            variants={itemVariants}
          >
            See how our automated solution is transforming businesses across industries
          </motion.p>
          
          <motion.div 
            className="h-1 w-0 bg-gradient-to-r from-primary/50 to-green-400/50 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>
        
        <div className="mt-12 relative overflow-hidden h-96 mb-16">
          <motion.div 
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <div className="flex h-full transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: testimonial.delay }}
              >
                <div className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-xl p-8 h-full max-w-xl mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/30">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="h-14 w-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-primary">{testimonial.name}</h3>
                        <span className={`fi fi-${testimonial.country} w-5 h-4 rounded-sm shadow-sm`}></span>
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.title} • {testimonial.business}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-2 -top-2 text-4xl opacity-20 font-serif text-primary">"</div>
                    <p className="text-muted-foreground mb-4 relative z-10 pl-4">{testimonial.quote}</p>
                    <div className="absolute -right-2 bottom-2 text-4xl opacity-20 font-serif text-primary">"</div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
                        />
                      ))}
                      <motion.span 
                        className="text-sm font-medium text-primary ml-1"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + testimonial.delay }}
                      >
                        {testimonial.result}
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${currentIndex === index ? 'bg-primary w-6' : 'bg-gray-400 w-3'}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-br from-primary/10 via-background to-primary/5 backdrop-blur-sm border border-primary/10 rounded-xl p-10 text-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Want to see more success stories?
          </motion.h3>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Schedule a call to see detailed case studies specific to your industry. Join the 250+ businesses accelerating their success with our proven framework.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <CtaButton 
                className="px-8 py-4 text-lg font-semibold flex items-center gap-2 group"
              >
                <span>Watch Video Testimonials</span>
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
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <CtaButton 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold"
              >
                View Case Studies
              </CtaButton>
            </motion.div>
          </motion.div>
          
          <motion.p
            className="text-sm text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            No obligation • 30-minute strategy session • Custom growth plan
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: "97%", label: "Client Satisfaction" },
            { value: "+46%", label: "Client Retention" },
            { value: "4X", label: "Revenue Growth" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center shadow hover:border-primary/30 transition-all duration-300"
            >
              <motion.div
                className="text-3xl font-bold text-primary mb-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                {metric.value}
              </motion.div>
              <motion.div
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 * (index + 1) }}
              >
                {metric.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
