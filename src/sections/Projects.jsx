import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assets from "../assets/assets";
const Projects = () => {
  const listProjects = [
    {
      id: 1,
      image: assets.chatApp,
      title: "Chat Application",
      description:
        "Allows users to send and receive real-time messages and images instantly across devices.",
    },
    {
      id: 2,
      image: assets.bookStore,
      title: "Book Store Application",
      description:
        "Enables users to search, read free books and purchase books online with ease.",
    },
    {
      id: 3,
      image: assets.foodOrderingSystem,
      title: "Food Ordering System",
      description:
        "Allows users to browse menus, place orders, and make payments.",
    },
    {
      id: 4,
      image: assets.blogWrite,
      title: "Blog Write Application",
      description:
        "Enables users to create, edit, and publish articles or posts easily. It offers tools for formatting the content.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section
      id="projects"
      data-aos="fade-up"
      data-aos-delay="400"
      className="relative overflow-hidden flex flex-col text-white"
    >
      <div className="container md:px-16 md:py-12 px-4 py-10 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 md:mb-12">
          My Projects
        </h2>
        <div className="w-full px-4 sm:px-2 max-w-screen-xl mx-auto">
          <Slider {...settings}>
            {listProjects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="p-4 mx-auto duration-200 transform hover:scale-105"
                >
                  <div className="h-full border-2 border-blue-400 shadow-[0_0_15px_rgba(47,65,240,0.72)] border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto lg:h-48 md:h-36 sm:h-24"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                        {project.title}
                      </h2>
                      <p className="leading-relaxed mb-3 ">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
