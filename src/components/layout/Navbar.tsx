
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import CtaButton from "../ui/cta-button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-bold text-agency-blue"
            >
              Leads<span className="text-agency-indigo">Obtainer</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link
              to="/"
              className="text-gray-700 hover:text-agency-blue transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-agency-blue transition-colors"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-agency-blue transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-agency-blue transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-agency-blue transition-colors"
            >
              Contact
            </Link>
            <Link to="/contact">
              <CtaButton size="sm">Get Started</CtaButton>
            </Link>
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-agency-blue"
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-agency-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-agency-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-agency-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-agency-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-agency-blue transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <CtaButton size="sm" className="w-full">
                  Get Started
                </CtaButton>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
