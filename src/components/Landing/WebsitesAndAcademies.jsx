// Desc: Websites and Academies section of the landing page
import React from "react";
import { useTranslation } from "react-i18next";

function WebsitesAndAcademies() {
  const { t } = useTranslation();
  const entries = t("websitesAndAcademies.entries", { returnObjects: true });

  return (
    <div className="flex flex-col items-center gap-8 text-white p-6 rounded-lg mt-4 w-full sm:w-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 text-center">
        {t("websitesAndAcademies.title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center w-full">
        {entries.map((entry, index) => (
          <div key={index}
            className="p-4 bg-new-bg-second backdrop-blur-lg rounded-lg text-center 
              hover:scale-105 hover:shadow-2xl hover:bg-gray-900 hover:transition-all duration-500 ease-out">
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
