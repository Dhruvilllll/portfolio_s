"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Home, Briefcase, Cpu, Mail } from "lucide-react";

const navItems = [
  { name: "Home", icon: <Home size={18}/>, href: "#hero" },
  { name: "Projects", icon: <Briefcase size={18}/>, href: "#projects" },
  { name: "Skills", icon: <Cpu size={18}/>, href: "#skills" },
  { name: "Contact", icon: <Mail size={18}/>, href: "#contact" },
];

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Top Horizontal Strip - RESTORED */}
      <header className="fixed top-0 left-0 w-full z-[90] px-8 py-6 flex justify-between items-center bg-midnight/50 backdrop-blur-md border-bottom border-white/5">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-black tracking-tighter text-white"
        >
          Dhruvil<span className="text-neon-purple">.</span>
        </motion.div>
        
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-6"
        >
          <a href="https://github.com/Dhruvilllll" target="_blank" className="text-white/40 hover:text-white transition-colors"><Github size={22}/></a>
          <a href="https://linkedin.com/in/dhruvil-malvania" target="_blank" className="text-white/40 hover:text-white transition-colors"><Linkedin size={22}/></a>
          <button className="bg-white text-midnight font-black px-6 py-2.5 rounded-[1.25rem] text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2">
            <FileText size={16}/> Resume
          </button>
        </motion.div>
      </header>

      {/* Bottom Floating Dock - Vertically Centered Icons */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 px-4 py-3 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="relative flex items-center justify-center w-12 h-12 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              
              {/* Tooltip */}
              <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-all bg-white text-black text-[10px] px-3 py-1.5 rounded-lg font-black uppercase tracking-widest whitespace-nowrap shadow-2xl">
                {item.name}
              </span>
            </a>
          ))}
        </motion.div>
      </nav>
    </>
  );
}