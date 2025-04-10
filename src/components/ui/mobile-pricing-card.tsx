import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import EnhancedButton from './enhanced-button';

interface PricingFeature {
  text: string;
  included: boolean;
  tooltip?: string;
}

interface MobilePricingCardProps {
  title: string;
  price: {
    monthly: number;
    yearly: number;
    setupFee: number;
  };
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  className?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  priceDisplay?: 'monthly' | 'yearly';
  discountPercent?: number;
  currency?: string;
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
}

/**
 * MobilePricingCard - A mobile-first pricing card component with
 * responsive design, clear feature lists, and optimized touch areas
 */
const MobilePricingCard: React.FC<MobilePricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  className,
  ctaText = 'Get Started',
  ctaHref = '#',
  onCtaClick,
  priceDisplay = 'monthly',
  discountPercent = 0,
  currency = '$',
  testimonial,
}) => {
  // Calculate pricing with discount if applicable
  let currentPrice;
  let priceSuffix = '';
  
  if (priceDisplay === 'monthly') {
    currentPrice = price.monthly;
    priceSuffix = '/mo';
  } else if (priceDisplay === 'yearly') {
    currentPrice = price.yearly;
    priceSuffix = '/yr';
  }
  
  const discountedPrice = discountPercent > 0
    ? currentPrice - (currentPrice * (discountPercent / 100)) 
    : currentPrice;
  
  // Format price to add commas for thousands and ensure 2 decimal places if needed
  const formattedPrice = Number.isInteger(discountedPrice)
    ? discountedPrice.toLocaleString('en-US')
    : discountedPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  // Format setup fee with commas
  const formattedSetupFee = price.setupFee.toLocaleString('en-US');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border",
        "flex flex-col w-full",
        popular 
          ? "border-[#c6ff00] bg-gradient-to-b from-black/60 to-black/70 shadow-[0_0_20px_rgba(198,255,0,0.15)]" 
          : "border-white/10 bg-black/40",
        "transform transition-transform duration-300",
        "touch-manipulation",
        className
      )}
      whileHover={{ 
        y: -5, 
        boxShadow: popular 
          ? '0 10px 30px rgba(198, 255, 0, 0.2)' 
          : '0 10px 30px rgba(0, 0, 0, 0.2)' 
      }}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-[#c6ff00] text-black font-medium text-xs px-4 py-1 rounded-bl-lg rounded-tr-lg shadow-lg">
            Most Popular
          </div>
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Card Header */}
        <div className="mb-6">
          <h3 className={cn(
            "text-xl sm:text-2xl font-bold mb-2",
            popular ? "text-[#c6ff00]" : "text-white"
          )}>
            {title}
          </h3>
          <p className="text-neutral-400 text-sm mb-4">
            {description}
          </p>
          
          {/* Price Display */}
          <div className="flex items-baseline">
            <span className="text-white text-3xl sm:text-4xl font-bold">
              {currency}{formattedPrice}
            </span>
            {priceSuffix && (
              <span className="text-neutral-400 ml-2">
                {priceSuffix}
              </span>
            )}
          </div>
          
          {/* Original Price + Discount */}
          {discountPercent > 0 && (
            <div className="mt-1 flex items-center">
              <span className="text-neutral-500 line-through text-sm">
                {currency}{currentPrice.toLocaleString('en-US')}{priceSuffix}
              </span>
              <span className="ml-2 bg-[#c6ff00]/20 text-[#c6ff00] text-xs px-2 py-0.5 rounded-full">
                Save {discountPercent}%
              </span>
            </div>
          )}
          
          {/* Setup Fee Display */}
          <div className="mt-3 flex items-center text-sm">
            <div className="flex items-center px-2 py-0.5 bg-white/5 border border-white/10 rounded-md">
              <span className="text-neutral-400">One-time setup:</span>
              <span className="ml-1.5 text-white font-medium">{currency}{formattedSetupFee}</span>
            </div>
          </div>
        </div>
        
        {/* Features List */}
        <div className="flex-1">
          <h4 className="text-sm font-medium text-neutral-300 mb-3">
            What's included:
          </h4>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li 
                key={index}
                className={cn(
                  "flex items-start text-sm",
                  feature.included ? "text-white" : "text-neutral-500"
                )}
              >
                <div className="mt-0.5 mr-3">
                  {feature.included ? (
                    <Check className="h-4 w-4 text-[#c6ff00]" />
                  ) : (
                    <Check className="h-4 w-4 opacity-50" />
                  )}
                </div>
                <div className="flex-1">
                  {feature.text}
                </div>
                {feature.tooltip && (
                  <div className="group relative">
                    <HelpCircle className="h-4 w-4 ml-1 text-neutral-500" />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 invisible group-hover:visible z-10 mb-2 w-48 p-2 bg-black border border-white/10 rounded-md text-xs text-neutral-300 shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {feature.tooltip}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Testimonial */}
        {testimonial && (
          <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm italic text-neutral-300 mb-2">
              "{testimonial.quote}"
            </p>
            <div className="text-xs text-neutral-400">
              {testimonial.author}
              {testimonial.role && (
                <span>, {testimonial.role}</span>
              )}
            </div>
          </div>
        )}
        
        {/* CTA Button */}
        <div>
          <EnhancedButton
            onClick={onCtaClick}
            variant={popular ? "premium" : "outline"}
            size="lg"
            className="w-full"
            glow={popular}
            href={ctaHref}
          >
            {ctaText}
          </EnhancedButton>
        </div>
      </div>
    </motion.div>
  );
};

export default MobilePricingCard;
