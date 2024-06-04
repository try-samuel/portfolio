import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProjectCard = ({
  item,
}: {
  item: {
    title: string;
    description: string;
    link: string;
    image: string;
  };
}) => {
  const [circleStyle, setCircleStyle] = useState({
    transform: "translate(-50%, -50%)",
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCircleStyle({
      transform: `translate(${x}px, ${y}px)`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setCircleStyle((prevStyle) => ({
      ...prevStyle,
      opacity: 0,
    }));
  };

  return (
    <Link href={item.link} className="group">
      <div
        className="relative h-[300px] lg:h-[400px] rounded-3xl bg-black overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          className="object-cover"
        />
        <div className="circle" style={circleStyle}>
          VISIT
        </div>
      </div>
      <div className="mt-5 flex w-full items-center justify-between">
        <div>
          <h1 className="text-[24px] font-medium">{item.title}</h1>
          <p className="text-[16px]">{item.description}</p>
        </div>
        <button className="text-lg font-bold border dark:text-[#BFBFC6] border-[#060608] dark:border-[#BFBFC6] rounded-md px-6 py-3 group-hover:bg-[#060608] dark:group-hover:bg-[#BFBFC6] text-[#BFBFC6] dark:group-hover:text-[#060608] transition-all duration-300 mb-10">
          <AiOutlineArrowRight />
        </button>
      </div>
    </Link>
  );
};

export default ProjectCard;
