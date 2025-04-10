import React from "react";
import { motion } from "framer-motion";
import { UI } from "@/config/ui";
import { Check, Zap, BarChart, Users, Clock, Star } from "lucide-react";
import CtaButton from "@/components/ui/cta-button";

const CompleteSolution: React.FC = () => {
  const solutionSteps = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "AI-Powered Lead Generation",
      description: "Automated prospect identification and qualification"
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Smart Funnel Optimization",
      description: "Data-driven conversion rate improvements"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Automated Follow-Up",
      description: "Personalized engagement at scale"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Engagement",
      description: "Always-on sales presence"
    }
  ];

  return (
    <section className={`relative ${UI.spacing.section} bg-gradient-to-b from-card/50 to-background`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e6ff0010_0px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
        <motion.div 
          className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 12,
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
            The Complete Growth Solution
          </motion.h2>
          <motion.p
            className={`${UI.text.sizes.body} text-muted-foreground max-w-3xl mx-auto`}
            variants={UI.animations.slideUp}
          >
            Everything you need to scale your business with predictable, sustainable growth.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {solutionSteps.map((step, i) => (
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
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
              <Star className="h-4 w-4" />
              <span>What Our Clients Say</span>
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
                  <Check className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <CtaButton 
              size="lg" 
              className="w-full px-8 py-4 text-lg"
            >
              <Zap className="h-5 w-5 mr-2" />
              Get Started Today
            </CtaButton>
            <p className="text-sm text-muted-foreground text-center">
              No obligation • 60-day money-back guarantee • Full support included
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompleteSolution;
