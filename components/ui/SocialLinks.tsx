import Link from "next/link";
import { useState } from "react";
import { BsDash } from "react-icons/bs";

export default function SocialLinks({
  items,
}: {
  items: {
    name: string;
    link: string;
  }[];
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex space-x-8">
      {items.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          target="_blank"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`relative capitalize text-2xl text-[#61616E] dark:text-[#545460] cursor-pointer flex items-center transition-transform duration-300 ${
            hoveredIndex === index ? "transform translate-x-2" : ""
          }`}
        >
          <span
            className={`absolute left-[-1.5rem] transition-opacity duration-300 ${
              hoveredIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <BsDash />
          </span>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
