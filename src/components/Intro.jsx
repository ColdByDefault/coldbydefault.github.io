import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Certifications from "./Certifications";
import CallToAction from "./CallToAction";


function Intro() {
  return (
    <>
    <div className="flex items-center justify-evenly min-h-screen cursor-default
    flex-col text-center pt-20 pb-6 text-white">
        <div className="flex flex-col rounded-2xl 
        bg-dark-blue/60 md:bg-dark-blue/60 
        md:backdrop-blur-lg md:p-3 
        p-3 md:flex-row items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <img src="/assets/me5.jpg" alt="ProfilePicture"
            className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full object-cover mx-auto"/>
          </div>
          <div className="md:pl-6 text-center md:text-left flex-1 md:pt-12">
            <h1 className="text-2xl md:text-6xl mb-1 md:mb-3 font-bold">
              Yazan Abo-Ayash
            </h1>
            <div className="px-4 md:px-0">
              <p className="text-sm max-w-xl mb-6 font-bold">
                Hi, I am currently learning to become a software developer, focusing
                on Python and Machine Learning, with a passion for building and
                exploring new technologies. This website is my first
                <span className="text-cyan-600"> React </span>
                project, showcasing my journey into frontend development. <br />
                Check out my other projects and the source code for this website on my{" "}
                <span
                className="text-cyan-600 
                decoration-2 decoration-light-Cyne">GitHub
                </span>.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-evenly flex-col md:flex-row m-16">
          <div className="px-4 mt-12 sm:px-0">
            <Timeline />
          </div>
        </div>
        <div>
            <Skills />
        </div>
        <div className="m-12">
          <Certifications />
        </div>
        <div className="m-12">
          <CallToAction />
        </div>
      </div>
    </>
  );
}

export default Intro;