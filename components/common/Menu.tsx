"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "HOME", href: "/" },
  { title: "WORK", href: "/work" },
  { title: "ABOUT", href: "/about" },
  { title: "CONTACT", href: "/contact" },
];

export default function Menu({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}) {
  const pathname = usePathname();

  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slide = {
    initial: { x: 80 },
    enter: (i: number) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
    exit: (i: number) => ({
      x: 80,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          variants={menuSlide}
          initial="initial"
          animate="enter"
          exit="exit"
          className="fixed right-0 top-0 h-screen w-full md:w-[450px] bg-[#1C1D20] text-white z-40 p-10 flex flex-col justify-between border-l border-white/10"
        >
          <div className="flex flex-col gap-2 mt-20">
            <p className="text-gray-400 text-xs uppercase mb-4 border-b border-gray-700 pb-4">
              Navigation
            </p>
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsActive(false)}
                  className={`text-5xl md:text-6xl uppercase font-bold hover:text-gray-400 transition-colors ${pathname === link.href ? "text-white" : "text-gray-500"
                    }`}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-gray-400 text-xs uppercase border-b border-gray-700 pb-4">Socials</p>
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="https://www.linkedin.com/in/adekunle-samuel-fiyinfoluwa" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
              <a href="https://www.github.com/try-samuel" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
              <a href="https://www.x.com/try_samuell" target="_blank" rel="noopener noreferrer" className="hover:text-white">X</a>
            </div>
          </div>

          {/* Curve SVG Effect (Simplified) */}
          <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-[#1C1D20] stroke-none pointer-events-none hidden md:block">
            <path d="M100 0 L100 1000 L0 1000 C0 1000 100 500 0 0 L100 0 Z" />
            {/* Note: A real curve needs complex path animation, using a simple shape for now */}
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
