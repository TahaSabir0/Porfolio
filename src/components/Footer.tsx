"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Taha Sabir | Built with React & Tailwind
          </p>
          <div className="flex justify-center space-x-6 text-gray-500 text-xs">
            <span>Designed with ❤️</span>
            <span>•</span>
            <span>Optimized for all devices</span>
            <span>•</span>
            <span>Accessible & inclusive</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
