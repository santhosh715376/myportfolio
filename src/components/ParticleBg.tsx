"use client";
import React from "react";
import { motion } from "framer-motion";

export function ParticleBg() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden bg-background">
      {/* The Glass Dome Arc */}
      <div className="absolute top-[-40vw] md:top-[-30vw] left-1/2 -translate-x-1/2 w-[150vw] md:w-[120vw] aspect-square rounded-full border border-white/40 shadow-[inset_0_-20px_50px_rgba(255,255,255,0.1)] backdrop-blur-[2px]"></div>

      {/* The Glowing Orange Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.9, 1, 0.9]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-20%] md:bottom-[-30%] left-1/2 -translate-x-1/2 w-[120vw] md:w-[80vw] max-w-[1200px] aspect-square rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 30%, var(--accent-light) 0%, var(--accent) 50%, transparent 80%)",
          filter: "blur(20px)"
        }}
      ></motion.div>
      
      {/* Subtle vignette/mask to fade out edges and give depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(230,215,255,0.6)_100%)]"></div>
    </div>
  );
}
