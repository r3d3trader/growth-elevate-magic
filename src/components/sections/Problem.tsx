import React from "react";
import { motion } from "framer-motion";
import { UI } from "@/config/ui";
import { Check, AlertTriangle, Clock, DollarSign, XCircle, BarChart, Zap } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Manual Prospect Research is Tedious",
      description: "Spending hours searching for potential clients manually is inefficient and takes you away from your core business activities."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: "No Effective Follow-Up System",
      description: "Without a systematic approach to following up with prospects, valuable opportunities slip through the cracks."
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Revenue That Scales Reliably",
      description: "Traditional sales methods don't scale, making it difficult to predict and increase your revenue consistently."
    }
  ];

  return (
    <section className={`relative ${UI.spacing.section} ${UI.spacing.inner}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
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
            The Growth Challenges You Face
          </motion.h2>
          <motion.p
            className={`${UI.text.sizes.body} text-muted-foreground max-w-3xl mx-auto`}
            variants={UI.animations.slideUp}
          >
            Scaling a business comes with complex obstacles that traditional solutions can't solve.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={UI.animations.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              className={`bg-card/80 border border-primary/10 rounded-xl p-8 ${UI.shadows.card} hover:border-primary/30 transition-all`}
              variants={UI.animations.slideUp}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="p-3 rounded-full bg-primary/10 w-fit mb-6"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -10, 10, -5, 5, 0]
                }}
              >
                {problem.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {problem.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {problem.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Check className="h-4 w-4" />
                <span>Solved with AI Sales System</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/20 transition-all"
          variants={UI.animations.slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2 text-foreground">
                Our clients report saving an average of 15+ hours per week
              </h4>
              <p className="text-muted-foreground">
                By automating their sales processes with our AI system, businesses can focus on growth and strategy instead of manual prospecting.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;