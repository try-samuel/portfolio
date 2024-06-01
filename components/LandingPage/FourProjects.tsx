import Image from "next/image";
import Link from "next/link";

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
    <section className="">
      <div className="py-8 px-2 lg:px-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-32 h-32"
              fill
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="mt-2 text-center text-gray-600">{item.description}</p>
            <Link href={item.link} className="mt-4 text-blue-600 underline">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
