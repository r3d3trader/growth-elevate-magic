import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EnhancedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  
  useEffect(() => {
    // Add event listener for mouse movement
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };
    
    // Remove event listeners
    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
    
    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    // Mouse enter handler
    const onMouseEnter = () => {
      setHidden(false);
    };
    
    // Mouse leave handler
    const onMouseLeave = () => {
      setHidden(true);
    };
    
    // Mouse down handler
    const onMouseDown = () => {
      setClicked(true);
    };
    
    // Mouse up handler
    const onMouseUp = () => {
      setClicked(false);
    };
    
    // Add event listeners for link hover
    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role=button], input, textarea, select").forEach(el => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };
    
    // Add all event listeners
    addEventListeners();
    handleLinkHoverEvents();
    
    // Remove event listeners on cleanup
    return () => {
      removeEventListeners();
    };
  }, []);
  
  // Cursor variants
  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      opacity: hidden ? 0 : 1
    },
    clicked: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 0.8,
      opacity: hidden ? 0 : 1
    },
    hovered: {
      x: position.x - 24,
      y: position.y - 24,
      scale: 1.5,
      opacity: hidden ? 0 : 1
    }
  };
  
  // Dot variants
  const dotVariants = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
      opacity: hidden ? 0 : 1
    },
    clicked: {
      x: position.x - 4,
      y: position.y - 4,
      scale: 0.5,
      opacity: hidden ? 0 : 1
    },
    hovered: {
      x: position.x - 4,
      y: position.y - 4,
      opacity: 0,
    }
  };
  
  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="cursor-ring fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#c6ff00] pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={clicked ? "clicked" : linkHovered ? "hovered" : "default"}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.2
        }}
      />
      
      {/* Cursor dot */}
      <motion.div
        className="cursor-dot fixed top-0 left-0 w-2 h-2 rounded-full bg-[#c6ff00] pointer-events-none z-[9999] mix-blend-difference"
        variants={dotVariants}
        animate={clicked ? "clicked" : linkHovered ? "hovered" : "default"}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.15
        }}
      />
    </>
  );
};

export default EnhancedCursor;
