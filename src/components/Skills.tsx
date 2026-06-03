"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/utils/data";
import { cn } from "@/utils/cn";

import { IconType } from "react-icons";
import { 
  SiReact, SiJavascript, SiNodedotjs, SiFastapi, 
  SiMongodb, SiMysql, SiPython, SiCplusplus, SiC, 
  SiTensorflow, SiSpringboot, SiExpress, SiTailwindcss, SiPandas, 
  SiNumpy, SiDocker, SiGithub, SiGithubactions, SiPostman, SiStreamlit, SiVercel, SiNetlify
} from "react-icons/si";
import { FaNetworkWired, FaCubes, FaDatabase, FaHtml5, FaCss3Alt, FaJava, FaAws, FaChartLine, FaBrain, FaChartBar } from "react-icons/fa";

const iconMap: Record<string, IconType> = {
  SiReact, SiJavascript, FaHtml5, FaCss3Alt, SiNodedotjs, SiFastapi, 
  SiMongodb, SiMysql, SiPython, FaJava, SiCplusplus, SiC, 
  SiTensorflow, SiSpringboot, SiExpress, SiTailwindcss, SiPandas, 
  SiNumpy, FaAws, SiDocker, SiGithub, SiGithubactions, SiPostman, SiStreamlit, SiVercel, SiNetlify,
  FaNetworkWired, FaCubes, FaDatabase, FaChartLine, FaBrain, FaChartBar
};

function SkillCard({ skill, index }: { skill: { name: string, icon: string, description: string }, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      // Add touch support for mobile to flip the card
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative w-full h-[240px] cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div 
          className="absolute inset-0 w-full h-full glass rounded-3xl flex flex-col items-center justify-center p-6 border border-foreground/10 hover:border-accent/40 transition-colors"
          style={{ backfaceVisibility: "hidden" }}
        >
          {Icon && <Icon className="w-16 h-16 mb-6 text-foreground/80 group-hover:text-accent transition-colors" />}
          <span className="font-bold font-display uppercase tracking-widest text-foreground text-center">{skill.name}</span>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 w-full h-full rounded-3xl flex flex-col items-center justify-center p-6 bg-foreground text-background shadow-xl shadow-foreground/20 border border-foreground"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="font-black font-display uppercase text-accent mb-3 tracking-widest text-sm">{skill.name}</span>
          <p className="text-sm text-center leading-relaxed font-medium opacity-90">{skill.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  const categories = Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>;
  const [activeCategory, setActiveCategory] = useState<keyof typeof portfolioData.skills>(categories[0]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden z-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-[6vw] md:text-5xl font-black font-display uppercase tracking-tighter mb-4">
            Technical <span className="text-accent italic pr-2">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-xs md:text-sm font-bold font-display tracking-widest uppercase transition-all duration-300",
                activeCategory === cat 
                  ? "bg-accent text-background shadow-lg shadow-accent/30 scale-105" 
                  : "glass hover:bg-foreground/5 text-foreground/80 border border-foreground/10"
              )}
            >
              {cat.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>

        <motion.div layout className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {portfolioData.skills[activeCategory].map((skill, idx) => (
                <SkillCard key={skill.name} skill={skill} index={idx} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
