// desc: This file contains the Certifications component which is used to display the certifications.
import React from "react";
import certifications from "../../data/certifications";

function Certifications() {
  return (
    <div className="flex flex-col items-center gap-8 text-white p-3 rounded-lg mt-20">
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center w-full">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 bg-new-bg-second backdrop-blur-lg rounded-lg text-center
            hover:scale-105 hover:shadow-2xl hover:bg-gray-900 hover:transition-all duration-500 ease-out">
            <h3 className="text-lg font-bold">{cert.title}</h3>
            <div className="text-sm">
              <ul>
                <li>{cert.description}</li>
                {cert.description2 && <li>{cert.description2}</li>}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
