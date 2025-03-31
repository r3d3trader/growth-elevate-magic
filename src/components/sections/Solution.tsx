
import React from "react";
import { motion } from "framer-motion";
import { Check, Award, TrendingUp, ShieldCheck } from "lucide-react";

const Solution: React.FC = () => {
  return (
    <section className="section-padding bg-agency-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-agency-blue rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-agency-indigo rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Expert growth team"
              className="rounded-xl shadow-custom"
            />
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              The Complete Solution for Local Business Growth
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              We provide a complete, done-for-you growth system—covering websites, funnels, automation, ads, and lead generation—all designed to scale your business effortlessly.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-custom mb-8">
              <h3 className="text-xl font-semibold mb-4 text-agency-blue">Unlike generic agencies, we deliver:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Guaranteed growth strategies tailored for local businesses</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Complete automation of your marketing and sales</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Ongoing optimization and support to maximize results</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Award className="h-8 w-8 text-agency-indigo" />
                <div>
                  <h4 className="font-semibold">10+ Years</h4>
                  <p className="text-sm text-gray-600">Marketing Experience</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <TrendingUp className="h-8 w-8 text-agency-indigo" />
                <div>
                  <h4 className="font-semibold">$2M+ Managed</h4>
                  <p className="text-sm text-gray-600">Ad Spend</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <ShieldCheck className="h-8 w-8 text-agency-indigo" />
                <div>
                  <h4 className="font-semibold">60-Day</h4>
                  <p className="text-sm text-gray-600">Money-Back Guarantee</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
