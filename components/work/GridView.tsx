"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/app/constants/data';

interface GridViewProps {
  filter: 'all' | 'design' | 'development';
}

export default function GridView({ filter }: GridViewProps) {
  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'design') return project.type.toLowerCase().includes('design');
    if (filter === 'development') return project.type.toLowerCase().includes('development');
    return true;
  });

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-10 pb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {filteredProjects.map((project, index) => (
          <Link href={project.href || '#'} key={index} target="_blank" rel="noopener noreferrer" className="block group">
            <motion.div
              className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-800 z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Force image to fill container strictly */}
              <div className="absolute inset-0 w-full h-full">
                {/* Use a placeholder if src is missing to prevent crash */}
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
            </motion.div>

            <div className="mt-6 flex justify-between items-center text-white">
              <h3 className="text-2xl font-medium">{project.title}</h3>
              <span className="text-gray-400">{project.year}</span>
            </div>
            <p className="mt-2 text-gray-500">{project.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
