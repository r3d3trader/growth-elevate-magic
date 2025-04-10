import { motion } from "framer-motion";
import { ChevronDown, Star, Zap } from "lucide-react";
import { UI } from "@/config/ui";
import CtaButton from "@/components/ui/cta-button";

interface HeroProps {
  onSubmit: (e: React.FormEvent) => void;
}

export default function Hero({ onSubmit }: HeroProps) {
  return (
    <section className={`relative overflow-hidden min-h-screen flex items-center ${UI.gradients.dark}`}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6ff0008_1px,transparent_1px),linear-gradient(to_bottom,#e6ff0008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      {/* Content Container */}
      <div className={`container relative z-10 ${UI.spacing.section} ${UI.spacing.inner}`}>
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={UI.animations.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Headline */}
          <motion.h1 
            className={`${UI.text.sizes.display} font-medium tracking-tight leading-tight ${UI.text.balance} mb-8`}
            variants={UI.animations.slideUp}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
              Transform Your Business
            </span> with Growth Elevate Magic
          </motion.h1>

          {/* Subhead */}
          <motion.p 
            className={`${UI.text.sizes.subhead} text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed`}
            variants={{
              ...UI.animations.slideUp,
              transition: { ...UI.animations.slideUp.transition, delay: 0.2 }
            }}
          >
            Premium digital solutions that deliver measurable results and accelerate your growth trajectory.
          </motion.p>

          {/* CTA */}
          <motion.div 
            className="flex justify-center gap-4"
            variants={{
              ...UI.animations.slideUp,
              transition: { ...UI.animations.slideUp.transition, delay: 0.4 }
            }}
          >
            <CtaButton 
              size="lg"
              className="px-8 py-6 text-lg"
              onClick={onSubmit}
            >
              <Zap className="w-5 h-5 mr-2" />
              Schedule Strategy Call
            </CtaButton>
            <CtaButton 
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/5"
            >
              <Star className="w-5 h-5 mr-2" />
              View Case Studies
            </CtaButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-4"
            variants={{
              ...UI.animations.slideUp,
              transition: { ...UI.animations.slideUp.transition, delay: 0.6 }
            }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              Trusted by 1,000+ businesses
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-7 w-7 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}