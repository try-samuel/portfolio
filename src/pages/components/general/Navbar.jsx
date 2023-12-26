import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 p-4">
        <section className="flex bg-none justify-between text-gray-400">
          <div>
            <Link to="/" className="flex text-gray-200">
              <h2 className="text-1xl uppercase">Samuel</h2>
              <span className="text-sm">&copy;</span>
            </Link>
          </div>
          <div className="flex w-[200px] justify-between">
            <Link to="/works">
              <span className="text-1xl uppercase">Works</span>
            </Link>
            <Link to="/about">
              <span className="text-1xl uppercase">About</span>
            </Link>
            <Link to="/contact">
              <span className="text-1xl uppercase">Contact</span>
            </Link>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
