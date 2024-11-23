import React from "react";

function Certifications() {
  const certifications = [
    {
      title: "PCEP Certified",
      description: "Python Entry-Level Programmer",
    },
    {
      title: "???",
      description: "???",
    },
    {
      title: "???",
      description: "???",
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-main-Cyne">Certifications</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg text-center shadow-md hover:shadow-lg"
          >
            <h3 className="text-lg font-bold">{cert.title}</h3>
            <p className="text-sm">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;