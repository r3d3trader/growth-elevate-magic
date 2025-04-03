
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-2">THE PROBLEM</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Why You Need the AI Sales System?</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6"
          >
            <div className="feature-icon mb-4 text-green-400">
              <Check size={24} />
            </div>
            <h4 className="text-lg font-semibold mb-3 text-white">Manual Prospect Research is Tedious</h4>
            <p className="text-gray-300">
              Spending hours searching for potential clients manually is inefficient and takes you away from your core business activities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6"
          >
            <div className="feature-icon mb-4 text-green-400">
              <Check size={24} />
            </div>
            <h4 className="text-lg font-semibold mb-3 text-white">No Effective Follow-Up System</h4>
            <p className="text-gray-300">
              Without a systematic approach to following up with prospects, valuable opportunities slip through the cracks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6"
          >
            <div className="feature-icon mb-4 text-green-400">
              <Check size={24} />
            </div>
            <h4 className="text-lg font-semibold mb-3 text-white">Revenue That Scales Reliably</h4>
            <p className="text-gray-300">
              Traditional sales methods don't scale, making it difficult to predict and increase your revenue consistently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
