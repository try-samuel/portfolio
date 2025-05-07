import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    technologies?: string[];
    type: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          target="_blank"
          className="relative group block p-1 h-[220px] w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="flex items-center justify-between">
              <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </span>
              <span className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {item.type != "live" ? <BsCodeSlash /> : <IoEyeOutline />}
              </span>
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.technologies && (
              <CardTechnologies technologies={item.technologies} />
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full py-3 px-5 overflow-hidden bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-slate-200/50 dark:border-white/[0.1] group-hover:border-slate-300 dark:group-hover:border-slate-700 relative z-20 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.01]",
        className
      )}
    >
      <div className="relative z-50 h-full flex flex-col">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-slate-900 dark:text-zinc-100 font-bold tracking-wide text-base",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-1.5 text-slate-600 dark:text-zinc-400 tracking-wide leading-relaxed text-xs",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardTechnologies = ({
  technologies,
}: {
  technologies: string[];
}) => {
  return (
    <div className="flex flex-wrap mt-auto pt-2 gap-1">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 text-slate-900 dark:text-zinc-100 text-[10px] px-1.5 py-0.5 rounded-full font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
