import React from "react";
import { motion } from "framer-motion";
import CtaButton from "@/components/ui/cta-button";

interface HeroProps {
  onSubmit: (e: React.FormEvent) => void;
}

const Hero = ({ onSubmit }: HeroProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight neon-glow">
            <span className="text-primary">AI SALES SYSTEM</span> – THE <br/>
            EASIEST WAY TO GET HIGH-<br/>
            PAYING CLIENTS ON AUTOPILOT!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Automate your client acquisition and scale your business with our proven AI-powered sales system
          </p>

          <div className="mb-12">
            <form onSubmit={onSubmit} className="max-w-md mx-auto">
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
          </div>

          <div className="relative aspect-video max-w-4xl mx-auto mb-8 neon-border">
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/30 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-primary/50 transition-colors">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              Trusted by 1,000+ businesses
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              Conversion focused design
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              Start scaling in minutes
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              Expert support team
            </span>
          </div>
        </motion.div>

        <div className="flex justify-center gap-12 mt-16">
          <div className="stat-card">
            <div className="text-3xl font-bold text-primary mb-1 neon-glow">+92%</div>
            <div className="text-sm text-muted-foreground">Conversion Rate</div>
          </div>

          <div className="stat-card">
            <div className="text-3xl font-bold text-primary mb-1 neon-glow">6X</div>
            <div className="text-sm text-muted-foreground">Revenue Growth</div>
          </div>

          <div className="stat-card">
            <div className="text-3xl font-bold text-primary mb-1 neon-glow">+46%</div>
            <div className="text-sm text-muted-foreground">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;