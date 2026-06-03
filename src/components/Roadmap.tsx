"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/utils/data";
import { Card } from "@/components/ui/Card";
import { FaGraduationCap, FaCode, FaChartArea, FaLaptopCode, FaBrain } from "react-icons/fa";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  FaGraduationCap, FaCode, FaChartArea, FaLaptopCode, FaBrain
};

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-accent">Journey</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            From learning the foundations in high school to building intelligent AI systems in college. Here is the roadmap of how I became a developer from scratch.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/10 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {portfolioData.roadmap.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = iconMap[milestone.icon] || FaGraduationCap;

              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Timeline Dot with Icon */}
                  <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full glass border-2 border-accent text-accent flex items-center justify-center transform -translate-x-1/2 z-10 bg-background">
                    <Icon size={20} />
                  </div>

                  {/* Empty Space for the other side (desktop) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className={`w-full md:w-1/2 pl-16 md:px-12 ${isEven ? "md:text-left" : "md:text-right"}`}
                  >
                    <Card className="hover:border-accent/40 transition-colors duration-300">
                      <div className={`flex flex-col ${isEven ? "md:items-start" : "md:items-end"} mb-4`}>
                        <span className="text-accent font-bold text-sm tracking-wider uppercase mb-1">{milestone.date}</span>
                        <h3 className="text-2xl font-bold">{milestone.title}</h3>
                        <h4 className="text-sm font-medium text-foreground/60">{milestone.phase}</h4>
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                        {milestone.description}
                      </p>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>


        {/* Coding Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-32 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <Card className="flex flex-col items-center justify-center text-center !p-10 border-accent/20 hover:border-accent/60 transition-all duration-300 glass group relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-5xl font-black text-accent mb-3 tracking-tighter">500<span className="text-3xl">+</span></h3>
            <p className="font-bold text-xl mb-2">Problems Solved</p>
            <p className="text-sm font-medium text-foreground/60 uppercase tracking-widest">Skillrack Platform</p>
          </Card>
          <Card className="flex flex-col items-center justify-center text-center !p-10 border-accent/20 hover:border-accent/60 transition-all duration-300 glass group relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-5xl font-black text-accent mb-3 tracking-tighter">100<span className="text-3xl">+</span></h3>
            <p className="font-bold text-xl mb-2">Problems Solved</p>
            <p className="text-sm font-medium text-foreground/60 uppercase tracking-widest">LeetCode</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
