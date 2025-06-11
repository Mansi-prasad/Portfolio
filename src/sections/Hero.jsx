import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import assets from "../assets/assets";
import { useState } from "react";
import AboutPopUp from "../components/AboutPopUp";
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
