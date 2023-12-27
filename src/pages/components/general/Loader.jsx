import "./loader.css";
const Loader = () => {
  return (
    <div className="spinner">
      {[...Array(10)].map((_, index) => (
        <div key={index} style={{ "--delay": (index + 1) * 0.1 }}></div>
      ))}
    </div>
  );
};

export default Loader;
