import React from "react";
import { motion } from "framer-motion";
import CtaButton from "../ui/cta-button";

const Solution = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 text-green-400">OUR SOLUTION</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Your Path to High-Paying Clients</h3>
        </motion.div>

        <div className="mt-16 text-center">
          <CtaButton size="lg" className="bg-green-400 hover:bg-green-500 text-black shadow-lg">Get Started Today</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Solution;