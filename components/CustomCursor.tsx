"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest(".project-card"));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        translateX: mouseX,
        translateY: mouseY,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      className="hidden md:block"
    >
      {/* Outer Reticle */}
      <motion.div
        animate={{
          width: isHovering ? 60 : 20,
          height: isHovering ? 60 : 20,
          borderColor: isHovering ? "#a06cd5" : "rgba(255,255,255,0.3)",
          borderWidth: isHovering ? 2 : 1,
          borderRadius: isHovering ? "4px" : "50%",
          rotate: isHovering ? 90 : 0
        }}
        className="flex items-center justify-center border transition-colors duration-300"
      >
        {/* Inner Scanning Dot */}
        <motion.div 
          animate={{ scale: isHovering ? 1.5 : 1, backgroundColor: isHovering ? "#4ade80" : "#ffffff" }}
          className="w-1 h-1 rounded-full" 
        />
        
        {/* Reticle Corners (Only visible on hover) */}
        {isHovering && (
          <div className="absolute inset-0 flex flex-col justify-between p-1">
             <div className="flex justify-between"><div className="w-1 h-1 border-t border-l border-cyber-green"/><div className="w-1 h-1 border-t border-r border-cyber-green"/></div>
             <div className="flex justify-between"><div className="w-1 h-1 border-b border-l border-cyber-green"/><div className="w-1 h-1 border-b border-r border-cyber-green"/></div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}