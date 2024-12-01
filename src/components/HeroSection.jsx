import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation(); 
  return (
    <div>
      {/* Profile Section */}
      <div className="mt-12 p-6 flex flex-col rounded-2xl bg-new-bg-second
        md:backdrop-blur-lg md:p-6 md:flex-row md:flex-wrap items-center 
        md:justify-between w-full lg:w-full sm:py-4">
        <div className="mb-6 md:mb-0 md:w-[40%] lg:w-auto flex justify-center">
          <img src="/assets/me5.jpg" 
            alt="ProfilePicture"
            className="w-[250px] h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full object-cover"/>
        </div>
        <div className="md:pl-6 text-center md:text-left flex-1 md:pt-8">
          <h1 className="text-2xl md:text-5xl lg:text-6xl mb-1 md:mb-3 font-bold">
            Yazan Abo<span className="text-cyan-400">-</span>Ayash
          </h1>
          <div className="flex flex-col px-4 md:px-0 items-center md:items-start">
            <p className="text-sm md:text-base max-w-xl mb-6 text-center md:text-left">
              {t("intro_message_part1")}{" "}
              {t("intro_message_part2")}{" "}
              {t("intro_message_part3")}{" "}
              <span dangerouslySetInnerHTML={{ __html: t("intro_message_part4") }}></span>
            </p>
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
              <div className="group relative">
                <a href="https://github.com/ColdByDefault"
                rel="noopener noreferrer"
                target="_blank">
                  <svg strokeLinejoin="round" strokeLinecap="round" 
                  strokeWidth="2" stroke="currentColor" fill="none" 
                  viewBox="0 0 24 24" className="w-5 pt-1 hover:scale-95 duration-200 
                  hover:stroke-gray-400">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 
                    6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 
                    0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                      </path>
                  </svg>
                </a>
              </div>
              <div className="group relative">
                <a href="assets/resume.pdf"
                download="Yazan_Abo_Ayash_Resume.pdf"
                  className="w-6 h-5 flex 
                  rounded-lg hover:text-gray-400 hover:scale-90 hover:duration-300">
                  <svg
                    className="w-5 h-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      strokeLinejoin="round"
                      strokeLinecap="round"></path>
                  </svg>
                </a>
                <span
                  className="absolute w-20 text-center 
                  -bottom-14 left-[50%] -translate-x-[50%] 
                  origin-bottom tracking-wider z-20 scale-0 rounded-lg bg-new-bg-fourth text-main-Cyne 
                  text-sm transition-all duration-300 ease-in-out group-hover:scale-100">
                  Download Resume
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;