"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface ImageSlideshowProps {
  images: string[];
  interval?: number; // in milliseconds
  className?: string;
}

export default function ImageSlideshow({
  images,
  interval = 3000,
  className = "",
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (images.length <= 1 || !isInView) return;

    setIsActive(true);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isInView]);

  useEffect(() => {
    if (!isInView) {
      setIsActive(false);
    }
  }, [isInView]);

  if (!images || images.length === 0) {
    return (
      <div
        className={`aspect-video bg-gray-800 rounded-xl flex items-center justify-center ${className}`}
      >
        <p className="text-gray-400">No images available</p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`relative aspect-video overflow-hidden rounded-xl ${className}`}
    >
      <motion.div
        className="flex h-full"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image}
              alt={`Slideshow image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Progress indicator */}
      {images.length > 1 && isActive && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
