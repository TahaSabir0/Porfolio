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
import ProjectImageSlider from "./ProjectImageSlider";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  tech: string[];
  github?: string;
  demo?: string;
  blog?: string;
  Website?: string;
  DevPost?: string;
}

const projects: Project[] = [
  {
    id: "wahaj-ai",
    title: "Wahaj.ai",
    description:
      "As a Full Stack Software Engineering Intern at Wahaj.ai, I contributed to building enterprise-grade AI solutions. I worked extensively with React.js for frontend development, Spring Boot for robust backend services, and PostgreSQL for database management. My role involved implementing AWS cloud infrastructure, containerizing applications with Docker, and setting up CI/CD pipelines using GitHub Actions. A key focus was SQL query tuning to optimize database performance and ensure scalable data operations. This experience provided me with hands-on exposure to production-level software development and modern DevOps practices.",
    image: "/api/placeholder/600/400",
    images: [
      "/projects/Wahaj.ai/image-1.png",
      "/projects/Wahaj.ai/image-2.png",
      "/projects/Wahaj.ai/image-3.png",
      "/projects/Wahaj.ai/image-4.png",
      "/projects/Wahaj.ai/image-5.png",
    ],
    tech: [
      "React.js",
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "Docker",
      "GitHub Actions",
      "SQL Query Tuning",
    ],
    Website: "https://www.brainlyne.ai/",
  },
  {
    id: "swiftapply",
    title: "SwiftApply",
    description:
      "As the Frontend Lead and Team Coordinator for SwiftApply, I spearheaded the development of an AI-powered web app that automates job applications. I built the entire user interface from the ground up using React.js, Shadcn UI, and Tailwind CSS, creating an intuitive experience for users. A key contribution was integrating Gemini 2.5 APIs to power the autonomous web-browsing agents, which were central to the app's functionality. By leading a team of four, we successfully delivered a fully functional MVP in just four weeks, creating a tool that reduced application time by 70%.",
    image: "/api/placeholder/600/400",
    images: [
      "/projects/Swiftapply/image-1.png",
      "https://youtu.be/3uyix55LC88",
      "/projects/Swiftapply/image-2.png",
      "/projects/Swiftapply/image-3.png",
      "/projects/Swiftapply/image-4.png",
    ],
    tech: [
      "React.js",
      "Shadcn UI",
      "Tailwind CSS",
      "Spring Boot",
      "FastAPI",
      "MySQL",
      "Gemini 2.5 APIs",
      "Autonomous Web Navigation",
    ],
    github: "https://github.com/TahaSabir0/job-agent-henhacks",
    demo: "https://youtu.be/3uyix55LC88",
    DevPost: "https://devpost.com/software/swiftapply",
  },
  {
    id: "guitar-tuner",
    title: "Automatic Guitar Tuner",
    description:
      "As a Digital Technology Summer Fellow, I independently designed and built a fully automated, electromechanical guitar tuning stand from scratch, documenting the entire 8-week process in a detailed technical blog. My work centered on the complex software engineering, where I developed a real-time signal processing pipeline in C/C++ using an FFT algorithm for high-precision polyphonic pitch detection (±0.5 Hz). I also programmed the PID control system that managed the custom analog electronics and motor drivers, achieving tuning precision below the human perception threshold (<1 cent error). The final prototype successfully reduced tuning time by 90%.",
    image: "/api/placeholder/600/400",
    images: [
      "/projects/Automatic-guitar tuner/image-1.png",
      "https://www.youtube.com/watch?v=YejNIvxSDlA",
      "/projects/Automatic-guitar tuner/image-2.png",
      "/projects/Automatic-guitar tuner/image-3.png",
      "/projects/Automatic-guitar tuner/image-4.png",
    ],
    tech: [
      "C",
      "C++",
      "FFT",
      "PID Control",
      "Custom Analog Amplifier",
      "Motor Drivers",
      "Piezo Contact Microphones",
      "Real-time Signal Processing",
    ],
    blog: "https://dtsf.sites.gettysburg.edu/dtsf2025/author/sabita01/",
    github: "#",
    demo: "https://www.youtube.com/watch?v=YejNIvxSDlA",
  },
  {
    id: "line-tracking-robot",
    title: "AI Line Tracking Robot",
    description:
      "As a member of the selective engineering Pioneer Team for the PiCar-X Robotics Challenge, my role was to establish a robust software foundation for this AI-powered robotic car. I developed and implemented crucial motor calibration routines and optical flow algorithms using Python and OpenCV on its Raspberry Pi core, resulting in 95% servo alignment accuracy and smooth motion tracking. I also tackled advanced navigation by integrating the PiCar-X SDK with grayscale sensors and camera APIs to enhance its line-following capabilities, improving reliability by 40%. All my work was thoroughly documented to serve as a baseline for future student teams.",
    image: "/api/placeholder/600/400",
    images: [
      "/projects/AI Line Tracking Robot/image-1.png",
      "/projects/AI Line Tracking Robot/image-2.JPEG",
      "/projects/AI Line Tracking Robot/image-3.JPEG",
      "/projects/AI Line Tracking Robot/image-4.JPEG",
    ],
    tech: [
      "Python",
      "OpenCV",
      "Raspberry Pi",
      "SunFounder PiCar-X SDK",
      "Grayscale Sensors",
      "Vilib Camera APIs",
    ],
    blog: "https://cs.gettysburg.edu/~tneller/archive/cs371/picarx/25sp/1/",
  },
  {
    id: "york-note",
    title: "York Note",
    description:
      "1st place winner at the York College hackathon! As a core developer for York Note, I helped build a collaborative note-sharing platform to solve the common student problem of maintaining high-quality class notes. I was primarily responsible for building the application's frontend, using React to create a visually appealing and intuitive interface for students to share and discover academic materials. A key part of my contribution involved integrating Supabase for database management and implementing Auth0 for secure user authentication. Our team successfully delivered a polished and functional web app on schedule, providing a valuable academic tool for our peers at York College.",
    image: "/api/placeholder/600/400",
    images: [
      "/projects/York Note/image-1.png",
      "/projects/York Note/image-2.JPEG",
      "/projects/York Note/image-3.JPEG",
      "/projects/York Note/image-4.PNG",
    ],
    tech: [
      "React",
      "Supabase",
      "Auth0",
      "JavaScript/TypeScript",
      "Tailwind CSS",
      "GitHub",
      "Vercel",
      "Real-time Database Sync",
      "Secure User Authentication",
    ],
    github: "https://github.com/TahaSabir0/hackathon-final",
    DevPost: "https://devpost.com/software/york-note",
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
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 hover:border-accent-400 min-h-[420px] flex flex-col">
                  {/* Project Image */}
                  {project.images && project.images.length > 0 ? (
                    <ProjectImageSlider
                      images={project.images}
                      projectTitle={project.title}
                    />
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-accent-500 to-accent-700 relative overflow-hidden flex-shrink-0 rounded-t-2xl">
                      <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white text-glow">
                        {project.title
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="p-5 flex flex-col flex-1">
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
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
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
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <ProjectImageSlider
                    images={selectedProject.images}
                    projectTitle={selectedProject.title}
                  />
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl overflow-hidden shadow-glow-lg">
                    <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white text-glow">
                      {selectedProject.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  </div>
                )}

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
                    {selectedProject.github &&
                      selectedProject.github !== "#" && (
                        <Button
                          variant="outline"
                          className="flex items-center gap-2"
                          onClick={() =>
                            window.open(selectedProject.github, "_blank")
                          }
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </Button>
                      )}
                    {selectedProject.demo && (
                      <Button
                        className="flex items-center gap-2"
                        onClick={() =>
                          window.open(selectedProject.demo, "_blank")
                        }
                      >
                        <Play className="h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    {selectedProject.blog && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() =>
                          window.open(selectedProject.blog, "_blank")
                        }
                      >
                        <ExternalLink className="h-4 w-4" />
                        Read Blog
                      </Button>
                    )}
                    {selectedProject.Website && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() =>
                          window.open(selectedProject.Website, "_blank")
                        }
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
                      </Button>
                    )}
                    {selectedProject.DevPost && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() =>
                          window.open(selectedProject.DevPost, "_blank")
                        }
                      >
                        <ExternalLink className="h-4 w-4" />
                        View DevPost
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
