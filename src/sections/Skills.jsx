import React from "react";
import Marquee from "react-fast-marquee";
import assets from "../assets/assets";

const Skills = () => {
  const skillsData = [
    { id: 1, image: assets.javascript, title: "JavaScript" },
    { id: 2, image: assets.reactLogo, title: "ReactJS" },
    { id: 3, image: assets.nodeJS, title: "NodeJS" },
    { id: 4, image: assets.tailwind, title: "Tailwind CSS" },
    { id: 5, image: assets.mongoDBLogo, title: "MongoDB" },
    { id: 6, image: assets.sql, title: "SQL" },
    { id: 7, image: assets.javaLogo, title: "JAVA" },
  ];

  const SkillBox = ({ image, title }) => (
    <div className="w-40 sm:w-48 mr-6 flex-shrink-0">
      <article className="p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-blue-800 transition-all duration-300">
        <img
          src={image}
          alt={title}
          className="mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20"
        />
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      </article>
    </div>
  );

  return (
    <section className="relative min-h-50vh flex flex-col items-center my-12 px-4 py-4 overflow-hidden text-white" id="skills">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold">
          My Experience <br />
          <span className="text-purple-400">Skills</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Technologies and tools I use.
        </p>
      </div>

      {/* Marquee section */}
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        {/* Repeat the skills twice for seamless loop */}
        {[...skillsData, ...skillsData].map((skill, index) => (
          <SkillBox key={index} image={skill.image} title={skill.title} />
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
