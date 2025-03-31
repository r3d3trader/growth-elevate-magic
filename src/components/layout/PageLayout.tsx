
import React from "react";
import Navbar from "./Navbar";
import Footer from "../sections/Footer";
import ScrollToTop from "../ui/scroll-to-top";
import { useToast } from "@/hooks/use-toast";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request submitted!",
      description: "We'll be in touch with you shortly.",
      duration: 5000,
    });
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer onSubmit={handleFormSubmit} />
      <ScrollToTop />
    </div>
  );
};

export default PageLayout;
