"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/app/constants/data";

interface ListViewProps {
  filter: 'all' | 'design' | 'development';
}

export default function ListView({ filter }: ListViewProps) {
  const [activeProject, setActiveProject] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xSpring = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const ySpring = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'design') return project.type.toLowerCase().includes('design');
    if (filter === 'development') return project.type.toLowerCase().includes('development');
    return true;
  });

  return (
    <>
      <div
        ref={listRef}
        className="flex flex-col w-full"
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Table Header */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 pb-6 border-b border-white/20 text-xs uppercase tracking-wider text-gray-400">
          <div>Client</div>
          <div>Location</div>
          <div>Services</div>
          <div className="text-right">Year</div>
        </div>

        {/* Table Rows */}
        {filteredProjects.map((project, index) => (
          <Link
            href={project.href || '#'}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-b border-white/20 py-8 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 cursor-pointer transition-all duration-300 hover:opacity-50"
            onMouseEnter={() => {
              setActiveProject(index);
              setIsOpen(true);
            }}
          >
            <div className="text-2xl md:text-3xl font-normal text-white">
              {project.client}
            </div>
            <div className="text-sm md:text-base text-gray-300">
              {project.location}
            </div>
            <div className="text-sm md:text-base text-gray-300">
              {project.services.join(", ")}
            </div>
            <div className="text-sm md:text-base text-gray-300 md:text-right">
              {project.year}
            </div>
          </Link>
        ))}
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
          {filteredProjects.map((project, index) => (
            <div key={index} className="w-full h-full relative">
              <Image
                src={project.src}
                fill
                alt={project.title}
                className="object-cover"
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
    </>
  );
}
