import React, { useState, useEffect } from "react";
import EnhancedPageLayout from "@/components/layout/EnhancedPageLayout";
import EnhancedButton from "@/components/ui/enhanced-button";
import { LuxuryText } from "@/components/ui/premium-effects";
import { Check, HelpCircle, X, Zap, Star, Shield, ChevronRight, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import EnhancedParticles from "@/components/ui/enhanced-particles";
import MobilePricingSection from "@/components/sections/MobilePricingSection";
import MobileForm from "@/components/ui/mobile-form";
import ResponsiveContainer from "@/components/ui/responsive-container";
import ResponsiveText from "@/components/ui/responsive-text";
import MobileCTA from "@/components/sections/MobileCTA";
import MobileFAQ from "@/components/sections/MobileFAQ";

// Import FormField type from mobile-form
import type { FormField } from "@/components/ui/mobile-form";

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [countdown, setCountdown] = useState({ days: 3, hours: 12, minutes: 45 });
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: plansRef, inView: plansInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  // Custom pricing plans for the MobilePricingSection
  const mobilePlans = [
    {
      title: "Partner",
      price: {
        monthly: 497,
        yearly: 4970,
        setupFee: 4997,
      },
      description: "Perfect for small businesses looking to start growing",
      features: [
        { text: "4-page WordPress site", included: true },
        { text: "Basic custom layout", included: true },
        { text: "Entry-level chatbot", included: true },
        { text: "Basic sequences", included: true },
        { text: "Basic automation", included: true },
        { text: "Basic on-page SEO", included: true },
        { text: "Standard security", included: true },
        { text: "Basic analytics", included: true },
        { text: "60-day guarantee", included: true },
      ],
      ctaText: "Get Started",
      ctaHref: "/contact?plan=partner",
    },
    {
      title: "Pro",
      price: {
        monthly: 797,
        yearly: 7970,
        setupFee: 7997,
      },
      description: "Our most popular plan for growing businesses",
      features: [
        { text: "10-page WordPress site", included: true },
        { text: "Advanced UX design", included: true },
        { text: "Multi-channel bot", included: true },
        { text: "Multi-channel triggers", included: true },
        { text: "Robust campaigns", included: true },
        { text: "Advanced AI agent", included: true },
        { text: "Enhanced SEO", included: true },
        { text: "Enhanced security", included: true },
        { text: "60-day guarantee", included: true },
      ],
      popular: true,
      ctaText: "Get Started",
      ctaHref: "/contact?plan=pro",
      testimonial: {
        quote: "Since working with Growth Elevate Magic, we've seen a 45% increase in our conversion rates!",
        author: "Michael Johnson",
        role: "CEO, TechStart"
      }
    },
    {
      title: "Elite",
      price: {
        monthly: 979,
        yearly: 9790,
        setupFee: 9997,
      },
      description: "Enterprise-grade solutions for maximum growth",
      features: [
        { text: "Fully customized premium site", included: true },
        { text: "Bespoke premium design", included: true },
        { text: "Fully customized AI bot", included: true },
        { text: "Enterprise-grade triggers", included: true },
        { text: "High-impact workflows", included: true },
        { text: "Premium security suite", included: true },
        { text: "Advanced analytics dashboard", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "60-day guarantee", included: true },
      ],
      ctaText: "Contact Sales",
      ctaHref: "/contact?plan=elite",
    },
  ];

  // Define contactFormFields with proper type annotation
  const contactFormFields: FormField[] = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name",
      required: true
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "you@example.com",
      required: true
    },
    {
      id: "company",
      label: "Company",
      type: "text",
      placeholder: "Your company name"
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "(123) 456-7890"
    },
    {
      id: "plan",
      label: "Interested Plan",
      type: "select",
      options: [
        { value: "partner", label: "Partner Plan" },
        { value: "pro", label: "Pro Plan" },
        { value: "elite", label: "Elite Plan" },
        { value: "not-sure", label: "Not Sure Yet" }
      ]
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell us about your goals...",
      rows: 4
    }
  ];

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend or API
  };

  return (
    <EnhancedPageLayout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden" ref={heroRef}>
        {/* Enhanced particles background */}
        <div className="absolute inset-0 z-0">
          <EnhancedParticles
            className="absolute inset-0"
            color="#c6ff00"
            count={30}
            speed={0.5}
            size={1}
            maxSize={3}
          />
        </div>
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,255,0,0.1),transparent_50%)]"></div>
        </div>
        
        <ResponsiveContainer className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6"
            >
              <TrendingUp className="w-4 h-4 text-[#c6ff00]" /> Limited Availability
            </motion.div>
            
            <ResponsiveText 
              as="h1" 
              size="5xl"
              weight="bold"
              className="mb-4"
              gradient="primary"
              glow
            >
              Ready to Transform Your Business?
            </ResponsiveText>
            
            <ResponsiveText 
              size="xl"
              color="white/70"
              className="mb-8 max-w-3xl mx-auto"
            >
              We only accept <span className="text-[#c6ff00] font-medium">5 new clients per week</span> to ensure each business gets our full attention. Secure your spot now with our risk-free 60-day money-back guarantee.
            </ResponsiveText>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <EnhancedButton 
                variant="premium"
                size="lg" 
                glow
                className="w-full sm:w-auto px-8 py-4 text-lg shadow-xl shadow-[#c6ff00]/20 group"
                icon={<Zap className="w-5 h-5" />}
                iconPosition="left"
                href="/contact"
              >
                Get Your Free Strategy Call
              </EnhancedButton>
              
              <EnhancedButton 
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto px-8 py-4 text-lg border-[#c6ff00]/30 hover:bg-[#c6ff00]/5"
                icon={<Star className="w-5 h-5" />}
                iconPosition="left"
                href="#pricing-plans"
              >
                See Pricing Plans
              </EnhancedButton>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 items-center text-sm text-white/70"
            >
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-[#c6ff00]" />
                <span>60-Day Guarantee</span>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#c6ff00]" />
                <span>No Long-Term Contracts</span>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#c6ff00]" />
                <span>Cancel Anytime</span>
              </div>
            </motion.div>
          </motion.div>
        </ResponsiveContainer>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing-plans" className="py-16 relative" ref={plansRef}>
        <MobilePricingSection 
          title="Choose Your Growth Plan"
          subtitle="Select the plan that best fits your business needs and goals"
          plans={mobilePlans}
        />
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 relative bg-black/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,255,0,0.05),transparent_60%)]"></div>
        
        <ResponsiveContainer className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Form Content */}
            <div>
              <ResponsiveText
                as="h2"
                size="4xl"
                weight="bold"
                className="mb-4"
                gradient="primary"
                glow
              >
                Ready to Get Started?
              </ResponsiveText>
              
              <ResponsiveText
                size="lg"
                color="neutral-400"
                className="mb-6"
              >
                Fill out the form below and one of our growth specialists will contact you within 24 hours to discuss your business needs and goals.
              </ResponsiveText>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#c6ff00]/10 flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-[#c6ff00]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Expert Strategy Session</h3>
                    <p className="text-neutral-400">Get a free growth strategy session tailored to your business</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#c6ff00]/10 flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-[#c6ff00]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Custom Implementation Plan</h3>
                    <p className="text-neutral-400">Receive a detailed plan for implementing your growth strategy</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#c6ff00]/10 flex items-center justify-center mr-4">
                    <Check className="h-5 w-5 text-[#c6ff00]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">60-Day Money-Back Guarantee</h3>
                    <p className="text-neutral-400">Risk-free engagement with our 60-day money-back guarantee</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <MobileForm
                title="Contact Us"
                subtitle="We'll get back to you within 24 hours"
                fields={contactFormFields}
                submitLabel="Submit Inquiry"
                onSubmit={handleFormSubmit}
                style="premium"
              />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
      
      {/* Final CTA Section */}
      <MobileCTA
        title="Ready To Elevate Your Business?"
        subtitle="Join hundreds of businesses that have transformed their growth with our proven strategies."
        primaryCTA={{
          text: "Start Your Growth Journey",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "/about"
        }}
        background="gradient"
        showParticles={true}
      />
      
      {/* FAQ Section */}
      <MobileFAQ
        title="Pricing & Billing FAQs"
        subtitle="Everything you need to know about our premium plans and services"
        faqs={[
          {
            question: "What's included in the setup fee?",
            answer: "Our one-time setup fee covers the complete implementation of your Growth Elevate Magic system. This includes professional website design, chatbot configuration, automation setup, initial content strategy development, and a personalized 1-on-1 onboarding call with our experts to align the system with your specific business goals and growth targets."
          },
          {
            question: "Can I upgrade or downgrade my plan later?",
            answer: "Absolutely! You can upgrade your plan at any time to access more features and accelerate your growth. If you need to downgrade, you can do so at the end of your current billing cycle. Our support team will help you make the transition smoothly with no loss of existing work or data."
          },
          {
            question: "Is there a money-back guarantee?",
            answer: "Yes, we offer a 60-day satisfaction guarantee on all our plans. If you're not completely satisfied with our service within the first 60 days, contact our support team and we'll issue a full refund of your monthly fee (setup fees are non-refundable as they cover work already completed)."
          },
          {
            question: "How long does the initial setup process take?",
            answer: "Typically, the setup process takes 2-3 weeks from start to finish, depending on the complexity of your implementation and how quickly you provide necessary materials and feedback. Our Partner plan may be completed in as little as 1-2 weeks, while Elite implementations may take 3-4 weeks due to their extensive customization and premium features."
          },
          {
            question: "Do I need to sign a long-term contract?",
            answer: "No. All our plans operate on a month-to-month basis with no long-term contracts required. For yearly subscriptions, you commit to 12 months but receive a significant discount on the monthly rate. You can cancel anytime after your initial term with no hidden fees or penalties."
          },
          {
            question: "What kind of support do you provide?",
            answer: "All plans include email support with a 24-hour response time. Pro and Elite plans also include priority support with same-day responses and monthly strategy calls. Elite members receive a dedicated account manager and direct phone support during business hours."
          },
          {
            question: "Do you offer custom payment terms for larger businesses?",
            answer: "Yes, for our Elite plan customers, we can offer flexible payment options, including quarterly billing, custom payment schedules, and even split billing across multiple departments. Contact our sales team to discuss the option that works best for your organization."
          },
          {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and direct bank transfers. For Elite plan customers, we can also arrange invoicing with net-30 terms upon credit approval."
          }
        ]}
        className="mb-20"
      />
    </EnhancedPageLayout>
  );
}

export default Pricing;
