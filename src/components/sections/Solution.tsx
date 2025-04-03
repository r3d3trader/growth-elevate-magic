
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CtaButton from "@/components/ui/cta-button";

const Solution = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">OUR SOLUTION</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 neon-glow">Your Path to High-Paying Clients</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-card rounded-xl h-40 mb-6 shadow-custom neon-border flex items-center justify-center">
              <span className="text-5xl font-bold text-primary">1</span>
            </div>
            <h4 className="text-xl font-semibold mb-3">Identify</h4>
            <p className="text-muted-foreground mb-4">
              Our AI algorithm identifies high-quality prospects that match your ideal client profile with incredible accuracy.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Audience targeting precision</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Intent-based qualification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Real-time opportunity alerts</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-card rounded-xl h-40 mb-6 shadow-custom neon-border flex items-center justify-center">
              <span className="text-5xl font-bold text-primary">2</span>
            </div>
            <h4 className="text-xl font-semibold mb-3">Engage</h4>
            <p className="text-muted-foreground mb-4">
              Our personalized multi-channel engagement system reaches prospects exactly where they are most receptive.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Personalized messaging</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Multi-channel automation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Perfect timing algorithms</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-card rounded-xl h-40 mb-6 shadow-custom neon-border flex items-center justify-center">
              <span className="text-5xl font-bold text-primary">3</span>
            </div>
            <h4 className="text-xl font-semibold mb-3">Convert</h4>
            <p className="text-muted-foreground mb-4">
              Our advanced conversion frameworks handle objections and guide prospects to become paying clients.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Automated follow-up sequences</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Intelligent objection handling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Frictionless closing process</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <CtaButton size="lg" className="shadow-lg">Get Started Today</CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Solution;
