import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import MobilePricingCard from '../ui/mobile-pricing-card';
import ResponsiveContainer from '../ui/responsive-container';
import ResponsiveText from '../ui/responsive-text';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobilePricingSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  plans?: {
    title: string;
    price: {
      monthly: number;
      yearly: number;
      setupFee: number;
    };
    description: string;
    features: {
      text: string;
      included: boolean;
      tooltip?: string;
    }[];
    popular?: boolean;
    ctaText?: string;
    ctaHref?: string;
    testimonial?: {
      quote: string;
      author: string;
      role?: string;
    };
  }[];
}

/**
 * MobilePricingSection - A fully responsive pricing section with
 * pricing toggle, mobile-optimized cards, and smooth animations
 */
const MobilePricingSection: React.FC<MobilePricingSectionProps> = ({
  title = "Pricing Plans",
  subtitle = "Choose the plan that's right for you",
  className,
  plans = [
    {
      title: "Starter",
      price: {
        monthly: 29,
        yearly: 290,
        setupFee: 99,
      },
      description: "Perfect for small businesses and startups",
      features: [
        { text: "24/7 Support", included: true },
        { text: "Analytics Dashboard", included: true },
        { text: "Up to 5 Users", included: true },
        { text: "1 GB Storage", included: true },
        { text: "API Access", included: false },
        { text: "Custom Integrations", included: false },
      ],
      ctaText: "Get Started",
      ctaHref: "/contact?plan=starter",
    },
    {
      title: "Professional",
      price: {
        monthly: 79,
        yearly: 790,
        setupFee: 199,
      },
      description: "Ideal for growing businesses and teams",
      features: [
        { text: "24/7 Priority Support", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "Up to 20 Users", included: true },
        { text: "10 GB Storage", included: true },
        { text: "API Access", included: true },
        { text: "Custom Integrations", included: false, tooltip: "Available as add-on" },
      ],
      popular: true,
      ctaText: "Get Started",
      ctaHref: "/contact?plan=professional",
      testimonial: {
        quote: "This plan helped us grow our business by 45% in just 3 months!",
        author: "Sarah Johnson",
        role: "Marketing Director"
      }
    },
    {
      title: "Enterprise",
      price: {
        monthly: 199,
        yearly: 1990,
        setupFee: 499,
      },
      description: "For large organizations with complex needs",
      features: [
        { text: "24/7 Priority Support", included: true },
        { text: "Custom Analytics Solutions", included: true },
        { text: "Unlimited Users", included: true },
        { text: "Unlimited Storage", included: true },
        { text: "Advanced API Access", included: true },
        { text: "Custom Integrations", included: true },
      ],
      ctaText: "Contact Sales",
      ctaHref: "/contact?plan=enterprise",
    },
  ]
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle next/prev card navigation
  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    
    // Ensure index is within bounds
    const newIndex = Math.max(0, Math.min(index, plans.length - 1));
    setActiveCardIndex(newIndex);
    
    // Get card width and scroll to the appropriate position
    const cardWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth'
    });
  };

  // Effect to handle scrolling and active card tracking
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    // Number of plans for bounds checking
    const planCount = plans.length;
    console.log(`Total plans: ${planCount}`);
    
    // Ensure activeCardIndex is within bounds
    if (activeCardIndex < 0) {
      setActiveCardIndex(0);
    } else if (activeCardIndex >= planCount) {
      setActiveCardIndex(planCount - 1);
    }
    
    // Scroll to the active card
    const cardWidth = carousel.offsetWidth;
    carousel.scrollTo({
      left: activeCardIndex * cardWidth,
      behavior: 'smooth'
    });
    
    // Create an observer to watch for visible cards
    const handleScroll = () => {
      if (!carousel) return;
      
      const scrollPosition = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      
      if (newIndex !== activeCardIndex && newIndex >= 0 && newIndex < planCount) {
        setActiveCardIndex(newIndex);
        console.log(`Scrolled to card: ${newIndex} - ${plans[newIndex].title}`);
      }
    };
    
    carousel.addEventListener('scroll', handleScroll);
    
    // Enhanced swipe handling for touch devices with improved sensitivity
    let startX: number | null = null;
    let startTime: number | null = null;
    let touchDistance = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startTime = Date.now();
      touchDistance = 0;
      
      // Add highlight to indicate touch is detected
      carousel.classList.add('touch-active');
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (startX === null) return;
      
      const currentX = e.touches[0].clientX;
      touchDistance = startX - currentX;
      
      // Provide visual feedback during swipe by slightly moving the carousel
      // This provides a natural feeling that the carousel is following the finger
      if (Math.abs(touchDistance) < 50) {
        const resistance = 0.3; // Add resistance to make it feel more physical
        carousel.scrollLeft += touchDistance * resistance;
      }
      
      // Using a threshold to determine swipe intent
      // Lower threshold for faster swipes (velocity-based)
      const swipeTime = Date.now() - (startTime || 0);
      const swipeVelocity = Math.abs(touchDistance) / swipeTime;
      
      const threshold = swipeVelocity > 0.5 ? 30 : 50; // Lower threshold for fast swipes
      
      if (Math.abs(touchDistance) > threshold) {
        if (touchDistance > 0 && activeCardIndex < planCount - 1) {
          // Swiped left - go to next card
          scrollToCard(activeCardIndex + 1);
        } else if (touchDistance < 0 && activeCardIndex > 0) {
          // Swiped right - go to previous card
          scrollToCard(activeCardIndex - 1);
        }
        startX = null; // Reset to prevent multiple triggers
        startTime = null;
      }
    };
    
    const handleTouchEnd = () => {
      startX = null;
      startTime = null;
      
      // Remove touch highlight
      carousel.classList.remove('touch-active');
      
      // If a small swipe was detected but not enough to trigger navigation,
      // ensure we snap back to the active card
      if (Math.abs(touchDistance) < 50) {
        scrollToCard(activeCardIndex);
      }
      touchDistance = 0;
    };
    
    // Add touch event listeners
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeCardIndex, plans.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <ResponsiveContainer className={cn("py-16 sm:py-20", className)}>
      {/* Section Header */}
      <div className="text-center mb-12">
        <ResponsiveText
          as="h2"
          size="4xl"
          weight="bold"
          className="mb-4"
        >
          {title}
        </ResponsiveText>
        
        <ResponsiveText
          size="xl"
          color="neutral-400"
          className="max-w-2xl mx-auto"
        >
          {subtitle}
        </ResponsiveText>
        
        {/* Billing Toggle */}
        <div className="mt-8 inline-flex items-center flex-wrap justify-center gap-2 bg-black/40 p-1 rounded-full border border-white/10">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
              billingCycle === 'monthly'
                ? "bg-[#c6ff00] text-black shadow-lg"
                : "text-white hover:text-[#c6ff00]"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
              billingCycle === 'yearly'
                ? "bg-[#c6ff00] text-black shadow-lg"
                : "text-white hover:text-[#c6ff00]"
            )}
          >
            Yearly <span className="text-xs opacity-80">(Save 20%)</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Pricing Cards Carousel */}
      <div className="relative">
        {/* Desktop View (Grid Layout) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {plans.map((plan, index) => (
            <MobilePricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              ctaText={plan.ctaText}
              ctaHref={plan.ctaHref}
              priceDisplay={billingCycle}
              discountPercent={billingCycle === 'yearly' ? 20 : 0}
              testimonial={plan.testimonial}
            />
          ))}
        </div>
        
        {/* Mobile View (Horizontal Scroll) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="sm:hidden w-full relative"
        >
          {/* Navigation Buttons */}
          <button 
            onClick={() => scrollToCard(activeCardIndex - 1)}
            disabled={activeCardIndex === 0}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center",
              "bg-black/70 rounded-full border border-white/10 text-white",
              "shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/30",
              activeCardIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-70 hover:opacity-100"
            )}
            aria-label="Previous plan"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={() => scrollToCard(activeCardIndex + 1)}
            disabled={activeCardIndex === plans.length - 1}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center",
              "bg-black/70 rounded-full border border-white/10 text-white",
              "shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/30",
              activeCardIndex === plans.length - 1 ? "opacity-30 cursor-not-allowed" : "opacity-70 hover:opacity-100"
            )}
            aria-label="Next plan"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              display: 'flex',
              scrollSnapType: 'x mandatory',
              touchAction: 'pan-x',
              willChange: 'transform, scroll-position',
              position: 'relative',
              zIndex: 10
            }}
          >
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className="min-w-full flex-shrink-0 px-1 snap-center"
                style={{ 
                  scrollSnapAlign: 'center',
                  zIndex: index === activeCardIndex ? 15 : 10
                }}
                data-plan-index={index}
                data-plan-title={plan.title}
              >
                <MobilePricingCard
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  popular={plan.popular}
                  ctaText={plan.ctaText}
                  ctaHref={plan.ctaHref}
                  priceDisplay={billingCycle}
                  discountPercent={billingCycle === 'yearly' ? 20 : 0}
                  testimonial={plan.testimonial}
                />
              </div>
            ))}
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {plans.map((plan, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  activeCardIndex === index 
                    ? "bg-[#c6ff00] w-6" 
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to ${plan.title} plan`}
                data-plan-index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Enterprise Note */}
      <div className="mt-10 text-center">
        <ResponsiveText
          size="base"
          color="neutral-400"
          className="text-neutral-400"
        >
          Need a custom solution? <a href="/contact" className="text-[#c6ff00] hover:underline">Contact our sales team</a> for a personalized quote.
        </ResponsiveText>
      </div>
    </ResponsiveContainer>
  );
};

export default MobilePricingSection;
