import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import PremiumPageLayout from "@/components/layout/EnhancedPageLayout";
import { ChevronDown, Star, Zap, BarChart, Users, Clock, Shield, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LuxuryText, LuxuryDivider } from "@/components/ui/premium-effects";
import EnhancedButton from "@/components/ui/enhanced-button";
import EnhancedCard from "@/components/ui/enhanced-card";
import EnhancedFeatureCard from "@/components/ui/enhanced-feature-card";
import EnhancedTestimonial from "@/components/ui/enhanced-testimonial";
import EnhancedStatsCard from "@/components/ui/enhanced-stats-card";
import EnhancedCTA from "@/components/sections/EnhancedCTA";
import EnhancedParticles from "@/components/ui/enhanced-particles";
import EnhancedFeatureSection from "@/components/sections/EnhancedFeatureSection";
import EnhancedSuccessStories from "@/components/sections/EnhancedSuccessStories";
import EnhancedPricingSection from "@/components/sections/EnhancedPricingSection";

const EnhancedIndex = () => {
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: false, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isTestimonialInView = useInView(testimonialRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  
  const smoothScrollProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    restDelta: 0.001
  });
  
  const heroOpacity = useTransform(smoothScrollProgress, [0, 0.1], [1, 0.3]);
  const heroScale = useTransform(smoothScrollProgress, [0, 0.1], [1, 0.95]);
  
  const handleFormSubmit = (e: React.FormEvent | React.MouseEvent) => {
    if (e.type === "submit") e.preventDefault();
    toast({
      title: "Request submitted!",
      description: "We'll be in touch with you shortly.",
      duration: 5000,
    });
  };
  
  // Parallax effect for background elements
  const bgY1 = useTransform(smoothScrollProgress, [0, 1], [0, -200]);
  const bgY2 = useTransform(smoothScrollProgress, [0, 1], [0, -100]);
  const bgY3 = useTransform(smoothScrollProgress, [0, 1], [0, -150]);
  
  return (
    <PremiumPageLayout>
      {/* Enhanced Hero Section with Parallax and Particles */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          
          {/* Animated Particles */}
          <EnhancedParticles />
          
          {/* Parallax Background Elements */}
          <motion.div 
            className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full bg-[#c6ff00]/5 blur-[150px]"
            style={{ y: bgY1 }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c6ff00]/3 blur-[120px]"
            style={{ y: bgY2 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1a1a1a] blur-[100px]"
            style={{ y: bgY3 }}
          />
          
          {/* Animated Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#c6ff00]/40 to-transparent"
                style={{
                  top: `${15 * i}%`,
                  left: 0,
                  right: 0,
                  opacity: 0.2
                }}
                animate={{
                  x: i % 2 === 0 ? ["-100%", "100%"] : ["100%", "-100%"],
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="container relative z-10 px-4 sm:px-6 py-24 text-center"
          style={{ 
            opacity: heroOpacity,
            scale: heroScale
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-block mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium bg-black/40 backdrop-blur-md border border-[#c6ff00]/20">
              <Star className="w-4 h-4 text-[#c6ff00]" />
              <span className="text-[#c6ff00]">Premium Experience</span>
            </div>
          </motion.div>
          
          {/* Main Headline with Animated Typing Effect */}
          <div className="mb-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <LuxuryText 
                as="h1"
                className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-balance mb-4"
                gradient="primary"
                font="luxury-display"
                glow
              >
                ALIGNING WITH THE
              </LuxuryText>
              <LuxuryText 
                as="h1"
                className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-balance mb-4"
                gradient="primary"
                font="luxury-display"
                glow
              >
                FASTEST WAY TO PROFIT
              </LuxuryText>
              <LuxuryText 
                as="h2"
                className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-balance"
                font="luxury-display"
              >
                FROM A DIGITAL PRODUCT
              </LuxuryText>
            </motion.div>
          </div>

          {/* Luxury Divider */}
          <LuxuryDivider 
            variant="gradient" 
            color="primary" 
            width="narrow" 
            animation 
            className="my-10"
          />

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Premium digital solutions that deliver measurable results and accelerate your growth trajectory.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <EnhancedButton 
              variant="premium"
              size="lg"
              className="px-8 py-6 text-lg"
              glow
              icon={<Zap className="w-5 h-5" />}
              onClick={handleFormSubmit}
            >
              Schedule Your Strategy Call
            </EnhancedButton>
            <EnhancedButton 
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-[#c6ff00]/30 hover:bg-[#c6ff00]/5 text-[#c6ff00]"
            >
              <Star className="w-5 h-5 mr-2" />
              Explore Our Solutions
            </EnhancedButton>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { number: "-35%", label: "REDUCED CUSTOMER ACQUISITION COST" },
              { number: "10X", label: "RETURN ON AD SPEND" },
              { number: "+73%", label: "INCREASED CONVERSION RATE" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#c6ff00] mb-2">{stat.number}</p>
                <p className="text-sm text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div 
              className="flex flex-col items-center text-neutral-400"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-medium mb-2">Scroll to Explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Features Section */}
      <section 
        ref={featuresRef}
        className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-neutral-900"
      >
        <div className="absolute inset-0 z-0">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#c6ff0010_0,transparent_50%)]" />
          
          {/* Animated Dots */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="absolute w-1 h-1 rounded-full bg-[#c6ff00]/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 6,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <LuxuryText
                as="h2"
                className="text-4xl md:text-5xl font-bold mb-6"
                gradient="primary"
                font="luxury-display"
                glow
              >
                The Complete Growth Solution
              </LuxuryText>
              
              <LuxuryDivider 
                variant="gradient" 
                color="primary" 
                width="narrow" 
                animation 
                className="my-8"
              />
              
              <motion.p
                className="text-xl text-neutral-400"
                initial={{ opacity: 0 }}
                animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Everything you need to scale your business with predictable, sustainable growth
              </motion.p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-[#c6ff00]" />,
                title: "AI-Powered Lead Generation",
                description: "Automated prospect identification and qualification"
              },
              {
                icon: <BarChart className="h-8 w-8 text-[#c6ff00]" />,
                title: "Smart Funnel Optimization",
                description: "Data-driven conversion rate improvements"
              },
              {
                icon: <Users className="h-8 w-8 text-[#c6ff00]" />,
                title: "Automated Follow-Up",
                description: "Personalized engagement at scale"
              },
              {
                icon: <Clock className="h-8 w-8 text-[#c6ff00]" />,
                title: "24/7 Engagement",
                description: "Always-on sales presence"
              },
              {
                icon: <Star className="h-8 w-8 text-[#c6ff00]" />,
                title: "Premium Analytics",
                description: "Comprehensive performance tracking"
              },
              {
                icon: <Shield className="h-8 w-8 text-[#c6ff00]" />,
                title: "Enterprise Security",
                description: "Industry-leading data protection"
              }
            ].map((item, i) => (
              <EnhancedFeatureCard
                key={i}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={0.1 * i}
                inView={isFeaturesInView}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced Stats Section */}
      <section 
        ref={statsRef}
        className="relative py-24 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 z-0">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,#c6ff0008_0,transparent_70%)]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
        
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <LuxuryText
                as="h2"
                className="text-4xl md:text-5xl font-bold mb-6"
                gradient="primary"
                font="luxury-display"
                glow
              >
                Exceptional Results
              </LuxuryText>
              
              <LuxuryDivider 
                variant="gradient" 
                color="primary" 
                width="narrow" 
                animation 
                className="my-8"
              />
              
              <motion.p
                className="text-xl text-neutral-400"
                initial={{ opacity: 0 }}
                animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Our clients experience transformative growth with our premium solutions
              </motion.p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "320%", label: "Average Increase in Conversion Rate", color: "primary" },
              { number: "215%", label: "Average ROI Within First 90 Days", color: "primary" },
              { number: "30+", label: "Hours Saved Weekly Through Automation", color: "primary" }
            ].map((stat, i) => (
              <EnhancedStatsCard
                key={i}
                number={stat.number}
                label={stat.label}
                color={stat.color}
                delay={0.1 * i}
                inView={isStatsInView}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced Feature Showcase */}
      <EnhancedFeatureSection />
      
      {/* Enhanced Testimonials Section */}
      <section 
        ref={testimonialRef}
        className="relative py-24 overflow-hidden bg-gradient-to-b from-neutral-900 to-black"
      >
        <div className="absolute inset-0 z-0">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#c6ff0008_0,transparent_50%)]" />
          
          {/* Animated Lines */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={`tline-${i}`}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#c6ff00]/30 to-transparent"
                style={{ top: `${20 * i}%` }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTestimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <LuxuryText
                as="h2"
                className="text-4xl md:text-5xl font-bold mb-6"
                gradient="primary"
                font="luxury-display"
                glow
              >
                Success Stories
              </LuxuryText>
              
              <LuxuryDivider 
                variant="gradient" 
                color="primary" 
                width="narrow" 
                animation 
                className="my-8"
              />
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                quote: "The Growth Elevate Magic system completely transformed our lead generation process. We've seen a 320% increase in qualified leads and our sales team couldn't be happier.",
                author: "Sarah Johnson",
                role: "Marketing Director, TechFlow Inc.",
                rating: 5
              },
              {
                quote: "Implementing this system was the best decision we made this year. Our conversion rates have skyrocketed and the ROI has been incredible. Highly recommended!",
                author: "Michael Chen",
                role: "CEO, Quantum Solutions",
                rating: 5
              }
            ].map((testimonial, i) => (
              <EnhancedTestimonial
                key={i}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
                delay={0.2 * i}
                inView={isTestimonialInView}
              />
            ))}
          </div>
          
          <EnhancedSuccessStories />
        </div>
      </section>
      
      {/* Enhanced Pricing Section */}
      <EnhancedPricingSection />
      
      {/* Enhanced CTA Section */}
      <section 
        ref={ctaRef}
        className="relative py-24 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 z-0">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#c6ff0010_0,transparent_50%)]" />
          
          {/* Animated Particles */}
          <div className="absolute inset-0 opacity-30">
            <EnhancedParticles count={50} />
          </div>
        </div>
        
        <div className="container relative z-10 px-4 sm:px-6">
          <EnhancedCTA 
            title="Ready to Elevate Your Business Growth?"
            subtitle="Schedule your free strategy call today and discover how our premium solutions can transform your business."
            primaryCta="Schedule Your Strategy Call"
            secondaryCta="Explore Our Solutions"
            onPrimaryClick={handleFormSubmit}
            inView={isCtaInView}
          />
        </div>
      </section>
    </PremiumPageLayout>
  );
};

export default EnhancedIndex;
