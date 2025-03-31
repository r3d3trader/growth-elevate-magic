
import React from "react";
import { motion } from "framer-motion";
import CtaButton from "../ui/cta-button";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onSubmit: (e: React.FormEvent) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onSubmit }) => {
  return (
    <section className="section-padding bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-r from-agency-blue to-agency-indigo rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full filter blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Ready to Scale Your Business—Hassle-Free?
              </motion.h2>
              
              <motion.p 
                className="text-lg text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Take the first step toward automated growth today. Our team is ready to create your custom growth plan.
              </motion.p>
              
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ShieldCheck className="h-8 w-8 text-white" />
                <p className="font-medium text-lg">No Risk. No Hassle. 60-Day Money-Back Guarantee!</p>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CtaButton 
                  className="bg-white text-agency-blue hover:bg-opacity-90" 
                  size="lg"
                >
                  Get Your Free Growth Plan Now
                </CtaButton>
                
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <ArrowRight className="h-4 w-4" />
                  <span>No credit card required</span>
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Schedule a Free Strategy Call</h3>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Smith"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-lg placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-lg placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="(123) 456-7890"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-lg placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-white/80 mb-1">
                      Business Type
                    </label>
                    <select
                      id="business"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                      style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1em" }}
                    >
                      <option value="" disabled selected className="text-gray-800">Select your business type</option>
                      <option value="local-service" className="text-gray-800">Local Service Business</option>
                      <option value="retail" className="text-gray-800">Retail</option>
                      <option value="ecommerce" className="text-gray-800">eCommerce</option>
                      <option value="healthcare" className="text-gray-800">Healthcare</option>
                      <option value="real-estate" className="text-gray-800">Real Estate</option>
                      <option value="other" className="text-gray-800">Other</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-white text-agency-blue py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Schedule My Free Call
                  </button>
                  
                  <p className="text-xs text-center text-white/70">
                    By submitting, you agree to our terms and privacy policy.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
