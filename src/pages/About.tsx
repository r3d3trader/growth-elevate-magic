
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import CtaButton from "@/components/ui/cta-button";
import { Check, Briefcase, Heart, Star, TrendingUp, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
      title: "Integrity",
      description: "We always put our clients' success first and deliver on our promises."
    },
    {
      icon: <Heart className="h-8 w-8 text-green-400" />,
      title: "Passion",
      description: "We genuinely care about helping local businesses thrive in their communities."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-400" />,
      title: "Results",
      description: "We're obsessed with delivering measurable growth for every client we serve."
    },
    {
      icon: <Star className="h-8 w-8 text-green-400" />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do."
    }
  ];
  
  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Leads Obtainer was founded with a mission to help local businesses thrive in the digital age."
    },
    {
      year: "2021",
      title: "First Major Breakthrough",
      description: "Developed our proprietary LeadGen Pro system that consistently delivers 4x growth."
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Grew our team and expanded our service offerings to provide end-to-end solutions."
    },
    {
      year: "2023",
      title: "Today",
      description: "Serving local businesses across the country with industry-leading results and satisfaction."
    }
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
            className="text-center max-w-4xl mx-auto text-white" /* Added text-white */
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-gradient">About Leads Obtainer</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering Local Businesses to 4x Growth in 90 Days Through Results-Driven, Done-For-You Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CtaButton size="lg" className="bg-green-500 hover:bg-green-600"> {/* Updated button color */}
                  Get in Touch
                </CtaButton>
              </Link>
              <Link to="/services">
                <CtaButton variant="secondary" size="lg" className="bg-gray-800 hover:bg-gray-700 text-white"> {/* Updated button color */}
                  Explore Our Services
                </CtaButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">Our Story</h2> {/* Updated text color */}
              <div className="space-y-4 text-gray-300"> {/* Updated text color */}
                <p>
                  Leads Obtainer was founded with a simple yet powerful vision: to empower local businesses with the same powerful marketing tools and strategies used by large corporations—without the complexity or high price tag.
                </p>
                <p>
                  Having worked with hundreds of local businesses, our founders noticed a common problem. Most agencies were either charging premium prices for mediocre results or offering cheap services that delivered little to no ROI.
                </p>
                <p>
                  We set out to create a different kind of agency—one that offers truly done-for-you marketing solutions that deliver measurable, consistent results. Our proprietary systems and methodologies have been refined over years of testing and optimization to ensure they consistently produce 4x growth in 90 days.
                </p>
                <p>
                  Today, we pride ourselves on maintaining a 97% client retention rate and delivering on our promises with a 60-day money-back guarantee that demonstrates our confidence in what we do.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="bg-gray-800 h-96 rounded-xl overflow-hidden border border-gray-700 flex items-center justify-center"> {/* Updated background and border */}
                <p className="text-gray-300">Team Photo Placeholder</p> {/* Updated text color */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-500">Our Mission & Vision</h2> {/* Updated text color */}
            <p className="text-lg text-gray-300"> {/* Updated text color */}
              Empowering local businesses to thrive in the digital age
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700" /* Updated background and border */
            >
              <h3 className="text-2xl font-bold mb-4 text-green-500">Our Mission</h3> {/* Updated text color */}
              <p className="text-gray-300 mb-6"> {/* Updated text color */}
                To help local businesses thrive by providing them with done-for-you marketing solutions that generate consistent leads, customers, and growth—without the complexity or high costs typically associated with effective digital marketing.
              </p>
              <div className="space-y-4">
                {[
                  "Make world-class marketing accessible to local businesses",
                  "Deliver measurable ROI that grows our clients' bottom line",
                  "Eliminate the complexity and overwhelm of digital marketing",
                  "Build long-term partnerships based on results and trust"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-1" /> {/* Updated text color */}
                    <p className="text-gray-300">{point}</p> {/* Updated text color */}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700" /* Updated background and border */
            >
              <h3 className="text-2xl font-bold mb-4 text-green-500">Our Vision</h3> {/* Updated text color */}
              <p className="text-gray-300 mb-6"> {/* Updated text color */}
                To create a world where every local business has the opportunity to grow and succeed through effective, affordable, and hassle-free marketing solutions that generate consistent results.
              </p>
              <div className="space-y-4">
                {[
                  "Become the most trusted marketing partner for local businesses",
                  "Revolutionize how local businesses approach marketing",
                  "Help 10,000 local businesses achieve 4x growth by 2025",
                  "Set the industry standard for transparency and results"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-1" /> {/* Updated text color */}
                    <p className="text-gray-300">{point}</p> {/* Updated text color */}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-500">Our Core Values</h2> {/* Updated text color */}
            <p className="text-lg text-gray-300"> {/* Updated text color */}
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center" /* Updated background and border */
              >
                <div className="bg-gray-700 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6"> {/* Updated background */}
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-500">{value.title}</h3> {/* Updated text color */}
                <p className="text-gray-300">{value.description}</p> {/* Updated text color */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 bg-[#1a1a1a]"> {/* Updated background */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-500">Our Journey</h2> {/* Updated text color */}
            <p className="text-lg text-gray-300"> {/* Updated text color */}
              The path that led us to where we are today
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="relative">
                  <div className="bg-green-500 h-12 w-12 rounded-full flex items-center justify-center text-gray-900 font-bold"> {/* Updated colors */}
                    {event.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute top-12 bottom-0 left-1/2 w-0.5 -ml-0.5 bg-gray-700" /> {/* Updated color */}
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2 text-green-500">{event.title}</h3> {/* Updated text color */}
                  <p className="text-gray-300">{event.description}</p> {/* Updated text color */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-700 text-white"> {/* Updated background color */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">
              Let's 4x your business growth in the next 90 days—risk-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CtaButton size="lg" className="bg-white text-green-500 hover:bg-opacity-90"> {/* Updated button color */}
                  Contact Us Today
                </CtaButton>
              </Link>
              <Link to="/services">
                <CtaButton variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-500"> {/* Updated button color */}
                  Explore Our Services
                </CtaButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
