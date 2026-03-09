"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X } from "lucide-react";

export default function DevTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>(["System initialized. Type 'help' for commands."]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "D") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = "";

    switch (cmd) {
      case "help":
        response = "Available commands: about, skills, projects, contact, clear, exit";
        break;
      case "about":
        response = "Dhruvil Malvania: Data Scientist & ML Engineer specializing in LLMs and NLP.";
        break;
      case "skills":
        response = "Python, PyTorch, TensorFlow, Scikit-learn, LLM Fine-tuning, Vector DBs.";
        break;
      case "projects":
        response = "Latest: AutoEMailReplyBot, NLPChaptify. Check the Projects section for details.";
        break;
      case "contact":
        response = "Email: dhruvilmalvania@gmail.com | GitHub: Dhruvilllll";
        break;
      case "clear":
        setLogs([]);
        setInput("");
        return;
      case "exit":
        setIsOpen(false);
        return;
      default:
        response = `Command not found: ${cmd}. Type 'help' for assistance.`;
    }

    setLogs([...logs, `> ${input}`, response]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-sm"
        >
          <div className="w-full max-w-2xl glass-card overflow-hidden border border-neon-purple/30 shadow-[0_0_50px_rgba(160,108,213,0.2)]">
            {/* Terminal Header */}
            <div className="bg-white/5 px-6 py-3 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <TerminalIcon size={18} className="text-neon-purple" />
                <span className="text-xs font-black uppercase tracking-widest text-white/50">Core_Terminal.v1</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm h-80 flex flex-col">
              <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-2 mb-4 scrollbar-hide text-cyber-green">
                {logs.map((log, i) => (
                  <div key={i} className={log.startsWith(">") ? "text-white font-bold" : ""}>
                    {log}
                  </div>
                ))}
              </div>

              <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-white/10 pt-4">
                <span className="text-neon-purple font-bold">dhruvil@portfolio:~$</span>
                <input
                  autoFocus
                  type="text"
                  className="bg-transparent border-none outline-none flex-1 text-white"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="enter command..."
                />
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}