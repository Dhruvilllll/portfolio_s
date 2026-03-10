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
    <section id="github" className="py-20 md:py-32 bg-midnight text-white border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-black mb-12 md:mb-20 tracking-tighter text-center uppercase leading-[0.9]">
          My <span className="text-neon-purple">GitHub Activity</span>
        </h2>

        {/* Stats Grid - 2x2 on mobile, 4x1 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 md:p-10 flex flex-col items-center text-center shadow-xl border border-white/5"
            >
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl md:rounded-[1.5rem] shadow-inner">
                {stat.icon}
              </div>
              <span className="text-3xl md:text-5xl font-black mb-2 tracking-tighter">{stat.value}</span>
              <span className="text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Neural Stream - Responsive Visualization */}
        <div className="w-full glass-card p-8 md:p-16 flex flex-col items-center justify-center overflow-hidden border border-white/5">
          <div className="flex flex-col items-center opacity-30 w-full max-w-4xl">
             <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className={`w-4 h-4 md:w-6 md:h-6 rounded-sm md:rounded-md ${i % 3 === 0 ? 'bg-neon-purple' : 'bg-white/10'}`}></div>
                ))}
             </div>
             <p className="mt-8 font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] font-black text-neon-purple text-center">
                Neural Stream Synchronized
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}