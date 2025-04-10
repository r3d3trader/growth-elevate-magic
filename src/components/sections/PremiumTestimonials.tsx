import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { PremiumEffects, LuxuryText, LuxuryDivider } from "@/components/ui/premium-effects";
import { PremiumEnhancements } from "@/config/premium-enhancements";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating?: number;
  image?: string;
}

interface PremiumTestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: TestimonialProps[];
  variant?: "grid" | "carousel" | "featured";
}

const TestimonialCard = ({ quote, author, position, company, rating = 5, image }: TestimonialProps) => {
  return (
    <PremiumEffects
      effect="glass"
      animation="fadeIn"
      hover="lift"
      className="p-8 rounded-xl relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#cb9b51]/50 to-primary/50" />
      
      {/* Quote icon */}
      <div className="mb-6 flex justify-between items-center">
        <Quote className="w-10 h-10 text-[#cb9b51]/30" />
        
        {/* Rating */}
        {rating > 0 && (
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#cb9b51]" fill="#cb9b51" />
            ))}
            {[...Array(5 - rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-neutral-600" />
            ))}
          </div>
        )}
      </div>
      
      {/* Quote text */}
      <blockquote className="mb-8">
        <p className="text-lg font-luxury-serif italic leading-relaxed text-neutral-200">"{quote}"</p>
      </blockquote>
      
      {/* Author info */}
      <div className="flex items-center">
        {image && (
          <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-[#cb9b51]/30">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-neutral-400">{position}, {company}</p>
        </div>
      </div>
    </PremiumEffects>
  );
};

const FeaturedTestimonial = ({ quote, author, position, company, rating = 5, image }: TestimonialProps) => {
  return (
    <PremiumEffects
      effect="glass"
      animation="fadeIn"
      className="p-10 md:p-16 rounded-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#cb9b51] to-primary" />
      
      <div className="md:flex items-start gap-12">
        {/* Left column - Quote */}
        <div className="md:w-2/3 mb-8 md:mb-0">
          <Quote className="w-16 h-16 text-[#cb9b51]/30 mb-6" />
          <blockquote className="mb-8">
            <LuxuryText
              as="p"
              className="text-2xl font-luxury-serif italic leading-relaxed text-neutral-100 mb-8"
            >
              "{quote}"
            </LuxuryText>
          </blockquote>
          
          {/* Rating */}
          {rating > 0 && (
            <div className="flex mb-8">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#cb9b51]" fill="#cb9b51" />
              ))}
            </div>
          )}
        </div>
        
        {/* Right column - Author info */}
        <div className="md:w-1/3 flex flex-col items-center text-center md:text-left md:items-start">
          {image && (
            <div className="mb-6 w-24 h-24 rounded-full overflow-hidden border-2 border-[#cb9b51]/50">
              <img src={image} alt={author} className="w-full h-full object-cover" />
            </div>
          )}
          <LuxuryText
            as="p"
            className="text-xl font-semibold mb-2"
            gradient="gold"
          >
            {author}
          </LuxuryText>
          <p className="text-neutral-400">{position}</p>
          <p className="text-neutral-400">{company}</p>
        </div>
      </div>
    </PremiumEffects>
  );
};

export default function PremiumTestimonials({ 
  title = "What Our Clients Say", 
  subtitle = "Hear from businesses that have transformed their growth with our premium solutions",
  testimonials,
  variant = "grid"
}: PremiumTestimonialsProps) {
  // Default testimonials if none provided
  const defaultTestimonials: TestimonialProps[] = [
    {
      quote: "Working with Growth Elevate Magic transformed our business completely. Their strategic approach and premium solutions helped us increase our conversion rate by 320% in just 90 days.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "Elevate Dynamics",
      rating: 5
    },
    {
      quote: "The attention to detail and premium quality of their work exceeded our expectations. Our ROI increased by 215% within the first quarter of implementation.",
      author: "Michael Chen",
      position: "Marketing Director",
      company: "Innovate Solutions",
      rating: 5
    },
    {
      quote: "Their team delivered a truly premium experience from start to finish. The custom automation solutions they built saved us 30+ hours per week while increasing our lead quality.",
      author: "Jessica Williams",
      position: "Operations Manager",
      company: "Precision Enterprises",
      rating: 5
    }
  ];

  const displayTestimonials = testimonials || defaultTestimonials;

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-neutral-900 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e6ff0008_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <LuxuryText
            as="h2"
            className="text-4xl md:text-5xl font-bold mb-6"
            gradient="gold"
            font="luxury-display"
            animation="fadeIn"
          >
            {title}
          </LuxuryText>
          
          <LuxuryDivider 
            variant="gradient" 
            color="gold" 
            width="narrow" 
            animation 
            className="my-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-neutral-400 font-luxury-serif"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Testimonials Display */}
        {variant === "featured" && (
          <div className="max-w-5xl mx-auto">
            <FeaturedTestimonial {...displayTestimonials[0]} />
            
            {displayTestimonials.length > 1 && (
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {displayTestimonials.slice(1, 3).map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            )}
          </div>
        )}

        {variant === "grid" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        )}

        {variant === "carousel" && (
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {displayTestimonials.map((testimonial, index) => (
                <div key={index} className="min-w-[350px] md:min-w-[400px]">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}