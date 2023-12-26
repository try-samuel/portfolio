import Navbar from "./components/general/Navbar.jsx";
import Contact from "./components/home/Contact.jsx";
import { CiLocationOn } from "react-icons/ci";

const Home = () => {
  return (
    <div className="text-white py-16 px-4 select-none">
      <Navbar />
      <h1 className="mt-3 md:text-4xl lg:text-7xl font-bold">
        FULL-STACK WEB DEVELOPER
      </h1>
      <div className="flex flex-wrap mt-36">
        <div className="flex md:w-20 sm:w-full mr-40 text-gray-400 ">
          <CiLocationOn className="mr-2 text-green-600" />
          <h3 className="">Nigeria</h3>
        </div>
        <span className="md:w-[450px] sm:w-auto">
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </span>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
