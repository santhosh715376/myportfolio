"use client";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";
import { portfolioData } from "@/utils/data";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-foreground/10 bg-background/50 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500">
              {portfolioData.personalInfo.name}
            </span>
            <p className="text-foreground/60 mt-2 text-sm">Building the future, one line of code at a time.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href={portfolioData.personalInfo.contact.github} target="_blank" rel="noreferrer" className="p-2 rounded-full glass hover:text-accent transition-colors">
              <Github width={20} height={20} />
            </a>
            <a href={portfolioData.personalInfo.contact.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full glass hover:text-accent transition-colors">
              <Linkedin width={20} height={20} />
            </a>
            <a href={`mailto:${portfolioData.personalInfo.contact.email}`} className="p-2 rounded-full glass hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
          
          <motion.button 
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-accent text-white shadow-lg shadow-accent/20 flex items-center justify-center cursor-pointer"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
