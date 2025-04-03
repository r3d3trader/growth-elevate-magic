
import React, { useEffect } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
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
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <ScrollArea className={`min-h-screen bg-background text-foreground ${className}`}>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
      <ScrollToTop />
    </ScrollArea>
  );
};

export default PageLayout;
