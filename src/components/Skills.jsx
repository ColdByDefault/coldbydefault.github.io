import React from "react";
import skillsList from "../data/skillsList";

function Skills() {
  return (
    <div className="flex flex-col items-center gap-8 bg-gray-900 text-white p-6 rounded-lg shadow-lg mt-12">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-main-Cyne">Skills</h2>
        <ul className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsList.map((skill, index) => (
            <li
              key={index}
              className="flex flex-col items-center bg-gray-800 p-3 rounded-md shadow-sm 
              hover:bg-shadow-Cyne hover:text-black transition duration-300">
              <img src={skill.icon} alt={`${skill.name} icon`} className="w-6 h-6 mb-2"/>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
