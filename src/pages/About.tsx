
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import CtaButton from "@/components/ui/cta-button";
import { Check, Award, Lightbulb, ShieldCheck, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  // Define core values
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      title: "Innovation",
      description: "Delivering modern, transformative solutions that keep our clients ahead of the curve."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
      title: "Transparency",
      description: "Clear communication and detailed reporting so you always know where things stand."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Collaboration",
      description: "Merging our expertise with your vision to create solutions that truly reflect your business."
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: "Accountability",
      description: "Standing firmly behind our commitments with our 60-day money-back guarantee."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
      title: "Simplicity",
      description: "Fully managed services with no setup hassles, letting you focus on running your business."
    }
  ];

  // Define team members
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      bio: "Digital marketing veteran with 15+ years of experience scaling local businesses.",
      avatar: "J"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Automation",
      bio: "Workflow automation specialist with expertise in CRM and business process optimization.",
      avatar: "S"
    },
    {
      name: "Michael Chen",
      role: "Lead Web Developer",
      bio: "Full-stack developer specializing in high-performance, conversion-focused websites.",
      avatar: "M"
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Strategist",
      bio: "Data-driven marketing expert with a track record of 3-4x ROI improvements.",
      avatar: "E"
    }
  ];

  // Define milestones
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Leads Obtainer was established with a mission to help local businesses grow through technology."
    },
    {
      year: "2019",
      title: "100th Client Milestone",
      description: "Reached 100 clients and expanded our service offerings to include full automation solutions."
    },
    {
      year: "2020",
      title: "Digital Transformation Award",
      description: "Recognized for excellence in helping businesses adapt during challenging market conditions."
    },
    {
      year: "2021",
      title: "Advanced AI Integration",
      description: "Pioneered AI-powered marketing and lead generation tools for local businesses."
    },
    {
      year: "2022",
      title: "500+ Businesses Scaled",
      description: "Proudly helped over 500 businesses achieve significant growth through our solutions."
    },
    {
      year: "2023",
      title: "60-Day Guarantee Launch",
      description: "Introduced our industry-leading 60-day money-back guarantee on all service packages."
    }
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
              <span className="text-gradient">About Leads Obtainer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Empowering Local Businesses to 4x Growth in 90 Days Through Results-Driven, Done-For-You Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CtaButton size="lg">
                  Get in Touch
                </CtaButton>
              </Link>
              <Link to="/services">
                <CtaButton variant="secondary" size="lg">
                  Explore Our Services
                </CtaButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Leads Obtainer was founded with a singular mission: to provide local businesses with the same advanced marketing and automation technologies that large corporations use, without the complexity or high costs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We accelerate business growth with cutting-edge digital marketing, automation, and technology—all delivered as fully managed services with a 60-day money-back guarantee.
              </p>
              <p className="text-lg text-gray-700">
                Our team of experts handles everything from website development to lead generation and sales automation, allowing you to focus on what you do best—running your business and serving your customers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500 font-medium">Company Image</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-agency-blue">Mission</h3>
              <p className="text-lg text-gray-700">
                Provide technology-driven, hassle-free marketing and automation solutions for rapid, sustainable growth that allows businesses to thrive without technical burdens.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-agency-indigo">Vision</h3>
              <p className="text-lg text-gray-700">
                Become the trusted partner for local businesses worldwide, enabling scalable growth through innovative technology solutions that level the playing field against larger competitors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-700">
              Meet the experts behind our success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl text-center border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`} alt={member.name} />
                  <AvatarFallback className="text-xl bg-agency-blue text-white">{member.avatar}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-agency-blue mb-3">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700">
              Key milestones in our company's history
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-8 last:mb-0"
              >
                <div className="mr-4 md:mr-8">
                  <div className="bg-agency-blue text-white text-xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                    {milestone.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-agency-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Leads Obtainer?</h2>
            <p className="text-lg text-gray-700">
              What sets us apart from other agencies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Results-driven strategies designed for measurable growth within 90 days",
              "Done-for-you implementation with no technical burden on your team",
              "Comprehensive solutions covering websites, marketing, and automation",
              "Data-backed decision making for optimal performance",
              "Risk-free partnership with our 60-day money-back guarantee",
              "Continuous optimization to maximize your ROI"
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">{point}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">
              Let's 4x your business growth in the next 90 days—risk-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CtaButton size="lg" className="bg-white text-agency-blue hover:bg-opacity-90">
                  Contact Us Today
                </CtaButton>
              </Link>
              <Link to="/services">
                <CtaButton variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-agency-blue">
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
