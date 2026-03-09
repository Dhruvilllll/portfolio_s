"use client";
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { ShieldAlert, Database, Lock, Cpu } from "lucide-react";

export default function AdminPanel() {
  const [key, setKey] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [lockout, setLockout] = useState(0);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (lockout > 0) {
      const timer = setInterval(() => setLockout((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [lockout]);

  const checkAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (lockout > 0) return;

    if (key === process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY) {
      setIsAuth(true);
      fetchMessages();
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 5) {
        setLockout(60);
        setAttempts(0);
      }
      alert("Unauthorized access attempt logged.");
    }
  };

  const fetchMessages = () => {
    const q = query(collection(db, "inquiries"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center font-mono">
        <div className="glass-card p-10 max-w-md w-full border-red-500/20">
          <ShieldAlert className="text-red-500 mb-6 mx-auto" size={48} />
          <h1 className="text-white text-center text-xl font-bold mb-6">RESTRICTED DATA CENTER</h1>
          <form onSubmit={checkAuth} className="space-y-4">
            <input 
              type="password" 
              placeholder="ENTER ADMIN KEY"
              className="w-full bg-black border border-white/20 p-4 text-cyber-green outline-none"
              onChange={(e) => setKey(e.target.value)}
              disabled={lockout > 0}
            />
            <button className="w-full bg-red-600 text-white py-3 font-bold hover:bg-red-700">
              {lockout > 0 ? `SYSTEM LOCKED: ${lockout}s` : "ACCESS DATABASE"}
            </button>
          </form>
          <p className="text-white/30 text-[10px] mt-4 text-center tracking-widest">ATTEMPTS: {attempts}/5</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] p-10 font-mono text-cyber-green">
      <div className="flex justify-between items-center mb-10 border-b border-cyber-green/20 pb-6">
        <div className="flex items-center gap-4">
          <Database size={32} />
          <h1 className="text-2xl font-black">INQUIRY_SERVER_O1</h1>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <span className="flex items-center gap-2"><Cpu size={14}/> CPU: 12%</span>
          <span className="text-white bg-red-600 px-3 py-1">ADMIN_ACTIVE</span>
        </div>
      </div>

      <div className="grid gap-6">
        {messages.map((msg) => (
          <div key={msg.id} className="border border-cyber-green/10 bg-white/5 p-6 rounded-xl hover:border-cyber-green/50 transition-all">
            <div className="flex justify-between mb-4">
              <span className="text-white font-bold">{msg.name}</span>
              <span className="text-[10px] text-white/40">{msg.timestamp?.toDate().toLocaleString()}</span>
            </div>
            <p className="text-xs text-white/60 mb-2">ORIGIN: {msg.email}</p>
            <div className="bg-black/50 p-4 rounded border border-white/5 text-sm">
              {msg.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}