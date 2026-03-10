"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { db } from "../app/lib/firebase"; // Your Firebase config
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "inquiries"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Transmission failed:", err);
      alert("Neural link failed. Check your connection.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-midnight text-white border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Side: Impactful Text */}
          <div className="w-full">
            <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-tighter mb-6 md:mb-8 leading-[0.9] uppercase">
              Let's Build <br/> Something <br/>
              <span className="text-neon-purple">Intelligent</span> <br/> Together
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium mb-10 md:mb-12 max-w-md leading-relaxed px-1 md:px-0">
              Ready to transform your data into a competitive advantage? Drop me a message.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center transition-all group-hover:bg-neon-purple/20 border border-white/5">
                  <Mail className="text-neon-purple w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-lg md:text-xl font-bold tracking-tight break-all">dhruvilmalvania@gmail.com</span>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/Dhruvilllll" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-midnight transition-all">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/dhruvil-malvania" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-midnight transition-all">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: High-End Form */}
          <div className="relative w-full">
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 md:p-12 text-center"
              >
                <CheckCircle className="text-cyber-green mx-auto mb-6" size={54} />
                <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight uppercase">Data Transmitted</h3>
                <p className="text-gray-400 font-medium text-sm md:text-base">Your inquiry has been stored in the AI Data Center.</p>
                <button 
                  onClick={() => setSent(false)}
                  className="mt-8 text-neon-purple font-black uppercase text-xs tracking-[0.2em] hover:text-white transition-colors"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <input 
                  required
                  type="text" 
                  placeholder="Name" 
                  value={formData.name}
                  className="w-full bg-[#1a0b2e] border border-white/5 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-6 focus:border-neon-purple/50 outline-none transition-all font-bold text-white placeholder:text-gray-500 text-sm md:text-base"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  required
                  type="email" 
                  placeholder="Email" 
                  value={formData.email}
                  className="w-full bg-[#1a0b2e] border border-white/5 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-6 focus:border-neon-purple/50 outline-none transition-all font-bold text-white placeholder:text-gray-500 text-sm md:text-base"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <textarea 
                  required
                  placeholder="Project Details" 
                  value={formData.message}
                  rows={4}
                  className="w-full bg-[#1a0b2e] border border-white/5 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-6 focus:border-neon-purple/50 outline-none transition-all font-bold text-white placeholder:text-gray-500 resize-none text-sm md:text-base"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full bg-neon-purple py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-lg md:text-xl flex items-center justify-center gap-3 hover:bg-electric-purple transition-all shadow-[0_10px_30px_rgba(160,108,213,0.3)] disabled:opacity-50 active:scale-95"
                >
                  {loading ? "Transmitting..." : "Launch Inquiry"} <Send size={22}/>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}