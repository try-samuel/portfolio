import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdNorthEast } from "react-icons/md";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "404 - Not Found";
    return () => {
      document.title = "Adekunle Samuel";
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-white">404</h1>
        <Link
          to={"/"}
          className="hover:text-white text-gray-400 font-bold rounded mt-4 flex items-center"
        >
          BACK TO THE HOMEPAGE
          <MdNorthEast className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
