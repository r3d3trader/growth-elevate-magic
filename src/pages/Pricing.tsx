
import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import CtaButton from "@/components/ui/cta-button";
import { Check, HelpCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Partner",
      setupFee: 997,
      monthlyFee: 197,
      annualFee: 1970, // 10 months for annual (2 months free)
      description: "Perfect for small businesses looking to start growing",
      features: [
        "4-page WordPress site",
        "Basic custom layout",
        "Entry-level chatbot",
        "Basic sequences",
        "Basic automation",
        "Basic page",
        "Standard page",
        "Essential integration",
        "Basic integration",
        "Basic tools",
        "Basic on-page SEO",
        "Standard security",
        "Basic analytics",
        "Basic wireframing",
        "Basic enhancements",
        "Basic tools",
        "60-day guarantee",
      ],
      highlight: false,
      conversion: "Medium"
    },
    {
      name: "Pro",
      setupFee: 2997,
      monthlyFee: 297,
      annualFee: 2970, // 10 months for annual (2 months free)
      description: "Our most popular plan for growing businesses",
      features: [
        "10-page WordPress site",
        "Advanced UX design",
        "Multi-channel bot",
        "Multi-channel triggers",
        "Robust campaigns",
        "Proactive management",
        "Multi-step workflows",
        "Conversion-optimized",
        "Enhanced squeeze pages",
        "Enhanced lead magnets",
        "Integrated funnels",
        "Advanced video funnel",
        "Enhanced page",
        "Advanced page",
        "Advanced setup",
        "Enhanced integration",
        "Improved system",
        "Advanced management",
        "Enhanced automation",
        "Advanced AI agent",
        "Enhanced SEO",
        "Enhanced security",
        "Advanced analytics",
        "Enhanced wireframing",
        "Advanced optimization",
        "Enhanced features",
        "60-day guarantee",
      ],
      highlight: true,
      conversion: "High"
    },
    {
      name: "Elite",
      setupFee: 4997,
      monthlyFee: 497,
      annualFee: 4970, // 10 months for annual (2 months free)
      description: "Enterprise-grade solutions for maximum growth",
      features: [
        "Fully customized premium site",
        "Bespoke premium design",
        "Fully customized AI bot",
        "Enterprise-grade triggers",
        "High-impact workflows",
        "Comprehensive solutions",
        "End-to-end custom automation",
        "Premium landing pages",
        "Fully optimized pages",
        "Advanced custom strategies",
        "Full-scale automation",
        "Bespoke video funnel",
        "Premium page",
        "Fully optimized page",
        "Comprehensive integration",
        "Fully customized integration",
        "Complete solution",
        "Enterprise-level management",
        "Full-service management",
        "Enterprise-grade agent",
        "In-depth SEO strategy",
        "Enterprise-level security",
        "Comprehensive analytics",
        "Premium custom wireframing",
        "Cutting-edge optimization",
        "Comprehensive system",
        "60-day guarantee",
      ],
      highlight: false,
      conversion: "Super Sales Machine"
    }
  ];

  // Table data - all services and their availability per plan
  const services = [
    { name: "Conversion", key: "conversion", tooltip: "Expected level of sales and conversion performance" },
    { name: "Pages Setup / Website Setup", key: "pages", tooltip: "Number and quality of web pages created" },
    { name: "Custom Website Creation", key: "website", tooltip: "Overall quality and customization of website design" },
    { name: "Bot Automation", key: "bot", tooltip: "Automated chat systems to engage visitors" },
    { name: "Abandoned Cart/Action Triggers", key: "cart", tooltip: "Systems to recover abandoned sales processes" },
    { name: "Email Sequences/Automation", key: "email", tooltip: "Automated email marketing campaigns" },
    { name: "Reputation Management", key: "reputation", tooltip: "Tools to manage and improve online reputation" },
    { name: "Workflow Automation", key: "workflow", tooltip: "Systems to automate business processes" },
    { name: "Landing Pages", key: "landing", tooltip: "Pages designed to convert visitors to leads" },
    { name: "Squeeze Pages", key: "squeeze", tooltip: "Pages focused on capturing email addresses" },
    { name: "Lead Magnet Creation", key: "leadmagnet", tooltip: "Free offers to attract potential customers" },
    { name: "Webinar Automation", key: "webinar", tooltip: "Systems to automate webinar registration and follow-up" },
    { name: "3 Step Video Funnel", key: "video", tooltip: "Multi-step video marketing sequence" },
    { name: "Thank You Page", key: "thankyou", tooltip: "Pages shown after form submission" },
    { name: "Offer Page", key: "offer", tooltip: "Pages presenting your products or services" },
    { name: "CRM Integration & Lead Forms", key: "crm", tooltip: "Customer relationship management system setup" },
    { name: "Calendar Integration", key: "calendar", tooltip: "Booking systems for appointments" },
    { name: "Referral Management", key: "referral", tooltip: "Systems to track and incentivize referrals" },
    { name: "Ads Management", key: "ads", tooltip: "Creation and management of paid advertising" },
    { name: "Social Media Automation", key: "social", tooltip: "Automated posting and engagement on social platforms" },
    { name: "AI Call Agent", key: "call", tooltip: "AI-powered phone call handling" },
    { name: "SEO", key: "seo", tooltip: "Search engine optimization to improve visibility" },
    { name: "Website Security", key: "security", tooltip: "Protection against hacks and data breaches" },
    { name: "Analytics", key: "analytics", tooltip: "Tracking and reporting on key metrics" },
    { name: "Wireframing & Website Layout", key: "wireframe", tooltip: "Planning the structure and flow of your site" },
    { name: "Website Speed Optimization", key: "speed", tooltip: "Making your website load faster" },
    { name: "Lead Capture/Management", key: "leads", tooltip: "Systems to capture and organize potential customers" },
    { name: "Money Back Guarantee", key: "guarantee", tooltip: "Our risk-free promise to you" },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-agency-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-gradient">Simple, Transparent Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Choose the perfect plan to accelerate your business growth with our risk-free 60-day money-back guarantee.
            </p>
            
            {/* Billing toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${!isAnnual ? 'font-bold text-agency-blue' : 'text-gray-600'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${isAnnual ? 'bg-agency-blue' : 'bg-gray-200'}`}
              >
                <span 
                  className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`} 
                />
              </button>
              <span className={`ml-3 ${isAnnual ? 'font-bold text-agency-blue' : 'text-gray-600'}`}>Annual (Save 16%)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden border ${plan.highlight ? 'border-agency-blue shadow-lg shadow-agency-blue/10' : 'border-gray-200'}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-agency-blue text-white text-center py-1 text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-6 ${plan.highlight ? 'pt-8' : 'pt-6'}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 h-12">{plan.description}</p>
                  
                  <div className="mt-4 mb-6">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold">${plan.setupFee}</span>
                      <span className="text-gray-600 ml-1 mb-1">setup</span>
                    </div>
                    <div className="flex items-end mt-2">
                      <span className="text-3xl font-bold">
                        ${isAnnual ? Math.round(plan.annualFee / 12) : plan.monthlyFee}
                      </span>
                      <span className="text-gray-600 ml-1 mb-1">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-agency-blue mt-1">
                        Billed annually (${plan.annualFee}/year)
                      </p>
                    )}
                  </div>
                  
                  <Link to="/contact" className="block w-full">
                    <CtaButton 
                      className={`w-full ${plan.highlight ? '' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`} 
                      variant={plan.highlight ? "primary" : "secondary"}
                    >
                      Get Started
                    </CtaButton>
                  </Link>
                  
                  <div className="mt-6">
                    <p className="font-medium mb-3">Key features:</p>
                    <ul className="space-y-2">
                      {plan.features.slice(0, 7).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Plans Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare All Features</h2>
            <p className="text-lg text-gray-700">
              See all the features included in each of our pricing plans
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="w-full">
              <thead className="bg-agency-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-center">Partner</th>
                  <th className="px-6 py-4 text-center">Pro</th>
                  <th className="px-6 py-4 text-center">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {services.map((service, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="font-medium">{service.name}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">{service.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {plans[0].features[index] || (
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {plans[1].features[index] || (
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {plans[2].features[index] || (
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Get answers to the most common questions about our pricing and services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "How does the 60-day money-back guarantee work?",
                answer: "Our guarantee is simple - if you're not seeing results within 60 days of implementing our solutions, we'll refund your setup fee in full. We stand behind the quality of our work and are confident in our ability to deliver results."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! You can upgrade to a higher-tier plan at any time. We'll apply any prorated credits from your current plan to the new one, making the transition seamless."
              },
              {
                question: "Are there any hidden fees?",
                answer: "No hidden fees. The prices you see are all-inclusive for the services listed in each plan. The only additional costs would be for any third-party tools or platforms that might be required for your specific implementation needs."
              },
              {
                question: "How long does implementation take?",
                answer: "Implementation timeframes vary based on the complexity of your project and the plan you select. Typically, our Partner plan takes 2-3 weeks, Pro plan takes 3-4 weeks, and Elite plan takes 4-6 weeks for complete implementation."
              },
              {
                question: "Do you offer custom plans for specific needs?",
                answer: "Yes, we can create custom solutions tailored to your specific business requirements. Contact our team for a personalized consultation and quote."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="font-bold text-xl mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-agency-blue to-agency-indigo text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Business Risk-Free?</h2>
            <p className="text-xl mb-8">
              Start with a free consultation and get your customized growth plan today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CtaButton size="lg" className="bg-white text-agency-blue hover:bg-opacity-90">
                  Schedule Your Free Strategy Call
                </CtaButton>
              </Link>
            </div>
            <p className="mt-6 text-white/80">
              No commitment required. 60-day money-back guarantee.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
