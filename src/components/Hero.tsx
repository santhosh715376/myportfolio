"use client";
import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/utils/data";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${portfolioData.personalInfo.contact.email}?subject=Let's Connect&body=Hi ${portfolioData.personalInfo.name.split(' ')[0]}, I would like to get in touch.`;
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden z-10" id="home">
      
      {/* Massive Typography Section */}
      <div className="flex-1 flex flex-col justify-center max-w-[1600px] mx-auto w-full px-6 md:px-12 relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
          className="relative w-full"
        >
          {/* Main Huge Text */}
          <motion.h1 
            variants={fadeUp}
            className="text-[9vw] sm:text-[8vw] md:text-[7vw] lg:text-[6.5vw] leading-[0.85] font-display font-black text-foreground tracking-[-0.02em] uppercase text-center w-full mb-12 md:mb-24 whitespace-nowrap scale-x-[1.1] sm:scale-x-[1.15] origin-center"
            style={{ 
              textShadow: "0 10px 40px rgba(88, 15, 62, 0.2)" 
            }}
          >
            {portfolioData.personalInfo.name.split(' ').slice(0, 2).join(' ')}
          </motion.h1>

          {/* Left/Right Text Blocks beneath huge text */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 mt-8 md:mt-0 px-4 md:px-12 w-full max-w-6xl mx-auto">
            <motion.div variants={fadeUp} className="max-w-[280px]">
              <h2 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight text-foreground leading-snug">
                A CREATIVE DEVELOPER <br />
                READY FOR IMPACT
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-[320px]">
              <p className="text-sm md:text-base text-foreground/80 font-medium leading-relaxed">
                {portfolioData.personalInfo.bio} I specialize in building elegant, highly performant applications that give you an edge.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Contact / Newsletter Section */}
      <div className="w-full px-6 md:px-12 mt-12 md:mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-6xl mx-auto w-full"
        >
          <h3 className="text-lg md:text-xl font-bold font-display uppercase tracking-tight text-foreground mb-6">
            BE THE FIRST TO CATCH IT
          </h3>
          
          <form onSubmit={handleSubmit} className="relative flex flex-col md:flex-row items-end gap-6 w-full border-b-2 border-foreground/20 pb-4">
            <div className="flex-1 w-full relative">
              <label htmlFor="email" className="block text-xs font-semibold text-foreground/70 mb-2">Email *</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent border-none outline-none text-foreground text-lg placeholder:text-foreground/40"
              />
            </div>
            
            <div className="w-full md:w-auto flex items-center justify-between gap-8 shrink-0">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-foreground/40 flex items-center justify-center group-hover:border-foreground transition-colors">
                  <div className="w-2 h-2 bg-foreground rounded-sm opacity-100" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/80">YES, CONTACT ME. *</span>
              </label>

              <button 
                type="submit" 
                className="px-10 py-3 rounded-full bg-foreground text-background font-bold text-sm tracking-wider uppercase hover:bg-foreground/90 transition-colors shadow-xl shadow-foreground/20"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
