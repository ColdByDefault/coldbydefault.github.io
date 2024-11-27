import React from "react";
import labItems from "../data/labItems";
import ProjectCard from "./Projects";

function Lab() {
  const projects = labItems.filter((item) => item.section === "projects");
  const websites = labItems.filter((item) => item.section === "websites");

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 text-white">
      {/* Projects Section */}
      <div className="flex flex-col rounded-lg shadow-lg p-6 bg-new-bg-second">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-4 gap-6 items-center justify-evenly">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
      {/* Websites Section */}
      <div className="flex flex-col rounded-lg shadow-lg p-6 bg-new-bg-second">
        <h2 className="text-3xl font-bold mb-6">Websites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-4 gap-6 items-center justify-evenly">
          {websites.map((website, index) => (
            <ProjectCard
              key={index}
              imgUrl={website.imgUrl}
              title={website.title}
              stack={website.stack}
              link={website.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lab;

