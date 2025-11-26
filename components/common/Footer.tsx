"use client";

import Image from "next/image";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Africa/Lagos",
        timeZoneName: "short",
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="container mx-auto px-8 md:px-20 lg:px-40 py-20 bg-background text-foreground overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-20">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10">
          <h2 className="text-5xl md:text-8xl font-normal">Let&apos;s</h2>
          <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mt-2">
            <Image
              src="/images/avatar-new.jpg"
              fill
              alt="Avatar"
              className="object-cover"
            />
          </div>
          <h2 className="text-5xl md:text-8xl font-normal">work</h2>
          <h2 className="text-5xl md:text-8xl font-normal">together</h2>
        </div>

        <div className="relative z-10">
          <Link href="/contact">
            <MagneticButton className="w-[180px] h-[180px] rounded-full bg-white text-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
              <span className="text-lg font-medium">Get in touch</span>
            </MagneticButton>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-16 z-10">
          <MagneticButton className="px-8 py-4 rounded-full border border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-300">
            <span className="text-sm">hello@fiyin.ng</span>
          </MagneticButton>
          <MagneticButton className="px-8 py-4 rounded-full border border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-300">
            <span className="text-sm">+2348152819194</span>
          </MagneticButton>
        </div>
      </div>

      <div className="pt-10 border-t border-white/20 text-gray-400 text-xs uppercase tracking-wider">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-row md:justify-between md:items-end">
          <div className="flex flex-col gap-2">
            <span>Version</span>
            <span className="text-white">{currentYear} Edition</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>Local Time</span>
            <span className="text-white">{time}</span>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <span>Socials</span>
            <div className="flex gap-4 text-white">
              <a href="https://links.fiyin.ng" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Links</a>
              <a href="https://www.github.com/try-samuel" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">GitHub</a>
              <a href="https://www.x.com/try_samuell" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">X</a>
              <a href="https://www.linkedin.com/in/adekunle-samuel-fiyinfoluwa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center">
          <div className="flex justify-center gap-8 mb-6">
            <div className="flex flex-col gap-2">
              <span>Version</span>
              <span className="text-white">{currentYear} Edition</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>Local Time</span>
              <span className="text-white">{time}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span>Socials</span>
            <div className="flex gap-4 text-white">
              <a href="https://links.fiyin.ng" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">Links</a>
              <a href="https://www.github.com/try-samuel" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">GitHub</a>
              <a href="https://www.x.com/try_samuell" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">X</a>
              <a href="https://www.linkedin.com/in/adekunle-samuel-fiyinfoluwa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
