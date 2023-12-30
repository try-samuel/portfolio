const About = () => {
  return (
    <section id="about">
      <section className="intro text-white xs:w-full md:w-[500px] lg:w-[550px]">
        <h1 className="mt-3 mb-3 text-2xl font-bold">ABOUT</h1>
        <div className="xs:text-[12px] md:text-[15px] lg:text-[18px] font-light">
          <p>
            With about two years background, my goal is to develop projects that
            combine visual appeal with high functionality. My strategy involves
            delivering projects that can cater to diverse user requirements.
          </p>
          <br />
          <p>
            Possessing a profound grasp of Full Stack Web Development and fueled
            by a fervor for inventive solutions, I am dedicated to forging
            meaningful connections within and beyond the tech industry.
          </p>
        </div>
      </section>
      <section
        id="services"
        className="mt-20 mb-10 flex xs:flex-wrap lg:flex-nowrap xs:w-full md:w-3/4 justify-between xs:text-sm lg:text-[16px]"
      >
        <div className="xs:w-full md:w-1/3">
          <h1 className="text-gray-600 xs:mr-2 lg:mr-0 mb-2">SERVICES</h1>
        </div>
        <div className="xs:w-full md:w-2/3 grid grid-cols-2 auto-rows-auto justify-between">
          <div>
            <p className="mb-3">Web Development</p>
            <p className="mb-3">Web Design</p>
            <p className="mb-3">User Research</p>
          </div>
          <div>
            <p className="mb-3">System Design</p>
            <p className="mb-3">Web Hosting</p>
            <p className="mb-3">Graphics Design</p>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="mt-20 mb-10 flex xs:flex-wrap lg:flex-nowrap xs:w-full justify-between xs:text-sm lg:text-[16px]"
      >
        <div>
          <h1 className="text-gray-600 xs:mr-2 lg:mr-0 mb-2">EXPERIENCE</h1>
        </div>
        <div className="xs:w-full md:w-3/4 items-center">
          <div className="border-b border-gray-600 w-full flex flex-wrap justify-between mb-5 py-2">
            <p className="xs:w-full md:w-1/3">Freelanace Fullstack Developer</p>
            <p className="xs:w-full md:w-1/3">Sardion Care</p>
            <p className="xs:w-full md:w-1/3">Jun 2023 - Jul 2023</p>
          </div>
          <div className="border-b border-gray-600 w-full flex flex-wrap justify-between mb-5 py-2">
            <p className="xs:w-full md:w-1/3">DevOps Engineer</p>
            <p className="xs:w-full md:w-1/3">Sardion Care</p>
            <p className="xs:w-full md:w-1/3">Jul 2023 - present</p>
          </div>
          <div className="border-b border-gray-600 w-full flex flex-wrap justify-between mb-5 py-2">
            <p className="xs:w-full md:w-1/3">
              Full Stack Web Developer Intern
            </p>
            <p className="xs:w-full md:w-1/3">Alusoft Technologies</p>
            <p className="xs:w-full md:w-1/3">Jan 2023 - Jun 2023</p>
          </div>
        </div>
      </section>
      <section
        id="educaation"
        className="mt-20 mb-10 flex xs:flex-wrap lg:flex-nowrap xs:w-full justify-between xs:text-sm lg:text-[16px]"
      >
        <div>
          <h1 className="text-gray-600 xs:mr-2 lg:mr-0 mb-2">EDUCATION</h1>
        </div>
        <div className="xs:w-full md:w-3/4 items-center">
          <div className="border-b border-gray-600 w-full flex flex-wrap justify-between mb-5 py-2">
            <p className="xs:w-full md:w-1/3">BSc Computer Science</p>
            <p className="xs:w-full md:w-1/3">Babcock University</p>
            <p className="xs:w-full md:w-1/3">Oct 2020 - Present</p>
          </div>
        </div>
      </section>
      <hr className="w-full h-[1px] mt-10 mb-10" />
    </section>
  );
};

export default About;
