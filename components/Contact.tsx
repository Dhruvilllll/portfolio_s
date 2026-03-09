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
    <section id="contact" className="py-24 bg-midnight text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          
          {/* Left Side Content - Restored to match image */}
          <div>
            <h2 className="text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.85]">
              Let's Build <br/> Something <br/>
              <span className="text-neon-purple">Intelligent</span> <br/> Together
            </h2>
            <p className="text-gray-400 text-xl font-medium mb-12 max-w-md leading-relaxed">
              Ready to transform your data into a competitive advantage? Drop me a message.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center transition-all group-hover:bg-neon-purple/20">
                  <Mail className="text-neon-purple" size={24} />
                </div>
                <span className="text-xl font-bold tracking-tight">dhruvilmalvania@gmail.com</span>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/Dhruvilllll" target="_blank" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-midnight transition-all">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/dhruvil-malvania" target="_blank" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-midnight transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Form - Restored to match image */}
          <div className="relative">
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center"
              >
                <CheckCircle className="text-cyber-green mx-auto mb-6" size={64} />
                <h3 className="text-3xl font-black mb-2 tracking-tight">Data Transmitted</h3>
                <p className="text-gray-400 font-medium">Your inquiry has been stored in the AI Data Center.</p>
                <button 
                  onClick={() => setSent(false)}
                  className="mt-8 text-neon-purple font-black uppercase text-xs tracking-[0.2em] hover:text-white transition-colors"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  required
                  type="text" 
                  placeholder="Name" 
                  value={formData.name}
                  className="w-full bg-[#1a0b2e] border border-white/5 rounded-3xl px-8 py-6 focus:border-neon-purple/50 outline-none transition-all font-bold text-white placeholder:text-gray-500"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  required
                  type="email" 
                  placeholder="Email" 
                  value={formData.email}
                  className="w-full bg-[#1a0b2e] border border-white/5 rounded-3xl px-8 py-6 focus:border-neon-purple/50 outline-none transition-all font-bold text-white placeholder:text-gray-500"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <textarea 
                  required
                  placeholder="Project Details" 
                  value={formData.message}
                  rows={5}
                  className="w-full bg-[#1a0b2e] border border-white/5 rounded-3xl px-8 py-6 focus:border-neon-purple/50 outline-none transition-all font-bold text-white placeholder:text-gray-500 resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full bg-neon-purple py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-3 hover:bg-electric-purple transition-all shadow-[0_10px_30px_rgba(160,108,213,0.3)] disabled:opacity-50"
                >
                  {loading ? "Transmitting..." : "Launch Inquiry"} <Send size={24}/>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}