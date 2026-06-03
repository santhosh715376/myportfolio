"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/utils/data";
import { Button } from "@/components/ui/Button";
import { Send, Mail, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import confetti from "canvas-confetti";
import { Card } from "@/components/ui/Card";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${portfolioData.personalInfo.contact.email}?subject=${subject}&body=${body}`;

    // Open default mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563eb", "#93c5fd", "#ffffff"]
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in <span className="text-accent">Touch</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold mb-6">Let&apos;s talk about your next project</h3>
            <p className="text-foreground/80 mb-8 leading-relaxed text-lg">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <Card className="flex items-center gap-4 !p-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground/60">Email</h4>
                  <a href={`mailto:${portfolioData.personalInfo.contact.email}`} className="text-lg font-medium hover:text-accent transition-colors">
                    {portfolioData.personalInfo.contact.email}
                  </a>
                </div>
              </Card>
              <Card className="flex items-center gap-4 !p-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground/60">Phone</h4>
                  <a href={`tel:${portfolioData.personalInfo.contact.phone}`} className="text-lg font-medium hover:text-accent transition-colors">
                    {portfolioData.personalInfo.contact.phone}
                  </a>
                </div>
              </Card>
              <Card className="flex items-center gap-4 !p-4 hover:border-accent/40 transition-colors">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent">
                  <SiGithub size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground/60">GitHub</h4>
                  <a href={portfolioData.personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-accent transition-colors">
                    github.com/santhosh715376
                  </a>
                </div>
              </Card>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Card className="!p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border-foreground/20 focus:outline-none focus:ring-2 focus:ring-accent bg-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border-foreground/20 focus:outline-none focus:ring-2 focus:ring-accent bg-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border-foreground/20 focus:outline-none focus:ring-2 focus:ring-accent bg-transparent resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
