import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumEffects, LuxuryText } from "@/components/ui/premium-effects";
import PremiumButton from "@/components/ui/premium-button";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  dropdown?: {
    label: string;
    to: string;
  }[];
}

const NavLink = ({ to, children, dropdown }: NavLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return dropdown ? (
    <div className="relative group">
      <button
        className="nav-link flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-1 w-48 z-50"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <PremiumEffects
              effect="glass"
              className="py-2 rounded-lg overflow-hidden"
            >
              {dropdown.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors text-neutral-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </PremiumEffects>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ) : (
    <Link
      to={to}
      className="nav-link"
    >
      {children}
    </Link>
  );
};

const PremiumNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-background/80 backdrop-blur-md border-b border-[#cb9b51]/10" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LuxuryText
              as="span"
              className="text-xl font-bold"
              gradient="gold"
              glow
            >
              <span className="font-luxury-display">Leads Obtainer</span>
            </LuxuryText>
          </motion.div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-[#cb9b51] transition-colors focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink 
            to="/services"
            dropdown={[
              { label: "AI Sales System", to: "/services#ai-sales" },
              { label: "Lead Generation", to: "/services#lead-gen" },
              { label: "Automation", to: "/services#automation" },
              { label: "Analytics", to: "/services#analytics" }
            ]}
          >
            Services
          </NavLink>
          <NavLink to="/pricing">
            Pricing
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
          <Link to="/contact">
            <PremiumButton variant="premium" size="sm" glow>Get Started</PremiumButton>
          </Link>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-[#cb9b51]/10 shadow-lg md:hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                <Link
                  to="/"
                  className="text-foreground hover:text-[#cb9b51] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="text-foreground hover:text-[#cb9b51] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/pricing"
                  className="text-foreground hover:text-[#cb9b51] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/about"
                  className="text-foreground hover:text-[#cb9b51] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-foreground hover:text-[#cb9b51] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <PremiumButton variant="premium" size="sm" className="w-full" glow>
                    Get Started
                  </PremiumButton>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default PremiumNavbar;