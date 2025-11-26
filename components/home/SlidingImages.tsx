"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/app/constants/data";

export default function SlidingImages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-20 py-20 overflow-hidden bg-background"
    >
      <motion.div style={{ x: x1 }} className="flex gap-10 w-[120%] -ml-[10%]">
        {PROJECTS.map((project, index) => (
          <div
            key={`slider1-${index}`}
            className="w-[400px] h-[250px] md:w-[500px] md:h-[300px] relative flex-shrink-0 bg-gray-800 rounded-sm overflow-hidden"
          >
            <Image
              src={project.src}
              fill
              alt="project image"
              className="object-cover"
            />
          </div>
        ))}
        {PROJECTS.map((project, index) => (
          <div
            key={`slider1-dup-${index}`}
            className="w-[400px] h-[250px] md:w-[500px] md:h-[300px] relative flex-shrink-0 bg-gray-800 rounded-sm overflow-hidden"
          >
            <Image
              src={project.src}
              fill
              alt="project image"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
      
      <motion.div style={{ x: x2 }} className="flex gap-10 w-[120%] -ml-[10%]">
        {PROJECTS.map((project, index) => (
          <div
            key={`slider2-${index}`}
            className="w-[400px] h-[250px] md:w-[500px] md:h-[300px] relative flex-shrink-0 bg-gray-800 rounded-sm overflow-hidden"
          >
            <Image
              src={project.src}
              fill
              alt="project image"
              className="object-cover"
            />
          </div>
        ))}
        {PROJECTS.map((project, index) => (
          <div
            key={`slider2-dup-${index}`}
            className="w-[400px] h-[250px] md:w-[500px] md:h-[300px] relative flex-shrink-0 bg-gray-800 rounded-sm overflow-hidden"
          >
            <Image
              src={project.src}
              fill
              alt="project image"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
