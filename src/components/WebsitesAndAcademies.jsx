import React from "react";
import websitesAndAcademies from "../data/websitesAndAcademies";

function WebsitesAndAcademies() {
  return (
    <div className="flex flex-col items-center gap-8 text-white p-6 rounded-lg 
        mt-4 w-full sm:w-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-400 text-center">
        Active Learning On
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center w-full">
            {websitesAndAcademies.map((entry, index) => (
            <div
                key={index}
                className="p-4 bg-new-bg-third/20 backdrop-blur-lg rounded-lg text-center 
                hover:scale-105 hover:shadow-2xl hover:bg-shadow-Cyne hover:transition-all duration-500 ease-out">
                <h3 className="text-lg font-bold">{entry.name}</h3>
                <div className="text-sm">
                <ul>
                    <li>{entry.description}</li>
                    {entry.extraInfo && <li>{entry.extraInfo}</li>}
                </ul>
                </div>
                {entry.link && (
                <a href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main-Cyne underline mt-2 block">
                    Visit
                </a>
                )}
            </div>
            ))}
        </div>
    </div>
  );
}

export default WebsitesAndAcademies;
