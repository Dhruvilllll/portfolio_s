"use client";
import { motion } from "framer-motion";
import { GitBranch, Star, Code2, Zap } from "lucide-react";

const stats = [
  { label: "Total Repos", value: "24", icon: <GitBranch className="text-neon-purple"/> },
  { label: "Commit Streak", value: "12 Days", icon: <Zap className="text-bright-orange"/> },
  { label: "Top Language", value: "Python", icon: <Code2 className="text-cyber-green"/> },
  { label: "Stars Received", value: "150+", icon: <Star className="text-highlight-yellow"/> },
];

export default function GithubActivity() {
  return (
    <section id="github" className="py-24 bg-midnight text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter text-center">
          My <span className="text-neon-purple">GitHub Activity</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-10 flex flex-col items-center text-center shadow-xl"
            >
              <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-[1.5rem] shadow-inner">
                {stat.icon}
              </div>
              <span className="text-5xl font-black mb-2 tracking-tighter">{stat.value}</span>
              <span className="text-gray-400 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="w-full glass-card p-12 flex flex-col items-center justify-center overflow-hidden border border-white/5">
          <div className="flex flex-col items-center opacity-30">
             <div className="grid grid-cols-12 gap-3">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className={`w-5 h-5 rounded-md ${i % 3 === 0 ? 'bg-neon-purple' : 'bg-white/10'}`}></div>
                ))}
             </div>
             <p className="mt-8 font-mono text-sm uppercase tracking-[0.4em] font-black text-neon-purple">Neural Stream Synchronized</p>
          </div>
        </div>
      </div>
    </section>
  );
}