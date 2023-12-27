import WorkCard from "./WorkCard";
import sardionCareImage from "../../../assets/images/sardion-care.png";
import nerfedFlixImage from "../../../assets/images/nerfed-flix.png";

const SelectedWorks = () => {
  return (
    <section id="works">
      <h1 className="text-xl mb-5 capitalize">selected works</h1>
      <div className="grid gap-10 xs:grid-cols-1 lg:grid-cols-2 xs:grid-rows-6 lg:grid-rows-3">
        <WorkCard
          title="Sardion Care"
          description="Website"
          link={"https://sardioncare.ca/"}
          image={sardionCareImage}
        />
        <WorkCard
          title={"NerfedFlix"}
          description={"Web-App"}
          link={"https://nerfed-flix-s3db.vercel.app/"}
          image={nerfedFlixImage}
        />
      </div>
    </section>
  );
};

export default SelectedWorks;
