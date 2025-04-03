
import React from "react";
import { motion } from "framer-motion";
import { Check, Rocket } from "lucide-react";
import CtaButton from "../ui/cta-button";

const CompleteSolution: React.FC = () => {
  const features = [
    "Smart Lead Capture – Convert visitors into customers automatically.",
    "High-Converting Funnels – Guide potential clients through a seamless buying journey.",
    "Automated Follow-Ups – Email, SMS, and chat sequences that close deals while you focus on growth.",
    "Integrated Payment & Booking – Make sales and schedule appointments effortlessly.",
    "Data-Driven Optimization – Real-time tracking to maximize conversions."
  ];

  return (
    <section className="section-padding py-16" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              The Complete Solution for Local Business Growth
            </h2>
            
            <p className="text-xl font-semibold text-agency-blue mb-4">
              From Online Brochure to Automated Sales Machine
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Most websites just sit there, looking good but doing nothing. We transform yours into a 24/7 sales and marketing system that works for you.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="bg-green-100 rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
            
            <CtaButton 
              size="lg"
              className="group"
            >
              <Rocket className="h-5 w-5 group-hover:animate-bounce" />
              Let's turn your website into a growth engine!
            </CtaButton>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-agency-blue-50 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-agency-indigo-50 rounded-lg z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Automated business growth system"
                className="rounded-lg shadow-custom relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompleteSolution;
