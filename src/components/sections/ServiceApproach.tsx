
import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  LineChart, 
  Laptop, 
  Zap, 
  CheckCircle, 
  BarChart, 
  ShieldCheck,
  Clock,
  Wrench
} from "lucide-react";

const ServiceApproach: React.FC = () => {
  const approaches = [
    {
      icon: <Search className="h-10 w-10 text-agency-blue" />,
      title: "Discovery & Analysis",
      description: "Understanding business objectives through data-driven insights."
    },
    {
      icon: <LineChart className="h-10 w-10 text-agency-indigo" />,
      title: "Planning & Strategy",
      description: "Developing a customized roadmap for rapid growth."
    },
    {
      icon: <Laptop className="h-10 w-10 text-blue-500" />,
      title: "Implementation",
      description: "Executing high-performance websites, funnels, and automation tools."
    },
    {
      icon: <Zap className="h-10 w-10 text-amber-500" />,
      title: "Automation & Integration",
      description: "Streamlining workflows to maximize efficiency."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      title: "Done-For-You Excellence",
      description: "Delivering fully managed solutions with no setup hassle."
    },
    {
      icon: <BarChart className="h-10 w-10 text-purple-500" />,
      title: "Monitoring & Optimization",
      description: "Continuously refining strategies for maximum ROI."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-red-500" />,
      title: "Risk-Free Partnership",
      description: "60-day money-back guarantee to ensure confidence in our services."
    },
    {
      icon: <Clock className="h-10 w-10 text-teal-500" />,
      title: "Ongoing Support",
      description: "Dedicated team providing continuous assistance and guidance."
    },
    {
      icon: <Wrench className="h-10 w-10 text-orange-500" />,
      title: "Continuous Innovation",
      description: "Regularly updating systems with cutting-edge technologies."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach & Methodology</h2>
          <p className="text-lg text-gray-700">
            How we deliver exceptional results for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="rounded-full bg-gray-50 w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                {approach.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{approach.title}</h3>
              <p className="text-gray-700 text-center">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceApproach;
