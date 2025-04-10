import React from "react";
import { Link } from "react-router-dom";
import { PremiumEffects, LuxuryText, LuxuryDivider } from "@/components/ui/premium-effects";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Twitter, Instagram, Linkedin, Youtube, Zap, ExternalLink, ChevronRight } from "lucide-react";
import EnhancedButton from "@/components/ui/enhanced-button";
import { useInView } from "react-intersection-observer";
import EnhancedParticles from "@/components/ui/enhanced-particles";

const PremiumFooter = () => {
  const currentYear = new Date().getFullYear();
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* CTA Section */}
      <div ref={ctaRef} className="border-b border-[#c6ff00]/10 relative py-16">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center">
            <div className="absolute w-[500px] h-[500px] bg-[#c6ff00]/10 rounded-full blur-[150px] opacity-30" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: ctaInView ? 1 : 0, scale: ctaInView ? 1 : 0.9 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6"
            >
              <Zap className="w-4 h-4 text-[#c6ff00]" /> Start Growing Today
            </motion.div>
            
            <LuxuryText
              as="h2"
              className="text-3xl md:text-4xl font-bold mb-6"
              gradient="primary"
              glow
            >
              Ready to Transform Your Business with Our Premium Solutions?
            </LuxuryText>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: ctaInView ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
            >
              Schedule your free strategy call today and discover how our expertise can help you achieve <span className="text-[#c6ff00]">extraordinary results</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 10 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact">
                <EnhancedButton 
                  variant="premium"
                  size="lg" 
                  glow
                  className="px-8 py-4 text-lg"
                  icon={<Zap className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Book Your Strategy Call
                </EnhancedButton>
              </Link>
              
              <Link to="/services">
                <EnhancedButton 
                  variant="outline"
                  size="lg" 
                  className="px-8 py-4 text-lg group"
                  icon={<ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  iconPosition="right"
                >
                  Explore Our Services
                </EnhancedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Main Footer Section */}
      <div ref={footerRef} className="pt-16 pb-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
          <EnhancedParticles count={20} />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
          >
            {/* Brand Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-1"
            >
              <LuxuryText
                as="div"
                className="text-2xl font-bold mb-6"
                gradient="primary"
                glow
              >
                <span>Leads Obtainer</span>
              </LuxuryText>
              
              <p className="text-white/70 mb-6">
                Premium digital solutions that deliver measurable results and accelerate your growth trajectory.
              </p>
              
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook size={18} />, href: "#" },
                  { icon: <Twitter size={18} />, href: "#" },
                  { icon: <Instagram size={18} />, href: "#" },
                  { icon: <Linkedin size={18} />, href: "#" },
                  { icon: <Youtube size={18} />, href: "#" }
                ].map((social, index) => (
                  <motion.a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center border border-[#c6ff00]/30 text-[#c6ff00] hover:bg-[#c6ff00]/10 transition-colors"
                    whileHover={{ y: -3, boxShadow: "0 6px 12px rgba(198, 255, 0, 0.15)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Navigation Columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-[#c6ff00] font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/about"
                    className="text-white/70 hover:text-[#c6ff00] transition-colors flex items-center gap-1 group"
                  >
                    About Us
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact"
                    className="text-white/70 hover:text-[#c6ff00] transition-colors flex items-center gap-1 group"
                  >
                    Contact
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/careers"
                    className="text-white/70 hover:text-[#c6ff00] transition-colors flex items-center gap-1 group"
                  >
                    Careers
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/promotions"
                    className="text-white/70 hover:text-[#c6ff00] transition-colors flex items-center gap-1 group"
                  >
                    Promotions
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-[#c6ff00] font-semibold mb-6">Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/services"
                    className="text-white/70 hover:text-[#c6ff00] transition-colors flex items-center gap-1 group"
                  >
                    AI Sales System
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services"
                    className="text-white/70 hover:text-[#c6ff00] transition-colors flex items-center gap-1 group"
                  >
                    Lead Generation
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services"
                    className="text-white/70 hover:text-[#c6ff00] transition-colors flex items-center gap-1 group"
                  >
                    Sales Automation
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services"
                    className="text-white/70 hover:text-[#c6ff00] transition-colors flex items-center gap-1 group"
                  >
                    Analytics Platform
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-[#c6ff00] font-semibold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:info@leadsobtainer.com" 
                    className="text-white/70 hover:text-[#c6ff00] transition-colors flex items-center gap-2 group"
                  >
                    <Mail className="text-[#c6ff00]" size={16} />
                    info@leadsobtainer.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+19787238408" 
                    className="text-white/70 hover:text-[#c6ff00] transition-colors flex items-center gap-2 group"
                  >
                    <Phone className="text-[#c6ff00]" size={16} />
                    +1 (978) 723-8408
                  </a>
                </li>
                <li>
                  <div 
                    className="text-white/70 flex items-center gap-2 group"
                  >
                    <MapPin className="text-[#c6ff00]" size={16} />
                    30 N Gould St, Sheridan, WY, 82801
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          
          <LuxuryDivider 
            variant="gradient" 
            color="primary" 
            width="full" 
            className="opacity-30 my-8" 
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: footerInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50"
          >
            <div className="text-xs text-white/50 mb-4 md:mb-0">
              &copy; {currentYear} Leads Obtainer LLC Reg. 37-1957185, WY, USA. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-[#c6ff00] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#c6ff00] transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-[#c6ff00] transition-colors">
                Sitemap
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;