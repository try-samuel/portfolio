"use client";

import Link from "next/link";
import MagneticButton from "./common/MagneticButton";

export default function Description() {
  return (
    <section className="container mx-auto px-8 md:px-20 lg:px-40 py-20 md:py-32 flex flex-col md:flex-row gap-10 md:gap-20 relative">
      {/* Main Headline */}
      <div className="md:w-[70%]">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
          Building products that scale in the modern web. Together we&apos;ll set new
          standards!
        </h2>
      </div>

      {/* Right Side Content */}
      <div className="md:w-[30%] flex flex-col gap-10">
        <p className="text-gray-400 text-lg">
          The combination of my passion for engineering, clean code & user experience positions me uniquely in the software development world.
        </p>

        {/* Magnetic About Me Button */}
        <div className="hidden lg:block self-start md:self-start relative">
          <Link href="/about">
            <MagneticButton className="w-[180px] h-[180px] rounded-full bg-white text-black flex items-center justify-center cursor-pointer relative z-10 group transition-transform duration-300 ease-out hover:scale-110">
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-lg font-medium">About me</span>
              </div>
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
