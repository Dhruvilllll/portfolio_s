"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="footer" className="py-24 bg-midnight text-white border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-16 leading-none">
          Start building the <br/>
          <span className="relative inline-block px-4">
            future
            <svg className="absolute -inset-2 w-[115%] h-[120%] -left-[7.5%]" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M5,50 C5,20 95,20 95,50 C95,80 5,80 5,50"
                stroke="#FACC15"
                strokeWidth="3"
              />
            </svg>
          </span> <br/> with data
        </h2>

        
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs font-black uppercase tracking-[0.3em]">
          <div>© 2026 Dhruvil Malvania</div>
          <div className="flex gap-8">
            {/* <a href="#" className="hover:text-white transition-colors">Twitter</a> */}
            <a href="https://github.com/Dhruvilllll" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/dhruvil-malvania/" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <div>Engineered for Intelligence</div>
        </div>
      </div>

      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 -bottom-40 text-neon-purple/5 pointer-events-none"
      >
        <svg width="600" height="600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
        </svg>
      </motion.div>
    </footer>
  );
}