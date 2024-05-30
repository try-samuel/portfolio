"use client"; // Enable the client-side runtime

import Link from "next/link";
import { ModeToggle } from "../providers/theme-toggler";
import { OverusedGrotesk } from "../../lib/fonts";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { usePathname } from "next/navigation";

// Define an array of navigation items
const navItems = [
  { title: "Projects", href: "/projects" }, // Navigation item for projects
  { title: "Experience", href: "#experience" }, // Navigation item for experience
  { title: "Hire Me", href: "#hire" }, // Navigation item for hire me
];

// Define the TopBar component
export default function TopBar() {
  const pathname = usePathname(); // Get the current pathname
  return (
    <section className="flex w-full justify-between py-8 mb-20 container">
      <Link href={"/"}>lOgO</Link> {/* Link to the homepage */}
      <div
        className={`w-[25%] flex justify-between text-sm leading-5 font-medium ${OverusedGrotesk.className}`}
      >
        <p className="text-[#7e7e97] flex gap-2 justify-center">
          <FaLocationCrosshairs
            size={18}
            className="animate-pulse text-green-800 cursor-crosshair"
          />
          Nigeria
        </p>
        {/* Render navigation links */}
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`hover:text-[#7e7e97] transition-all duration-300 ${
              pathname === item.href ? "text-[#7e7e97]" : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <ModeToggle /> {/* Render the ModeToggle component */}
    </section>
  );
}
