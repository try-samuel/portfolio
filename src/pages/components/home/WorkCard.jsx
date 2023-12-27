import PropTypes from "prop-types";

const WorkCard = ({ image, title, description, link }) => {
  return (
    <div className="cursor-pointer" onClick={() => window.open(link, "_blank")}>
      <img src={image} alt="image" />
      <div className="flex w-full justify-between mt-2">
        <p className="text-white">{title}</p>
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
