import React, { useState } from "react";
import date from "@/lib/date";
import Link from "next/link";
import SocialLinks from "../ui/SocialLinks";
import { socialLinks } from "@/lib/data";
import Logo from "../ui/logo";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="space-y-10 my-10 mt-20">
      <Link
        href={"mailto:fiyinfoluasamuel580@gmail.com"}
        target="_blank"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-1/2 lg:w-full"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <div>
          <h6 className="text-5xl lg:text-8xl font-medium">
            Let&rsquo;s Collaborate
          </h6>
        </div>
        <div
          className={`svg w-32 h-32 lg:w-64 lg:h-64 rounded-full border-2 border-[#060608] dark:border-[#bebec5] flex items-center justify-center p-10 transition-all duration-300 ease-in-out ${isHovered ? "bg-[#060608] dark:bg-[#BFBFC6] cursor-ew-resize" : ""
            }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <span className="text-2xl text-[#BFBFC6] dark:text-[#060608]">
              Hire Me
            </span>
          ) : (
            <HiArrowLongRight className="text-[100px] font-thin" />
          )}
        </div>
      </Link>
      <SocialLinks items={socialLinks} />
      <footer className="flex justify-between w-full">
        <Logo />
        <div className="text-[#61616E] dark:text-[#545460]">
          <span className="mr-3">
            &copy; <span className="text-[#BFBFC6]">Samuel Adekunle</span>
          </span>
          {date}
        </div>
      </footer>
    </section>
  );
}
