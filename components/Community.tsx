"use client";
import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy } from "lucide-react";

export default function Community() {
  return (
    <section id="community" className="py-24 bg-white text-midnight">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter">
          Community & <span className="text-electric-purple">Learning</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[280px]">
          <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-2 md:row-span-2 bg-gray-50 border-2 border-midnight/5 rounded-[2.5rem] p-12 flex flex-col justify-end relative overflow-hidden group shadow-sm">
            <GraduationCap size={120} className="absolute -top-6 -right-6 text-midnight/5 group-hover:text-electric-purple/10 transition-colors" />
            <h3 className="text-4xl font-black mb-4 tracking-tighter">Continuous Growth</h3>
            <p className="text-gray-500 text-xl font-medium max-w-md leading-relaxed">Deep diving into LLM architectures and advanced neural network optimization daily.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 0.99 }} className="bg-electric-purple text-white rounded-[2.5rem] p-10 flex flex-col justify-between shadow-lg shadow-electric-purple/20">
            <Trophy size={40} />
            <div>
              <h4 className="text-2xl font-black tracking-tighter">Hackathons</h4>
              <p className="text-white/80 font-bold">Active participant in AI & ML challenges globally.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 0.99 }} className="bg-midnight text-white rounded-[2.5rem] p-10 flex flex-col justify-between shadow-xl">
            <Award size={40} className="text-highlight-yellow" />
            <div>
              <h4 className="text-2xl font-black tracking-tighter">Certifications</h4>
              <p className="text-white/60 font-bold">Professional ML Engineering & Data Science.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}