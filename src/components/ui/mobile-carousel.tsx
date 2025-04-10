import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useResponsive from '@/hooks/use-responsive';

interface MobileCarouselProps {
  children: React.ReactNode[];
  className?: string;
  slideClassName?: string;
  showControls?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number;
  infinite?: boolean;
  dragEnabled?: boolean;
  slideOffset?: number;
  gap?: number;
}

/**
 * MobileCarousel - A touch-friendly, swipeable carousel component
 * that works well on mobile devices and adapts to different screen sizes
 */
const MobileCarousel = ({
  children,
  className,
  slideClassName,
  showControls = true,
  showIndicators = true,
  autoPlay = false,
  interval = 5000,
  infinite = true,
  dragEnabled = true,
  slideOffset = 16,
  gap = 16,
}: MobileCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useResponsive();
  
  const itemCount = React.Children.count(children);
  const canGoNext = infinite || currentIndex < itemCount - 1;
  const canGoPrev = infinite || currentIndex > 0;
  
  // Handle auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay && itemCount > 1) {
      interval = setInterval(() => {
        if (!isSwiping) {
          handleNext();
        }
      }, interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, currentIndex, itemCount, isSwiping]);
  
  // Navigate to next slide
  const handleNext = () => {
    if (!canGoNext) return;
    
    const nextIndex = currentIndex === itemCount - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    
    controls.start({
      x: `calc(-${nextIndex * 100}% - ${nextIndex * gap}px)`,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    });
  };
  
  // Navigate to previous slide
  const handlePrevious = () => {
    if (!canGoPrev) return;
    
    const prevIndex = currentIndex === 0 ? itemCount - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    
    controls.start({
      x: `calc(-${prevIndex * 100}% - ${prevIndex * gap}px)`,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    });
  };
  
  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    
    controls.start({
      x: `calc(-${index * 100}% - ${index * gap}px)`,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    });
  };
  
  // Handle swipe/drag gesture
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsSwiping(false);
    
    // Calculate threshold for advancing slides (20% of slide width)
    const threshold = carouselRef.current ? carouselRef.current.offsetWidth * 0.2 : 100;
    
    if (info.offset.x > threshold && canGoPrev) {
      handlePrevious();
    } else if (info.offset.x < -threshold && canGoNext) {
      handleNext();
    } else {
      // Return to current slide if threshold not met
      controls.start({
        x: `calc(-${currentIndex * 100}% - ${currentIndex * gap}px)`,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
      });
    }
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Carousel Track */}
      <motion.div
        ref={carouselRef}
        className="flex"
        style={{ 
          gap: `${gap}px`,
          paddingLeft: `${slideOffset}px`,
          paddingRight: `${slideOffset}px`
        }}
        animate={controls}
        initial={{ x: 0 }}
        drag={dragEnabled && isMobile ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragStart={() => setIsSwiping(true)}
        onDragEnd={handleDragEnd}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className={cn(
              "flex-shrink-0 flex-grow-0",
              "w-full",
              slideClassName
            )}
            style={{ flexBasis: "100%" }}
          >
            {child}
          </div>
        ))}
      </motion.div>
      
      {/* Navigation Controls */}
      {showControls && itemCount > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={!canGoPrev}
            className={cn(
              "absolute top-1/2 left-2 transform -translate-y-1/2 z-10",
              "w-10 h-10 flex items-center justify-center rounded-full",
              "bg-black/40 backdrop-blur-sm border border-white/10",
              "text-white hover:text-[#c6ff00] transition-colors",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff00]/50",
              !canGoPrev && "opacity-40 cursor-not-allowed"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={cn(
              "absolute top-1/2 right-2 transform -translate-y-1/2 z-10",
              "w-10 h-10 flex items-center justify-center rounded-full",
              "bg-black/40 backdrop-blur-sm border border-white/10",
              "text-white hover:text-[#c6ff00] transition-colors",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff00]/50",
              !canGoNext && "opacity-40 cursor-not-allowed"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
      
      {/* Indicators */}
      {showIndicators && itemCount > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: itemCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff00]/50",
                index === currentIndex 
                  ? "bg-[#c6ff00] w-8" 
                  : "bg-neutral-600 hover:bg-neutral-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileCarousel;
