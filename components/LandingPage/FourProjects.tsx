import React from "react";
import ProjectCard from "../ui/Projectscard";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Projects = ({
  items,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
}) => {
  return (
    <section className="mt-16">
      <SectionHeader
        content={{
          index: 1,
          title: "Projects",
        }}
      />
      <main className="lg:px-12 w-full mt-16 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-2 text-lg font-bold border border-[#060608] dark:border-[#BFBFC6] rounded-md px-6 py-3 mb-10 w-44"
        >
          All Projects <AiOutlineArrowRight />
        </Link>
      </main>
    </section>
  );
};
