import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ui/scroll-to-top";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  useEffect(() => {
    // Add dark class to html element to ensure dark mode
    document.documentElement.classList.add("dark");
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Add enhanced scroll reveal effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            // Add a small delay to children elements for a cascade effect
            const children = entry.target.querySelectorAll('.reveal-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('reveal-visible');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    
    const revealElements = document.querySelectorAll(".reveal-from-bottom, .reveal-from-left, .reveal-from-right");
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground ${className}`}>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-16" // Add padding to account for fixed navbar
      >
        {children}
      </motion.main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PageLayout;
