"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/utils/data";
import { Card } from "@/components/ui/Card";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work <span className="text-accent">Experience</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-foreground/20 ml-4 md:ml-0">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full border-4 border-background bg-accent" />
              <Card>
                <span className="text-accent font-bold text-sm tracking-wider uppercase">{exp.duration}</span>
                <h3 className="text-2xl font-bold mt-1 mb-2">{exp.role}</h3>
                <h4 className="text-lg font-medium text-foreground/70 mb-4">{exp.company}</h4>
                <p className="text-foreground/90 leading-relaxed">
                  {exp.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
