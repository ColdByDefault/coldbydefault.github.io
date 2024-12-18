// Desc: This is the main component for the Lab page. It contains the Projects and Websites sections.
import React from "react";
import MultiActionAreaCard from "../Cards/MultiActionAreaCard";


function Lab() {
  return (
    <div className="grid grid-cols-1  
    lg:grid-cols-2 gap-6 p-4 text-cyan-400">
        {/* Projects Section */}
        <div className="bg-new-bg-second rounded-lg shadow-lg p-6 ">
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
          <MultiActionAreaCard section="projects" />
        </div>

        {/* Websites Section */}
        <div className="bg-new-bg-second rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center mb-6">Websites</h2>
          <MultiActionAreaCard section="websites" />
        </div>
    </div>
  );
}

export default Lab;
