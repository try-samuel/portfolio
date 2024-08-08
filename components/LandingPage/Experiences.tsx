import SectionHeader from "../ui/SectionHeader";

interface Experience {
  title: string;
  description: string;
  period: string;
  company_name: string;
  location: string;
}

interface ExperiencesProps {
  experiences: Experience[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section className="mt-16">
      <SectionHeader
        content={{
          index: 2,
          title: "Experience",
        }}
      />
      <div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="mt-5 w-full md:w-[95%]"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            <div className="flex w-full justify-between text-[#61616E] dark:text-[#545460]">
              <h4 className="text-[16px]">{experience.period.toUpperCase()}</h4>
              <h3 className="text-[16px]">{experience.location}</h3>
            </div>
            <h2 className="text-[20px] font-medium capitalize">
              {experience.title}, {experience.company_name}
            </h2>
            <p className="text-[16px] mb-10">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
