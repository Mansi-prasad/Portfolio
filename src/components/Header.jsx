import { useState } from "react";
import assets from "../assets/assets";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Hero", "About", "Skills", "Projects", "Contact"];
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
        <div
          className="md:hidden text-3xl text-white  pointer-events-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross2 /> : <IoMenuSharp />}
        </div>
        <ul className="hidden md:flex items-center gap-7 pointer-events-auto text-lg">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:cursor-pointer hover:text-blue-400"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 pointer-events-auto text-md text-white absolute right-0">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:cursor-pointer hover:text-blue-400 px-10"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
