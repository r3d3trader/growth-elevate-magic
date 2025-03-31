
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import CtaButton from "../ui/cta-button";
import { cn } from "@/lib/utils";

interface HeroProps {
  onSubmit: (e: React.FormEvent) => void;
}

const Hero: React.FC<HeroProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative bg-gradient-to-b from-agency-blue-50 to-white overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-agency-blue rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-agency-indigo rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-gradient">4x Your Business Growth</span>
              <br /> in 90 Days—Done for You!
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              We automate your marketing, sales, and lead generation so you can focus on running your business—risk-free with our 60-day money-back guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <CtaButton size="lg">
                Get Your Free Business Growth Plan
              </CtaButton>
              <CtaButton variant="secondary" size="lg">
                Book a Free Strategy Call
              </CtaButton>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">Generate 3X More Leads on Autopilot</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">Automate Sales & Follow-Ups Without Extra Work</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">Get a High-Converting Website & Funnels—Done for You!</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-custom p-6 lg:p-8 shadow-custom-hover">
              <img
                src="/lovable-uploads/1a64306c-c701-478f-8af5-8e280b8fdf24.png"
                alt="Business owner reviewing analytics"
                className="w-full h-auto rounded-lg mb-6"
              />
              
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-blue focus:border-agency-blue transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  className={cn(
                    "w-full bg-gradient-to-r from-agency-blue to-agency-indigo text-white py-3 px-6 rounded-lg font-medium",
                    "transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-agency-blue/20"
                  )}
                >
                  Get Your Free Growth Strategy
                </button>
                
                <p className="text-xs text-center text-gray-500">
                  By submitting, you agree to our terms and privacy policy.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16">
          <motion.div
            className="py-4 px-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-md flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center">
              <p className="font-semibold text-gray-700">500+ Local Businesses Scaled Successfully</p>
              <div className="flex items-center justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="h-10 border-l border-gray-300 hidden md:block"></div>
            
            <div className="flex items-center justify-center gap-8">
              <div className="text-agency-blue font-bold text-xl">Trusted by</div>
              <div className="flex items-center gap-6">
                {[1, 2, 3].map((logo) => (
                  <div key={logo} className="h-8 w-16 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-600">
                    Logo {logo}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
