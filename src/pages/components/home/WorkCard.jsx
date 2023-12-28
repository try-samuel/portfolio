import PropTypes from "prop-types";
import { FiEye } from "react-icons/fi";

const WorkCard = ({ image, title, description, link }) => {
  return (
    <div>
      <div className="relative group overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover ease-in-out duration-500 group-hover:scale-105"
        />
        <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 ease-in-out duration-300">
          <button
            className="flex items-center bg-black bg-opacity-50 backdrop-blur-10 rounded-full p-3 font-normal"
            onClick={() => window.open(link, "_self")}
          >
            <FiEye className="mr-2" />
            VIEW PROJECT
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between mt-2 cursor-text">
        <p className="text-white font-semibold">{title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

WorkCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};
export default WorkCard;
