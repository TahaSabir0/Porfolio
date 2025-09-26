"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";

export default function HeroSection() {
  const handleScrollToProjects = () => {
    smoothScrollTo("projects");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden shadow-glow-xl hover:shadow-glow-2xl transition-all duration-500 border-glow border-2 border-accent-400/30">
            <img
              src="/project files/Screenshot 2025-03-07 012134.png"
              alt="Taha Sabir"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-6">
          {/* First Line - Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight"
          >
            <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-accent-400 animate-[typewriter_2s_steps(19)_0.8s_forwards,blink_1s_infinite]">
              Hey, I'm Taha.
            </span>
          </motion.h1>

          {/* Second Line - Slide In */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 font-light"
          >
            Computer Science & Mathematics | Builder of impactful software.
          </motion.p>

          {/* Third Line - Fade In */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 font-light"
          >
            Turning bold ideas into reality.
          </motion.p>
        </div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.4, ease: "easeOut" }}
          className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/project files/Taha_Sabir_CV.pdf";
              link.download = "Taha_Sabir_CV.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            variant="outline"
            size="xl"
          >
            Download CV
          </Button>
          <Button onClick={handleScrollToProjects} size="xl">
            See My Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
