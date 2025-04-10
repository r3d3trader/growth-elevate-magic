import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import EnhancedButton from "@/components/ui/enhanced-button";
import MobileMenu from "@/components/navigation/MobileMenu";
import useResponsive from "@/hooks/use-responsive";

const EnhancedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile } = useResponsive();
  
  // Memoize scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);
  
  // Use effect with proper cleanup and dependency
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  
  // Memoize menu items to prevent unnecessary re-renders
  const menuItems = useMemo(() => [
    { name: "Home", path: "/" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Lead Generation", path: "/services#lead-generation" },
        { name: "Conversion Optimization", path: "/services#conversion" },
        { name: "Marketing Automation", path: "/services#automation" }
      ]
    },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" }
  ], []);
  
  // Memoize mobile menu items
  const mobileMenuItems = useMemo(() => menuItems.map(item => ({
    label: item.name,
    href: item.path,
    children: item.dropdown ? item.dropdown.map(dropdownItem => ({
      label: dropdownItem.name,
      href: dropdownItem.path
    })) : undefined
  })), [menuItems]);
  
  // Dropdown state management with useCallback
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  
  const handleDropdownToggle = useCallback((index: number) => {
    setActiveDropdown(prevDropdown => 
      prevDropdown === index ? null : index
    );
  }, []);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        className={`py-3 sm:py-4 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-md border-b border-[#c6ff00]/10 shadow-lg" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              className="text-xl sm:text-2xl font-bold text-white flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[#c6ff00]">Leads</span>
              <span className="mx-1">Obtainer</span>
            </motion.div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      className="text-white hover:text-[#c6ff00] transition-colors flex items-center"
                      onClick={() => handleDropdownToggle(index)}
                      aria-expanded={activeDropdown === index}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300" 
                        style={{ transform: activeDropdown === index ? 'rotate(180deg)' : 'rotate(0)' }} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-56 bg-black/90 backdrop-blur-md border border-[#c6ff00]/10 rounded-md shadow-lg overflow-hidden z-20"
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.path}
                              className="block px-4 py-3 text-sm text-white hover:bg-[#c6ff00]/10 hover:text-[#c6ff00] transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white hover:text-[#c6ff00] transition-colors relative"
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#c6ff00]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}
              </div>
            ))}
            
            <EnhancedButton
              variant="premium"
              size="sm"
              className="ml-4"
              href="/contact"
              glow
            >
              Get Started
            </EnhancedButton>
          </div>
          
          {/* Mobile Menu - New Implementation */}
          <MobileMenu 
            items={mobileMenuItems}
            ctaButton={{
              label: "Get Started",
              href: "/contact"
            }}
          />
        </div>
      </motion.nav>
    </header>
  );
};

export default EnhancedNavbar;
