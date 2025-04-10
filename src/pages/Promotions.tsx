import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ChevronLeft, ChevronRight, Quote, ArrowRight, CheckCircle } from "lucide-react";
import EnhancedPageLayout from "@/components/layout/EnhancedPageLayout";
import { TrendingUp } from "lucide-react";

// Testimonials Section
function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Boutique Owner",
      quote: "The marketing program helped us increase our foot traffic by 45% in just three months. The team was responsive and really understood our local market.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "John Doe",
      business: "CEO, Company",
      quote: "The best service ever! The team was responsive and really understood our needs.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jane Smith",
      business: "Marketing Director, Business",
      quote: "Their digital strategy transformed our online presence and significantly increased our bookings.",
      image: "/placeholder.svg?height=100&width=100",
    },
    // Add more testimonials as needed
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from local business owners who have transformed their operations with our help.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-md"
            onClick={() => {
              prev();
              setAutoplay(false);
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative">
                          <Quote className="h-10 w-10 text-emerald-500 opacity-20 absolute -top-4 -left-4" />
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="h-20 w-20 rounded-full object-cover"
                          />
                        </div>
                        <p className="text-lg text-slate-700 italic">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-slate-600">{testimonial.business}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-md"
            onClick={() => {
              next();
              setAutoplay(false);
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${current === index ? "bg-emerald-600" : "bg-slate-300"}`}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQAccordion() {
  const faqs = [
    {
      question: "What is your service about?",
      answer:
        "We offer the best marketing solutions for your business, tailored to your needs.",
    },
    {
      question: "How long before I see results?",
      answer:
        "Most clients begin seeing measurable improvements within 30-60 days.",
    },
    // Add more FAQs as needed
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Get answers to common questions about our local business marketing program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Steady Growth",
      description: "A consistent stream of local clients flowing into your business",
    },
    // Add more features as needed
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded-full mb-6">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Transform Your Local Business</h2>
          <p className="text-lg text-gray-300">
            Our Breakthrough 90 Blueprint Elite Program is designed to automate your marketing, supercharge your
            website, and double your customer base in just 90 days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$99/month",
      description: "Perfect for small local businesses looking to establish a strong online presence.",
      features: [
        "Custom website (5 pages)",
        "Basic SEO setup",
        "Social media integration",
        "Email marketing setup",
        "Google Business Profile optimization",
        "Monthly performance report",
      ],
      popular: false,
    },
    {
      name: "Premium Plan",
      price: "$199/month",
      description: "Ideal for growing businesses seeking advanced marketing solutions.",
      features: [
        "Custom website (10 pages)",
        "Advanced SEO setup",
        "Social media management",
        "Email marketing automation",
        "Google Business Profile optimization",
        "Monthly performance report",
      ],
      popular: true,
    },
    // Add more plans as needed
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded-full mb-6">
            PRICING
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Transparent Pricing</h2>
          <p className="text-lg text-gray-300">Choose the plan that fits your business needs and growth goals.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border ${plan.popular ? "border-blue-500" : "border-white/10"} relative`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white py-1 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-white">{plan.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                      : "bg-white/10 hover:bg-white/20"
                  } text-white font-medium rounded-md py-6 flex items-center justify-center gap-2 group`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            All plans include our 90-day satisfaction guarantee. If you're not seeing results after following our
            program, we'll provide an additional month of service at no charge.
          </p>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CtaSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded-full mb-6">
            GET STARTED
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Dominate Your Local Market?</h2>
          <p className="text-lg text-gray-300">
            Don't wait—your community is ready for you to lead the way. Act now and join the ranks of local business
            elites transforming their market presence!
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Take Our 10-Second Quick Quiz</h3>

          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-gray-300 mb-1 block">Your Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-gray-300 mb-1 block">Your Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-gray-300 mb-1 block">Business Type</label>
                <select className="w-full bg-black/50 border border-white/10 text-white rounded-md py-2 px-3 focus:border-blue-500">
                  <option value="">Select your business type</option>
                  <option value="retail">Retail Store</option>
                  <option value="restaurant">Restaurant/Café</option>
                  <option value="service">Service Business</option>
                  <option value="professional">Professional Practice</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-6">
              Get Your Free Strategy Call
            </Button>

            <p className="text-xs text-center text-gray-400">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// Main Promotions Page Component
const Promotions: React.FC = () => {
  return (
    <EnhancedPageLayout>
      {/* Hero Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#c6ff00] uppercase bg-[#c6ff00]/10 rounded-full">
                LIMITED TIME OFFER
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-4 text-white">
                Special Summer Promotion for <span className="text-[#c6ff00]">Local Businesses</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
                Transform your business with our exclusive Growth Elevate Magic promotion
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-[#c6ff00] hover:bg-[#c6ff00]/90 text-black font-medium px-8 py-6"
              >
                Claim Your Offer
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 hover:border-[#c6ff00] text-white hover:text-[#c6ff00] font-medium px-8 py-6"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <TestimonialCarousel />
      <FeaturesSection />
      <PricingSection />
      <FAQAccordion />
      <CtaSection />
    </EnhancedPageLayout>
  );
};

export default Promotions;
