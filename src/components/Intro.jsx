import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";

function Intro() {
  return (
    <>
    <div className="flex items-center justify-evenly min-h-screen cursor-default
    flex-col text-center pt-20 pb-6 text-white">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              src="/assets/me5.jpg"
              alt="Yazan"
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
                <a href="https://github.com/ColdByDefault" target="_blank"
                className="text-cyan-600 hover:underline underline-offset-2 
                decoration-2 decoration-light-Cyne"
                rel="noreferrer noopener">GitHub
                </a>.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-evenly flex-col md:flex-row mt-32">
          <div className="px-4 sm:px-0">
            <h2 className="text-3xl font-bold mb-6 text-gray-400 sm:pl-16">My Journey</h2>
            <Timeline />
          </div>
          <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-400">My Skills</h2>
              <Skills />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;