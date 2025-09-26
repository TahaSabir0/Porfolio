"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  src: string;
  type: "image" | "youtube";
  alt?: string;
}

interface ProjectImageSliderProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectImageSlider({
  images,
  projectTitle,
}: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Convert images array to media items, detecting YouTube videos
  const mediaItems: MediaItem[] = images.map((src) => {
    if (src.includes("youtube.com/watch?v=") || src.includes("youtu.be/")) {
      // Extract YouTube video ID
      const videoId = src.includes("youtube.com/watch?v=")
        ? src.split("v=")[1]?.split("&")[0]
        : src.split("youtu.be/")[1]?.split("?")[0];

      return {
        src: videoId || src,
        type: "youtube" as const,
        alt: `${projectTitle} - Video`,
      };
    }

    return {
      src,
      type: "image" as const,
      alt: `${projectTitle} - Image`,
    };
  });

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  if (!mediaItems || mediaItems.length === 0) {
    return (
      <div className="aspect-video bg-gradient-to-br from-accent-500 to-accent-700 relative overflow-hidden flex-shrink-0">
        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white text-glow">
          {projectTitle.charAt(0)}
        </div>
      </div>
    );
  }

  if (mediaItems.length === 1) {
    const media = mediaItems[0];
    return (
      <div className="aspect-video bg-gray-800 relative overflow-hidden flex-shrink-0 rounded-t-2xl">
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={media.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${media.src}?rel=0&modestbranding=1&showinfo=0`}
            title={media.alt}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    );
  }

  return (
    <div className="aspect-video bg-gray-800 relative overflow-hidden flex-shrink-0 rounded-t-2xl group">
      {/* Sliding Container */}
      <motion.div
        className="flex h-full"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
      >
        {mediaItems.map((media, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {media.type === "image" ? (
              <img
                src={media.src}
                alt={media.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${media.src}?rel=0&modestbranding=1&showinfo=0`}
                title={media.alt}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={(e) => goToSlide(index, e)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-accent-400 scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
