"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Linkedin,
  Github,
  Mail,
  Send,
  AlertCircle,
  CheckCircle,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Contact form state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailClick = () => {
    window.location.href = "mailto:tahasabir2023@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/tahasabir/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/TahaSabir0", "_blank");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "Contact from Portfolio",
        message: formData.message,
        to_email: EMAILJS_CONFIG.toEmail,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form and close modal after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsContactModalOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setError(
        `Failed to send message. Please try again or contact me directly at ${EMAILJS_CONFIG.toEmail}`
      );
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => setIsContactModalOpen(true)}
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
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="pt-12 border-t border-gray-700"
          >
            <p className="text-gray-400">
              Always open to discussing new opportunities, collaborations, and
              innovative projects.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsContactModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-gray-900/95 backdrop-blur-md border border-gray-700 shadow-glow-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div>
                <h2 className="text-3xl font-bold text-white text-glow">
                  Let's Connect
                </h2>
                <p className="text-gray-300 mt-2">
                  Have a project in mind or just want to chat? I'd love to hear
                  from you.
                </p>
              </div>
              <Button
                onClick={() => setIsContactModalOpen(false)}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300">
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-white font-medium mb-2 block"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-accent-400 focus:ring-accent-400"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-white font-medium mb-2 block"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-accent-400 focus:ring-accent-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-white font-medium mb-2 block"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-accent-400 focus:ring-accent-400"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-white font-medium mb-2 block"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, idea, or just say hello..."
                      rows={6}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-accent-400 focus:ring-accent-400 resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300"
                    >
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <p className="text-sm">{error}</p>
                    </motion.div>
                  )}

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                <p className="text-gray-400 text-sm">
                  Or reach out directly at{" "}
                  <a
                    href={`mailto:${EMAILJS_CONFIG.toEmail}`}
                    className="text-accent-400 hover:text-accent-300 transition-colors duration-200"
                  >
                    {EMAILJS_CONFIG.toEmail}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
