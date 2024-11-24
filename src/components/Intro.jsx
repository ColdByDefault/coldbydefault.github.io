import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Certifications from "./Certifications";
import CallToAction from "./CallToAction";
import WebsitesAndAcademies from "./WebsitesAndAcademies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";


function Intro() {
  return (
    <>
      <div className="flex items-center justify-evenly min-h-screen cursor-default
      flex-col text-center p-10 text-white overflow-x-hidden">
        {/* Profile Section */}
        <div className="p-6 flex flex-col rounded-2xl bg-comp-black 
        md:backdrop-blur-lg md:p-6 md:flex-row items-center md:justify-evenly w-full md:w-[65%]">
          <div className="mb-6 md:mb-0">
            <img src="/assets/me5.jpg" 
              alt="ProfilePicture"
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full object-cover mx-auto"/>
          </div>
          <div className="md:pl-6 text-center md:text-center flex-1 md:pt-12">
            <h1 className="text-2xl md:text-6xl mb-1 md:mb-3 font-bold">
              Yazan Abo-Ayash
            </h1>
            <div className="flex flex-col px-4 md:px-0 items-center">
              <p className="text-sm max-w-xl mb-6 font-bold text-center">
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
              <div className="flex justify-center flex-wrap gap-12">
                <a
                  href="https://linktr.ee/ColdByDefault"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium text-gray-300 hover:text-green-500 focus:outline-none 
                  focus:text-green-500 flex items-center gap-2">
                  Link
                  <FontAwesomeIcon icon={faTree} />
                </a>
                <a
                  href="https://github.com/ColdByDefault"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium text-gray-300 hover:text-gray-400 focus:outline-none 
                  focus:text-main-Cyne flex items-center gap-2">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://discord.gg/uwUUyVzb"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium text-gray-300 hover:text-gray-400 focus:outline-none 
                  focus:text-main-Cyne flex items-center gap-2">
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Certifications and Timeline */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 
        gap-6 w-full bg-comp-black 
        md:w-[65%] mt-16 backdrop-blur-lg rounded-2xl">
          <div>
            <Certifications />
            <WebsitesAndAcademies />
          </div>
          <div>
            <Timeline />
          </div>
        </div>
        {/* Skills */}
        <div className="w-full md:w-[65%] mt-16">
          <Skills />
        </div>
        {/* Call to Action */}
        <div className="m-12 w-full md:w-[65%]">
          <CallToAction />
        </div>
      </div>
    </>
  );
}


export default Intro;