import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();
  return (
    <div className="w-full h-screen relative bg-new-bg-21 text-black">
      {/* Background Image for Large Screens */}
      <img src="/assets/m123.jpg"
        alt="ProfilePicture"
        className="hidden lg:block absolute inset-0 w-full h-full object-cover z-0"/>
      {/* Background Image for Medium and Small Screens */}
      <img src="/assets/m12345.jpg"
        alt="ProfilePicture"
        className="block lg:hidden absolute inset-0 w-full h-full object-cover z-0"/>
      {/* Overlay Section */}
      <div className="absolute inset-0 bg-new-bg-21 bg-opacity-50 z-10"></div>
      {/* Profile Section */}
      <div className="absolute lg:bottom-32 lg:left-8 z-20 p-6 flex flex-col rounded-2xl 
        md:p-6 md:flex-row md:flex-wrap items-center
        md:justify-between w-full max-w-screen-2xl mx-auto
        bottom-16">
        <div className="md:mb-0 md:w-[50%] lg:w-auto flex flex-col justify-center items-start text-white px-6">
          {/* Name Section */}
          <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Yazan Abo<span className="text-cyan-400">-</span>Ayash
          </h1>
          {/* Paragraph Section */}
          <p className="text-sm sm:text-base md:text-lg max-w-lg mb-6 text-white">
            {t("intro_message_part1")} {t("intro_message_part2")}{" "}
            {t("intro_message_part3")}{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: t("intro_message_part4"),
              }}
            ></span>
          </p>
          {/* Links */}
          <div className="flex justify-center md:justify-start flex-wrap gap-6">
            <a href="https://linktr.ee/ColdByDefault"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-gray-300 hover:text-green-500 hover:scale-95 duration-200 
                focus:outline-none 
                focus:text-green-500 flex items-center gap-2">
              Link
              <FontAwesomeIcon icon={faTree} />
            </a>
            <a href="https://github.com/ColdByDefault"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:scale-95 duration-200 hover:text-gray-400">
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="w-8 h-8">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 
                          6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 
                          0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
