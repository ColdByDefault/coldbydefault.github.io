import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div>
      {/* Profile Section */}
      <div className="mt-12 flex flex-col rounded-2xl bg-comp-black 
        md:backdrop-blur-lg md:p-6 md:flex-row md:flex-wrap items-center 
        md:justify-between w-full lg:w-full">
        <div className="mb-6 md:mb-0 md:w-[40%] lg:w-auto flex justify-center">
          <img src="/assets/me5.jpg" 
            alt="ProfilePicture"
            className="w-[250px] h-[250px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full object-cover"/>
        </div>
        <div className="md:pl-6 text-center md:text-left flex-1 md:pt-8">
          <h1 className="text-2xl md:text-5xl lg:text-6xl mb-1 md:mb-3 font-bold">
            Yazan Abo-Ayash
          </h1>
          <div className="flex flex-col px-4 md:px-0 items-center md:items-start">
            <p className="text-sm md:text-base max-w-xl mb-6 text-center md:text-left">
              Hi, I am currently learning to become a software developer, focusing
              on Python and Machine Learning, with a passion for building and
              exploring new technologies. This website is my first
              <span className="text-cyan-600"> React </span>
              project, showcasing my journey into frontend development. <br />
              Check out my other projects and the source code for this website on my{" "}
              <a
                href="https://github.com/ColdByDefault"
                rel="noopener noreferrer"
                target="_blank"
                className="text-cyan-600 
                  decoration-2 decoration-light-Cyne hover:underline">
                GitHub
              </a>.
            </p>
            <div className="flex justify-center md:justify-start flex-wrap gap-6">
              <a href="https://linktr.ee/ColdByDefault"
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-gray-300 hover:text-green-500 focus:outline-none 
                focus:text-green-500 flex items-center gap-2">
                Link
                <FontAwesomeIcon icon={faTree} />
              </a>
              <a href="https://github.com/ColdByDefault"
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-gray-300 hover:text-gray-400 focus:outline-none 
                focus:text-main-Cyne flex items-center gap-2">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://discord.gg/uwUUyVzb"
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-gray-300 hover:text-gray-400 focus:outline-none 
                focus:text-main-Cyne flex items-center gap-2">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a href="assets/resume.pdf"
              download="Yazan_Abo_Ayash_Resume.pdf"
              className="font-medium text-gray-300 hover:text-gray-400 focus:outline-none focus:text-main-Cyne flex items-center gap-2">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;