"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/utils/data";
import { BookOpen, Briefcase, GraduationCap, Download } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="text-accent" />
                My Journey
              </h3>
              <p className="text-foreground/90 leading-relaxed text-lg mb-8">
                {portfolioData.personalInfo.bio}
              </p>
              
              <div className="mb-8">
                <a 
                  href="/resume.pdf" 
                  download="Sri_Santhosh_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-bold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Education</h4>
                    <p className="text-sm text-foreground/70">{portfolioData.education[0].institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Experience</h4>
                    <p className="text-sm text-foreground/70">{portfolioData.experience[0].company} - {portfolioData.experience[0].role}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {portfolioData.education.map((edu, idx) => (
                <Card key={idx} className={`flex flex-col justify-between ${idx === 2 ? "sm:col-span-2" : ""}`}>
                  <div>
                    <span className="text-xs font-bold text-accent tracking-wider uppercase mb-2 block">{edu.duration}</span>
                    <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                    <p className="text-sm text-foreground/70 mb-4">{edu.institution}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-foreground/10 flex justify-between items-center">
                    <span className="text-sm font-medium">Score</span>
                    <span className="font-bold text-accent">{edu.score}</span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
