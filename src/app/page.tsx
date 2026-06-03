import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Roadmap } from "@/components/Roadmap";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleBg } from "@/components/ParticleBg";

import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <CustomCursor />
      <ParticleBg />
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
