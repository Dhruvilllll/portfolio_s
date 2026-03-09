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
    <section id="expertise" className="py-24 bg-white text-midnight overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-midnight mb-16 tracking-tighter uppercase">
          My <span className="text-electric-purple">Expertise</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? 2 : -2 }} 
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 0, backgroundColor: "#12002b", color: "#fff" }}
              className="px-10 py-5 rounded-[2rem] bg-white border-4 border-midnight/5 text-midnight font-black text-xl cursor-grab active:cursor-grabbing shadow-lg transition-colors"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}