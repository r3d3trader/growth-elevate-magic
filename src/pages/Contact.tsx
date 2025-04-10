import React, { useState } from "react";
import EnhancedPageLayout from "@/components/layout/EnhancedPageLayout";
import { motion } from "framer-motion";
import EnhancedButton from "@/components/ui/enhanced-button";
import { LuxuryText } from "@/components/ui/premium-effects";
import { Mail, Phone, MapPin, Check, ArrowRight, ChevronDown, ChevronUp, Search, LayoutTemplate, Rocket, BarChart2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import EnhancedParticles from "@/components/ui/enhanced-particles";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received!",
      description: "Thank you for reaching out. We'll be in touch with you shortly.",
      duration: 5000,
    });
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: "",
        website: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-[#c6ff00]" />,
      title: "Email",
      content: "info@leadsobtainer.com",
      link: "mailto:info@leadsobtainer.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-[#c6ff00]" />,
      title: "Phone",
      content: "+1 (978) 723-8408",
      link: "tel:+19787238408",
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#c6ff00]" />,
      title: "HQ Location",
      content: "30 N Gould St, Sheridan, WY, 82801",
      link: "https://maps.google.com/maps?q=30+N+Gould+St,+Sheridan,+WY,+82801",
    },
  ];

  const faqs = [
    {
      question: "What is your growth strategy?",
      answer: "Our growth strategy is to help businesses achieve explosive growth through our expertise and resources.",
    },
    {
      question: "How do you measure success?",
      answer: "We measure success by the growth and revenue increase of our clients.",
    },
    {
      question: "What is your pricing?",
      answer: "Our pricing varies depending on the services and scope of work. Please contact us for a custom quote.",
    },
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
              <Mail className="h-4 w-4 text-[#c6ff00]" />
              <span>Get in Touch With Us</span>
            </motion.div>
            
            <LuxuryText 
              as="h1" 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
              gradient="primary"
              glow
            >
              Let's Build Something Amazing
            </LuxuryText>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto"
            >
              Our team is ready to help you achieve explosive growth. Reach out and let's start the conversation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-to-b from-black to-black/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <LuxuryText 
              as="h2" 
              className="text-2xl md:text-3xl font-bold tracking-tight mb-4"
              gradient="primary"
              glow
            >
              Trusted By Industry Leaders
            </LuxuryText>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're proud to work with some of the most innovative companies
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="w-20 h-12 bg-[#c6ff00]/10 rounded-lg flex items-center justify-center">
                  <div className="text-[#c6ff00] text-lg font-bold">
                    Logo {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6">
                <LayoutTemplate className="h-4 w-4 text-[#c6ff00]" />
                <span>Contact Details</span>
              </div>
              
              <LuxuryText 
                as="h2" 
                className="text-3xl md:text-4xl font-bold mb-6"
                gradient="primary"
                glow
              >
                Get in Touch
              </LuxuryText>
              
              <p className="text-white/70 mb-8">
                We'd love to hear from you. Here's how you can reach us:
              </p>
              
              <div className="space-y-8 mb-16">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-start gap-4 text-white group"
                  >
                    <div className="p-3 rounded-full bg-[#c6ff00]/10 group-hover:bg-[#c6ff00]/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-[#c6ff00] mb-1">{item.title}</div>
                      <div className="text-white/70 group-hover:text-white transition-colors">{item.content}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* FAQs */}
              <div className="mt-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6">
                  <Search className="h-4 w-4 text-[#c6ff00]" />
                  <span>Common Questions</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-black/50 backdrop-blur-sm border border-[#c6ff00]/10 rounded-xl overflow-hidden"
                    >
                      <div 
                        className="p-4 flex justify-between items-center cursor-pointer hover:bg-[#c6ff00]/5"
                        onClick={() => toggleFaq(index)}
                      >
                        <h4 className="font-medium text-white">{faq.question}</h4>
                        {expandedFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-[#c6ff00]" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-[#c6ff00]" />
                        )}
                      </div>
                      {expandedFaq === index && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="p-4 text-white/70 border-t border-[#c6ff00]/10"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-black/50 backdrop-blur-md border border-[#c6ff00]/10 rounded-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/20 text-sm font-medium text-[#c6ff00] mb-6">
                <Rocket className="h-4 w-4 text-[#c6ff00]" />
                <span>Start Your Journey</span>
              </div>
              
              <LuxuryText 
                as="h2" 
                className="text-2xl font-bold mb-6"
                gradient="primary"
                glow
              >
                Send Us a Message
              </LuxuryText>
              
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-[#c6ff00] mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#c6ff00]/20 focus:border-[#c6ff00]/50 focus:ring-1 focus:ring-[#c6ff00]/30 bg-black text-white transition-colors"
                      required
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-[#c6ff00] mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#c6ff00]/20 focus:border-[#c6ff00]/50 focus:ring-1 focus:ring-[#c6ff00]/30 bg-black text-white transition-colors"
                      required
                      placeholder="info@leadsobtainer.com"
                    />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-[#c6ff00] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#c6ff00]/20 focus:border-[#c6ff00]/50 focus:ring-1 focus:ring-[#c6ff00]/30 bg-black text-white transition-colors"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label htmlFor="business" className="block text-sm font-medium text-[#c6ff00] mb-2">Business Name</label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#c6ff00]/20 focus:border-[#c6ff00]/50 focus:ring-1 focus:ring-[#c6ff00]/30 bg-black text-white transition-colors"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <label htmlFor="website" className="block text-sm font-medium text-[#c6ff00] mb-2">Website URL (if any)</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#c6ff00]/20 focus:border-[#c6ff00]/50 focus:ring-1 focus:ring-[#c6ff00]/30 bg-black text-white transition-colors"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <label htmlFor="message" className="block text-sm font-medium text-[#c6ff00] mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#c6ff00]/20 focus:border-[#c6ff00]/50 focus:ring-1 focus:ring-[#c6ff00]/30 bg-black text-white transition-colors"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="pt-2"
                >
                  <EnhancedButton 
                    type="submit" 
                    variant="premium" 
                    size="lg"
                    glow
                    className="w-full py-4 text-lg font-semibold"
                    disabled={submitted}
                    icon={submitted ? <Check className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
                    iconPosition={submitted ? "left" : "right"}
                  >
                    {submitted ? "Message Sent!" : "Send Message"}
                  </EnhancedButton>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-black via-black/95 to-black relative overflow-hidden">
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
              <BarChart2 className="h-4 w-4 text-[#c6ff00]" />
              <span>Ready to Grow?</span>
            </div>
            
            <LuxuryText 
              as="h2" 
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              gradient="primary"
              glow
            >
              Ready to Accelerate Your Growth?
            </LuxuryText>
            
            <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
              Schedule a free strategy session with our growth experts today.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <EnhancedButton 
                variant="premium" 
                size="lg"
                glow
                className="w-full sm:w-auto px-8 py-4"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Book a Call
              </EnhancedButton>
              <EnhancedButton 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto px-8 py-4"
              >
                View Pricing
              </EnhancedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </EnhancedPageLayout>
  );
};

export default Contact;
