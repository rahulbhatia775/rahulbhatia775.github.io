import React from "react";
import portss from "../assets/portss.png"
import ss from "../assets/google.png"

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          alt={title}
        />
        <div className="p-6">
          
          <h1 className="text-lg font-medium text-white mb-3">{title}</h1>
          <p className="leading-relaxed mb-3 text-gray-400">{description}</p>
          <div className="flex items-center flex-wrap">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 inline-flex items-center"
            >
              View Project
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      image: portss,
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my projects, skills, and contact info. using only basic HTML,CSS ",
      link: "https://github.com/rahulbhatia775/rahulbhatia775.github.io",
    },
    {
      image: ss,
      title: "Google Clone",
      description: "A simplified clone of Google's homepage with search functionality using Google Custom Search.",
      link: "https://github.com/rahulbhatia775/google-clone",
    },
    // Add more projects here if needed
  ];

  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="projects">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className=" text-red-500">
              Projects & Accomplishments
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore a selection of my featured projects that reflect my passion for web development and AI. Each project showcases my problem-solving ability and commitment to clean, efficient code.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
