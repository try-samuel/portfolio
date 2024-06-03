import React from "react";
import ProjectCard from "../ui/Projectscard";

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
      <div className="flex mb-10">
        <sup className="text-[16px] mr-5 mt-5 text-[#61616E] dark:text-[#545460]">
          01
        </sup>
        <h1 className="text-[32px] font-medium">Projects</h1>
      </div>
      <main className="lg:px-12 w-full h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </main>
    </section>
  );
};
