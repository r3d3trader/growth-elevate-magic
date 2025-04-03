import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import CtaButton from "@/components/ui/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
      title: "Local Gym", 
      description: "Implemented lead magnet funnels, automated call agents, and workflow automation. Achieved a 300% membership increase within 60 days." 
    },
    { 
      title: "Dental Clinic", 
      description: "Utilized referral management, automated email sequences, and call agent solutions. Doubled patient bookings in three months." 
    },
    { 
      title: "Real Estate Agency", 
      description: "Integrated local SEO, CRM, targeted ads, and workflow automation. Quadrupled qualified leads and increased revenue 4x within 90 days." 
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-green-400"> {/* Updated text color */}
              <span className="text-gradient">Our Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8"> {/* Updated text color */}
              We provide comprehensive, done-for-you solutions to 4x your business growth in 90 days—guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CtaButton size="lg" className="bg-green-400 text-black hover:bg-green-500"> {/* Updated button style */}
                  Get Your Free Strategy Call
                </CtaButton>
              </Link>
              <Link to="/pricing">
                <CtaButton variant="secondary" size="lg" className="bg-gray-800 text-green-400 hover:bg-gray-700"> {/* Updated button style */}
                  View Our Pricing
                </CtaButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400"> {/* Updated text color */}Our Service Offerings</h2>
            <p className="text-lg text-gray-300"> {/* Updated text color */}
              Comprehensive solutions designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-gray-800 border border-gray-700"> {/* Updated card style */}
                  <CardHeader>
                    <div className="text-4xl mb-2 text-green-400">{category.icon}</div> {/* Updated text color */}
                    <CardTitle className="text-green-400">{category.name}</CardTitle> {/* Updated text color */}
                    <CardDescription className="text-gray-300">{category.description}</CardDescription> {/* Updated text color */}
                  </CardHeader>
                  <CardContent>
                    <Link to="/contact" className="text-green-400 hover:text-green-500 flex items-center gap-2 transition-colors"> {/* Updated link color */}
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Table Section */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400"> {/* Updated text color */}Service Details</h2>
            <p className="text-lg text-gray-300"> {/* Updated text color */}
              Explore our comprehensive suite of services designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-gray-800 rounded-xl shadow-md border border-gray-700"> {/* Updated table style */}
            <table className="w-full">
              <thead className="bg-green-400 text-black"> {/* Updated header style */}
                <tr>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700"> {/* Updated divider color */}
                {services.map((service, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    className="hover:bg-gray-700 text-gray-300" {/* Updated row style */}
                  >
                    <td className="px-6 py-4 font-medium">{service.name}</td>
                    <td className="px-6 py-4">{service.description}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-10"
          >
            <Link to="/pricing">
              <CtaButton className="bg-green-400 text-black hover:bg-green-500"> {/* Updated button style */}
                See Our Service Packages
              </CtaButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400"> {/* Updated text color */}Our Approach & Methodology</h2>
            <p className="text-lg text-gray-300"> {/* Updated text color */}
              How we deliver exceptional results for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 text-gray-300" {/* Updated card style */}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-400 text-black font-bold rounded-full h-10 w-10 flex items-center justify-center"> {/* Updated step style */}
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-xl text-green-400">{step.title}</h3> {/* Updated text color */}
                </div>
                <p className="text-gray-300">{step.description}</p> {/* Updated text color */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400"> {/* Updated text color */}Our Competitive Advantage</h2>
            <p className="text-lg text-gray-300"> {/* Updated text color */}
              What sets us apart from other agencies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700 text-gray-300" {/* Updated card style */}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-400 rounded-full p-1"> {/* Updated checkmark style */}
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="font-bold text-xl text-green-400">{advantage.title}</h3> {/* Updated text color */}
                </div>
                <p className="text-gray-300 pl-9">{advantage.description}</p> {/* Updated text color */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400"> {/* Updated text color */}Client Success Stories</h2>
            <p className="text-lg text-gray-300"> {/* Updated text color */}
              Businesses Like Yours Are Achieving 4X Growth—Here's How!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 text-gray-300" {/* Updated card style */}
              >
                <h3 className="font-bold text-xl mb-3 text-green-400">{story.title}</h3> {/* Updated text color */}
                <p className="text-gray-300 mb-4">{story.description}</p> {/* Updated text color */}
                <Link to="/contact" className="text-green-400 hover:text-green-500 flex items-center gap-2 transition-colors"> {/* Updated link color */}
                  <span>Read full case study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-green-500 text-black"> {/* Updated background and text color */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Business—Hassle-Free?</h2>
            <p className="text-xl mb-8">
              Get started with our risk-free 60-day money-back guarantee today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CtaButton size="lg" className="bg-black text-green-400 hover:bg-gray-800"> {/* Updated button style */}
                  Get Your Free Growth Plan
                </CtaButton>
              </Link>
              <Link to="/pricing">
                <CtaButton variant="outline" size="lg" className="border-black text-black hover:bg-green-400 hover:text-black"> {/* Updated button style */}
                  View Pricing Plans
                </CtaButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;