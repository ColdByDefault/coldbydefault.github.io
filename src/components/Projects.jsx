import React from "react";

function ProjectCard({ imgUrl, title, stack, link }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg hover:scale-95 
          transition-transform duration-300"/>
      </a>
      <div>
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm text-gray-300">{stack.join(", ")}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
