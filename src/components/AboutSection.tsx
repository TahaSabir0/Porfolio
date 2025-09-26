"use client";

import { motion } from "framer-motion";
import ImageSlideshow from "./ImageSlideshow";

export default function AboutSection() {
  // Slideshow images
  const slideshowImages = [
    "/project files/slideshow/image-1.JPEG",
    "/project files/slideshow/image-2.JPEG",
    "/project files/slideshow/image-3.JPEG",
    "/project files/slideshow/image-4.JPEG",
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                I&apos;m a passionate full-stack developer with a love for creating
                innovative digital experiences. With expertise in modern web
                technologies, I enjoy turning complex problems into simple,
                beautiful, and intuitive solutions.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                When I&apos;m not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Spring Boot",
                  "Java",
                  "PostgreSQL",
                  "Python",
                  "AWS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 text-accent-400 rounded-full text-sm border border-gray-700 hover:border-accent-400/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Slideshow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <ImageSlideshow
                images={slideshowImages}
                interval={3000}
                className="shadow-glow-lg border border-gray-700/50 w-full max-w-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
