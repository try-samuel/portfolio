import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 p-4">
        <section className="flex bg-none justify-between text-gray-600">
          <div>
            <Link to="/" className="text-white">
              <p className="capitalize text-[18px]">Samuel&copy;</p>
            </Link>
          </div>
          <div className="flex xs:w-[160px] sm:w-[200px] md:w-[220px] justify-between">
            <Link to="/works">
              <span className="xs:text-[10px] md:text-base uppercase hover:text-gray-400 transition-colors">
                Works
              </span>
            </Link>
            <Link to="/about">
              <span className="xs:text-[10px] md:text-base uppercase hover:text-gray-400 transition-colors">
                About
              </span>
            </Link>
            <Link to="/contact">
              <span className="xs:text-[10px] md:text-base uppercase hover:text-gray-400 transition-colors">
                Contact
              </span>
            </Link>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
