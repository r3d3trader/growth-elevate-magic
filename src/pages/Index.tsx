import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import EnhancedPageLayout from "@/components/layout/EnhancedPageLayout";
import { ChevronDown, Star, Zap, BarChart, Users, Clock, Shield, Check, ArrowRight, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LuxuryText, LuxuryDivider } from "@/components/ui/premium-effects";
import EnhancedButton from "@/components/ui/enhanced-button";
import EnhancedFeatureCard from "@/components/ui/enhanced-feature-card";
import EnhancedParticles from "@/components/ui/enhanced-particles";
import EnhancedTestimonial from "@/components/ui/enhanced-testimonial";

const Index = () => {
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Video modal state
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // InView hooks for animations
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const isProblemInView = useInView(problemRef, { once: true, amount: 0.3 });
  const isSolutionInView = useInView(solutionRef, { once: true, amount: 0.3 });
  const isValueInView = useInView(valueRef, { once: true, amount: 0.3 });
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, amount: 0.3 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  
  // Smooth scroll progress for parallax effects
  const smoothScrollProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    restDelta: 0.001
  });
  
  // Parallax effect transformations
  const heroOpacity = useTransform(smoothScrollProgress, [0, 0.1], [1, 0.3]);
  const heroScale = useTransform(smoothScrollProgress, [0, 0.1], [1, 0.95]);
  const bgY1 = useTransform(smoothScrollProgress, [0, 1], [0, -200]);
  const bgY2 = useTransform(smoothScrollProgress, [0, 1], [0, -100]);
  const bgY3 = useTransform(smoothScrollProgress, [0, 1], [0, -150]);
  
  const handleFormSubmit = (e: React.FormEvent | React.MouseEvent) => {
    if (e.type === "submit") e.preventDefault();
    toast({
      title: "Request submitted!",
      description: "We'll be in touch with you shortly.",
      duration: 5000,
    });
  };
  
  return (
    <EnhancedPageLayout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-16"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          
          {/* Animated Particles */}
          <EnhancedParticles count={60} speed={0.5} />
          
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
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <motion.div 
              className="md:col-span-7"
              style={{ opacity: heroOpacity, scale: heroScale }}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              {/* Pre-headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-[#c6ff00] text-sm font-medium">
                  <Star className="w-3.5 h-3.5 mr-1.5" /> Trusted by 500+ Local Businesses
                </span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <LuxuryText 
                  as="h1" 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                  gradient="primary"
                  glow
                >
                  Triple Your Local <br />
                  Business Revenue <br />
                  <span className="text-white">in 90 Days</span>
                </LuxuryText>
              </motion.div>
              
              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-neutral-300 mb-8 max-w-lg"
              >
                Our AI-powered growth system automates your marketing, sales, and client acquisition — <span className="text-[#c6ff00] font-medium">guaranteed results or you don't pay</span>.
              </motion.p>
              
              {/* CTA Group */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-6"
              >
                <EnhancedButton 
                  variant="premium" 
                  size="lg" 
                  className="relative overflow-hidden group"
                  glow
                  onClick={handleFormSubmit}
                >
                  <span className="relative z-10 flex items-center">
                    Get Your Free Growth Plan
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-[#c6ff00] to-[#a0cc00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: [0, 0.8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  />
                </EnhancedButton>
                
                <button 
                  className="flex items-center justify-center py-3 px-6 text-[#c6ff00] hover:text-white transition-colors duration-300 group"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#c6ff00]/10 border border-[#c6ff00]/20 mr-3 group-hover:bg-[#c6ff00]/20 transition-colors duration-300">
                    <Play className="w-5 h-5 text-[#c6ff00] fill-[#c6ff00]" />
                  </div>
                  <span>Watch 2-Min Demo</span>
                </button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-4"
              >
                <p className="text-sm text-neutral-500 mb-3">Trusted by businesses like:</p>
                <div className="flex flex-wrap items-center gap-6">
                  {["Local Gym", "Dental Clinic", "Real Estate", "Restaurant", "Auto Shop"].map((name, i) => (
                    <div key={i} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                      <div className="text-neutral-400 font-semibold">{name}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Form */}
            <motion.div 
              className="md:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-neutral-900/80 backdrop-blur-lg p-6 rounded-2xl border border-neutral-800 shadow-xl">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-2">Get Your <span className="text-[#c6ff00]">Free</span> Growth Analysis</h3>
                  <p className="text-neutral-400 text-sm">Limited to 5 businesses per week</p>
                </motion.div>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Business Name" 
                      className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/50 focus:border-[#c6ff00]/50 text-white placeholder:text-neutral-500"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/50 focus:border-[#c6ff00]/50 text-white placeholder:text-neutral-500"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/50 focus:border-[#c6ff00]/50 text-white placeholder:text-neutral-500"
                      required
                    />
                  </div>
                  <div>
                    <select 
                      className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/50 focus:border-[#c6ff00]/50 text-white placeholder:text-neutral-500 appearance-none"
                      required
                    >
                      <option value="" disabled selected>Business Type</option>
                      <option value="gym">Gym/Fitness</option>
                      <option value="dental">Dental Practice</option>
                      <option value="realestate">Real Estate</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="other">Other Local Business</option>
                    </select>
                  </div>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                  >
                    <EnhancedButton 
                      variant="premium" 
                      size="lg" 
                      className="w-full"
                      type="submit"
                      glow
                    >
                      Get My Free Growth Plan
                    </EnhancedButton>
                  </motion.div>
                  <div className="text-center text-neutral-500 text-xs mt-4">
                    <p>100% Free. No Credit Card Required.</p>
                    <p className="mt-1">Your data is secure and will never be shared.</p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <p className="text-sm text-neutral-500 mb-2">Discover how it works</p>
          <ChevronDown className="w-6 h-6 text-[#c6ff00]" />
        </motion.div>
      </section>
      
      {/* Problem Section */}
      <section 
        ref={problemRef}
        className="relative py-20 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-950" />
          <motion.div 
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#c6ff00]/3 blur-[150px]"
            style={{ y: bgY2, x: bgY1 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProblemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold mb-6"
              gradient="primary"
              glow
            >
              Are These Challenges Killing Your Business Growth?
            </LuxuryText>
            <p className="text-lg text-neutral-400">
              Most local business owners are working 60+ hours weekly yet still struggling with these common roadblocks:
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-[#c6ff00]" />,
                title: "Inconsistent Client Acquisition",
                description: "You're tired of the feast-or-famine cycle and unpredictable revenue that makes planning impossible.",
                delay: 0
              },
              {
                icon: <Clock className="w-10 h-10 text-[#c6ff00]" />,
                title: "Marketing That Drains Time & Money",
                description: "You've wasted thousands on ads and countless hours on marketing that produces minimal ROI.",
                delay: 0.2
              },
              {
                icon: <BarChart className="w-10 h-10 text-[#c6ff00]" />,
                title: "Intense Local Competition",
                description: "Your market is saturated with competitors who seem to be winning clients that should be yours.",
                delay: 0.4
              },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isProblemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: problem.delay }}
                className="p-6 border border-neutral-800 rounded-2xl bg-neutral-900/50 backdrop-blur relative group overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#c6ff00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <div className="mb-5">{problem.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-neutral-400">{problem.description}</p>
                
                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <p className="text-sm text-[#c6ff00] font-medium">Sound familiar? We can fix this →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section 
        ref={solutionRef}
        className="relative py-24 bg-gradient-to-b from-neutral-950 to-black overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
          
          <motion.div 
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#c6ff00]/5 blur-[120px]"
            style={{ y: bgY3 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSolutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20">
              <span className="text-[#c6ff00] text-sm font-medium">The Growth Elevate Magic™ System</span>
            </div>
            
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-5xl font-bold mb-6"
              gradient="primary"
              glow
            >
              Automated Growth System for <br />Local Businesses
            </LuxuryText>
            
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-10">
              Our proprietary AI-powered system handles all aspects of your marketing, sales, and client acquisition — completely done for you.
            </p>
            
            <LuxuryDivider className="max-w-xs mx-auto mb-16" />
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Zap className="w-10 h-10 text-[#c6ff00]" />,
                title: "Automated Lead Generation",
                description: "Our AI targets your ideal local customers across all platforms and automatically captures their information.",
                features: [
                  "Targeted Local Ads",
                  "Smart Retargeting",
                  "Multi-Channel Campaigns"
                ],
                delay: 0
              },
              {
                icon: <BarChart className="w-10 h-10 text-[#c6ff00]" />,
                title: "AI-Powered Sales System",
                description: "Stop chasing leads. Our system automatically nurtures and converts prospects into paying clients.",
                features: [
                  "24/7 Response System",
                  "Personalized Follow-ups",
                  "Smart Appointment Booking"
                ],
                delay: 0.2
              },
              {
                icon: <Shield className="w-10 h-10 text-[#c6ff00]" />,
                title: "Client Retention Engine",
                description: "Keep clients longer and increase revenue with our automated retention and upsell campaigns.",
                features: [
                  "Satisfaction Monitoring",
                  "Automated Reactivation",
                  "Referral Generation"
                ],
                delay: 0.4
              }
            ].map((solution, i) => (
              <EnhancedFeatureCard
                key={i}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                delay={solution.delay}
                inView={isSolutionInView}
                hoverEffect
                accentBorder
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSolutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <EnhancedButton 
              variant="premium" 
              size="lg" 
              className="px-10"
              glow
              onClick={handleFormSubmit}
            >
              Get Your Custom Growth Plan
            </EnhancedButton>
            <p className="text-neutral-500 text-sm mt-3">No commitment required. 100% Free Growth Analysis.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section 
        ref={valueRef}
        className="relative py-24 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#c6ff0005_0,transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isValueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c6ff00]/10 blur-[100px] rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8">
                Proven Results for <span className="text-[#c6ff00]">Local Businesses</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "347%", label: "Average Increase in Lead Generation" },
                  { value: "89%", label: "Reduction in Client Acquisition Costs" },
                  { value: "76%", label: "Increase in Repeat Business" },
                  { value: "63%", label: "Time Saved on Marketing Activities" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isValueInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 * i }}
                    className="p-4 border border-neutral-800 rounded-xl bg-black/40"
                  >
                    <LuxuryText 
                      as="p" 
                      className="text-3xl font-bold mb-2"
                      gradient="primary"
                      glow
                    >
                      {stat.value}
                    </LuxuryText>
                    <p className="text-neutral-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-4 border-t border-neutral-800">
                <p className="flex items-center text-neutral-300">
                  <Check className="w-5 h-5 text-[#c6ff00] mr-2" />
                  Results based on average client performance in 2024
                </p>
              </div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isValueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
            >
              <LuxuryText 
                as="h2" 
                className="text-3xl md:text-4xl font-bold mb-6"
                gradient="primary"
                glow
              >
                Why Local Businesses Choose<br />
                <span className="text-white">Growth Elevate Magic</span>
              </LuxuryText>
              
              <p className="text-lg text-neutral-400 mb-8">
                Unlike generic marketing solutions, our system is specifically designed for local businesses looking to dominate their market.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Risk-Free Investment",
                    description: "We guarantee a minimum 3X ROI within 90 days or your money back.",
                    delay: 0.1
                  },
                  {
                    title: "Business-Specific Strategy",
                    description: "Custom-tailored approach based on your local market, competition, and business type.",
                    delay: 0.2
                  },
                  {
                    title: "Complete Done-For-You Service",
                    description: "No need to hire a marketing team or learn complex software — we handle everything.",
                    delay: 0.3
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isValueInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    className="flex"
                  >
                    <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-[#c6ff00]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#c6ff00]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-neutral-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isValueInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10"
              >
                <EnhancedButton 
                  variant="premium" 
                  size="lg"
                  onClick={handleFormSubmit}
                  glow
                >
                  See If Your Business Qualifies
                </EnhancedButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section 
        ref={howItWorksRef}
        className="relative py-24 bg-neutral-950 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold mb-4"
              gradient="primary"
              glow
            >
              Simple 3-Step Process
            </LuxuryText>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Getting started takes less than 10 minutes of your time
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#c6ff00]/10 hidden md:block"></div>
            
            {[
              {
                number: "1",
                title: "Strategy Session",
                description: "We analyze your local market, competition, and business to develop a custom growth strategy.",
                icon: <Users className="w-6 h-6" />,
                delay: 0
              },
              {
                number: "2",
                title: "System Implementation",
                description: "Our team sets up your entire marketing and sales automation system within 7 days.",
                icon: <Zap className="w-6 h-6" />,
                delay: 0.2
              },
              {
                number: "3",
                title: "Growth & Optimization",
                description: "Your business grows on autopilot while we continually optimize for maximum results.",
                icon: <BarChart className="w-6 h-6" />,
                delay: 0.4
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isHowItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: step.delay }}
                className="relative"
              >
                <div className="relative z-10 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 h-full group hover:bg-neutral-900 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 flex items-center justify-center text-[#c6ff00] text-2xl font-bold mb-6 group-hover:bg-[#c6ff00]/20 transition-colors duration-300">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-400 mb-6">{step.description}</p>
                  
                  <div className="flex items-center text-[#c6ff00] text-sm font-medium">
                    <span>{i === 2 ? "Start Growing" : "Next Step"}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
                
                {/* Step indicator for desktop */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#c6ff00] hidden md:block"></div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isHowItWorksInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-neutral-400 mb-8"
            >
              Most clients start seeing measurable results within the first 14 days
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <EnhancedButton 
                variant="premium" 
                size="lg"
                glow
                onClick={handleFormSubmit}
              >
                Get Started Today
              </EnhancedButton>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section 
        ref={testimonialsRef}
        className="relative py-24 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#c6ff0005_0,transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20">
              <Star className="w-4 h-4 text-[#c6ff00] mr-2" />
              <span className="text-[#c6ff00] text-sm font-medium">Trusted by 500+ Local Businesses</span>
            </div>
            
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold mb-4"
              gradient="primary"
              glow
            >
              Client Success Stories
            </LuxuryText>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Real results from businesses just like yours
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We increased new memberships by 312% in just 60 days while cutting our marketing budget by half. The ROI has been incredible.",
                author: "John Smith",
                role: "Local Gym Owner",
                imageSrc: "/images/testimonial-1.jpg",
                rating: 5
              },
              {
                quote: "Our patient appointments doubled within 3 months. The best part is the system runs in the background while we focus on providing great service.",
                author: "Sarah Johnson",
                role: "Dental Clinic Practice Manager",
                imageSrc: "/images/testimonial-2.jpg",
                rating: 5
              },
              {
                quote: "From struggling to booked solid in 90 days. We've had to hire two new agents just to handle the volume of leads. Best investment we've ever made.",
                author: "Michael Davis",
                role: "Real Estate Agency Broker",
                imageSrc: "/images/testimonial-3.jpg",
                rating: 5
              }
            ].map((testimonial, i) => (
              <EnhancedTestimonial
                key={i}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                imageSrc={testimonial.imageSrc}
                rating={testimonial.rating}
                delay={0.2 * i}
                inView={isTestimonialsInView}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <a href="#" className="inline-flex items-center text-[#c6ff00] hover:text-white transition-colors">
              <span className="mr-2">Read more success stories</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section 
        ref={ctaRef}
        className="relative py-24 bg-gradient-to-b from-neutral-900 to-black"
      >
        <div className="absolute inset-0 z-0">
          {/* Animated Particles */}
          <EnhancedParticles count={40} />
          
          {/* Accent glow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-[#c6ff00]/5 blur-[150px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-neutral-900/60 backdrop-blur-lg border border-neutral-800 rounded-2xl p-10 overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c6ff00]/10 blur-[80px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#c6ff00]/10 blur-[80px] rounded-full"></div>
              
              <div className="text-center mb-8">
                <LuxuryText 
                  as="h2" 
                  className="text-3xl md:text-5xl font-bold mb-6"
                  gradient="primary"
                  glow
                >
                  Ready to Scale Your Business <br />Without the Stress?
                </LuxuryText>
                
                <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
                  Take the first step toward automated, predictable growth today.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 bg-[#c6ff00]/10 rounded-full p-1.5 mt-0.5">
                      <Check className="h-5 w-5 text-[#c6ff00]" />
                    </div>
                    <p className="text-white">Get a custom growth strategy worth $1,997 — <span className="text-[#c6ff00] font-semibold">FREE</span></p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 bg-[#c6ff00]/10 rounded-full p-1.5 mt-0.5">
                      <Check className="h-5 h-5 text-[#c6ff00]" />
                    </div>
                    <p className="text-white">Discover your untapped growth opportunities</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 bg-[#c6ff00]/10 rounded-full p-1.5 mt-0.5">
                      <Check className="h-5 w-5 text-[#c6ff00]" />
                    </div>
                    <p className="text-white">See if your business qualifies for our system</p>
                  </div>
                  <div className="pt-4">
                    <p className="text-neutral-400 text-sm">
                      <span className="text-[#c6ff00]">*</span> Limited to 5 businesses per week
                    </p>
                  </div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Get Your Free Growth Plan</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Business Name" 
                      className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/50 focus:border-[#c6ff00]/50 text-white placeholder:text-neutral-500"
                      required
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/50 focus:border-[#c6ff00]/50 text-white placeholder:text-neutral-500"
                      required
                    />
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <EnhancedButton 
                        variant="premium" 
                        size="lg" 
                        className="w-full"
                        type="submit"
                        glow
                      >
                        Claim My Free Growth Plan
                      </EnhancedButton>
                    </motion.div>
                    <p className="text-center text-neutral-500 text-xs">
                      No credit card required. 100% free analysis.
                    </p>
                  </form>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-8"
            >
              <p className="text-neutral-500 text-sm flex items-center justify-center">
                <Shield className="w-4 h-4 mr-2" />
                Your information is secure and will never be shared
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Sticky CTA Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 2 }}
      >
        <EnhancedButton
          variant="premium"
          size="lg"
          className="rounded-full shadow-lg shadow-[#c6ff00]/20"
          glow
          onClick={handleFormSubmit}
        >
          Get Free Growth Plan
        </EnhancedButton>
      </motion.div>
    </EnhancedPageLayout>
  );
};

export default Index;
