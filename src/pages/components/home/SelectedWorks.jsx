import WorkCard from "./WorkCard";
import sardionCareImage from "../../../assets/images/sardion-care.png";
import nerfedFlixImage from "../../../assets/images/nerfed-flix.png";
import bookstoreImage from "../../../assets/images/bookstore.png";
import todoAppImage from "../../../assets/images/todo-app.png";
import quizAppImage from "../../../assets/images/quiz-app.png";
import weatherAppImage from "../../../assets/images/weather-app.png";

const SelectedWorks = () => {
  return (
    <section id="works">
      <h1 className="text-2xl mb-10 capitalize font-bold">selected works</h1>
      <div className="grid gap-10 xs:grid-cols-1 lg:grid-cols-2 xs:grid-rows-6 lg:grid-rows-3">
        <WorkCard
          title={"Sardion Care"}
          description={"Website"}
          link={"https://sardioncare.ca/"}
          image={sardionCareImage}
        />
        <WorkCard
          title={"NerfedFlix"}
          description={"Web-App"}
          link={"https://nerfed-flix-s3db.vercel.app/"}
          image={nerfedFlixImage}
        />
        <WorkCard
          title={"Book-Store"}
          description={"Web-App"}
          link={"https://bookstore-frontend-livid.vercel.app/"}
          image={bookstoreImage}
        />
        <WorkCard
          title={"Todo-App"}
          description={"Web-App"}
          link={"https://to-do-app-59eb.onrender.com/"}
          image={todoAppImage}
        />
        <WorkCard
          title={"Quiz-App"}
          description={"Mini-Web-App"}
          link={"https://weird-samuel.github.io/Quiz-App/"}
          image={quizAppImage}
        />
        <WorkCard
          title={"Weather-App"}
          description={"Mini-Web-App"}
          link={"https://weird-samuel.github.io/Weather-app/"}
          image={weatherAppImage}
        />
      </div>
      <hr className="w-full mt-10 mb-36" />
    </section>
  );
};

export default SelectedWorks;
