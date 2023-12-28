import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section>
      <hr className="w-full h-[1px] mt-5 mb-5" />
      <footer>
        <section className="flex flex-wrap xs:flex-col md:flex-row bg-none justify-between text-gray-600">
          <div className="">
            <p className="capitalize text-[18px] text-white cursor-text">
              Samuel&copy;
            </p>
          </div>
          <div className="flex xs:w-[180px] sm:w-[200px] md:w-[220px] justify-between">
            <Link to={"https://www.instagram.com/weird_samuell/"}>
              <span className="xs:text-[15px] md:text-base uppercase hover:text-gray-400 transition-colors">
                Instagram
              </span>
            </Link>
            <Link to={"https://twitter.com/weird_samuell"}>
              <span className="xs:text-[15px] md:text-base uppercase hover:text-gray-400 transition-colors">
                X
              </span>
            </Link>
            <Link to={"https://www.linkedin.com/in/samuel-adekunle-a995a8213/"}>
              <span className="xs:text-[15px] md:text-base uppercase hover:text-gray-400 transition-colors">
                Linkedin
              </span>
            </Link>
          </div>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
