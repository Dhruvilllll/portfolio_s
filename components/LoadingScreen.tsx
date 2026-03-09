"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Initializing neural network...",
  "Loading repositories...",
  "Optimizing model weights...",
  "Preparing projects...",
  "Launching portfolio...",
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length) {
      const timer = setTimeout(() => setIndex(index + 1), 600);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => onComplete(), 500);
      return () => clearTimeout(finishTimer);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-darkBg flex items-center justify-center font-mono"
    >
      <div className="w-full max-w-md px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-2">
          {messages.slice(0, index + 1).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-cyberGreen text-sm md:text-base"
            >
              <span className="text-neonPurple mr-2">❯</span> {msg}
            </motion.div>
          ))}
          {index < messages.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-5 bg-cyberGreen ml-1 translate-y-1"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}