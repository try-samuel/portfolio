import Navbar from "./components/general/Navbar.jsx";
import Contact from "./components/home/Contact.jsx";
import { CiLocationOn, CiCircleInfo } from "react-icons/ci";
import { VscRemote } from "react-icons/vsc";

const Home = () => {
  return (
    <div className="text-white py-16 px-5 select-none">
      <Navbar />
      <div className="flex flex-wrap xs:mt-48 md:mt-44 lg:mt-96">
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
        <h1 className="md:w-[450px] lg:w-[790px] sm:w-auto sm:text-2xl md:text-3xl lg:text-5xl leading-snug font-medium">
          <p className="text-gray-400">Hey, I am Samuel Adekunle.</p>A
          <span className="text-green-600"> full stack web developer</span>,
          open to onsite or remote opportunities.
        </h1>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
