import React from "react";
import PremiumPageLayout from "@/components/layout/PremiumPageLayout";
import PremiumHero from "@/components/sections/PremiumHero";
import PremiumFeatures from "@/components/sections/PremiumFeatures";
import PremiumTestimonials from "@/components/sections/PremiumTestimonials";
import PremiumCTA from "@/components/sections/PremiumCTA";
import { useToast } from "@/hooks/use-toast";
import { PremiumEffects, LuxuryText, LuxuryDivider } from "@/components/ui/premium-effects";
import { motion } from "framer-motion";
import { Zap, BarChart, Users, Clock, Star, Shield } from "lucide-react";

const PremiumIndex = () => {
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent | React.MouseEvent) => {
    if (e.type === "submit") e.preventDefault();
    toast({
      title: "Request submitted!",
      description: "We'll be in touch with you shortly.",
      duration: 5000,
    });
  };
  
  return (
    <PremiumPageLayout>
      {/* Premium Hero Section */}
      <PremiumHero 
        onSubmit={handleFormSubmit}
        title="Elevate Your Business Growth"
        subtitle="Experience our premium digital solutions designed to deliver measurable results and accelerate your growth trajectory."
        primaryCta="Schedule Your Strategy Call"
        secondaryCta="Explore Our Solutions"
      />
      
      {/* Premium Overview Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-neutral-900 to-background">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <LuxuryText
              as="h2"
              className="text-4xl md:text-5xl font-bold mb-6"
              gradient="gold"
              font="luxury-display"
              animation="fadeIn"
            >
              The Complete Growth Solution
            </LuxuryText>
            
            <LuxuryDivider 
              variant="gradient" 
              color="gold" 
              width="narrow" 
              animation 
              className="my-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-neutral-400 font-luxury-serif"
            >
              Everything you need to scale your business with predictable, sustainable growth
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="h-8 w-8 text-[#cb9b51]" />,
                title: "AI-Powered Lead Generation",
                description: "Automated prospect identification and qualification"
              },
              {
                icon: <BarChart className="h-8 w-8 text-[#cb9b51]" />,
                title: "Smart Funnel Optimization",
                description: "Data-driven conversion rate improvements"
              },
              {
                icon: <Users className="h-8 w-8 text-[#cb9b51]" />,
                title: "Automated Follow-Up",
                description: "Personalized engagement at scale"
              },
              {
                icon: <Clock className="h-8 w-8 text-[#cb9b51]" />,
                title: "24/7 Engagement",
                description: "Always-on sales presence"
              },
              {
                icon: <Star className="h-8 w-8 text-[#cb9b51]" />,
                title: "Premium Analytics",
                description: "Comprehensive performance tracking"
              },
              {
                icon: <Shield className="h-8 w-8 text-[#cb9b51]" />,
                title: "Enterprise Security",
                description: "Industry-leading data protection"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-xl bg-black/40 backdrop-blur-md border border-[#cb9b51]/20 hover:border-[#cb9b51]/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="p-4 rounded-full bg-[#cb9b51]/10"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -10, 10, -5, 5, 0]
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#cb9b51]">{item.title}</h3>
                </div>
                <p className="text-neutral-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium Features Section */}
      <PremiumFeatures 
        title="Premium Features" 
        subtitle="Discover the exceptional features that set our solutions apart"
        layout="alternating"
        onCtaClick={handleFormSubmit}
      />
      
      {/* Premium Results Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-neutral-900/90">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <LuxuryText
              as="h2"
              className="text-4xl md:text-5xl font-bold mb-6"
              gradient="gold"
              font="luxury-display"
              animation="fadeIn"
            >
              Exceptional Results
            </LuxuryText>
            
            <LuxuryDivider 
              variant="gradient" 
              color="gold" 
              width="narrow" 
              animation 
              className="my-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-neutral-400 font-luxury-serif"
            >
              Our clients experience transformative growth with our premium solutions
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "320%", label: "Average Increase in Conversion Rate", color: "from-[#cb9b51] to-[#f6e27a]" },
              { number: "215%", label: "Average ROI Within First 90 Days", color: "from-primary to-green-400" },
              { number: "30+", label: "Hours Saved Weekly Through Automation", color: "from-[#50C878] to-[#009473]" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
              >
                <LuxuryText
                  as="p"
                  className="text-5xl md:text-6xl font-bold mb-4"
                  gradient={i === 0 ? "gold" : i === 1 ? "primary" : "emerald"}
                  font="luxury-display"
                  glow
                >
                  {stat.number}
                </LuxuryText>
                <p className="text-lg text-neutral-300 font-luxury-serif">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium Testimonials Section */}
      <PremiumTestimonials 
        variant="featured"
      />
      
      {/* Premium CTA Section */}
      <PremiumCTA 
        variant="gradient"
        accentColor="gold"
        onPrimaryClick={handleFormSubmit}
      />
    </PremiumPageLayout>
  );
};

export default PremiumIndex;