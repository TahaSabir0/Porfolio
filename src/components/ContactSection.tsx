"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleEmailClick = () => {
    window.location.href = "mailto:taha@example.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/tahasabir", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/tahasabir", "_blank");
  };

  return (
    <section ref={ref} id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-glow">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Interested in working together? Let's build something impactful.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleEmailClick}
              size="xl"
              className="flex items-center gap-3 w-full sm:w-auto"
            >
              <Mail className="h-5 w-5" />
              Get in Touch
            </Button>

            <Button
              onClick={handleLinkedInClick}
              variant="outline"
              size="xl"
              className="flex items-center gap-3 w-full sm:w-auto"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>

            <Button
              onClick={handleGitHubClick}
              variant="outline"
              size="xl"
              className="flex items-center gap-3 w-full sm:w-auto"
            >
              <Github className="h-5 w-5" />
              GitHub
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="pt-12 border-t border-gray-700"
          >
            <p className="text-gray-400">
              Always open to discussing new opportunities, collaborations, and
              innovative projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
