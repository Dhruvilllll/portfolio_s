"use client";
import { motion } from "framer-motion";
import { Github, Zap, Database, BarChart, Activity, Cpu } from "lucide-react";

const featuredProjects = [
  {
    title: "AutoEMailReplyBot",
    desc: "AI-driven automation for intelligent email drafting and response management.",
    tech: ["Python", "LLM", "NLP"],
    link: "https://github.com/Dhruvilllll/AutoEMailReplyBot",
    icon: <Zap size={20} className="text-neon-purple" />
  },
  {
    title: "Multi-Agent Stock Research",
    desc: "Collaborative AI agent framework for real-time market analysis and investment insights using multi-agent systems.",
    tech: ["CrewAI", "LangChain", "OpenAI"],
    link: "https://github.com/Dhruvilllll/multi-agent-stock-research",
    icon: <BarChart size={20} className="text-cyber-green" />
  },
  {
    title: "NLPChaptify",
    desc: "Transforming text data into structured insights using advanced NLP techniques.",
    tech: ["NLP", "Machine Learning", "Data Science"],
    link: "https://github.com/Dhruvilllll/NLPChaptify",
    icon: <Database size={20} className="text-neon-purple" />
  },
  {
    title: "BERT Sentiment Analysis",
    desc: "High-precision text classification using Google's BERT for deep linguistic understanding and sentiment processing.",
    tech: ["PyTorch", "BERT", "Transformers"],
    link: "https://github.com/Dhruvilllll/BERT-Sentiment-Analysis",
    icon: <Activity size={20} className="text-cyber-green" />
  },
  {
    title: "AI Data Analyst",
    desc: "Autonomous system for automated data exploration, visualization, and insight generation.",
    tech: ["Pandas", "LLMs", "Matplotlib"],
    link: "https://github.com/Dhruvilllll/AI-Data-Analyst",
    icon: <Database size={20} className="text-neon-purple" />
  },
  {
    title: "Health Engine",
    desc: "Healthcare-focused AI system for predictive analytics and medical data tracking.",
    tech: ["TensorFlow", "FastAPI", "Healthcare AI"],
    link: "https://github.com/Dhruvilllll/health-engine",
    icon: <Cpu size={20} className="text-cyber-green" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-midnight text-white relative z-20 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header Section - Better alignment for all widths */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-4xl">
            <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-black tracking-tighter leading-[0.9] mb-4">
              Projects & <br/><span className="text-neon-purple">Experiments</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-base md:text-lg font-bold leading-tight border-l-2 border-neon-purple/30 pl-6 py-2">
            A collection of intelligent systems and data-driven solutions engineered for scale.
          </p>
        </div>

        {/* Fluid Grid Layout - Flawless on ANY screen */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-6 md:gap-10">
          {featuredProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="project-card flex h-full"
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative glass-card p-6 md:p-10 hover:shadow-[0_20px_60px_rgba(160,108,213,0.15)] transition-all overflow-hidden border border-white/5 flex flex-col w-full"
              >
                {/* Decorative Glow */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-electric-purple/10 rounded-full blur-[60px] group-hover:bg-electric-purple/20 transition-colors"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-sm">
                      {project.icon}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white text-white hover:text-midnight transition-all active:scale-90"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 group-hover:text-neon-purple transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm md:text-base mb-8 font-medium leading-relaxed flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tech.map(t => (
                      <span 
                        key={t} 
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}