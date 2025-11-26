"use client";

import { useState } from "react";
import MagneticButton from "./MagneticButton";
import Menu from "./Menu";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 p-5 md:p-10 w-full flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
        {/* Logo */}
       <Link
       href={'/'}
       >
        <MagneticButton className="pointer-events-auto">
          <div className="flex flex-col cursor-pointer group">
            <span className="text-lg font-bold group-hover:opacity-70 transition-opacity">Fiyin</span>
            <span className="text-xs text-gray-300 group-hover:opacity-70 transition-opacity">try-samuel</span>
          </div>
        </MagneticButton>
        </Link>

        {/* Menu Button */}
        <MagneticButton className="pointer-events-auto">
          <div
            onClick={() => setIsActive(!isActive)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className={`relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 transition-all ${isActive ? "rotate-45" : ""}`}>
               <span className={`w-full h-[2px] bg-white transition-all ${isActive ? "rotate-90 translate-y-[1px]" : ""}`} />
               <span className={`w-full h-[2px] bg-white transition-all ${isActive ? "hidden" : ""}`} />
            </div>
            <span className="text-lg font-medium hidden md:block group-hover:opacity-70 transition-opacity">Menu</span>
          </div>
        </MagneticButton>
      </div>

      <Menu isActive={isActive} setIsActive={setIsActive} />
    </>
  );
}
