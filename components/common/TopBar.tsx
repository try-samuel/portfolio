"use client"; // Enable the client-side runtime

import Link from "next/link";
import { ModeToggle } from "../providers/theme-toggler";
import { OverusedGrotesk } from "../../lib/fonts";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Logo from "../ui/logo";

// Define the TopBar component
export default function TopBar() {
  const pathname = usePathname(); // Get the current pathname

  // Define an array of navigation items
  const navItems: { title: string; href: string }[] = [
    { title: "Projects", href: "/projects" },
    { title: "Hire Me", href: "mailto:fiyinfoluwasamuel580@gmail.com" },
  ];

  return (
    <section className="flex w-full justify-between py-8 mb-20 container">
      <Logo />
      <div
        className={`w-[27%] flex justify-between text-sm leading-5 font-medium ${OverusedGrotesk.className}`}
      >
        <p className="text-[#7e7e97] flex gap-2 justify-center">
          <FaLocationCrosshairs
            size={18}
            className="animate-pulse text-green-800 cursor-crosshair"
          />
          Nigeria
        </p>
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
      <ModeToggle />
    </section>
  );
}
