import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import EnhancedPageLayout from "@/components/layout/EnhancedPageLayout";
import { Award, Lightbulb, ShieldCheck, Users, MessageCircle, Zap, ArrowRight, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { LuxuryText, LuxuryDivider } from "@/components/ui/premium-effects";
import EnhancedButton from "@/components/ui/enhanced-button";
import EnhancedParticles from "@/components/ui/enhanced-particles";

const About = () => {
  // Ref for scroll animations
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // InView hooks for animations
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 });
  const isTrustInView = useInView(trustRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  
  // Smooth scroll progress for parallax effects
  const smoothScrollProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    restDelta: 0.001
  });
  
  // Parallax effect transformations
  const bgY1 = useTransform(smoothScrollProgress, [0, 1], [0, -200]);
  const bgY2 = useTransform(smoothScrollProgress, [0, 1], [0, -100]);
  const bgY3 = useTransform(smoothScrollProgress, [0, 1], [0, -150]);
  
  // Core Values Data
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-[#c6ff00]" />,
      title: "Innovation",
      description: "Delivering modern, transformative solutions that keep our clients ahead of the curve."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-[#c6ff00]" />,
      title: "Transparency",
      description: "Clear communication and detailed reporting so you always know where things stand."
    },
    {
      icon: <Users className="h-8 w-8 text-[#c6ff00]" />,
      title: "Collaboration",
      description: "Merging our expertise with your vision to create solutions that truly reflect your business."
    },
    {
      icon: <Award className="h-8 w-8 text-[#c6ff00]" />,
      title: "Accountability",
      description: "Standing firmly behind our commitments with our 60-day money-back guarantee."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#c6ff00]" />,
      title: "Simplicity",
      description: "Fully managed services with no setup hassles, letting you focus on running your business."
    },
    {
      icon: <Zap className="h-8 w-8 text-[#c6ff00]" />,
      title: "Performance",
      description: "Delivering measurable results and continuous improvement to maximize your ROI."
    }
  ];

  // Team Data
  const teamMembers = [
    {
      image: '/team-member-1.jpg',
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'John has over 10 years of experience in digital marketing and business growth strategies.'
    },
    {
      image: '/team-member-2.jpg',
      name: 'Jane Smith',
      role: 'CTO & Lead Developer',
      bio: 'Jane specializes in automation systems and developing cutting-edge growth technologies.'
    },
    {
      image: '/team-member-3.jpg',
      name: 'Robert Johnson',
      role: 'Head of Client Success',
      bio: 'Robert ensures our clients achieve exceptional results through strategic implementation.'
    }
  ];

  return (
    <EnhancedPageLayout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black pt-20 pb-16"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          
          {/* Animated Particles */}
          <EnhancedParticles count={50} speed={0.5} />
          
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
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
                We Drive Exceptional <br />
                <span className="text-white">Business Growth</span>
              </LuxuryText>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-neutral-300 mb-8"
            >
              Our expert team combines cutting-edge technology with proven strategies to help local businesses thrive in today's competitive market.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <EnhancedButton 
                  variant="premium" 
                  size="lg" 
                  className="relative overflow-hidden group"
                  glow
                >
                  <span className="relative z-10 flex items-center">
                    Schedule a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </EnhancedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section 
        ref={valuesRef}
        className="relative py-24 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-950" />
          <motion.div 
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#c6ff00]/3 blur-[150px]"
            style={{ y: bgY2, x: bgY1 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold mb-6"
              gradient="primary"
              glow
            >
              Our Core Values
            </LuxuryText>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              These principles guide everything we do as we help local businesses reach their full potential.
            </p>
            <LuxuryDivider className="max-w-xs mx-auto mt-8" />
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-6 border border-neutral-800 rounded-2xl bg-neutral-900/50 backdrop-blur relative group overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#c6ff00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <div className="mb-5 rounded-full bg-[#c6ff00]/10 w-16 h-16 flex items-center justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-neutral-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section 
        ref={missionRef}
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
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <motion.div 
              className="md:col-span-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20">
                <span className="text-[#c6ff00] text-sm font-medium">Our Mission & Story</span>
              </div>
              
              <LuxuryText 
                as="h2" 
                className="text-3xl md:text-4xl font-bold mb-6"
                gradient="primary"
                glow
              >
                Transforming How Local <br/>Businesses Grow
              </LuxuryText>
              
              <p className="text-lg text-neutral-400 mb-8">
                Founded in 2018, Growth Elevate Magic was created with a single mission: to give local businesses access to the same advanced growth technologies that big companies use, but at an affordable price point.
              </p>
              
              <p className="text-lg text-neutral-400 mb-8">
                After helping over 500 local businesses achieve an average of 300% growth, we've refined our systems to deliver predictable, sustainable results for businesses of all sizes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="bg-[#c6ff00]/10 rounded-full p-2">
                    <Users className="h-6 w-6 text-[#c6ff00]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">500+</h4>
                    <p className="text-sm text-neutral-500">Clients Served</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#c6ff00]/10 rounded-full p-2">
                    <Award className="h-6 w-6 text-[#c6ff00]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">300%</h4>
                    <p className="text-sm text-neutral-500">Avg. Growth Rate</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#c6ff00]/10 rounded-full p-2">
                    <Shield className="h-6 w-6 text-[#c6ff00]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">60-Day</h4>
                    <p className="text-sm text-neutral-500">Guarantee</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl shadow-[#c6ff00]/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70" />
                <img 
                  src="/about-image.jpg" 
                  alt="Our team at work" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x400/1a1a1a/c6ff00?text=Our+Team";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section 
        ref={teamRef}
        className="relative py-24 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-neutral-950" />
          <motion.div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#c6ff00]/3 blur-[150px]"
            style={{ y: bgY1 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold mb-6"
              gradient="primary"
              glow
            >
              Meet Our Leadership Team
            </LuxuryText>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              The experts behind our proven growth systems
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative group"
              >
                <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden mb-6 border border-neutral-800 bg-neutral-900">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/400x500/1a1a1a/c6ff00?text=${member.name}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#c6ff00] font-medium mb-3">{member.role}</p>
                <p className="text-neutral-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust Indicators */}
      <section 
        ref={trustRef}
        className="relative py-16 bg-gradient-to-b from-black to-neutral-950 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTrustInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Trusted By Businesses Like Yours</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#c6ff00] to-[#a0cc00] mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isTrustInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-12 items-center"
          >
            {['Local Gym', 'Dental Clinic', 'Real Estate', 'Restaurant', 'Auto Shop'].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isTrustInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-neutral-400 hover:text-[#c6ff00] transition-colors"
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="relative py-24 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          
          {/* Animated Particles */}
          <EnhancedParticles count={30} speed={0.3} />
          
          <motion.div 
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c6ff00]/5 blur-[150px]"
            style={{ y: bgY2 }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20">
              <span className="text-[#c6ff00] text-sm font-medium">Limited Availability</span>
            </div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to <span className="text-[#c6ff00]">Transform</span> Your Business Growth?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-neutral-300 mb-8"
            >
              Join the 500+ businesses accelerating their success with our proven growth system.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <EnhancedButton 
                  variant="premium" 
                  size="lg" 
                  className="px-8"
                  glow
                >
                  Schedule Free Consultation
                </EnhancedButton>
              </Link>
              <Link to="/pricing">
                <EnhancedButton 
                  variant="outline" 
                  size="lg" 
                  className="px-8"
                >
                  View Pricing Plans
                </EnhancedButton>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-10"
            >
              <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-lg italic text-neutral-300 mb-4">
                  "Working with Growth Elevate Magic was the best decision we made. Our revenue grew 300% in just 90 days."
                </p>
                <p className="font-medium text-[#c6ff00]">— Sarah K., Owner of Fitness Studio</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-8"
            >
              <p className="text-neutral-500 text-sm flex items-center justify-center">
                <Shield className="w-4 h-4 mr-2" />
                Limited to 5 new clients per week • 60-day money-back guarantee
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </EnhancedPageLayout>
  );
};

export default About;
