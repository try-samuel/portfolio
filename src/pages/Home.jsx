import Navbar from "./components/general/Navbar.jsx";
import Contact from "./components/home/Contact.jsx";
import { useEffect, useState } from "react";
import Loader from "./components/general/Loader.jsx";
import SelectedWorks from "./components/home/SelectedWorks.jsx";
import Hero from "./components/home/Hero.jsx";
import Footer from "./components/general/Footer.jsx";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="text-white py-12 px-5 select-none">
      {loading ? (
        <Loader timeout={2000} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <SelectedWorks />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
