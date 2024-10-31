import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <section className="my-16">
      <SectionHeader content={{ index: 4, title: "Skills" }} />
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5 gap-2 max-w-xl">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-300 hover:bg-gray-400 cursor-pointer dark:text-black p-1"
          >
            {skill}
          </span>
        ))}
      </div>
      {/* <div className="relative lg:w-[60%] my-5 lg:h-32">
        <Image
          src={"https://ghchart.rshah.org/try-samuel"}
          fill
          alt="my gh chart"
        />
      </div> */}
    </section>
  );
}
