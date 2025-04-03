import React from "react";
import { motion } from "framer-motion";
import CtaButton from "@/components/ui/cta-button";

interface FinalCTAProps {
  onSubmit: (e: React.FormEvent) => void;
}

const FinalCTA = ({ onSubmit }: FinalCTAProps) => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto neon-box rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-glow">
            DON'T MISS OUT<br/>
            GET STARTED TODAY!
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses that have transformed their sales process with our AI-powered system.
          </p>

          <form onSubmit={onSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-full bg-muted border border-primary/30 focus:border-primary text-foreground focus:outline-none"
                required
              />
              <CtaButton className="w-full sm:w-auto">
                Get Started Now
              </CtaButton>
            </div>
          </form>

          <div className="flex justify-center gap-8 mb-6">
            <div>
              <div className="text-xl font-bold text-primary mb-1 neon-glow">+92%</div>
              <div className="text-xs text-muted-foreground">Conversion Rate</div>
            </div>

            <div className="flex items-center text-muted-foreground text-sm">
              <span className="flex items-center gap-1 mx-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </span>
              <span className="flex items-center gap-1 mx-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </span>
              <span className="flex items-center gap-1 mx-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </span>
              <span className="flex items-center gap-1 mx-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </span>
              <span className="flex items-center gap-1 mx-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </span>
            </div>

            <div>
              <div className="text-xl font-bold text-primary mb-1 neon-glow">+46%</div>
              <div className="text-xs text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;