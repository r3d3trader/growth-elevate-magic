import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { 
  ChevronDown, 
  ChevronUp, 
  X, 
  Menu as MenuIcon,
  ExternalLink
} from 'lucide-react';
import EnhancedButton from '../ui/enhanced-button';

interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
  children?: MenuItem[];
}

interface MobileMenuProps {
  items: MenuItem[];
  ctaButton?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  logoSrc?: string;
  className?: string;
}

/**
 * MobileMenu - A fully responsive mobile-first navigation menu with
 * smooth animations, dropdown support, and touch-friendly tap targets
 */
const MobileMenu: React.FC<MobileMenuProps> = ({
  items,
  ctaButton,
  logoSrc,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  
  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    
    // Create a MutationObserver to observe changes to the URL
    if (typeof window !== 'undefined') {
      let lastUrl = window.location.href;
      const observer = new MutationObserver(() => {
        if (lastUrl !== window.location.href) {
          lastUrl = window.location.href;
          handleRouteChange();
        }
      });
      
      observer.observe(document, { subtree: true, childList: true });
      
      return () => {
        observer.disconnect();
      };
    }
    
    return undefined;
  }, []);
  
  // Enhanced scroll handling when menu is open with position restoration
  useEffect(() => {
    // Store initial body styles to restore them later
    const originalStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      scrollBehavior: document.documentElement.style.scrollBehavior
    };
    
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;
      // Apply fixed positioning to prevent background scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      // Disable smooth scrolling while menu is open to prevent jank
      document.documentElement.style.scrollBehavior = 'auto';
      
      // Add a class to indicate menu is open (useful for other components)
      document.documentElement.classList.add('mobile-menu-open');
    } else {
      // Restore the scroll position when closing
      const scrollY = document.body.style.top;
      
      // Reset all body styles
      document.body.style.position = originalStyles.position;
      document.body.style.top = originalStyles.top;
      document.body.style.left = originalStyles.left;
      document.body.style.width = originalStyles.width;
      document.body.style.overflow = originalStyles.overflow;
      document.documentElement.style.scrollBehavior = originalStyles.scrollBehavior;
      
      // Remove the indicator class
      document.documentElement.classList.remove('mobile-menu-open');
      
      // Restore scroll position with a slight delay to ensure transitions complete
      if (scrollY) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
          // Restore smooth scrolling after position is restored
          document.documentElement.style.scrollBehavior = 'smooth';
        }, 10);
      }
    }
    
    // Cleanup function to ensure body styles are always restored
    return () => {
      document.body.style.position = originalStyles.position;
      document.body.style.top = originalStyles.top;
      document.body.style.left = originalStyles.left;
      document.body.style.width = originalStyles.width;
      document.body.style.overflow = originalStyles.overflow;
      document.documentElement.style.scrollBehavior = originalStyles.scrollBehavior;
      document.documentElement.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);
  
  // Toggle dropdown visibility
  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };
  
  return (
    <>
      {/* Mobile Menu Trigger Button - Always visible and clickable */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2.5 text-white hover:text-[#c6ff00] transition-all duration-300 ease-out rounded-md focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/30 touch-manipulation z-50 fixed top-6 right-4 hover:scale-105 active:scale-95 active:bg-white/5"
        aria-label="Open menu"
        style={{ 
          WebkitTapHighlightColor: 'transparent',
          filter: 'drop-shadow(0 0 8px rgba(198, 255, 0, 0.2))',
          backdropFilter: 'blur(8px)',
          background: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 12px rgba(198, 255, 0, 0.3))' }}
        whileTap={{ scale: 0.95 }}
      >
        <MenuIcon className="w-6 h-6" />
      </motion.button>
      
      {/* Mobile Menu Overlay - Fixed to viewport regardless of scroll position */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[999] lg:hidden"
            onClick={() => setIsOpen(false)}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0,
              willChange: 'opacity'
            }}
          >
            {/* Menu Container */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring', 
                damping: 28, 
                stiffness: 300,
                opacity: { duration: 0.2 }
              }}
              className={cn(
                "fixed top-0 right-0 h-full w-full sm:w-80 max-w-full",
                "bg-black/95 backdrop-blur-xl border-l border-white/10",
                "flex flex-col overflow-y-auto",
                "shadow-[0_0_25px_rgba(0,0,0,0.5),_inset_0_1px_0_rgba(255,255,255,0.1)]",
                "z-[1000]",
                className
              )}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                willChange: 'transform, opacity',
                backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(198, 255, 0, 0.03) 0%, transparent 25%)'
              }}
            >
              {/* Background pattern and effects */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10 bg-grid-dark" style={{ backgroundSize: '20px 20px' }}></div>
                
                {/* Subtle glow effects */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#c6ff00]/5 filter blur-[80px]"></div>
                <div className="absolute bottom-20 -right-20 w-60 h-60 rounded-full bg-[#c6ff00]/3 filter blur-[100px]"></div>
                
                {/* Dynamic noise texture for premium feel */}
                <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
                  style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\' /%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                    backgroundSize: '200px 200px'
                  }}
                ></div>
              </div>
              
              {/* Menu Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10 z-10 bg-black/50 backdrop-blur-sm sticky top-0 shadow-md shadow-black/20">
                {/* Logo */}
                {logoSrc ? (
                  <img src={logoSrc} alt="Logo" className="h-8" />
                ) : (
                  <div className="text-lg font-bold text-white">Menu</div>
                )}
                
                {/* Close Button */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="p-2.5 rounded-full text-white hover:text-[#c6ff00] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c6ff00]/30 touch-manipulation hover:scale-105 active:scale-95 bg-black/40 border border-white/10 hover:border-[#c6ff00]/30"
                  aria-label="Close menu"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  whileHover={{ boxShadow: '0 0 10px rgba(198, 255, 0, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto relative z-10">
                <motion.ul 
                  className="py-5 px-2 space-y-3"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { 
                      transition: { 
                        staggerChildren: 0.05,
                        delayChildren: 0.15
                      } 
                    },
                    hidden: {}
                  }}
                >
                  {items.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="mb-2"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                      }}
                    >
                      {item.children && item.children.length > 0 ? (
                        // Dropdown menu item
                        <div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDropdown(item.label);
                            }}
                            className="flex items-center justify-between w-full px-5 py-3.5 rounded-lg text-white hover:bg-white/5 focus:bg-white/5 active:bg-white/10 transition-colors duration-200 touch-manipulation"
                            aria-expanded={openDropdowns[item.label]}
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                          >
                            <span className="text-base font-medium">{item.label}</span>
                            {openDropdowns[item.label] ? (
                              <ChevronUp className="w-4 h-4 text-[#c6ff00]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-neutral-400" />
                            )}
                          </button>
                          
                          <AnimatePresence>
                            {openDropdowns[item.label] && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mt-1 ml-4 space-y-1 overflow-hidden bg-white/[0.03] rounded-lg mx-3 mb-2"
                              >
                                {item.children.map((child, childIndex) => (
                                  <motion.li 
                                    key={childIndex}
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: childIndex * 0.05, duration: 0.3 }}>
                                    {child.external ? (
                                      <a
                                        href={child.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-5 py-3.5 text-neutral-300 hover:text-white hover:bg-white/5 transition-colors duration-200 touch-manipulation"
                                        onClick={(e) => e.stopPropagation()}
                                        style={{ WebkitTapHighlightColor: 'transparent' }}
                                      >
                                        <span className="text-sm">{child.label}</span>
                                        <ExternalLink className="w-3.5 h-3.5 ml-1.5 inline-block text-[#c6ff00]/70" />
                                      </a>
                                    ) : (
                                      <Link
                                        to={child.href}
                                        className="block px-5 py-3.5 text-neutral-300 hover:text-white hover:bg-white/5 transition-colors duration-200 touch-manipulation"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setIsOpen(false);
                                        }}
                                        style={{ WebkitTapHighlightColor: 'transparent' }}
                                      >
                                        <span className="text-sm">{child.label}</span>
                                      </Link>
                                    )}
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        // Regular menu item
                        <>
                          {item.external ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-5 py-3.5 rounded-lg text-white hover:bg-white/5 transition-colors duration-200 touch-manipulation"
                              onClick={(e) => e.stopPropagation()}
                              style={{ WebkitTapHighlightColor: 'transparent' }}
                            >
                              <span className="text-base font-medium">{item.label}</span>
                              <ExternalLink className="w-4 h-4 ml-1.5 text-[#c6ff00]/70" />
                            </a>
                          ) : (
                            <Link
                              to={item.href}
                              className="block px-5 py-3.5 rounded-lg text-white hover:bg-white/5 transition-colors duration-200 touch-manipulation"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(false);
                              }}
                              style={{ WebkitTapHighlightColor: 'transparent' }}
                            >
                              <span className="text-base font-medium">{item.label}</span>
                            </Link>
                          )}
                        </>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
              
              {/* CTA Button */}
              {ctaButton && (
                <div className="p-5 border-t border-white/10 bg-black/50 backdrop-blur-sm sticky bottom-0 shadow-[0_-4px_15px_rgba(0,0,0,0.3)] z-10">
                  <EnhancedButton
                    href={ctaButton.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                      ctaButton.onClick?.();
                    }}
                    variant="premium"
                    className="w-full"
                    glow
                    size="lg"
                  >
                    {ctaButton.label}
                  </EnhancedButton>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
