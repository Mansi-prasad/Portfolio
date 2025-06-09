import assets from "../assets/assets";
import { IoMenuSharp } from "react-icons/io5";
const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="relative z-50 max-w-screen-2xl w-full px-4 pointer-events-none">
      <nav className="flex items-center justify-between px-10 py-2 cursor-pointer">
        <div>
          <img
            src={assets.M_logo}
            alt="logo"
            className="h-18 pointer-events-auto"
          />
        </div>
        <div className="md:hidden">
          <IoMenuSharp />
        </div>
        <ul className="hidden md:flex items-center gap-7 pointer-events-auto text-xl">
          <li
            onClick={() => scrollToSection("hero")}
            className="hover:cursor-pointer hover:text-blue-400"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="hover:cursor-pointer hover:text-blue-400"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="hover:cursor-pointer hover:text-blue-400"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="hover:cursor-pointer hover:text-blue-400"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="hover:cursor-pointer hover:text-blue-400"
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
