import React from "react";
import skillsList from "../data/skillsList";

function Skills() {
  return (
<div className="flex flex-col items-center gap-6 bg-comp-black
  text-white p-4 sm:p-6 rounded-2xl shadow-lg mt-12 w-full">
  <h2 className="text-3xl font-bold mb-4 text-gray-400">My Skills</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
    {skillsList.map((category, index) => (
      <div key={index} className="flex flex-col items-center gap-4 w-full">
        <h3 className="text-lg font-semibold text-main-Cyne text-center">
          {category.category}
        </h3>
        <ul className="grid grid-cols-3 gap-4 w-full">
          {category.skills.map((skill, skillIndex) => (
            <li
              key={skillIndex}
              className="flex flex-col items-center bg-gray-800 p-3 rounded-md shadow-sm 
              hover:scale-110 hover:shadow-2xl hover:bg-shadow-Cyne hover:text-black 
              transition-all duration-500 ease-out">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-6 h-6 mb-2"
              />
              <span className="text-sm">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>



  );
}

export default Skills;
