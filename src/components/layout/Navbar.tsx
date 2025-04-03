import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import CtaButton from "@/components/ui/cta-button";

const Navbar = () => {
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
        scrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl font-bold neon-glow">
              <span className="text-primary">AI</span> Sales System
            </span>
          </motion.div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-primary transition-colors focus:outline-none"
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
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Services
          </Link>
          <Link
            to="/pricing"
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Contact
          </Link>
          <Link to="/contact">
            <CtaButton size="sm">Get Started</CtaButton>
          </Link>
        </motion.nav>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg md:hidden neon-border"
          >
            <div className="flex flex-col space-y-4 p-6">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <CtaButton className="w-full">Get Started</CtaButton>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;