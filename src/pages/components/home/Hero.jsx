import { CiLocationOn, CiCircleInfo } from "react-icons/ci";
import { VscRemote } from "react-icons/vsc";
const Hero = () => {
  return (
    <div className="flex flex-wrap xs:mt-48 md:mt-44 lg:mt-80">
      <div className="md:w-auto xs:w-full md:mr-40 lg:mb-20 xs:mb-11 lg:text-sm sm:text-xs text-white">
        <p className="flex items-center">
          <CiCircleInfo className="mr-2" />
          Full Stack Web Developer
        </p>
        <p className="flex items-center">
          <CiLocationOn className="mr-2" />
          Nigeria
        </p>
        <p className="flex items-center">
          <VscRemote className="mr-2" />
          Works from anywhere
        </p>
      </div>
      <div className="sm:w-auto md:w-[450px] lg:w-[790px] sm:text-2xl md:text-3xl lg:text-5xl font-semi-bold">
        <p className="text-gray-400">Hey, I am Samuel Adekunle.</p>
        <p className="mt-1">
          A<span className="text-red-600"> full stack web developer</span>, open
          to onsite & remote opportunities.
        </p>
      </div>
      <hr className="w-full mt-5 mb-5" />
    </div>
  );
};

export default Hero;
