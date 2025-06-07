import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assets from "../assets/assets";
const Projects = () => {
  const listProjects = [
    {
      id: 1,
      image: assets.image1,
      title: "Project 1",
      description: "dsgfdff dsfgdfs sgfdf",
    },
    {
      id: 2,
      image: assets.image2,
      title: "Project 2",
      description: "dgffdfd dsgfdff dsfgdfs",
    },
    {
      id: 3,
      image: assets.image3,
      title: "Project 3",
      description: "ffdfd dsgfdff dsfgdfs",
    },
    {
      id: 4,
      image: assets.image4,
      title: "Project 4",
      description: "gffdfd dsgfdff dsfgdfs",
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
        breakpoint: 780,
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
        <div className="mx-10 sm:mx-2">
          <Slider {...settings}>
            {listProjects.map((project) => {
              return (
                <div key={project.id} className="p-4">
                  <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-autolg:h-48 md:h-36 sm:h-24 object-cover object-center"
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
