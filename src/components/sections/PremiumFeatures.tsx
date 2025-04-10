import React from "react";
import { motion } from "framer-motion";
import { PremiumEffects, LuxuryText, LuxuryDivider } from "@/components/ui/premium-effects";
import { PremiumEnhancements } from "@/config/premium-enhancements";
import PremiumButton from "@/components/ui/premium-button";
import { Sparkles, Zap, BarChart, Users, Clock, Star, Shield, Rocket } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: "gold" | "emerald" | "sapphire" | "ruby" | "primary";
}

interface PremiumFeaturesProps {
  title?: string;
  subtitle?: string;
  features?: FeatureProps[];
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  layout?: "grid" | "alternating" | "centered";
}

const FeatureCard = ({ icon, title, description, color = "primary" }: FeatureProps) => {
  const colorMap = {
    gold: "text-[#cb9b51]",
    emerald: "text-[#50C878]",
    sapphire: "text-[#0F52BA]",
    ruby: "text-[#E0115F]",
    primary: "text-primary"
  };

  const bgColorMap = {
    gold: "bg-[#cb9b51]/10",
    emerald: "bg-[#50C878]/10",
    sapphire: "bg-[#0F52BA]/10",
    ruby: "bg-[#E0115F]/10",
    primary: "bg-primary/10"
  };

  const borderColorMap = {
    gold: "border-[#cb9b51]/20",
    emerald: "border-[#50C878]/20",
    sapphire: "border-[#0F52BA]/20",
    ruby: "border-[#E0115F]/20",
    primary: "border-primary/20"
  };

  return (
    <PremiumEffects
      effect="glass"
      hover="lift"
      className={`p-8 rounded-xl border ${borderColorMap[color]}`}
    >
      <div className="flex flex-col h-full">
        <div className={`p-4 rounded-full ${bgColorMap[color]} w-16 h-16 flex items-center justify-center mb-6`}>
          <div className={colorMap[color]}>{icon}</div>
        </div>
        
        <h3 className={`text-xl font-semibold mb-4 ${colorMap[color]}`}>{title}</h3>
        
        <p className="text-neutral-300 leading-relaxed flex-grow">{description}</p>
      </div>
    </PremiumEffects>
  );
};

const AlternatingFeature = ({ icon, title, description, color = "primary", index }: FeatureProps & { index: number }) => {
  const isEven = index % 2 === 0;
  
  const colorMap = {
    gold: "text-[#cb9b51]",
    emerald: "text-[#50C878]",
    sapphire: "text-[#0F52BA]",
    ruby: "text-[#E0115F]",
    primary: "text-primary"
  };

  const bgColorMap = {
    gold: "bg-[#cb9b51]/10",
    emerald: "bg-[#50C878]/10",
    sapphire: "bg-[#0F52BA]/10",
    ruby: "bg-[#E0115F]/10",
    primary: "bg-primary/10"
  };

  return (
    <motion.div 
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 py-16`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Feature Icon/Visual */}
      <div className="md:w-1/3 flex justify-center">
        <PremiumEffects
          effect="glass"
          hover="glow"
          color={color}
          className={`p-8 rounded-full ${bgColorMap[color]} w-40 h-40 flex items-center justify-center`}
        >
          <div className={`${colorMap[color]} w-20 h-20`}>{icon}</div>
        </PremiumEffects>
      </div>
      
      {/* Feature Content */}
      <div className="md:w-2/3">
        <LuxuryText
          as="h3"
          className="text-2xl md:text-3xl font-bold mb-6"
          gradient={color === "primary" ? "primary" : color}
          font="luxury-sans"
        >
          {title}
        </LuxuryText>
        
        <p className="text-lg text-neutral-300 leading-relaxed font-luxury-serif">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function PremiumFeatures({
  title = "Premium Features",
  subtitle = "Discover the exceptional features that set our solutions apart",
  features,
  ctaText = "Get Started",
  ctaLink = "/contact",
  onCtaClick,
  layout = "grid"
}: PremiumFeaturesProps) {
  // Default features if none provided
  const defaultFeatures: FeatureProps[] = [
    {
      icon: <Zap size={28} />,
      title: "AI-Powered Lead Generation",
      description: "Leverage cutting-edge artificial intelligence to identify and qualify high-value prospects with precision and efficiency.",
      color: "primary"
    },
    {
      icon: <BarChart size={28} />,
      title: "Smart Funnel Optimization",
      description: "Data-driven conversion rate improvements that continuously refine your sales process for maximum performance.",
      color: "emerald"
    },
    {
      icon: <Users size={28} />,
      title: "Personalized Engagement",
      description: "Create meaningful connections with prospects through sophisticated personalization that scales with your business.",
      color: "sapphire"
    },
    {
      icon: <Clock size={28} />,
      title: "24/7 Automated Follow-Up",
      description: "Never miss an opportunity with intelligent, always-on follow-up sequences that nurture leads through every stage.",
      color: "ruby"
    },
    {
      icon: <Star size={28} />,
      title: "Premium Analytics Dashboard",
      description: "Gain actionable insights with comprehensive analytics that track every aspect of your growth strategy's performance.",
      color: "gold"
    },
    {
      icon: <Shield size={28} />,
      title: "Enterprise-Grade Security",
      description: "Rest easy knowing your data and systems are protected by industry-leading security protocols and best practices.",
      color: "primary"
    }
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-neutral-900/90">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        {/* Animated Gradient Orb */}
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
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

        {/* Features Display */}
        {layout === "grid" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        )}

        {layout === "alternating" && (
          <div className="mb-16">
            {displayFeatures.map((feature, index) => (
              <React.Fragment key={index}>
                <AlternatingFeature {...feature} index={index} />
                {index < displayFeatures.length - 1 && (
                  <LuxuryDivider 
                    variant="line" 
                    color="primary" 
                    width="full" 
                    className="my-0 opacity-20" 
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {layout === "centered" && (
          <div className="max-w-4xl mx-auto mb-16 space-y-16">
            {displayFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
              >
                <div className="flex justify-center mb-8">
                  <PremiumEffects
                    effect="glass"
                    hover="glow"
                    color={feature.color}
                    className={`p-6 rounded-full bg-${feature.color === 'primary' ? 'primary' : `[#${feature.color === 'gold' ? 'cb9b51' : feature.color === 'emerald' ? '50C878' : feature.color === 'sapphire' ? '0F52BA' : 'E0115F'}]`}/10 w-24 h-24 flex items-center justify-center`}
                  >
                    <div className={`text-${feature.color === 'primary' ? 'primary' : `[#${feature.color === 'gold' ? 'cb9b51' : feature.color === 'emerald' ? '50C878' : feature.color === 'sapphire' ? '0F52BA' : 'E0115F'}]`} w-12 h-12`}>
                      {feature.icon}
                    </div>
                  </PremiumEffects>
                </div>
                
                <LuxuryText
                  as="h3"
                  className="text-2xl md:text-3xl font-bold mb-4"
                  gradient={feature.color === "primary" ? "primary" : feature.color}
                  font="luxury-sans"
                >
                  {feature.title}
                </LuxuryText>
                
                <p className="text-lg text-neutral-300 leading-relaxed font-luxury-serif max-w-2xl mx-auto">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <PremiumButton
              variant="premium"
              size="lg"
              className="px-8 py-6 text-lg"
              glow
              icon={<Rocket className="w-5 h-5" />}
              onClick={onCtaClick}
            >
              {ctaText}
            </PremiumButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}