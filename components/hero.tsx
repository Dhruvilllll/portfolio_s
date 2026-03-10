"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Radio } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-midnight pt-40 md:pt-32 pb-20">
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: `linear-gradient(to right, #9333ea40 1px, transparent 1px), linear-gradient(to bottom, #9333ea40 1px, transparent 1px)`,
             backgroundSize: '60px 60px' 
           }}>
      </div>
      
      {/* Center Glow Shader */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-transparent z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 w-full max-w-7xl px-4 md:px-6 flex flex-col items-center text-center"
      >
        {/* "Hi, I'm" - Scaled Responsively */}
        <h2 className="text-[8vw] md:text-[4vw] font-black tracking-tighter leading-none uppercase text-white/90 mb-4">
          Hi, I'm
        </h2>

        {/* Primary Name Typography - Using Clamped Sizes for Responsiveness */}
        <h1 className="text-[clamp(3.5rem,15vw,10rem)] font-black tracking-tighter leading-[0.85] mb-8 md:mb-10 uppercase">
          <span className="animate-glitch cursor-default" data-text="Dhruvil">Dhruvil</span> <br/>
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-white to-electric-purple bg-[length:200%_auto] animate-pulse animate-glitch cursor-default"
            data-text="Malvania"
          >
            Malvania
          </span>
        </h1>

        <div className="max-w-3xl">
          <h2 className="text-xl md:text-3xl font-bold text-white/70 mb-8 md:mb-10 tracking-tight px-4">
            Data Scientist & <span className="text-neon-purple">Machine Learning Engineer</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto px-4">
            Engineering intelligent systems that transform raw data into competitive advantages. Specialized in LLM architectures and neural network optimization.
          </p>
        </div>

        {/* Responsive Button Container */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center w-full max-w-xs sm:max-w-none sm:w-auto px-6 sm:px-0">
          <button 
            onClick={() => handleScroll("#projects")}
            className="w-full sm:w-auto bg-white text-midnight px-10 md:px-12 py-4 md:py-5 rounded-[1.5rem] font-black text-lg md:text-xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 group"
          >
            View Projects <Zap size={22} className="group-hover:text-electric-purple transition-colors"/>
          </button>
          
          <button 
            onClick={() => handleScroll("#contact")}
            className="w-full sm:w-auto border border-white/10 bg-white/5 text-white px-10 md:px-12 py-4 md:py-5 rounded-[1.5rem] font-bold text-lg md:text-xl hover:bg-white hover:text-midnight transition-all flex items-center justify-center gap-3 group"
          >
            Connect Me <Radio size={22} className="group-hover:animate-ping"/>
          </button>
        </div>
      </motion.div>

      {/* Telemetry - Hidden on Mobile for better performance */}
      <div className="absolute bottom-10 left-10 hidden xl:flex flex-col gap-2 font-mono text-[10px] uppercase tracking-widest text-white/20">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse"/> 
          System_Node: Active
        </div>
      </div>
    </section>
  );
}