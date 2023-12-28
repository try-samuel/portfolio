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
      <section id="services" className="mt-20">
        <div>
          <h1 className="text-gray-600">SERVICES</h1>
        </div>
        <div></div>
      </section>
      <section id="experience"></section>
      <section id="skills"></section>
      <hr className="w-full mt-5 mb-5" />
    </section>
  );
};

export default About;
