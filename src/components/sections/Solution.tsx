import React from "react";
import { motion } from "framer-motion";
import { UI } from "@/config/ui";
import { CheckCircle, Target, MessageSquare, Zap } from "lucide-react";
import CtaButton from "@/components/ui/cta-button";
import { Link } from "react-router-dom";

const Solution = () => {
  const steps = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Identify",
      description: "Our AI algorithm identifies high-quality prospects that match your ideal client profile with incredible accuracy.",
      features: ["Audience targeting precision", "Intent-based qualification", "Real-time opportunity alerts"]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Engage",
      description: "Our personalized multi-channel engagement system reaches prospects exactly where they are most receptive.",
      features: ["Personalized messaging", "Multi-channel automation", "Perfect timing algorithms"]
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Convert",
      description: "Our advanced conversion frameworks handle objections and guide prospects to become paying clients.",
      features: ["Automated follow-up sequences", "Intelligent objection handling", "Frictionless closing process"]
    }
  ];

  return (
    <section className={`relative ${UI.spacing.section} bg-gradient-to-b from-card/50 to-background`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e6ff0010_0px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={UI.animations.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className={`${UI.text.sizes.heading} font-medium mb-6 ${UI.text.balance}`}
            variants={UI.animations.slideUp}
          >
            Our AI-Driven Growth Framework
          </motion.h2>
          <motion.p
            className={`${UI.text.sizes.body} text-muted-foreground max-w-3xl mx-auto`}
            variants={UI.animations.slideUp}
          >
            A systematic approach to scaling your business with predictable, sustainable results.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            variants={UI.animations.stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-xl ${UI.shadows.card} bg-card/80 border border-primary/10 hover:border-primary/30 transition-all`}
                variants={UI.animations.slideUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-4 rounded-full bg-primary/10"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -10, 10, -5, 5, 0]
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{step.description}</p>
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="sticky top-24">
            <motion.div
              className={`p-8 rounded-2xl ${UI.shadows.button} bg-card border border-primary/20`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
                  <Zap className="h-4 w-4" />
                  <span>Results You Can Expect</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Transform Your Growth Trajectory</h3>
                <ul className="space-y-4">
                  {[
                    "3-5x increase in qualified leads",
                    "60% reduction in customer acquisition costs",
                    "40% improvement in conversion rates",
                    "15+ hours saved per week"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-primary/10">
                <p className="text-sm text-muted-foreground mb-4">
                  Our framework adapts to your business needs while maintaining core principles that drive growth.
                </p>
                <Link to="/contact">
                  <CtaButton 
                    size="lg" 
                    className="w-full px-8 py-4 text-lg"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    Get Started Today
                  </CtaButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
