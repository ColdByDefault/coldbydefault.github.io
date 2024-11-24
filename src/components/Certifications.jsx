import React from "react";
import certifications from "../data/certifications";

function Certifications() {
  return (
    <div className="flex flex-col items-center gap-8 text-white p-6 rounded-lg 
    shadow-lg mt-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-400">
        Certifications
      </h2>
      <div className="grid grid-cols-2 gap-2 justify-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg text-center shadow-md hover:shadow-lg">
            <h3 className="text-lg font-bold">{cert.title}</h3>
            <p className="text-sm">
              <ul>
                <li>{cert.description}</li>
                {cert.description2 && <li>{cert.description2}</li>}
              </ul>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
