
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      business: "Local Gym",
      name: "John Smith",
      title: "Owner",
      result: "Increased memberships by 300% in 60 days.",
      quote: "Leads Obtainer transformed our business. We went from struggling to get new sign-ups to having a waiting list—all in just two months!",
      stars: 5,
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      delay: 0
    },
    {
      business: "Dental Clinic",
      name: "Sarah Johnson",
      title: "Practice Manager",
      result: "Doubled patient bookings within 3 months.",
      quote: "Their automated follow-up system has been a game-changer. New patients book appointments without us lifting a finger.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      delay: 0.1
    },
    {
      business: "Real Estate Agency",
      name: "Michael Davis",
      title: "Broker",
      result: "Quadrupled leads and revenue in 90 days.",
      quote: "Working with Leads Obtainer has been the best business decision I've made. The ROI has been incredible—4X our previous numbers!",
      stars: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      delay: 0.2
    }
  ];

  return (
    <section className="section-padding bg-agency-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-agency-blue rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-agency-indigo rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Businesses Like Yours Are Achieving <span className="text-gradient">4X Growth</span>—Here's How!
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Don't just take our word for it. See the real results our clients have achieved.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-custom p-6 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                  <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{testimonial.business}</h3>
                  <p className="text-gray-600">
                    {testimonial.name}, {testimonial.title}
                  </p>
                </div>
              </div>
              
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <h4 className="text-lg font-semibold mb-3 text-agency-blue">{testimonial.result}</h4>
              
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-white rounded-xl shadow-custom p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-3">Want to see more success stories?</h3>
          <p className="text-lg text-gray-700 mb-6">Schedule a call to see detailed case studies specific to your industry.</p>
          <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-agency-blue to-agency-indigo text-white py-3 px-8 rounded-lg font-medium hover:shadow-lg hover:shadow-agency-blue/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <span>Watch Video Testimonials</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
