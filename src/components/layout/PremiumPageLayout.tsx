import React from "react";
import PremiumNavbar from "./PremiumNavbar";
import PremiumFooter from "../sections/PremiumFooter";
import { motion } from "framer-motion";

interface PremiumPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PremiumPageLayout = ({ children, className = "" }: PremiumPageLayoutProps) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <PremiumNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <PremiumFooter />
    </div>
  );
};

export default PremiumPageLayout;