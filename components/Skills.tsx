"use client";
import { motion } from "framer-motion";

const skills = [
  "Python", "Machine Learning", "LLM Training", 
  "NLP Engineering", "Data Science", "MySQL", 
  "Vector Databases", "Git", "GitHub", "AI Tools"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white text-midnight overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black text-midnight mb-16 text-center tracking-tighter">
          Technologies I <span className="text-electric-purple">Work With</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
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
              transition={{ delay: index * 0.05 }}
              className="px-10 py-6 bg-white border-2 border-midnight/5 rounded-[2.5rem] shadow-sm transition-all"
            >
              <span className="text-midnight font-black text-xl tracking-tight">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}