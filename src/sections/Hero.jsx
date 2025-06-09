import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import assets from "../assets/assets";
import { useState } from "react";
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
  ];
  // const mernIcons=[{assets.mongodb}]
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-40 flex justify-center z-50 m-20">
      <div className="p-2 rounded shadow-lg w-full relative">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mt-2 text-3xl px-4 py-2 text-white hover:cursor-pointer"
          >
            <RxCross2 />
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 px-6 md:px-12 lg:px-20 py-2 md:py-4">
          {/* left side */}
          <div className="flex-1 p-4 md:p-6">
            <h2 className="uppercase text-blue-500 text-2xl md:text-3xl py-4">
              about me
            </h2>
            <p className="text-base md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              aliquam sed illo officiis! Natus dolores itaque dolorum tempore
              aperiam quibusdam aut laudantium quae? Rem, excepturi? Quibusdam
              unde eius harum. Sapiente.
            </p>
            <div className="my-6 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="border border-white px-4 py-2 rounded-full text-sm md:text-base"
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
              src={assets.nodeJS}
              alt="About Illustration"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Hero = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const openPopUp = () => setIsAboutOpen(true);
  const closePopUp = () => setIsAboutOpen(false);

  return (
    <section className="flex flex-col justify-evenly h-screen mt-[7vh]">
      <div className="flex relative">
        <div className=" w-full px-4 mx-auto max-w-screen-xl">
          <img
            src={assets.M_logo}
            alt="logo"
            className="pointer-events-none absolute top-0 left-1/2 -translate-y-1/3 -translate-x-1/2 w-[400px] h-auto md:w-[650px]"
          />
          <div className="relative ml-4 md:ml-12">
            <h1 className="pointer-events-none text-4xl md:text-6xl mr-6">
              Mansi Prasad
            </h1>
            <p className="pointer-events-none text-md md:text-[24px]  italic my-6">
              MERN Stack Developer
            </p>
            <button
              className="relative bg-[#4595eb] py-1.5 px-5 bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] rounded cursor-pointer hover:scale-120 ease-in-out duration-100 group"
              onClick={openPopUp}
            >
              About Me
              <FaArrowRightLong className="font-light absolute top-1/2 -translate-y-1/2 -right-2 group-hover:-right-4 ease-in-out duration-100" />
            </button>
          </div>
        </div>
        {isAboutOpen && <AboutPopUp onClose={closePopUp} />}
        <ul className="text-4xl md:text-6xl ml-auto space-y-6 text-[#a29f9f] absolute right-2">
          <li>
            <a
              className="hover:text-white"
              href="https://www.linkedin.com/in/mansi-prasad11/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              className="hover:text-white"
              href="https://github.com/Mansi-prasad"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              className="hover:text-white"
              href="mailto:mansi13980@gmail.com"
              target="_blank"
            >
              <IoIosMail />
            </a>
          </li>
        </ul>
      </div>
      <div className="relative flex justify-center items-center h-[100px]">
        <div className="relative">
          <div className="absolute top-[-24px] left-1/2 -translate-x-1/2 w-[2px] h-6 bg-gray-800" />
          <button className="relative bg-[#4595eb] py-2 px-6 text-white text-sm sm:text-base bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] rounded cursor-pointer hover:scale-110 transition-transform duration-150 group">
            Latest Work
            <FaArrowDownLong className="absolute left-1/2 -translate-x-1/2 top-9 group-hover:top-10 transition-all duration-150" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
