

import Image from "next/image";
import { EXPERIENCE, EDUCATION, SKILLS } from "@/app/constants/data";
import Footer from "@/components/common/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Adekunle Samuel Fiyinfoluwa, a Full Stack Software Engineer with a passion for building scalable web applications.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full bg-background text-foreground">
      {/* Typographic Hero */}
      <section className="container mx-auto px-8 md:px-20 lg:px-40 py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none mb-12">
          ADEKUNLE<br />
          SAMUEL<br />
          FIYINFOLUWA
        </h1>

        <div className="flex items-center gap-6">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Full Stack Software Engineer with 3+ years building high-performance web applications. Expert in TypeScript, React, and Next.js. Love creating user-centric solutions and leading teams. Try me!
            </p>
          </div>
          <div className="hidden md:block relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/avatar-new.jpg"
              fill
              alt="Profile"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-8 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-16">
          Experience
        </h2>

        {/* Table Header */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 pb-6 border-b border-white/20 text-xs uppercase tracking-wider text-gray-400">
          <div className="col-span-2">Period</div>
          <div className="col-span-10">Role & Company</div>
        </div>

        {/* Experience Rows */}
        <div className="flex flex-col">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={index}
              className="group border-b border-white/20 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 cursor-pointer transition-all duration-300 hover:bg-white/5"
            >
              {/* Period */}
              <div className="md:col-span-2 text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                {exp.period}
              </div>

              {/* Role & Company */}
              <div className="md:col-span-10 space-y-4">
                <h3 className="text-xl md:text-2xl font-normal text-white">
                  {exp.role} <span className="text-gray-400">@</span> {exp.company}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-400 group-hover:border-white/40 group-hover:text-gray-300 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                {exp.highlights && (
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-8 md:px-20 lg:px-40 py-20">
        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-16">
          Education
        </h2>

        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            className="border-b border-white/20 pb-12 mb-12 last:border-0"
          >
            <h3 className="text-2xl md:text-3xl font-normal text-white mb-4">
              {edu.degree}
            </h3>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-400 mb-6">
              <span className="text-lg">{edu.institution}</span>
              <span className="hidden md:inline">•</span>
              <span>{edu.location}</span>
              <span className="hidden md:inline">•</span>
              <span>{edu.period}</span>
            </div>
            <p className="text-gray-300 mb-4">{edu.description}</p>
            {edu.achievements && (
              <div className="space-y-2">
                {edu.achievements.map((achievement, idx) => (
                  <p key={idx} className="text-sm text-gray-400">
                    • {achievement}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Skills & Technologies */}
      <section className="container mx-auto px-8 md:px-20 lg:px-40 py-20 md:py-32">
        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-16">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {Object.entries(SKILLS).map(([category, skills], index) => (
            <div key={index} className="space-y-6 flex flex-col items-center md:items-start md:block">
              <h3 className="text-lg md:text-xl uppercase tracking-wider text-gray-400 border-b border-white/20 pb-3 w-full text-center md:text-left">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-sm md:text-lg px-4 py-2 rounded-full md:rounded-lg bg-transparent md:bg-white/5 border border-gray-600 md:border-white/10 text-gray-300 hover:bg-white hover:text-black md:hover:bg-white/10 md:hover:border-white/20 md:hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
