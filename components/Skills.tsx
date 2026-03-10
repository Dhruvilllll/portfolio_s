"use client";
import { motion } from "framer-motion";

const skills = [
  "Python", "Machine Learning", "LLM Training", 
  "NLP Engineering", "Data Science", "MySQL", 
  "Vector Databases", "Git", "GitHub", "AI Tools"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white text-midnight overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-black text-midnight mb-12 md:mb-20 text-center tracking-tighter uppercase leading-[0.9]">
          Technologies I <span className="text-electric-purple">Work With</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#f8f9fa",
                borderColor: "#9333ea"
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 md:px-10 py-4 md:py-6 bg-white border-2 border-midnight/5 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm transition-all whitespace-nowrap"
            >
              <span className="text-midnight font-black text-lg md:text-xl tracking-tight">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}