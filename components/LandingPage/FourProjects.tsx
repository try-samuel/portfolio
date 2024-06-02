import Image from "next/image";
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
      <div className="flex mb-10">
        <sup className="text-[16px] mr-5 mt-5 text-[#61616E] dark:text-[#545460]">
          01
        </sup>
        <h1 className="text-[32px] font-medium">Projects</h1>
      </div>
      <main className="lg:px-12 w-full h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <Link href={item.link} key={index} className="group">
              <div className="relative h-[300px] lg:h-[500px] rounded-3xl md:rounded-[50px] bg-black overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-5 flex w-full items-center justify-between ">
                <div>
                  <h1 className="text-[24px] font-medium">{item.title}</h1>
                  <p className="text-[16px]">{item.description}</p>
                </div>
                <button className="text-sm border border-[#7e7e97] rounded-md px-6 py-3 group-hover:bg-[#7e7e97] group-hover:text-[#09090B] transition-all duration-300 mb-10 ease-in">
                  <AiOutlineArrowRight />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
};
