import { RxCross2 } from "react-icons/rx";
import assets from "../assets/assets";
const AboutPopUp = ({ onClose }) => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "Java",
    "SQL",
    "MongoDB",
    "Git/Github",
    "Tailwind CSS",
  ];
  return (
    <div className="fixed inset-0 bg-gray-900 flex justify-center z-50 md:m-20 m-8">
      <div className="p-2 rounded shadow-lg w-full relative">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mt-2 text-3xl px-4 py-2 text-white hover:cursor-pointer"
          >
            <RxCross2 />
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-20 px-6 md:px-12 lg:px-20 py-2 md:py-4">
          {/* left side */}
          <div className="flex-1 p-4 md:p-6">
            <h2 className="uppercase text-blue-500 text-2xl md:text-3xl py-4">
              about me
            </h2>
            <p className="text-base md:text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              aliquam sed illo officiis! Natus dolores itaque dolorum tempore
              aperiam quibusdam.
            </p>
            <div className="my-6 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="border border-white px-4 py-2 rounded-full text-sm hover:transform hover:bg-blue-500 hover:text-white hover:border-0"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex gap-4 items-end">
              <div className="flex flex-col items-center">
                <img src={assets.mongoDBLogo} alt="mongodb" className="w-12" />
                <p className="text-green-600 font-bold">M</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={assets.express} alt="express" className="w-12" />
                <p className="font-bold">E</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={assets.reactLogo} alt="reactJS" className="w-12" />
                <p className="text-blue-600 font-bold">R</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={assets.nodeIcon} alt="nodeJS" className="w-10" />
                <p className="text-green-400 font-bold">N</p>
              </div>
            </div>
          </div>
          {/* Right side (Image) */}
          <div className="flex-1 p-4 md:p-6">
            <img
              src={assets.webTech}
              alt="About Illustration"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPopUp;
