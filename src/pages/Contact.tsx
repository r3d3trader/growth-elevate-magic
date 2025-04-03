import React, { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import CtaButton from "@/components/ui/cta-button";
import { Mail, Phone, MapPin, Check, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

    // Reset form after showing success state
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
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@leadsobatiner.com",
      link: "mailto:info@leadsobatiner.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "(XXX) XXX-XXXX",
      link: "tel:+1XXXXXXXXXX",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "30 N Gould St, STE R, Sheridan, WY 82801",
      link: "https://goo.gl/maps/YourGoogleMapsLink",
    },
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
              <span className="text-gradient">Let's Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Ready to 4x your business growth in 90 days? Get in touch with our team to schedule your free strategy call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-agency-blue-50 p-3 rounded-full mb-4 text-agency-blue">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <a 
                  href={item.link} 
                  className="text-gray-700 hover:text-agency-blue transition-colors"
                >
                  {item.content}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Strategy Call</h2>
              <p className="text-lg text-gray-700 mb-6">
                Fill out the form to schedule your free, no-obligation strategy call with one of our growth experts. We'll discuss your business goals and create a custom plan to help you achieve them.
              </p>

              <div className="space-y-6">
                {[
                  "Discover untapped growth opportunities for your business",
                  "Learn how our automation can save you 10+ hours per week",
                  "See examples of successful campaigns for businesses like yours",
                  "Get a custom roadmap to 4x your growth in 90 days",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3">Our Promise to You</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-agency-blue mt-0.5" />
                    <p className="text-gray-700">No high-pressure sales tactics</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-agency-blue mt-0.5" />
                    <p className="text-gray-700">Actionable advice you can use whether you work with us or not</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-agency-blue mt-0.5" />
                    <p className="text-gray-700">60-day money-back guarantee on all our services</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Message Received!</h4>
                    <p className="text-gray-700">
                      Thank you for reaching out. Our team will be in touch with you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-blue focus:border-agency-blue transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-blue focus:border-agency-blue transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-blue focus:border-agency-blue transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                          Business Name*
                        </label>
                        <input
                          type="text"
                          id="business"
                          name="business"
                          value={formData.business}
                          onChange={handleChange}
                          placeholder="Your Business LLC"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-blue focus:border-agency-blue transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                        Website (if applicable)
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://your-website.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-blue focus:border-agency-blue transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        How can we help you?*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your business goals and challenges..."
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agency-blue focus:border-agency-blue transition-colors"
                      />
                    </div>

                    <div>
                      <CtaButton type="submit" className="w-full">
                        Schedule Your Free Strategy Call
                      </CtaButton>
                    </div>

                    <p className="text-xs text-center text-gray-500">
                      By submitting this form, you agree to our terms of service and privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
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
              Answers to common questions about working with us
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "How soon can we start working together?",
                answer: "We can typically begin implementation within 1-2 weeks of your initial consultation, depending on project scope and our current client load."
              },
              {
                question: "What does the strategy call include?",
                answer: "Our 30-minute strategy call includes a review of your business goals, discussion of current marketing efforts, identification of key growth opportunities, and a high-level roadmap for implementation."
              },
              {
                question: "How does the 60-day money-back guarantee work?",
                answer: "If you're not satisfied with the results after 60 days of working with us, we'll refund your setup fee in full—no questions asked. We stand behind the quality of our work and are confident in our ability to deliver results."
              },
              {
                question: "Do I need to have technical knowledge to work with you?",
                answer: "Not at all! Our services are fully managed, which means we handle all the technical aspects for you. Our goal is to make the process as hands-off as possible so you can focus on running your business."
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

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
          </motion.div>

          <div className="bg-white p-2 rounded-xl shadow-md overflow-hidden">
            <div className="h-96 w-full bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Map Placeholder</p>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to 4x Your Business in 90 Days?</h2>
            <p className="text-xl mb-8">
              Schedule your free strategy call today and let's create your custom growth plan.
            </p>
            <CtaButton size="lg" className="bg-white text-agency-blue hover:bg-opacity-90" onClick={() => {
              window.scrollTo({
                top: 600,
                behavior: "smooth",
              });
            }}>
              Get Started Now
            </CtaButton>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;