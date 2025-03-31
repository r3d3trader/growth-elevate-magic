
import React, { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Process from "@/components/sections/Process";
import SuccessStories from "@/components/sections/SuccessStories";
import FinalCTA from "@/components/sections/FinalCTA";
import PageLayout from "@/components/layout/PageLayout";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request submitted!",
      description: "We'll be in touch with you shortly.",
      duration: 5000,
    });
  };
  
  // Add scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll(".reveal-from-bottom, .reveal-from-left, .reveal-from-right");
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <PageLayout>
      <Hero onSubmit={handleFormSubmit} />
      <Problem />
      <Solution />
      <Process onSubmit={handleFormSubmit} />
      <SuccessStories />
      <FinalCTA onSubmit={handleFormSubmit} />
    </PageLayout>
  );
};

export default Index;
