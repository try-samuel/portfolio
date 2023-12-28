import { useSnackbar } from "notistack";
import { useState } from "react";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isHovered, setIsHovered] = useState(false);

  const copyEmail = () => {
    try {
      navigator.clipboard.writeText("fiyinfoluwasamuel580@gmail.com");
      enqueueSnackbar("Email copied to clipboard", { variant: "success" });
    } catch (error) {
      console.error("Error copying email:", error);
      enqueueSnackbar("Failed to copy email", { variant: "error" });
    }
  };

  return (
    <section
      id="contact"
      className="text-white xs:w-full md:w-[500px] lg:w-[550px]"
    >
      <h1 className="mt-3 mb-3 text-2xl font-bold">CONTACT</h1>
      <div className="xs:text-[12px] md:text-[15px] lg:text-[18px] font-light">
        <p>
          Ready to turn your ideas into functional code or just want to talk
          about development? Reach out and let us build something great.
        </p>
        <br />
        <p>
          I am here to collaborate, resonate with users, and develop software
          solutions that meet your technical needs.
        </p>
      </div>
      <button
        className="bg-white bg-opacity-10 backdrop-blur-10 rounded-full xs:py-2 md:py-4 mt-5 xs:w-full md:w-96 font-normal xs:text-[10px] md:text-[15px] uppercase"
        onClick={copyEmail}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "click to copy email" : "fiyinfoluwasamuel580@gmail.com"}
      </button>
    </section>
  );
};

export default Contact;
