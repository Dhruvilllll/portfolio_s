"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";

const featuredProjects = [
  {
    title: "AutoEMailReplyBot",
    desc: "AI-driven automation for intelligent email drafting and response management.",
    tech: ["Python", "LLM", "NLP"],
    link: "https://github.com/Dhruvilllll/AutoEMailReplyBot"
  },
  {
    title: "NLPChaptify",
    desc: "Transforming text data into structured insights using advanced NLP techniques.",
    tech: ["NLP", "Machine Learning", "Data Science"],
    link: "https://github.com/Dhruvilllll/NLPChaptify"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-midnight text-white relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Projects & <br/><span className="text-neon-purple">Experiments</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-lg font-bold leading-tight">
            A collection of intelligent systems and data-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {featuredProjects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative glass-card p-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-electric-purple/10 rounded-full blur-[80px] group-hover:bg-electric-purple/20 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-4xl font-black tracking-tighter">{project.title}</h3>
                  <div className="flex gap-3">
                    <a href={project.link} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white text-white hover:text-midnight transition-all">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg mb-10 font-medium leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}