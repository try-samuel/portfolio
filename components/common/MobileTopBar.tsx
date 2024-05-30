import Link from "next/link";
import { ModeToggle } from "../providers/theme-toggler";
import { usePathname } from "next/navigation";
import { OverusedGrotesk } from "@/lib/fonts";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";

export default function MobileTopBar() {
  const pathname = usePathname(); // Get the current pathname
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const navItems: { title: string; href: string }[] = [
    { title: "Projects", href: "/projects" }, // Navigation item for projects
    { title: "Experience", href: "#experience" }, // Navigation item for experience
    { title: "Hire Me", href: "#hire" }, // Navigation item for hire me
  ];
  const ddd = (
    <>
      <div
        className={`w-full text-sm leading-5 font-medium ${OverusedGrotesk.className}`}
      >
        {/* Render navigation links */}
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`hover:text-[#7e7e97] transition-all duration-300 ${
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
      className={
        isOpen ? "w-full h-1/2 bg-[#F5F8FD] z-10 fixed dark:bg-[#09090B]" : ""
      }
    >
      <div
        className={`${
          isOpen ? "w-[85%]" : ""
        } py-8 mb-20 mx-auto items-center transition-all duration-500 container`}
      >
        <div className="flex w-full justify-between">
          <Link href={"/"}>lOgO</Link> {/* Link to the homepage */}
          <button onClick={toggle}>
            {isOpen ? <HiOutlineXMark size={25} /> : <HiBars3 size={25} />}
          </button>
        </div>
        {isOpen ? ddd : ""}
      </div>
    </section>
  );
}
