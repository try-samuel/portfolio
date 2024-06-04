import SectionHeader from "../ui/SectionHeader";

export default function Education({
  educations,
}: {
  educations: {
    school: string;
    degree: string;
    period: string;
    location: string;
  }[];
}) {
  return (
    <section className="mt-16">
      <SectionHeader
        content={{
          index: 3,
          title: "Educaton",
        }}
      />
      <div>
        {educations.map((education, index) => (
          <div key={index} className="mt-5 w-full md:w-[95%]">
            <div className="flex w-full justify-between text-[#61616E] dark:text-[#545460]">
              <h4 className="text-[16px]">{education.period.toUpperCase()}</h4>
              <h3 className="text-[16px]">{education.location}</h3>
            </div>
            <h2 className="text-[20px] font-medium capitalize">
              {education.degree}, {education.school}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
