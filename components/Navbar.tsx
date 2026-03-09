"use client";
import { motion } from "framer-motion";
import { Home, Briefcase, Cpu, Mail } from "lucide-react";

const navItems = [
  { name: "Home", icon: <Home size={16}/>, href: "#hero" },
  { name: "Projects", icon: <Briefcase size={16}/>, href: "#projects" },
  { name: "Skills", icon: <Cpu size={16}/>, href: "#skills" },
  { name: "Contact", icon: <Mail size={16}/>, href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 px-3 py-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center justify-center w-10 h-10 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all group"
          >
            {item.icon}
            {/* Minimal text reveal on hover */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-white text-black text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">
              {item.name}
            </span>
          </a>
        ))}
      </motion.div>
    </nav>
  );
}