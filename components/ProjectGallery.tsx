"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/app/constants/data";
import MagneticButton from "./common/MagneticButton";

export default function ProjectGallery() {
  const [activeProject, setActiveProject] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Mouse position for the floating image
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className="py-20 container mx-auto px-8 md:px-20 lg:px-40 relative bg-background text-foreground">
      {/* Header removed to match reference style which starts directly with list or has subtle header */}

      <div
        ref={galleryRef}
        className="w-full grid grid-cols-1 gap-10 md:flex md:flex-col md:gap-0"
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="hidden md:block border-t border-white/20" />
        {PROJECTS.slice(0, 4).map((project, index) => (
          <Link
            href={project.href || '#'}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="group md:border-b md:border-white/20 md:py-16 lg:py-24 flex flex-col md:flex-row md:justify-between md:items-center cursor-pointer transition-all duration-300 md:hover:opacity-50 md:hover:hover:opacity-100"
            onMouseEnter={() => {
              setActiveProject(index);
              setIsOpen(true);
            }}
          >
            {/* Mobile Image Card */}
            <div className="md:hidden relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-800 mb-6">
              <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors duration-500" />
                {project.src && (
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            </div>

            <div className="flex justify-between items-center w-full md:w-auto">
              <h3 className="text-2xl md:text-5xl lg:text-7xl xl:text-8xl font-normal transition-colors text-white">
                {project.title}
              </h3>
              <span className="md:hidden text-gray-400 text-sm">{project.year}</span>
            </div>

            <span className="text-sm md:text-base text-gray-500 md:text-gray-300 font-light mt-2 md:mt-0">
              {project.type}
            </span>
          </Link>
        ))}
      </div>

      {/* More Work Button */}
      <div className="flex justify-center mt-20">
        <Link href="/work">
          <MagneticButton className="w-[180px] h-[60px] rounded-full border border-white/20 bg-transparent text-white flex items-center justify-center cursor-pointer relative z-10 group transition-all duration-300 hover:bg-white hover:text-black">
            <div className="relative z-10 flex items-center gap-1">
              <span className="text-base">More work</span>
              <sup className="text-xs">{PROJECTS.length}</sup>
            </div>
          </MagneticButton>
        </Link>
      </div>

      {/* Floating Image Modal (Singleton) */}
      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[200px] md:w-[400px] md:h-[300px] pointer-events-none overflow-hidden rounded-lg z-50 hidden md:block bg-gray-800"
        style={{
          x: xSpring,
          y: ySpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isOpen ? 1 : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ y: -activeProject * 100 + "%" }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          {PROJECTS.slice(0, 6).map((project, index) => (
            <div key={index} className="w-full h-full relative">
              <Image
                src={project.src}
                fill
                alt={project.title}
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* View Button Overlay */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center z-10"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          <span className="text-black text-sm font-medium">View</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
