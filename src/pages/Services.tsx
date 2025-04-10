import React from "react";
import EnhancedPageLayout from "@/components/layout/EnhancedPageLayout";
import { motion } from "framer-motion";
import EnhancedButton from "@/components/ui/enhanced-button";
import { LuxuryText } from "@/components/ui/premium-effects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Target, MessageSquare, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedParticles from "@/components/ui/enhanced-particles";
import EnhancedFeatureCard from "@/components/ui/enhanced-feature-card";

const Services = () => {
  // Define service categories
  const categories = [
    { 
      icon: "🚀", 
      name: "Growth", 
      description: "Comprehensive strategies for rapid business expansion" 
    },
    { 
      icon: "🌐", 
      name: "Web", 
      description: "High-performance websites and digital experiences" 
    },
    { 
      icon: "🤖", 
      name: "Automation", 
      description: "Streamlined operations through intelligent automation" 
    },
    { 
      icon: "📊", 
      name: "Marketing", 
      description: "Results-driven campaigns that generate quality leads" 
    },
  ];

  // Define services table data
  const services = [
    { name: "Business Analysis Document", description: "Analyzes key business data, identifies opportunities, and creates a tailored strategy for growth." },
    { name: "Wireframe Layout", description: "Designs intuitive wireframe layouts to optimize user flow and conversions." },
    { name: "Ultra-Fast, Low Code, Mobile-Friendly HTML Website", description: "A 5-page, high-performance website with legal pages, knowledge sections, and action pages." },
    { name: "Website Optimization", description: "Ensures fast load times, SEO enhancements, and conversion-focused design tweaks." },
    { name: "Funnels and Landing Pages", description: "Custom-built funnels and landing pages designed to convert visitors into leads." },
    { name: "CRM Creation, Integration & Workflow Automation", description: "Builds and automates a CRM system for seamless lead management." },
    { name: "Forms for Lead Capture & Bookings", description: "High-conversion forms integrated into websites and marketing systems." },
    { name: "Referral Management", description: "Custom login pages, workflows, and email sequences for structured referral programs." },
    { name: "ChatBot Setup", description: "AI-powered chatbot to manage inquiries and integrate with WhatsApp." },
    { name: "Abandonment Recovery", description: "Automated email and WhatsApp follow-ups to recover lost leads." },
    { name: "Email Sequence Setup", description: "Personalized and automated email sequences for nurturing leads." },
    { name: "Ads Management", description: "Strategy and optimization for paid ads across Google, Facebook, and Instagram." },
    { name: "Reputation Management Setup", description: "Review management and customer engagement strategies for brand trust." },
    { name: "Workflow Automation", description: "Multi-step automation to streamline operations and customer interactions." },
    { name: "Automated Call Agent", description: "AI-driven call handling, follow-ups, and CRM logging for client communication." },
    { name: "Leads Gen Agent", description: "Automated lead generation solutions integrated into CRM workflows." },
    { name: "Payments Integration", description: "Secure payment gateway setup with Stripe, PayPal, and other providers." },
    { name: "SEO Services", description: "Optimized content, local SEO strategies, and in-depth keyword research for search visibility." },
    { name: "Security", description: "SSL certificates, security updates, and risk management for website protection." },
    { name: "Analytics", description: "Comprehensive tracking and reporting tools for performance insights." },
    { name: "Lead Magnet Creation & Strategies", description: "Custom high-value offers designed to attract and convert leads." },
  ];

  // Define approach steps
  const approach = [
    { 
      title: "Discovery & Analysis", 
      description: "Understanding business objectives through data-driven insights." 
    },
    { 
      title: "Planning & Strategy", 
      description: "Developing a customized roadmap for rapid growth." 
    },
    { 
      title: "Implementation", 
      description: "Executing high-performance websites, funnels, and automation tools." 
    },
    { 
      title: "Automation & Integration", 
      description: "Streamlining workflows to maximize efficiency." 
    },
    { 
      title: "Done-For-You Excellence", 
      description: "Delivering fully managed solutions with no setup hassle." 
    },
    { 
      title: "Monitoring & Optimization", 
      description: "Continuously refining strategies for maximum ROI." 
    },
    { 
      title: "Risk-Free Partnership", 
      description: "60-day money-back guarantee to ensure confidence in our services." 
    },
  ];

  // Define competitive advantages
  const advantages = [
    { 
      title: "Results-Driven", 
      description: "Strategies designed for measurable growth within 90 days." 
    },
    { 
      title: "Proven Methodologies", 
      description: "Data-backed funnels, automation, and CRM solutions." 
    },
    { 
      title: "Holistic Service Suite", 
      description: "End-to-end solutions for website, marketing, and automation." 
    },
    { 
      title: "Risk-Free Investment", 
      description: "60-day money-back guarantee for client confidence." 
    },
  ];

  // Define success stories
  const successStories = [
    { 
      initials: "LG", 
      title: "Local Gym", 
      description: "Implemented lead magnet funnels, automated call agents, and workflow automation. Achieved a 300% membership increase within 60 days." 
    },
    { 
      initials: "DC", 
      title: "Dental Clinic", 
      description: "Utilized referral management, automated email sequences, and call agent solutions. Doubled patient bookings in three months." 
    },
    { 
      initials: "RA", 
      title: "Real Estate Agency", 
      description: "Integrated local SEO, CRM, targeted ads, and workflow automation. Quadrupled qualified leads and increased revenue 4x within 90 days." 
    },
  ];

  // Define stats
  const stats = [
    { value: "4X", label: "Average Growth" },
    { value: "89%", label: "Time Saved" },
    { value: "60 Days", label: "To Results" }
  ];

  return (
    <EnhancedPageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black pt-20 pb-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          <EnhancedParticles />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6"
            >
              <Sparkles className="h-4 w-4 text-[#c6ff00]" />
              <span>Our Industry-Leading Services</span>
            </motion.div>
            
            <LuxuryText 
              as="h1" 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
              gradient="primary"
              glow
            >
              Your Growth Accelerator
            </LuxuryText>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive strategies and cutting-edge technologies to transform your business and outperform competitors.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <EnhancedButton 
                  variant="premium" 
                  size="lg" 
                  glow
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Get Your Free Consultation
                </EnhancedButton>
              </Link>
              <Link to="/pricing">
                <EnhancedButton 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View Pricing Plans
                </EnhancedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6">
              <Zap className="h-4 w-4 text-[#c6ff00]" />
              <span>Four Pillars of Growth</span>
            </div>
            
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              gradient="primary"
              glow
            >
              Comprehensive Services
            </LuxuryText>
            
            <p className="text-lg text-white/70">
              We've crafted our services to deliver maximum impact across all aspects of your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-black/50 backdrop-blur-sm border border-[#c6ff00]/10 rounded-xl p-6 hover:border-[#c6ff00]/30 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-[#c6ff00] mb-2">{category.name}</h3>
                  <p className="text-white/70 flex-grow">{category.description}</p>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-1.5 text-sm text-[#c6ff00] hover:text-[#d4ff4d] transition-colors"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Table/Grid */}
      <section className="py-20 relative bg-gradient-to-b from-black/95 to-black/90 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6">
              <Target className="h-4 w-4 text-[#c6ff00]" />
              <span>Comprehensive Solutions</span>
            </div>
            
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              gradient="primary"
              glow
            >
              Our Service Offerings
            </LuxuryText>
            
            <p className="text-lg text-white/70">
              Each service is designed to address specific aspects of your business growth strategy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="h-full">
                <EnhancedFeatureCard
                  title={service.name}
                  description={service.description}
                  icon={<Check className="h-5 w-5 text-[#c6ff00]" />}
                  delay={index * 0.05}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-gradient-to-b from-black/90 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6">
              <MessageSquare className="h-4 w-4 text-[#c6ff00]" />
              <span>Our Methodology</span>
            </div>
            
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              gradient="primary"
              glow
            >
              How We Work With You
            </LuxuryText>
            
            <p className="text-lg text-white/70">
              Our proven approach ensures we deliver consistent results for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-black/50 backdrop-blur-sm border border-[#c6ff00]/10 rounded-xl p-8 hover:border-[#c6ff00]/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#c6ff00]/10 text-[#c6ff00] font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/70">{step.description}</p>
                </div>
                
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-2 translate-x-full">
                    <div className="w-full h-0.5 bg-[#c6ff00]/30"></div>
                    <div className="absolute right-0 top-1/2 transform translate-y-[-50%] -translate-x-1">
                      <ArrowRight className="h-5 w-5 text-[#c6ff00]/50" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6">
              <Sparkles className="h-4 w-4 text-[#c6ff00]" />
              <span>Results That Speak</span>
            </div>
            
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              gradient="primary"
              glow
            >
              Success Stories
            </LuxuryText>
            
            <p className="text-lg text-white/70 mb-8">
              Real results from real clients who trusted our process
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                  className="bg-black/50 backdrop-blur-sm border border-[#c6ff00]/10 rounded-xl p-6 hover:border-[#c6ff00]/30 transition-all duration-300 text-center"
                >
                  <LuxuryText 
                    as="div" 
                    className="text-4xl font-bold mb-2"
                    gradient="primary"
                    glow
                  >
                    {stat.value}
                  </LuxuryText>
                  <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-black/50 backdrop-blur-sm border border-[#c6ff00]/10 rounded-xl p-6 hover:border-[#c6ff00]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-[#c6ff00]/10 flex items-center justify-center">
                      <div className="text-[#c6ff00] font-bold">{story.initials}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#c6ff00]">{story.title}</h3>
                    <p className="text-sm text-white/70">{story.description}</p>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-1.5 text-sm text-[#c6ff00] hover:text-[#d4ff4d] mt-4 transition-colors"
                >
                  <span>Read full case study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black via-black/95 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6">
              <Zap className="h-4 w-4 text-[#c6ff00]" />
              <span>Ready to Get Started?</span>
            </div>
            
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              gradient="primary"
              glow
            >
              Scale Your Business—Hassle-Free
            </LuxuryText>
            
            <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
              Get started with our risk-free 60-day money-back guarantee today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <EnhancedButton 
                  variant="premium" 
                  size="lg" 
                  glow
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Get Your Free Growth Plan
                </EnhancedButton>
              </Link>
              <Link to="/pricing">
                <EnhancedButton 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View Pricing Plans
                </EnhancedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </EnhancedPageLayout>
  );
};

export default Services;
