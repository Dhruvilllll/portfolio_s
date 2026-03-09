"use client";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import { ExternalLink, Github, BrainCircuit } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-midnight">
      <div className="absolute inset-0 z-0 opacity-40" 
           style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #9333EA20 0%, transparent 50%)` }}></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 z-10">
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="w-full h-full scale-125">
           {/* <Spline scene="https://prod.spline.design/kZDDjX5mCey6yEpI/scene.splinecode" /> */}
          </div>

          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-0 glass-card p-6 flex items-center gap-3 shadow-[0_0_30px_rgba(160,108,213,0.2)]"
          >
            {/* Swapped rocket emoji for BrainCircuit icon as requested */}
            <div className="w-10 h-10 rounded-2xl bg-cyberGreen/20 flex items-center justify-center text-cyberGreen">
              <BrainCircuit size={24} />
            </div>
            <p className="text-white text-sm font-bold tracking-tight">Building AI powered systems</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-0 glass-card p-6 shadow-[0_0_30px_rgba(160,108,213,0.2)]"
          >
            <div className="flex flex-col gap-2">
              <div className="h-2 w-24 bg-white/20 rounded"></div>
              <div className="h-2 w-16 bg-white/20 rounded"></div>
              <div className="h-4 w-20 bg-neon-purple rounded-lg mt-2"></div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-8xl font-black tracking-tighter mb-4"
          >
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-white">
              Dhruvil Malvania
            </span>
          </motion.h1>
          <h2 className="text-2xl font-bold text-cyberGreen mb-6">Data Scientist & Machine Learning Engineer</h2>
          <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed font-medium">
            I'm passionate about building intelligent systems and transforming complex data into impactful solutions. I specialize in Machine Learning, LLM training, and NLP engineering.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-midnight px-10 py-4 rounded-[1.5rem] font-black text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all flex items-center gap-2">
              View Projects <ExternalLink size={20}/>
            </button>
            <button className="border border-white/20 text-white px-10 py-4 rounded-[1.5rem] font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-2">
              GitHub <Github size={20}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}