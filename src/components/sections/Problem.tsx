
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const Problem: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll(".reveal-from-bottom, .reveal-from-left, .reveal-from-right");
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 reveal-from-bottom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Struggling to Get More Customers & Scale Your Business?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700 reveal-from-bottom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            You're not alone. Many local businesses struggle to scale due to ineffective marketing and lack of automation. We've helped hundreds overcome this challenge.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Relying on referrals, but no steady flow of leads?",
              description: "Unpredictable income makes planning for growth nearly impossible.",
              delay: 0
            },
            {
              title: "Wasting money on ads that don't convert?",
              description: "Poor targeting and messaging leads to high ad spend with minimal return.",
              delay: 0.1
            },
            {
              title: "Spending hours following up with leads instead of running your business?",
              description: "Manual follow-ups are time-consuming and often inconsistent.",
              delay: 0.2
            }
          ].map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-custom p-6 shadow-custom-hover reveal-from-bottom"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex gap-4 items-start mb-4">
                <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-800">{problem.title}</h3>
              </div>
              <p className="text-gray-600 ml-10">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
