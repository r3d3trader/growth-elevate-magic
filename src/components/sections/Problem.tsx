import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">THE PROBLEM</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 neon-glow">Why You Need the AI Sales System?</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="neon-box rounded-xl p-6"
          >
            <div className="feature-icon mb-4">
              <Check size={24} />
            </div>
            <h4 className="text-lg font-semibold mb-3">Manual Prospect Research is Tedious</h4>
            <p className="text-muted-foreground">
              Spending hours searching for potential clients manually is inefficient and takes you away from your core business activities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="neon-box rounded-xl p-6"
          >
            <div className="feature-icon mb-4">
              <Check size={24} />
            </div>
            <h4 className="text-lg font-semibold mb-3">No Effective Follow-Up System</h4>
            <p className="text-muted-foreground">
              Without a systematic approach to following up with prospects, valuable opportunities slip through the cracks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="neon-box rounded-xl p-6"
          >
            <div className="feature-icon mb-4">
              <Check size={24} />
            </div>
            <h4 className="text-lg font-semibold mb-3">Revenue That Scales Reliably</h4>
            <p className="text-muted-foreground">
              Traditional sales methods don't scale, making it difficult to predict and increase your revenue consistently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;