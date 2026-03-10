"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const expertise = [
  "Machine Learning", "LLM Training", "NLP Engineering", 
  "Data Science", "AI Automation", "Model Optimization", 
  "Data Analysis", "Prompt Engineering"
];

export default function Expertise() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="expertise" className="py-20 md:py-32 bg-white text-midnight overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Responsive Heading with Clamp */}
        <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-black text-midnight mb-12 md:mb-20 tracking-tighter uppercase leading-[0.9]">
          My <span className="text-electric-purple">Expertise</span>
        </h2>
        
        {/* Optimized Flex Container for Tags */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 max-w-6xl mx-auto">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              drag
              // Constraints set to 0 to allow free movement while snapping back
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.15} // Prevents accidental page-scroll hijacking on mobile
              initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? 2 : -2 }} 
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                backgroundColor: "#12002b", 
                color: "#fff",
                zIndex: 10
              }}
              viewport={{ once: true }}
              className="px-6 md:px-10 py-3 md:py-6 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border-2 md:border-4 border-midnight/5 text-midnight font-black text-lg md:text-2xl cursor-grab active:cursor-grabbing shadow-md md:shadow-xl transition-colors whitespace-nowrap"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}