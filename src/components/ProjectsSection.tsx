"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Play } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  blog?: string;
}

const projects: Project[] = [
  {
    id: "swiftapply",
    title: "SwiftApply",
    description:
      "As the Frontend Lead and Team Coordinator for SwiftApply, I spearheaded the development of an AI-powered web app that automates job applications. I built the entire user interface from the ground up using React.js, Shadcn UI, and Tailwind CSS, creating an intuitive experience for users. A key contribution was integrating Gemini 2.5 APIs to power the autonomous web-browsing agents, which were central to the app's functionality. By leading a team of four, we successfully delivered a fully functional MVP in just four weeks, creating a tool that reduced application time by 70%.",
    image: "/api/placeholder/600/400",
    tech: [
      "React.js",
      "Shadcn UI",
      "Tailwind CSS",
      "Gemini 2.5 API",
      "AI/ML",
      "Team Leadership",
    ],
    github: "#",
    demo: "#",
    blog: "#",
  },
  {
    id: "guitar-tuner",
    title: "Automatic Guitar Tuner",
    description:
      "As a Digital Technology Summer Fellow, I independently designed and built a fully automated, electromechanical guitar tuning stand from scratch, documenting the entire 8-week process in a detailed technical blog. My work centered on the complex software engineering, where I developed a real-time signal processing pipeline in C/C++ using an FFT algorithm for high-precision polyphonic pitch detection (±0.5 Hz). I also programmed the PID control system that managed the custom analog electronics and motor drivers, achieving tuning precision below the human perception threshold (<1 cent error). The final prototype successfully reduced tuning time by 90%.",
    image: "/api/placeholder/600/400",
    tech: [
      "C/C++",
      "FFT Algorithm",
      "PID Control",
      "Signal Processing",
      "Electronics",
      "Motor Control",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: "line-tracking-robot",
    title: "AI Line Tracking Robot",
    description:
      "As a member of the selective engineering Pioneer Team for the PiCar-X Robotics Challenge, my role was to establish a robust software foundation for this AI-powered robotic car. I developed and implemented crucial motor calibration routines and optical flow algorithms using Python and OpenCV on its Raspberry Pi core, resulting in 95% servo alignment accuracy and smooth motion tracking. I also tackled advanced navigation by integrating the PiCar-X SDK with grayscale sensors and camera APIs to enhance its line-following capabilities, improving reliability by 40%. All my work was thoroughly documented to serve as a baseline for future student teams.",
    image: "/api/placeholder/600/400",
    tech: [
      "Python",
      "OpenCV",
      "Raspberry Pi",
      "PiCar-X SDK",
      "Computer Vision",
      "Robotics",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: "york-note",
    title: "York Note",
    description:
      "1st place winner at the York College hackathon! As a core developer for York Note, I helped build a collaborative note-sharing platform to solve the common student problem of maintaining high-quality class notes. I was primarily responsible for building the application's frontend, using React to create a visually appealing and intuitive interface for students to share and discover academic materials. A key part of my contribution involved integrating Supabase for database management and implementing Auth0 for secure user authentication. Our team successfully delivered a polished and functional web app on schedule, providing a valuable academic tool for our peers at York College.",
    image: "/api/placeholder/600/400",
    tech: [
      "React",
      "Supabase",
      "Auth0",
      "Frontend Development",
      "Hackathon Winner",
      "Collaborative Platform",
    ],
    github: "#",
    demo: "#",
    blog: "#",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section ref={ref} id="projects" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-glow">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my passion for building
              impactful software solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.1,
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 hover:border-accent-400 h-[420px] flex flex-col">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-accent-500 to-accent-700 relative overflow-hidden flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white text-glow">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors duration-300 text-glow">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full font-medium border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full font-medium border border-gray-600">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description.substring(0, 100)}...
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-md border border-gray-700 shadow-glow-xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-white text-glow">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl overflow-hidden shadow-glow-lg">
                  <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white text-glow">
                    {selectedProject.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                </div>

                {/* Project Description */}
                <DialogDescription className="text-lg text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 text-glow">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-accent-600 text-white text-sm rounded-full font-medium shadow-glow border border-accent-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sources */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 text-glow">
                    Sources
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.github && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </Button>
                    )}
                    {selectedProject.demo && (
                      <Button className="flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    {selectedProject.blog && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Read More
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
