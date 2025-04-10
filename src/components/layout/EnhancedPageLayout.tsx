import React from "react";
import { motion } from "framer-motion";
import EnhancedNavbar from "@/components/layout/EnhancedNavbar";
import PremiumFooter from "@/components/sections/PremiumFooter";
import EnhancedCursor from "@/components/ui/enhanced-cursor";

interface EnhancedPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const EnhancedPageLayout = ({ children, className = "" }: EnhancedPageLayoutProps) => {
  return (
    <>
      {/* Custom cursor effect */}
      <EnhancedCursor />
      
      {/* Main content */}
      <motion.div 
        className={`min-h-screen flex flex-col bg-black ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <EnhancedNavbar />
        <main className="flex-grow">
          {children}
        </main>
        <PremiumFooter />
      </motion.div>
    </>
  );
};

export default EnhancedPageLayout;
