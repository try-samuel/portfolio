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
        className="mt-20 mb-10 flex xs:flex-wrap lg:flex-nowrap xs:w-full md:w-3/4 justify-between"
      >
        <div className="xs:w-full md:w-1/3">
          <h1 className="text-gray-600 text-sm xs:mr-2 lg:mr-0 mb-2">
            SERVICES
          </h1>
        </div>
        <div className="xs:w-full md:w-2/3 grid grid-cols-2 auto-rows-auto justify-between">
          <div className="text-sm">
            <p>Web Development</p>
            <p>Web Design</p>
            <p>User Research</p>
          </div>
          <div className="text-sm">
            <p>System Design</p>
            <p>Web Hosting</p>
            <p>Graphics Design</p>
          </div>
        </div>
      </section>
      <section id="experience" className="mt-20 mb-10">
        <div className="">
          <h1 className="text-gray-600 text-sm xs:mr-2 lg:mr-0 mb-2">
            EXPERIENCE
          </h1>
        </div>
        <div className="">
          <div className="text-sm">
            <p>Web Development</p>
            <p>Web Design</p>
            <p>User Research</p>
          </div>
          <div className="text-sm">
            <p>System Design</p>
            <p>Web Hosting</p>
            <p>Graphics Design</p>
          </div>
        </div>
      </section>
      {/* <section id="skills">
        <h1 className="text-gray-600">SKILLS</h1>
      </section> */}
      <hr className="w-full mt-5 mb-5" />
    </section>
  );
};

export default About;
