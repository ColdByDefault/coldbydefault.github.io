import React from "react";
import skillsList from "../data/skillsList";

function Skills() {
  return (
    <div
    className="flex flex-col items-center gap-8 bg-comp-black
    text-white p-6 rounded-2xl shadow-lg mt-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-400">My Skills</h2>
      {skillsList.map((category, index) => (
        <div key={index} className="w-full">
          <h3 className="text-xl font-semibold mb-2 text-main-Cyne">{category.category}</h3>
          <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}
              className="flex flex-col items-center bg-gray-800 p-3 rounded-md shadow-sm 
              hover:scale-110 hover:shadow-2xl hover:transform hover:translate-[-5px] 
              hover:bg-shadow-Cyne hover:text-black transition-all duration-500 ease-out">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-6 h-6 mb-2"
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
