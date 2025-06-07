import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import assets from "../assets/assets";
const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div>
        <img src={assets.M_logo} alt="" className="w-24" />
      </div>
      <div>
        <ul className="flex items-center gap-8 text-3xl cursor-pointer">
          <li>
            <a
              href="https://www.linkedin.com/in/mansi-prasad11/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/Mansi-prasad" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="mailto:mansi13980@gmail.com" target="_blank">
              <IoIosMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
