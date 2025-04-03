import React from "react";
import { motion } from "framer-motion";
import { Search, Settings, TrendingUp } from "lucide-react";
import CtaButton from "../ui/cta-button";

interface ProcessProps {
  onSubmit: (e: React.FormEvent) => void;
}

const Process: React.FC<ProcessProps> = ({ onSubmit }) => {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Free Strategy Call",
      description: "We analyze your business & create a custom plan.",
      color: "from-green-500 to-green-700", // Updated color scheme
      delay: 0.1
    },
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "Full Implementation",
      description: "We build your website, funnels, and automation.",
      color: "from-green-500 to-green-700", // Updated color scheme
      delay: 0.2
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Leads & Sales on Autopilot",
      description: "Enjoy more customers with zero extra work.",
      color: "from-green-500 to-green-700", // Updated color scheme
      delay: 0.3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: '#1a1a1a' }}> {/* Background color updated */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"  {/* Text color updated */}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-300" {/* Text color updated */}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our 3-step process makes growing your business effortless and risk-free
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-xl shadow-custom p-8 shadow-custom-hover transition-all duration-300 hover:-translate-y-2 border border-gray-600" {/* Added border and updated background */}
              variants={itemVariants}
            >
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6`}>
                {step.icon}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white font-bold text-lg"> {/* Updated color */}
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white"> {/* Text color updated */} {step.title}</h3>
              </div>
              <p className="text-gray-300"> {/* Text color updated */} {step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto text-center text-white" {/* Text color updated */}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6">Ready to start your growth journey?</h3>
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="Enter your phone number"
              className="px-6 py-3 rounded-lg border border-gray-300 flex-grow max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500 text-white bg-black" {/* Updated styles */}
            />
            <CtaButton type="submit" size="lg" className="bg-green-500 hover:bg-green-700 text-white"> {/* Updated styles */}
              Claim Your Free Strategy Call
            </CtaButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;