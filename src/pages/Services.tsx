
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import CtaButton from "@/components/ui/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceOfferings = [
    {
      title: "LeadGen Pro",
      description: "Generate high-quality leads on autopilot",
      features: [
        "Automated lead capture system",
        "Custom-built landing pages",
        "Email & SMS followup sequences",
        "Analytics dashboard"
      ],
      cta: "Learn More",
      link: "/contact",
      highlight: true
    },
    {
      title: "Website Optimizer",
      description: "Convert more visitors into customers",
      features: [
        "Conversion-focused redesign",
        "A/B testing implementation",
        "Speed optimization",
        "Mobile responsiveness"
      ],
      cta: "Learn More",
      link: "/contact"
    },
    {
      title: "Review Amplifier",
      description: "Build trust with authentic reviews",
      features: [
        "Automated review collection",
        "Review management dashboard",
        "Negative feedback interception",
        "Social proof widgets"
      ],
      cta: "Learn More",
      link: "/contact"
    },
    {
      title: "Local Search Domination",
      description: "Rank #1 in local search results",
      features: [
        "Google Business Profile optimization",
        "Local citation building",
        "GEO-targeted content",
        "Competitor analysis"
      ],
      cta: "Learn More",
      link: "/contact"
    },
    {
      title: "ROI-Focused Ads",
      description: "Maximize return on ad spend",
      features: [
        "Custom ad campaign setup",
        "Target audience research",
        "Ad creative development",
        "Performance monitoring"
      ],
      cta: "Learn More",
      link: "/contact"
    },
    {
      title: "Full-Growth Package",
      description: "The complete solution for 4x growth",
      features: [
        "All services combined",
        "Strategic growth planning",
        "Monthly performance reviews",
        "Dedicated account manager"
      ],
      cta: "Learn More",
      link: "/contact",
      highlight: true
    },
  ];

  const approaches = [
    {
      number: "01",
      title: "Discover",
      description: "We begin by understanding your business, customers, and objectives through a comprehensive strategy call."
    },
    {
      number: "02",
      title: "Design",
      description: "We create a customized plan based on your unique needs, leveraging proven frameworks that deliver results."
    },
    {
      number: "03",
      title: "Develop",
      description: "Our team builds all the necessary systems, from websites to ads to automation, handling everything for you."
    },
    {
      number: "04",
      title: "Deploy",
      description: "We launch your campaigns and continuously optimize them for maximum ROI and business growth."
    },
    {
      number: "05",
      title: "Drive Results",
      description: "You enjoy more leads, customers, and revenue—without the hassle of doing it yourself."
    },
  ];

  const successStories = [
    {
      business: "Local Plumbing Company",
      result: "416% increase in booked jobs",
      description: "We implemented our LeadGen Pro and Local Search Domination services, resulting in 100+ new leads per month."
    },
    {
      business: "Family Dental Practice",
      result: "327% ROI on marketing spend",
      description: "Our Website Optimizer and Review Amplifier services helped them become the highest-rated practice in their area."
    },
    {
      business: "Boutique Real Estate Agency",
      result: "52 properties sold in 90 days",
      description: "Our Full-Growth Package helped them outperform larger competitors despite a smaller marketing budget."
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

      {/* Service Offerings Section */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400"> {/* Updated text color */}
              Our Service Offerings
            </h2>
            <p className="text-lg text-gray-300"> {/* Updated text color */}
              Tailored solutions to help local businesses thrive in the digital age
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOfferings.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full flex flex-col ${
                  service.highlight 
                  ? "border-green-400 bg-gray-800" 
                  : "bg-gray-800 border-gray-700"
                }`}> {/* Updated background and border */}
                  <CardHeader>
                    <CardTitle className="text-xl text-green-400">{service.title}</CardTitle> {/* Updated text color */}
                    <CardDescription className="text-gray-300">{service.description}</CardDescription> {/* Updated text color */}
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-400 mt-0.5" /> {/* Updated text color */}
                          <span className="text-gray-200">{feature}</span> {/* Updated text color */}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Link to={service.link}>
                      <CtaButton
                        variant={service.highlight ? "default" : "secondary"}
                        className={service.highlight 
                          ? "w-full bg-green-400 text-gray-900 hover:bg-green-500" 
                          : "w-full bg-gray-700 text-green-400 hover:bg-gray-600"
                        } /* Updated button style */
                      >
                        {service.cta}
                      </CtaButton>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400"> {/* Updated text color */}
                Service Details
              </h2>
              <p className="text-lg text-gray-300 mb-6"> {/* Updated text color */}
                Unlike other agencies that charge high fees for mediocre results, we focus on delivering measurable growth, business automation, and ongoing optimization.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-400 p-3 rounded-full mt-1 text-gray-900"> {/* Updated background and text color */}
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">Done-For-You Implementation</h3> {/* Updated text color */}
                    <p className="text-gray-300">We handle everything from strategy to execution, allowing you to focus on what you do best—running your business.</p> {/* Updated text color */}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-400 p-3 rounded-full mt-1 text-gray-900"> {/* Updated background and text color */}
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">Results-Driven Approach</h3> {/* Updated text color */}
                    <p className="text-gray-300">We don't just focus on vanity metrics—we optimize for leads, sales, and revenue that actually grow your business.</p> {/* Updated text color */}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-400 p-3 rounded-full mt-1 text-gray-900"> {/* Updated background and text color */}
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">60-Day Money-Back Guarantee</h3> {/* Updated text color */}
                    <p className="text-gray-300">We're so confident in our services that we offer a 60-day money-back guarantee if you're not satisfied with the results.</p> {/* Updated text color */}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700"> {/* Updated background and border */}
                <h3 className="text-2xl font-bold mb-6 text-green-400">What Makes Us Different</h3> {/* Updated text color */}
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-400 mt-1" /> {/* Updated text color */}
                    <div>
                      <h4 className="font-bold mb-1 text-gray-100">Specialized in Local Businesses</h4> {/* Updated text color */}
                      <p className="text-gray-300">We understand the unique challenges of local businesses and create strategies specifically tailored to your local market.</p> {/* Updated text color */}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-400 mt-1" /> {/* Updated text color */}
                    <div>
                      <h4 className="font-bold mb-1 text-gray-100">No Long-Term Contracts</h4> {/* Updated text color */}
                      <p className="text-gray-300">We don't believe in locking clients into lengthy contracts. Our results make clients want to stay, not contractual obligations.</p> {/* Updated text color */}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-400 mt-1" /> {/* Updated text color */}
                    <div>
                      <h4 className="font-bold mb-1 text-gray-100">White-Glove Customer Service</h4> {/* Updated text color */}
                      <p className="text-gray-300">You'll have direct access to your dedicated account manager who knows your business and is invested in your success.</p> {/* Updated text color */}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-400 mt-1" /> {/* Updated text color */}
                    <div>
                      <h4 className="font-bold mb-1 text-gray-100">Transparent Reporting</h4> {/* Updated text color */}
                      <p className="text-gray-300">You'll always know exactly what we're doing and the results we're achieving with easy-to-understand reports.</p> {/* Updated text color */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">Our Approach & Methodology</h2> {/* Updated text color */}
            <p className="text-lg text-gray-300">
              Our proven 5-step process ensures consistent results across all client campaigns
            </p> {/* Updated text color */}
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 md:gap-10 mb-12 last:mb-0"
              >
                <div className="pt-1">
                  <span className="block text-4xl font-bold text-green-400">{approach.number}</span> {/* Updated text color */}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-green-400">{approach.title}</h3> {/* Updated text color */}
                  <p className="text-gray-300">{approach.description}</p> {/* Updated text color */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">Client Success Stories</h2> {/* Updated text color */}
            <p className="text-lg text-gray-300">
              Real results from businesses just like yours
            </p> {/* Updated text color */}
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700" /* Updated background and border */
              >
                <div className="bg-green-400 h-12 w-12 rounded-full flex items-center justify-center mb-6 text-gray-900"> {/* Updated background and text color */}
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-100">{story.business}</h3> {/* Updated text color */}
                <p className="text-2xl font-bold mb-4 text-green-400">{story.result}</p> {/* Updated text color */}
                <p className="text-gray-300">{story.description}</p> {/* Updated text color */}
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
