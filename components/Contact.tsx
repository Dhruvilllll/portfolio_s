"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-midnight text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass-card p-10 md:p-20 grid md:grid-cols-2 gap-20 items-center shadow-2xl">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              Let's Build Something <br/>
              <span className="text-neon-purple">Intelligent</span> Together
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-medium">Ready to transform your data into a competitive advantage? Drop me a message.</p>
            
            <div className="space-y-6">
              <a href="mailto:dhruvilmalvania@gmail.com" className="flex items-center gap-5 text-gray-300 hover:text-white transition-all group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-neon-purple/20 transition-all"><Mail className="text-neon-purple" /></div>
                <span className="text-xl font-bold">dhruvilmalvania@gmail.com</span>
              </a>
              <div className="flex gap-4 pt-6">
                <a href="https://github.com/Dhruvilllll" className="p-5 bg-white/5 border border-white/10 rounded-[1.5rem] hover:bg-white hover:text-midnight transition-all"><Github size={24}/></a>
                <a href="https://linkedin.com/in/dhruvil-malvania" className="p-5 bg-white/5 border border-white/10 rounded-[1.5rem] hover:bg-white hover:text-midnight transition-all"><Linkedin size={24}/></a>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-neon-purple focus:bg-white/10 transition-all font-bold" />
            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-neon-purple focus:bg-white/10 transition-all font-bold" />
            <textarea placeholder="Project Details" rows={4} className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-neon-purple focus:bg-white/10 transition-all font-bold"></textarea>
            <button className="w-full bg-neon-purple hover:bg-electric-purple text-white font-black py-6 rounded-[1.5rem] text-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-neon-purple/20">
              Launch Inquiry <Send size={22}/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}