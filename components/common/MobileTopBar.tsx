import Link from "next/link";
import { ModeToggle } from "../providers/theme-toggler";
import { usePathname } from "next/navigation";
import { OverusedGrotesk } from "@/lib/fonts";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import Logo from "../ui/logo";

export default function MobileTopBar() {
  const pathname = usePathname(); // Get the current pathname
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const navItems: { title: string; href: string }[] = [
    { title: "Projects", href: "/projects" }, // Navigation item for projects
    { title: "Experience", href: "#experience" }, // Navigation item for experience
    { title: "Hire Me", href: "mailto:fiyinfoluwasamuel580@gmail.com" }, // Navigation item for hire me
  ];
  const navComp = (
    <>
      <div
        className={`w-full text-md leading-5 font-medium ${OverusedGrotesk.className}`}
      >
        {/* Render navigation links */}
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`hover:text-[#7e7e97] transition-all duration-300 w-24 ${
              pathname === item.href ? "text-[#7e7e97]" : ""
            } block py-4 text-lg`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <ModeToggle /> {/* Render the ModeToggle component */}
    </>
  );

  return (
    <section
      className={`fixed top-0 left-0 right-0 w-full bg-[#F5F8FD] dark:bg-[#09090B] z-50 ${
        isOpen ? "h-1/2" : ""
      }`}
    >
      <div
        className={`${
          isOpen ? "w-[85%]" : ""
        } py-6 mx-auto items-center transition-all duration-500 container z-10`}
      >
        <div className={`flex w-full justify-between ${isOpen ? "mb-10" : ""}`}>
          <Logo />
          <button onClick={toggle}>
            {isOpen ? <HiOutlineXMark size={25} /> : <HiBars3 size={25} />}
          </button>
        </div>
        {isOpen ? navComp : ""}
      </div>
    </section>
  );
}
