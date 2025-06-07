import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import assets from "../assets/assets";
const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="flex flex-col justify-between h-screen">
      <header className="max-w-screen-2xl w-full px-4 pointer-events-none">
        <nav className="flex items-center justify-between px-10 py-4 cursor-pointer">
          <div>
            <img
              src={assets.M_logo}
              alt="logo"
              className="h-16 pointer-events-none"
            />
          </div>
          <ul className="flex items-center gap-7 pointer-events-none">
            <li onClick={() => scrollToSection("hero")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("experience")}>Experience</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </nav>
      </header>
      <div className="flex relative -mt-10">
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
            <button className="relative bg-[#4595eb] py-1.5 px-5 bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] rounded cursor-pointer hover:scale-120 ease-in-out duration-100 group">
              About Me
              <FaArrowRightLong className="font-light absolute top-1/2 -translate-y-1/2 -right-2 group-hover:-right-4 ease-in-out duration-100" />
            </button>
          </div>
        </div>
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
      <div className="relative self-center after:content-[''] after:absolute after:w-[2px] after:h-6 after:bg-gray-800 after:left-1/2 -translate-x-1/2 after:top-1/2">
        <button className="relative bg-[#4595eb] py-1.5 px-5 bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] rounded cursor-pointer hover:scale-120 ease-in-out duration-100 group mb-22">
          Latest Work
          <FaArrowDownLong className=" absolute left-1/2 -translate-x-1/2 top-8 group-hover:top-9 ease-in-out duration-100" />
        </button>
      </div>
    </section>
  );
};

export default Header;
